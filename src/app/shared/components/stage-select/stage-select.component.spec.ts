import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { StageSelectComponent } from './stage-select.component';

import { StageSelectHostMockComponent } from '../../stage/components/mocks/stage-select-host.mock.component';
import { StageSelectInfo } from '../../stage/models/stage-select-info.model';
import * as STAGE_SELECTIONS from '../../stage/models/mocks/stage-select-info';

describe('StageSelectComponent', () => {
  let selectComp: StageSelectComponent;
  let selectDElem: DebugElement;
  let selectHostComp: StageSelectHostMockComponent;
  let selectHostFixture: ComponentFixture<StageSelectHostMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StageSelectComponent,
        StageSelectHostMockComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    selectHostFixture = TestBed.createComponent(StageSelectHostMockComponent);
    selectHostComp = selectHostFixture.componentInstance;
    selectDElem = selectHostFixture.debugElement.query(By.directive(StageSelectComponent));
    selectComp = selectDElem.componentInstance;
  });

  it('should create', () => {
    expect(selectComp).toBeTruthy();
  });

  it('sanity: host component should have provided stages property', () => {
    let expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.ONE;
    selectHostComp.stages = [...expectedStages];
    expect(selectHostComp.stages.length).withContext('the number of stages should be the same').toEqual(expectedStages.length);
    expect(selectHostComp.stages).toEqual(expectedStages);
    
  })
  
  it('should have a stages property set to a provided value on init', () => {
    let expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.ONE;
    selectHostComp.stages = [...expectedStages];
    /**/
    // console.log(`SPEC - hostComponent stages set`);

    // console.log(`SPEC - StageSelectHost::OnChanges() start.`);
    selectHostFixture.detectChanges();
    /**/
    // console.log(`SPEC - StageSelectHost::OnChanges() done.`);

    // console.log(`SPEC - Now checking state...`)
    // console.log(`SPEC - expectedStages: ${JSON.stringify(expectedStages)}`);
    // console.log(`SPEC - component.stages: ${JSON.stringify(selectComp.stages)}`);

    expect(selectComp.stages.length).withContext('the number of stages should be the same').toEqual(expectedStages.length);
    expect(selectComp.stages).toEqual(expectedStages);
  });

  it('should show a list of checkbox inputs', () => {
    /**/
    // console.log('=== SPEC - Show checkboxes');
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.ONE;

    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkInputDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check .form-check-input'));

    expect(checkInputDElems.length).toBeGreaterThan(0);
  });

  it('should show a list of checkbox labels', () => {
    /**/
    // console.groupCollapsed('=== SPEC - Show labels');
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.ONE;

    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkLabelDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check .form-check-label'));

    expect(checkLabelDElems.length).toBeGreaterThan(0);
    /**/
    // console.groupEnd();
  });

  it(`should show a list of checkbox inputs with names that match the provided stages' gameNames`, () => {
    /**/
    // console.groupCollapsed('=== SPEC - Match checkbox name');
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.ONE;

    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check'));
    const actualGameNames = checkDElems.map(checkDElem => checkDElem.query(By.css('.form-check-input')).nativeElement.getAttribute('name'));

    for (const expectedStage of expectedStages) {
      expect(actualGameNames).toContain(expectedStage.gameName, `no input with name '${expectedStage.gameName}'`);
    }
    /**/
    // console.groupEnd();
  });

  it(`should show a list of checkbox labels with texts that match the provided stages' names`, () => {
    /**/
    // console.groupCollapsed('=== SPEC - Match label text');
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.ONE;

    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check'));
    const actualLabels = checkDElems.map(checkDElem => checkDElem.query(By.css('.form-check-label')).nativeElement.textContent);

    for (const expectedStage of expectedStages) {
      expect(actualLabels).toContain(expectedStage.name, `no label with text '${expectedStage.name}'`);
    }
    /**/
    // console.groupEnd();
  });

  describe('tournament legality section', () => {

    it(`should show a list of checkbox inputs with id's of the section id and the provided stages' gameNames`, () => {
      /**/
      // console.groupCollapsed('=== SPEC - Tourney - Match checkbox id');
      const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_STAGE_ID;
      const expectedPrefix: string = 'tourneyPresence_'

      selectHostComp.stages = [...expectedStages];
      selectHostFixture.detectChanges();

      const checkDElems: DebugElement[] = selectDElem.queryAll(By.css('form .by-tourney .form-check'));
      const actualIDs = checkDElems.map(checkDElem => checkDElem.query(By.css('.form-check-input')).nativeElement.id);

      for (const expectedStage of expectedStages) {
        expect(actualIDs).toContain(expectedPrefix + expectedStage.gameName, `no input with name '${expectedPrefix}${expectedStage.gameName}'`);
      }
      /**/
      // console.groupEnd();
    });

    it(`should show a list of checkbox labels with for attributes of the section id and the provided stages' gameNames`, () => {
      /**/
      // console.groupCollapsed('=== SPEC - Tourney - Match label attributes');
      const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_STAGE_LABEL_FOR;
      const expectedPrefix: string = 'tourneyPresence_';

      selectHostComp.stages = [...expectedStages];
      selectHostFixture.detectChanges();

      const checkDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check'));
      const actualLabelFors = checkDElems.map(checkDElem => checkDElem.query(By.css('.form-check-label')).nativeElement.getAttribute('for'));

      for (const expectedStage of expectedStages) {
        expect(actualLabelFors).toContain(expectedPrefix + expectedStage.gameName, `no label for attribute with value '${expectedPrefix}${expectedStage.gameName}`);
      }
      /**/
      // console.groupEnd();
    });

    describe('commonly legal stages', () => {

      it('should show a common legal stages category if there are commonly legal stages', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show common legal category');
        const stages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_COMMON_PRESENT;
        selectHostComp.stages = [...stages];
        selectHostFixture.detectChanges();

        expect(selectDElem.queryAll(By.css('form .tourney-legal-common')).length).toEqual(1);
        /**/
        // console.groupEnd();
      });

      it('should not show a common legal stages category if there are no commonly legal stages', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Hide common legal category');
        const stages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_COMMON_ABSENT;
        selectHostComp.stages = [...stages];
        selectHostFixture.detectChanges();
        
        const actualStagesDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-common'));
        expect(actualStagesDElems.length).toEqual(0);
        /**/
        // console.groupEnd();
      });

      it('should show all common legal stages in the common legal stages category', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show all common legal stages in common legal category');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_COMMON_INCLUDE.allStages;
        const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_COMMON_INCLUDE.includedStages;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();
        
        const actualStageDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-common .form-check-input'));

        for (const expectedStage of expectedStages) {
          const index = actualStageDElems.findIndex(actualStageDElem => {
            return (actualStageDElem.nativeElement.getAttribute('name') === expectedStage.gameName);
          });
          expect(index).toBeGreaterThan(-1, `Could not find ${expectedStage.gameName}`);
        }
        /**/
        // console.groupEnd();
      });

      it('should not show other stages in the common legal stages category', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Hide other stages from common legal category');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_COMMON_EXCLUDE.allStages;
        const excludedStages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_COMMON_EXCLUDE.excludedStages;

        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const actualStageDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-common .form-check-input'));
        
        for (const excludedStage of excludedStages) {
          const index = actualStageDElems.findIndex(actualStageDElem => {
            return (actualStageDElem.nativeElement.getAttribute('name') === excludedStage.gameName);
          });
          expect(index).toEqual(-1, `${excludedStage.gameName} should not be in common legal stages`);
        }
        /**/
        // console.groupEnd();
      });

    });

    describe('uncommonly legal stages', () => {

      it('should show an uncommonly legal stages category if there are uncommonly legal stages', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show uncommon legal category');
        const stages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_UNCOMMON_PRESENT;
        selectHostComp.stages = [...stages];
        selectHostFixture.detectChanges();

        expect(selectDElem.queryAll(By.css('form .tourney-legal-uncommon')).length).toEqual(1);
        /**/
        // console.groupEnd();
      });
      
      it('should not show an uncommon legal stages category if there are no uncommonly legal stages', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Hide uncommon legal category');
        const stages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_UNCOMMON_ABSENT;
        selectHostComp.stages = [...stages];
        selectHostFixture.detectChanges();

        const actualStagesDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-uncommon'));
        expect(actualStagesDElems.length).toEqual(0);
        /**/
        // console.groupEnd();
      });

      it('should show all uncommon legal stages in the uncommon legal stages category', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show all uncommon legal stages in uncommon legal category');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_UNCOMMON_INCLUDE.allStages;
        const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_UNCOMMON_INCLUDE.includedStages;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const actualStageDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-uncommon .form-check-input'));

        for (const expectedStage of expectedStages) {
          const index = actualStageDElems.findIndex(actualStageDElem => {
            return (actualStageDElem.nativeElement.getAttribute('name') === expectedStage.gameName);
          });
          expect(index).toBeGreaterThan(-1, `Could not find ${expectedStage.gameName}`);
        }
        /**/
        // console.groupEnd();
      });

      it('should not show other stages in the uncommon legal stages category', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Hide other stages from uncommon legal category');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_UNCOMMON_EXCLUDE.allStages;
        const excludedStages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_UNCOMMON_EXCLUDE.excludedStages;

        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const actualStageDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-uncommon .form-check-input'));

        for (const excludedStage of excludedStages) {
          const index = actualStageDElems.findIndex(actualStageDElem => {
            return (actualStageDElem.nativeElement.getAttribute('name') === excludedStage.gameName);
          });
          expect(index).toEqual(-1, `${excludedStage.gameName} should not be in uncommon legal stages`);
        }
        /**/
        // console.groupEnd();
      });

    });

    describe('rarely legal stages', () => {

      it('should show a rarely legal stages category if there are rarely legal stages', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show rare legal category');
        const stages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_RARE_PRESENT;
        selectHostComp.stages = [...stages];
        selectHostFixture.detectChanges();

        expect(selectDElem.queryAll(By.css('form .tourney-legal-rare')).length).toEqual(1);
        /**/
        // console.groupEnd();
      });

      it('should not show a rare legal stages category if there are no rarely legal stages', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Hide rare legal category');
        const stages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_RARE_ABSENT;
        selectHostComp.stages = [...stages];
        selectHostFixture.detectChanges();

        const actualStagesDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-rare'));
        expect(actualStagesDElems.length).toEqual(0);
        /**/
        // console.groupEnd();
      });

      it('should show all rarely legal stages in the rarely legal stages category', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show all rare legal stages in rare legal category');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_RARE_INCLUDE.allStages;
        const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_RARE_INCLUDE.includedStages;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const actualStageDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-rare .form-check-input'));

        for (const expectedStage of expectedStages) {
          const index = actualStageDElems.findIndex(actualStageDElem => {
            return (actualStageDElem.nativeElement.getAttribute('name') === expectedStage.gameName);
          });
          expect(index).toBeGreaterThan(-1, `Could not find ${expectedStage.gameName}`);
        }
        /**/
        // console.groupEnd();
      });

      it('should not show other stages in the rarely legal stages category', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Hide other stages from rare legal category');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_RARE_EXCLUDE.allStages;
        const excludedStages: StageSelectInfo[] = STAGE_SELECTIONS.LEGAL_RARE_EXCLUDE.excludedStages;

        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const actualStageDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-rare .form-check-input'));

        for (const excludedStage of excludedStages) {
          const index = actualStageDElems.findIndex(actualStageDElem => {
            return (actualStageDElem.nativeElement.getAttribute('name') === excludedStage.gameName);
          });
          expect(index).toEqual(-1, `${excludedStage.gameName} should not be in rare legal stages`);
        }
        /**/
        // console.groupEnd();
      });
    });

    it('should put a mix of tourney-legal stages in the appropriate tourney categories', () => {
      /**/
      // console.groupCollapsed('=== SPEC - Group stages by tourney category');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY.input;
      const expectedStages = {
        legalCommon: STAGE_SELECTIONS.TOURNEY.output.legalCommon,
        legalUncommon: STAGE_SELECTIONS.TOURNEY.output.legalUncommon,
        legalRare: STAGE_SELECTIONS.TOURNEY.output.legalRare
      };

      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const actualStageDElems = {
        legalCommon: selectDElem.queryAll(By.css('form .tourney-legal-common .form-check-input')),
        legalUncommon: selectDElem.queryAll(By.css('form .tourney-legal-uncommon .form-check-input')),
        legalRare: selectDElem.queryAll(By.css('form .tourney-legal-rare .form-check-input'))
      };
      for (const legalType in expectedStages) {
        expectedStages[legalType].forEach(expectedStage => {
          const index = actualStageDElems[legalType].findIndex(actualStageDElem => {
            return (actualStageDElem.nativeElement.getAttribute('name') === expectedStage.gameName);
          });
          
          expect(index).toBeGreaterThan(-1, `Could not find ${expectedStage.gameName} in ${legalType} section`);
        });
      }
      /**/
      // console.groupEnd();
    });

    it('should sort stages within each section alphabetically', () => {
      /**/
      // console.groupCollapsed('=== SPEC - sort stages alphabetically');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_STAGE_SORT.inputStages;
      const expectedStages: { [property: string]: StageSelectInfo[] } = STAGE_SELECTIONS.TOURNEY_STAGE_SORT.sortedStages;
      const expectedStageNames: { [property: string]: string[] } = {
        legalCommon: expectedStages.legalCommon.map(stage => stage.name),
        legalUncommon: expectedStages.legalUncommon.map(stage => stage.name),
        legalRare: expectedStages.legalRare.map(stage => stage.name)
      }
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const actualStageNames: { [property: string]: string[] } = {
        legalCommon: selectDElem.queryAll(By.css('form .tourney-legal-common .form-check-label')).map(elem => elem.nativeElement.textContent.trim()),

        legalUncommon: selectDElem.queryAll(By.css('form .tourney-legal-uncommon .form-check-label')).map(elem => elem.nativeElement.textContent.trim()),

        legalRare: selectDElem.queryAll(By.css('form .tourney-legal-rare .form-check-label')).map(elem => elem.nativeElement.textContent.trim())
      };

      /**/
      // console.log(`legalCommon Expected: ${JSON.stringify(expectedStageNames.legalCommon)}`);
      // console.log(`legalCommon Actual: ${JSON.stringify(actualStageNames.legalCommon)}`);
      for (let i: number = 0; i < expectedStageNames.legalCommon.length; i++) {
        expect(actualStageNames.legalCommon[i]).withContext(`legalCommon[${i}]`).toEqual(expectedStageNames.legalCommon[i]);
      }

      /**/
      // console.log(`legalUncommon Expected: ${JSON.stringify(expectedStageNames.legalUncommon)}`);
      // console.log(`legalUncommon Actual: ${JSON.stringify(actualStageNames.legalUncommon)}`);
      for (let i: number = 0; i < expectedStageNames.legalUncommon.length; i++) {
        expect(actualStageNames.legalUncommon[i]).withContext(`legalUncommon[${i}]`).toEqual(expectedStageNames.legalUncommon[i]);
      }

      /**/
      // console.log(`legalRare Expected: ${JSON.stringify(expectedStageNames.legalRare)}`);
      // console.log(`legalRare Actual: ${JSON.stringify(actualStageNames.legalRare)}`);
      for (let i: number = 0; i < expectedStageNames.legalRare.length; i++) {
        expect(actualStageNames.legalRare[i]).withContext(`legalRare[${i}]`).toEqual(expectedStageNames.legalRare[i]);
      }
      /**/
      // console.groupEnd();

    });

    describe('section visibility', () => {

      it('should not appear if there are only banned stages present', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Hide tourney section when there are no legal stages');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_HIDE_LEGAL_BANNED;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const sectionDElem: DebugElement = selectDElem.query(By.css('form .by-tourney'));
        expect(sectionDElem).toBeNull();
        /**/
        // console.groupEnd();
      });

      it('should appear if there are commonly legal stages present', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show tourney section with common legal stages');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_SHOW_LEGAL_COMMON;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const sectionHeaderDElem: DebugElement = selectDElem.query(By.css('form .by-tourney h3'));
        expect(sectionHeaderDElem.nativeElement.textContent.trim()).toEqual('By Tournament Legality');
        /**/
        // console.groupEnd();
      });

      it('should appear if there are commonly legal and banned stages present', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show tourney section with commonly legal and banned stages');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_SHOW_LEGAL_COMMON_BANNED;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const sectionHeaderDElem: DebugElement = selectDElem.query(By.css('form .by-tourney h3'));
        expect(sectionHeaderDElem.nativeElement.textContent.trim()).toEqual('By Tournament Legality');
        /**/
        // console.groupEnd();
      });

      it('should appear if there are uncommonly legal stages present', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show tourney section with uncommonly legal stages');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_SHOW_LEGAL_UNCOMMON;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const sectionHeaderDElem: DebugElement = selectDElem.query(By.css('form .by-tourney h3'));
        expect(sectionHeaderDElem.nativeElement.textContent.trim()).toEqual('By Tournament Legality');
        /**/
        // console.groupEnd();
      });

      it('should appear if there are uncommonly legal and banned stages present', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show tourney section with uncommonly legal and banned stages');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_SHOW_LEGAL_UNCOMMON_BANNED;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const sectionHeaderDElem: DebugElement = selectDElem.query(By.css('form .by-tourney h3'));
        expect(sectionHeaderDElem.nativeElement.textContent.trim()).toEqual('By Tournament Legality');
        /**/
        // console.groupEnd();
      });

      it('should appear if there are rarely legal stages present', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show tourney section with rarely legal stages');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_SHOW_LEGAL_RARE;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const sectionHeaderDElem: DebugElement = selectDElem.query(By.css('form .by-tourney h3'));
        expect(sectionHeaderDElem.nativeElement.textContent.trim()).toEqual('By Tournament Legality');
        /**/
        // console.groupEnd();
      });

      it('should appear if there are rarely legal and banned stages present', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show tourney section with rarely legal and banned stages');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_SHOW_LEGAL_RARE_BANNED;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const sectionHeaderDElem: DebugElement = selectDElem.query(By.css('form .by-tourney h3'));
        expect(sectionHeaderDElem.nativeElement.textContent.trim()).toEqual('By Tournament Legality');
        /**/
        // console.groupEnd();
      });

      it('should appear if there are commonly and uncommonly legal stages present', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show tourney section with commonly and uncommonly legal stages');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_SHOW_LEGAL_COMMON_UNCOMMON;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const sectionHeaderDElem: DebugElement = selectDElem.query(By.css('form .by-tourney h3'));
        expect(sectionHeaderDElem.nativeElement.textContent.trim()).toEqual('By Tournament Legality');
        /**/
        // console.groupEnd();
      });

      it('should appear if there are commonly legal, uncommonly legal, and banned stages present', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show tourney section with commonly legal, uncommonly legal, and banned stages');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_SHOW_LEGAL_COMMON_UNCOMMON_BANNED;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const sectionHeaderDElem: DebugElement = selectDElem.query(By.css('form .by-tourney h3'));
        expect(sectionHeaderDElem.nativeElement.textContent.trim()).toEqual('By Tournament Legality');
        /**/
        // console.groupEnd();
      });

      it('should appear if there are commonly and rarely legal stages present', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show tourney section with commonly and rarely legal stages');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_SHOW_LEGAL_COMMON_RARE;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const sectionHeaderDElem: DebugElement = selectDElem.query(By.css('form .by-tourney h3'));
        expect(sectionHeaderDElem.nativeElement.textContent.trim()).toEqual('By Tournament Legality');
        /**/
        // console.groupEnd();
      });

      it('should appear if there are commonly legal, rarely legal, and banned stages present', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show tourney section with commonly legal, rarely legal, and banned stages');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_SHOW_LEGAL_COMMON_RARE_BANNED;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const sectionHeaderDElem: DebugElement = selectDElem.query(By.css('form .by-tourney h3'));
        expect(sectionHeaderDElem.nativeElement.textContent.trim()).toEqual('By Tournament Legality');
        /**/
        // console.groupEnd();
      });

      it('should appear if there are uncommonly and rarely legal stages present', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show tourney section with uncommonly and rarely legal stages');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_SHOW_LEGAL_UNCOMMON_RARE;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const sectionHeaderDElem: DebugElement = selectDElem.query(By.css('form .by-tourney h3'));
        expect(sectionHeaderDElem.nativeElement.textContent.trim()).toEqual('By Tournament Legality');
        /**/
        // console.groupEnd();
      });

      it('should appear if there are uncommonly legal, rarely legal, and banned stages present', () => {
        /**/
        // console.groupCollapsed('=== SPEC - Show tourney section with uncommonly legal, rarely legal, and banned stages');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.TOURNEY_SHOW_LEGAL_UNCOMMON_RARE_BANNED;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const sectionHeaderDElem: DebugElement = selectDElem.query(By.css('form .by-tourney h3'));
        expect(sectionHeaderDElem.nativeElement.textContent.trim()).toEqual('By Tournament Legality');
        /**/
        // console.groupEnd();
      });

    });

  });

  describe('series section', () => {

    it(`should show a list of checkbox inputs with id's of the section id and the provided stages' gameNames`, () => {
      /**/
      // console.log('=== SPEC - Series - Match checkbox id');
      const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.SERIES_STAGE_ID;
      const expectedPrefix: string = 'series_'

      selectHostComp.stages = [...expectedStages];
      selectHostFixture.detectChanges();

      const checkDElems: DebugElement[] = selectDElem.queryAll(By.css('form .by-series .form-check'));
      const actualIDs = checkDElems.map(checkDElem => checkDElem.query(By.css('.form-check-input')).nativeElement.id);

      for (const expectedStage of expectedStages) {
        expect(actualIDs).toContain(expectedPrefix + expectedStage.gameName, `no input with name '${expectedPrefix}${expectedStage.gameName}'`);
      }
    });

    it(`should show a list of checkbox labels with for attributes of the section id and the provided stages' gameNames`, () => {
      /**/
      // console.log('=== SPEC - Series - Match label attributes');
      const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.SERIES_STAGE_LABEL_FOR;
      const expectedPrefix: string = 'series_';

      selectHostComp.stages = [...expectedStages];
      selectHostFixture.detectChanges();

      const checkDElems: DebugElement[] = selectDElem.queryAll(By.css('form .by-series .form-check'));
      const actualLabelFors = checkDElems.map(checkDElem => checkDElem.query(By.css('.form-check-label')).nativeElement.getAttribute('for'));

      for (const expectedStage of expectedStages) {
        expect(actualLabelFors).toContain(expectedPrefix + expectedStage.gameName, `no label for attribute with value '${expectedPrefix}${expectedStage.gameName}`);
      }
    });

    it('should appear if there are stages', () => {
      /**/
      // console.log('=== SPEC - Show series section');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.SERIES_SHOW;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const sectionHeaderDElem: DebugElement = selectDElem.query(By.css('form .by-series h3'));
      expect(sectionHeaderDElem.nativeElement.textContent.trim()).toEqual('By Series');
    });

    it('should not appear if there are no stages', () => {
      /**/
      // console.log('=== SPEC - Hide series section');
      selectHostComp.stages = [];
      selectHostFixture.detectChanges();

      const sectionDElem: DebugElement = selectDElem.query(By.css('form .by-series'));
      expect(sectionDElem).toBeNull();
    });

    it('should list defined series in alphabetical order', () => {
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.SERIES_SORT.inputStages;
      const sortedStages: StageSelectInfo[] = STAGE_SELECTIONS.SERIES_SORT.sortedStages;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const seriesDElems: DebugElement[] = selectDElem.queryAll(By.css('.by-series .classification h4'));

      expect(seriesDElems.length).toEqual(sortedStages.length, `There should be ${sortedStages.length} series, but found ${seriesDElems.length}`);
      for (let i = 0; i < sortedStages.length; i++) {
        const expectedSeries = sortedStages[i].series;
        const actualSeries = seriesDElems[i].nativeElement.textContent.trim();
        expect(actualSeries).withContext(`index ${i}`).toEqual(expectedSeries);
      }
    });

    describe('series subsection', () => {
      /**/
      // console.log('=== SPEC - SUITE - SERIES - SUBSECTION');

      it('should show up if there are stages from its series', () => {
        /**/
        // console.log('=== SPEC - Show series subsection');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.SERIES_INDIVIDUAL_SHOW.selections;
        const targetSeries: string = STAGE_SELECTIONS.SERIES_INDIVIDUAL_SHOW.series;
        
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const seriesDElems: DebugElement[] = selectDElem.queryAll(By.css('form .by-series > .card .card-body h4'));
        const actualIndex: number = seriesDElems.findIndex(elem => {
          return (elem.nativeElement.textContent === targetSeries);
        });
        expect(actualIndex).toBeGreaterThan(-1);
      });

      it('should not show up if there are no stages from its series', () => {
        /**/
        // console.log('=== SPEC - Hide series subsection');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.SERIES_INDIVIDUAL_HIDE.selections;
        const targetSeries: string = STAGE_SELECTIONS.SERIES_INDIVIDUAL_HIDE.series;

        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const seriesDElems: DebugElement[] = selectDElem.queryAll(By.css('form .by-series > .card .card-body h4'));
        const actualIndex: number = seriesDElems.findIndex(elem => {
          return (elem.nativeElement.textContent.trim() === targetSeries);
        });
        expect(actualIndex).toEqual(-1);
      });

      it('should show all stages from its series', () => {
        /**/
        // console.log('=== SPEC - Show series\' stages');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.SERIES_INDIVIDUAL_INCLUDE.allStages;
        const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.SERIES_INDIVIDUAL_INCLUDE.includedStages;
        const targetSeries: string = STAGE_SELECTIONS.SERIES_INDIVIDUAL_INCLUDE.series;

        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const seriesHeaderDElems: DebugElement[] = selectDElem.queryAll(By.css('form .by-series > .card .classification h4'));
        const seriesIndex: number = seriesHeaderDElems.findIndex(elem => {
          return (elem.nativeElement.textContent.trim() === targetSeries);
        });
        expect(seriesIndex).toBeGreaterThan(-1, `${targetSeries} was not found in the series section`);
        
        const seriesDElem: DebugElement = selectDElem.queryAll(By.css('form .by-series > .card .classification'))[seriesIndex];
        const checkDElems: DebugElement[] = seriesDElem.queryAll(By.css('.form-check-input'));
        const actualGameNames: string[] = checkDElems.map(elem => elem.nativeElement.getAttribute('name'));

        for (const expectedStage of expectedStages) {
          expect(actualGameNames).toContain(expectedStage.gameName, `Stage "${expectedStage.gameName}" was not found in series "${targetSeries}."`);
        }
      });

      it('should not show any stages from a different series', () => {
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.SERIES_INDIVIDUAL_EXCLUDE.allStages;
        const targetStages: StageSelectInfo[] = STAGE_SELECTIONS.SERIES_INDIVIDUAL_EXCLUDE.excludedStages;
        const targetSeries: string = STAGE_SELECTIONS.SERIES_INDIVIDUAL_EXCLUDE.series;

        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const seriesHeaderDElems: DebugElement[] = selectDElem.queryAll(By.css('form .by-series > .card .classification h4'));
        const seriesIndex: number = seriesHeaderDElems.findIndex(elem => {
          return (elem.nativeElement.textContent === targetSeries);
        });

        expect(seriesIndex).toBeGreaterThan(-1, `${targetSeries} was not found in the series section`);

        const seriesDElem: DebugElement = selectDElem.queryAll(By.css('form .by-series > .card .classification'))[seriesIndex];
        const checkDElems: DebugElement[] = seriesDElem.queryAll(By.css('.form-check-input'));
        const actualGameNames: string[] = checkDElems.map(elem => elem.nativeElement.getAttribute('name'));

        for (const targetStage of targetStages) {
          expect(actualGameNames.includes(targetStage.gameName)).toBe(false, `Stage "${targetStage.gameName}" should not be in series "${targetSeries}."`);
        }
      });

      it('should list stages in alphabetical order', () => {
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.SERIES_STAGE_SORT.inputStages;
        const sortedStages: {
          series: string,
          stages: StageSelectInfo[]
        }[] = STAGE_SELECTIONS.SERIES_STAGE_SORT.sortedStages;

        let expectedStages: { [series: string]: StageSelectInfo[] } = {};
        for (const stageList of sortedStages) {
          expectedStages[stageList.series] = [...stageList.stages];
        }

        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const actualSeriesDElems: DebugElement[] = selectDElem.queryAll(By.css('.by-series .classification'));
        let actualStages: { [stageList: string]: string[] } = {};

        for (const actualDElem of actualSeriesDElems) {
          let series: string = actualDElem.query(By.css('h4')).nativeElement.textContent.trim();
          let stageNames: string[] = actualDElem.queryAll(By.css('.form-check-label')).map(elem => elem.nativeElement.textContent.trim());
          actualStages[series] = stageNames;
        }

        for (const stageList in expectedStages) {
          for (let i: number = 0; i < expectedStages[stageList].length; i++) {
            expect(actualStages[stageList][i]).withContext(`${stageList}[${i}]`).toEqual(expectedStages[stageList][i].name);
          }
        }
      });
    });
    describe('miscellaneous category', () => {
      it('should show up if there are stages with a miscellaneous series', () => {
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.MISC_SHOW_MISC;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const actualSeries: string[] = selectDElem.queryAll(By.css('.by-series .classification h4')).map(elem => elem.nativeElement.textContent);
        
        expect(actualSeries).toContain('Miscellaneous');
      });
      
      it('should show up if there are stages with a blank series', () => {
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.MISC_SHOW_BLANK;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const actualSeries: string[] = selectDElem.queryAll(By.css('.by-series .classification h4')).map(elem => elem.nativeElement.textContent);

        expect(actualSeries).toContain('Miscellaneous');
      });
      
      it('should not appear if there are no stages with a blank or miscellaneous series', () => {
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.MISC_HIDE;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const actualSeries: string[] = selectDElem.queryAll(By.css('.by-series .classification h4')).map(elem => elem.nativeElement.textContent);

        expect(actualSeries.includes('Miscellaneous')).toBe(false);
      });

      it('should show all stages with a blank series', () => {
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.MISC_STAGE_INCLUDE_BLANK.inputStages;
        const expectedGameNames: string[] = STAGE_SELECTIONS.MISC_STAGE_INCLUDE_BLANK.includedStages.map(stage => stage.gameName);
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const miscDElem: DebugElement = selectDElem.queryAll(By.css('.by-series .classification')).filter(elem => elem.query(By.css('h4')).nativeElement.textContent.trim() === 'Miscellaneous')[0];

        const actualGameNames: string[] = miscDElem.queryAll(By.css('.form-check-input')).map(elem => elem.nativeElement.getAttribute('name'));

        for (const expectedGameName of expectedGameNames) {
          expect(actualGameNames).toContain(expectedGameName);
        }
      });
      it('should show all stages with a miscellaneous series', () => {
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.MISC_STAGE_INCLUDE_MISC.inputStages;
        const expectedGameNames: string[] = STAGE_SELECTIONS.MISC_STAGE_INCLUDE_MISC.includedStages.map(stage => stage.gameName);
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const miscDElem: DebugElement = selectDElem.queryAll(By.css('.by-series .classification')).filter(elem => elem.query(By.css('h4')).nativeElement.textContent.trim() === 'Miscellaneous')[0];

        const actualGameNames: string[] = miscDElem.queryAll(By.css('.form-check-input')).map(elem => elem.nativeElement.getAttribute('name'));

        for (const expectedGameName of expectedGameNames) {
          expect(actualGameNames).toContain(expectedGameName);
        }
      });
      
      it('should not show stages from a defined series', () => {
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.MISC_STAGE_EXCLUDE.inputStages;
        const targetGameNames: string[] = STAGE_SELECTIONS.MISC_STAGE_EXCLUDE.excludedStages.map(stage => stage.gameName);
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const miscDElem: DebugElement = selectDElem.queryAll(By.css('.by-series .classification')).filter(elem => elem.query(By.css('h4')).nativeElement.textContent.trim() === 'Miscellaneous')[0];

        const miscStageIDs: string[] = miscDElem.queryAll(By.css('.form-check-input')).map(elem => elem.nativeElement.getAttribute('name'));

        for (const targetGameName of targetGameNames) {
          expect(miscStageIDs.includes(targetGameName)).withContext(`Stage ${targetGameName}`).toBe(false);
        }
      });
      
      it('should show up last, even after series that follow it alphabetically', () => {
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.MISC_STAGE_EXCLUDE.inputStages;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const seriesDElems: DebugElement[] = selectDElem.queryAll(By.css('.by-series .classification'));
        const expectedIndex: number = seriesDElems.length - 1;

        const actualIndex: number = seriesDElems.findIndex(elem => {
          return (elem.query(By.css('h4')).nativeElement.textContent.trim() === 'Miscellaneous');
        });

        expect(actualIndex).toEqual(expectedIndex);
      });
    });
  });

  describe('cross-category interaction', () => {
    it(`should check a stage in the series section if it's checked in the tourney section`, () => {
      /**/
      // console.group('=== SPEC - check series stage from tourney stage selection');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_SINGLE_CHECK_TOURNEY_SERIES.stages;
      const targetGameName: string = STAGE_SELECTIONS.CROSS_SINGLE_CHECK_TOURNEY_SERIES.targetID;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageTourneyDElem: DebugElement = selectDElem.query(By.css(`.by-tourney .form-check-input[name='${targetGameName}']`));
      const stageSeriesDElem: DebugElement = selectDElem.query(By.css(`.by-series .form-check-input[name='${targetGameName}']`));

      expect(stageTourneyDElem.nativeElement.getAttribute('name')).withContext('sanity check - should find tourney checkmark').toEqual(targetGameName);
      stageTourneyDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      expect(stageSeriesDElem.nativeElement.checked).toBe(true);
      /**/
      // console.groupEnd();
    });

    it(`should check a stage in the tourney section if it's checked in the series section`, () => {
      /**/
      // console.log('=== SPEC - check tourney stage from series stage selection');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_SINGLE_CHECK_SERIES_TOURNEY.stages;
      const targetGameName: string = STAGE_SELECTIONS.CROSS_SINGLE_CHECK_SERIES_TOURNEY.targetID;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageSeriesDElem: DebugElement = selectDElem.query(By.css(`.by-series .form-check-input[name='${targetGameName}']`));
      const stageTourneyDElem: DebugElement = selectDElem.query(By.css(`.by-tourney .form-check-input[name='${targetGameName}']`));

      expect(stageSeriesDElem.nativeElement.getAttribute('name')).withContext('sanity check - should find series checkmark').toEqual(targetGameName);
      stageSeriesDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      expect(stageTourneyDElem.nativeElement.checked).toBe(true);
    });

    it(`should uncheck a checked stage in the series section if it's unchecked in the tourney section`, () => {
      /**/
      // console.log('=== SPEC - uncheck series stage from tourney stage selection');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_SINGLE_UNCHECK_TOURNEY_SERIES.stages;
      const targetGameName: string = STAGE_SELECTIONS.CROSS_SINGLE_UNCHECK_TOURNEY_SERIES.targetID;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageSeriesDElem: DebugElement = selectDElem.query(By.css(`.by-series .form-check-input[name='${targetGameName}']`));
      const stageTourneyDElem: DebugElement = selectDElem.query(By.css(`.by-tourney .form-check-input[name='${targetGameName}']`));

      expect(stageSeriesDElem.nativeElement.getAttribute('name')).withContext('sanity check - should find series checkbox').toEqual(targetGameName);
      expect(stageTourneyDElem.nativeElement.getAttribute('name')).withContext('sanity check - should find tourney checkbox').toEqual(targetGameName);

      stageTourneyDElem.nativeElement.click();
      stageTourneyDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      expect(stageSeriesDElem.nativeElement.checked).toBe(false);
    });

    it(`should uncheck a checked stage in the tourney section if it's unchecked in the series section`, () => {
      /**/
      // console.log('=== SPEC - uncheck tourney stage from series stage selection');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_SINGLE_UNCHECK_SERIES_TOURNEY.stages;
      const targetGameName: string = STAGE_SELECTIONS.CROSS_SINGLE_UNCHECK_SERIES_TOURNEY.targetID;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageSeriesDElem: DebugElement = selectDElem.query(By.css(`.by-series .form-check-input[name='${targetGameName}']`));
      const stageTourneyDElem: DebugElement = selectDElem.query(By.css(`.by-tourney .form-check-input[name='${targetGameName}']`));

      expect(stageSeriesDElem.nativeElement.getAttribute('name')).withContext('sanity check - should find series checkbox').toEqual(targetGameName);
      expect(stageTourneyDElem.nativeElement.getAttribute('name')).withContext('sanity check - should find tourney checkbox').toEqual(targetGameName);

      stageSeriesDElem.nativeElement.click();
      stageSeriesDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      expect(stageTourneyDElem.nativeElement.checked).toBe(false);
    });

    it(`should not check any stage other than the one matching the clicked series stage`, () => {
      /**/
      // console.log('=== SPEC - don't check any stage other than the clicked series stage');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_SINGLE_CHECK_SERIES_TOURNEY_ISOLATE.stages;
      const targetGameName: string = STAGE_SELECTIONS.CROSS_SINGLE_CHECK_SERIES_TOURNEY_ISOLATE.targetID;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageSeriesTargetDElem: DebugElement = selectDElem.query(By.css(`.by-series .classification .form-check-input[name='${targetGameName}']`));
      const stageNonTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input:not([name='${targetGameName}'])`));
      expect(stageNonTargetDElems.length).withContext('sanity check - should find non-target checkmarks').toBeGreaterThanOrEqual((inputStages.length + inputStages.filter(stage => stage.tourneyPresence > -1).length) - 2);

      stageSeriesTargetDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      for (const stageNonTargetDElem of stageNonTargetDElems) {
        expect(stageNonTargetDElem.nativeElement.checked)
          .withContext(stageNonTargetDElem.nativeElement.getAttribute('name'))
          .toBe(false);
      }
    });

    it(`should not check any stage other than the one matching the clicked tourney stage`, () => {
      /**/
      // console.log('=== SPEC - don't check any stage other than the clicked tourney stage');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_SINGLE_CHECK_TOURNEY_SERIES_ISOLATE.stages;
      const targetGameName: string = STAGE_SELECTIONS.CROSS_SINGLE_CHECK_TOURNEY_SERIES_ISOLATE.targetID;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageTourneyTargetDElem: DebugElement = selectDElem.query(By.css(`.by-tourney .form-check-input[name='${targetGameName}']`));
      const stageNonTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input:not([name='${targetGameName}'])`));
      expect(stageNonTargetDElems.length).withContext('sanity check - should find non-target checkmarks').toBeGreaterThanOrEqual((inputStages.length + inputStages.filter(stage => stage.tourneyPresence > -1).length) - 2);

      stageTourneyTargetDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      for (const stageNonTargetDElem of stageNonTargetDElems) {
        expect(stageNonTargetDElem.nativeElement.checked)
          .withContext(stageNonTargetDElem.nativeElement.getAttribute('name'))
          .toBe(false);
      }
    });

    it(`should not uncheck any stages other than the one matching the clicked tourney stage`, () => {
      /**/
      // console.log('=== SPEC - don't uncheck any stage other than the clicked tourney stage');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_SINGLE_UNCHECK_TOURNEY_SERIES_ISOLATE.stages;
      const targetGameName: string = STAGE_SELECTIONS.CROSS_SINGLE_UNCHECK_TOURNEY_SERIES_ISOLATE.targetID;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageTourneyDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-tourney .classification .form-check-input`));
      const stageTourneyTargetDElem: DebugElement = selectDElem.query(By.css(`.by-tourney .form-check-input[name='${targetGameName}']`));
      const stageNonTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input:not([name='${targetGameName}'])`));
      expect(stageNonTargetDElems.length).withContext('sanity check - should find non-target checkmarks').toBeGreaterThanOrEqual((inputStages.length + inputStages.filter(stage => stage.tourneyPresence > -1).length) - 2);

      for (const stageTourneyDElem of stageTourneyDElems) {
        stageTourneyDElem.nativeElement.click();
      }

      stageTourneyTargetDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      for (const stageNonTargetDElem of stageNonTargetDElems) {
        expect(stageNonTargetDElem.nativeElement.checked)
          .withContext(stageNonTargetDElem.nativeElement.getAttribute('name'))
          .toBe(true);
      }
    });

    it(`should not uncheck any stages other than the one matching the clicked series stage`, () => {
      /**/
      // console.log('=== SPEC - don't uncheck any stage other than the clicked series stage');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_SINGLE_UNCHECK_SERIES_TOURNEY_ISOLATE.stages;
      const targetGameName: string = STAGE_SELECTIONS.CROSS_SINGLE_UNCHECK_SERIES_TOURNEY_ISOLATE.targetID;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageSeriesDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-series .classification .form-check-input`));
      const stageSeriesTargetDElem: DebugElement = selectDElem.query(By.css(`.by-series .form-check-input[name='${targetGameName}']`));
      const stageNonTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input:not([name='${targetGameName}'])`));
      expect(stageNonTargetDElems.length).withContext('sanity check - should find non-target checkmarks').toBeGreaterThanOrEqual((inputStages.length + inputStages.filter(stage => stage.tourneyPresence > -1).length) - 2);

      for (const stageSeriesDElem of stageSeriesDElems) {
        stageSeriesDElem.nativeElement.click();
      }

      stageSeriesTargetDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      for (const stageNonTargetDElem of stageNonTargetDElems) {
        expect(stageNonTargetDElem.nativeElement.checked)
          .withContext(stageNonTargetDElem.nativeElement.getAttribute('name'))
          .toBe(true);
      }
    });
    
    it(`should check multiple stages in the series section if they are checked in the tourney section`, () => {
      /**/
      // console.log('=== SPEC - check multiple series stages from tourney stage selection');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_MULTIPLE_CHECK_TOURNEY_SERIES.stages;
      const targetGameNames: string[] = STAGE_SELECTIONS.CROSS_MULTIPLE_CHECK_TOURNEY_SERIES.targetIDs;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageTourneyTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-tourney .classification .form-check-input`)).filter(dElem => targetGameNames.includes(dElem.nativeElement.getAttribute('name')));
      const stageSeriesTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-series .classification .form-check-input`)).filter(dElem => targetGameNames.includes(dElem.nativeElement.getAttribute('name')));

      expect(stageSeriesTargetDElems.length).withContext('sanity check - should find series checkmarks').toEqual(targetGameNames.length);
      for (const stageTourneyTargetDElem of stageTourneyTargetDElems) {
        stageTourneyTargetDElem.nativeElement.click();
      }
      selectHostFixture.detectChanges();

      for (const stageSeriesTargetDElem of stageSeriesTargetDElems) {
        expect(stageSeriesTargetDElem.nativeElement.checked)
          .withContext(stageSeriesTargetDElem.nativeElement.getAttribute('name'))
          .toBe(true);
      }
    });
    
    it(`should check multiple stages in the tourney section if they are checked in the series section`, () => {
      /**/
      // console.log('=== SPEC - check multiple tourney stages from series stage selection');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_MULTIPLE_CHECK_SERIES_TOURNEY.stages;
      const targetGameNames: string[] = STAGE_SELECTIONS.CROSS_MULTIPLE_CHECK_SERIES_TOURNEY.targetIDs;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageSeriesTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-series .classification .form-check-input`)).filter(dElem => targetGameNames.includes(dElem.nativeElement.getAttribute('name')));
      const stageTourneyTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-tourney .classification .form-check-input`)).filter(dElem => targetGameNames.includes(dElem.nativeElement.getAttribute('name')));

      expect(stageTourneyTargetDElems.length).withContext('sanity check - should find tourney checkmarks').toEqual(targetGameNames.length);
      for (const stageSeriesTargetDElem of stageSeriesTargetDElems) {
        stageSeriesTargetDElem.nativeElement.click();
      }
      selectHostFixture.detectChanges();

      for (const stageTourneyTargetDElem of stageTourneyTargetDElems) {
        expect(stageTourneyTargetDElem.nativeElement.checked)
          .withContext(stageTourneyTargetDElem.nativeElement.getAttribute('name'))
          .toBe(true);
      }
    });
    
    it(`should uncheck multiple stages in the series section if they are unchecked in the tourney section`, () => {
      /**/
      // console.log('=== SPEC - uncheck multiple series stages from tourney stage selection');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_MULTIPLE_UNCHECK_TOURNEY_SERIES.stages;
      const targetGameNames: string[] = STAGE_SELECTIONS.CROSS_MULTIPLE_UNCHECK_TOURNEY_SERIES.targetIDs;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }
      
      const stageTourneyDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-tourney .classification .form-check-input`));
      const stageTourneyTargetDElems: DebugElement[] = stageTourneyDElems.filter(dElem => targetGameNames.includes(dElem.nativeElement.getAttribute('name')));
      const stageSeriesTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-series .classification .form-check-input`)).filter(dElem => targetGameNames.includes(dElem.nativeElement.getAttribute('name')));

      expect(stageSeriesTargetDElems.length).withContext('sanity check - should find series checkmarks').toEqual(targetGameNames.length);
      for (const stageTourneyDElem of stageTourneyDElems) {
        stageTourneyDElem.nativeElement.click();
      }
      for (const stageTourneyTargetDElem of stageTourneyTargetDElems) {
        stageTourneyTargetDElem.nativeElement.click();
      }
      selectHostFixture.detectChanges();

      for (const stageSeriesTargetDElem of stageSeriesTargetDElems) {
        expect(stageSeriesTargetDElem.nativeElement.checked)
          .withContext(stageSeriesTargetDElem.nativeElement.getAttribute('name'))
          .toBe(false);
      }
    });

    it(`should uncheck multiple stages in the tourney section if they are unchecked in the series section`, () => {
      /**/
      // console.log('=== SPEC - uncheck multiple tourney stages from series stage selection');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_MULTIPLE_UNCHECK_SERIES_TOURNEY.stages;
      const targetGameNames: string[] = STAGE_SELECTIONS.CROSS_MULTIPLE_UNCHECK_SERIES_TOURNEY.targetIDs;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageSeriesDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-tourney .classification .form-check-input`));
      const stageSeriesTargetDElems: DebugElement[] = stageSeriesDElems.filter(dElem => targetGameNames.includes(dElem.nativeElement.getAttribute('name')));
      const stageTourneyTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-tourney .classification .form-check-input`)).filter(dElem => targetGameNames.includes(dElem.nativeElement.getAttribute('name')));

      expect(stageTourneyTargetDElems.length).withContext('sanity check - should find tourney checkmarks').toEqual(targetGameNames.length);
      for (const stageSeriesDElem of stageSeriesDElems) {
        stageSeriesDElem.nativeElement.click();
      }
      for (const stageSeriesTargetDElem of stageSeriesTargetDElems) {
        stageSeriesTargetDElem.nativeElement.click();
      }
      selectHostFixture.detectChanges();

      for (const stageTourneyTargetDElem of stageTourneyTargetDElems) {
        expect(stageTourneyTargetDElem.nativeElement.checked)
          .withContext(stageTourneyTargetDElem.nativeElement.getAttribute('name'))
          .toBe(false);
      }
    });
    
    it(`should not check any stages other than matches for the checked tourney stages`, () => {
      // console.log('=== SPEC - don't check any stage other than the clicked tourney stages');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_MULTIPLE_CHECK_TOURNEY_SERIES_ISOLATE.stages;
      const targetGameNames: string[] = STAGE_SELECTIONS.CROSS_MULTIPLE_CHECK_TOURNEY_SERIES_ISOLATE.targetIDs;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageTourneyDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-tourney .classification .form-check-input`));
      const stageTourneyTargetDElems: DebugElement[] = stageTourneyDElems.filter(dElem => targetGameNames.includes(dElem.nativeElement.getAttribute('name')));
      const stageNonTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`)).filter(dElem => !targetGameNames.includes(dElem.nativeElement.getAttribute('name')))
      expect(stageNonTargetDElems.length).withContext('sanity check - should find non-target checkmarks').toBeGreaterThanOrEqual((inputStages.length + inputStages.filter(stage => stage.tourneyPresence > -1).length) - (targetGameNames.length * 2));

      for (const stageTourneyTargetDElem of stageTourneyTargetDElems) {
        stageTourneyTargetDElem.nativeElement.click();
      }
      selectHostFixture.detectChanges();

      for (const stageNonTargetDElem of stageNonTargetDElems) {
        expect(stageNonTargetDElem.nativeElement.checked)
          .withContext(stageNonTargetDElem.nativeElement.getAttribute('name'))
          .toBe(false);
      }
    });

    it(`should not check any stages other than matches for the checked series stages`, () => {
      // console.log('=== SPEC - don't check any stage other than the clicked series stages');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_MULTIPLE_CHECK_SERIES_TOURNEY_ISOLATE.stages;
      const targetGameNames: string[] = STAGE_SELECTIONS.CROSS_MULTIPLE_CHECK_SERIES_TOURNEY_ISOLATE.targetIDs;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageSeriesDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-tourney .classification .form-check-input`));
      const stageSeriesTargetDElems: DebugElement[] = stageSeriesDElems.filter(dElem => targetGameNames.includes(dElem.nativeElement.getAttribute('name')));
      const stageNonTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`)).filter(dElem => !targetGameNames.includes(dElem.nativeElement.getAttribute('name')))
      expect(stageNonTargetDElems.length).withContext('sanity check - should find non-target checkmarks').toBeGreaterThanOrEqual((inputStages.length + inputStages.filter(stage => stage.tourneyPresence > -1).length) - (targetGameNames.length * 2));

      for (const stageSeriesTargetDElem of stageSeriesTargetDElems) {
        stageSeriesTargetDElem.nativeElement.click();
      }
      selectHostFixture.detectChanges();

      for (const stageNonTargetDElem of stageNonTargetDElems) {
        expect(stageNonTargetDElem.nativeElement.checked)
          .withContext(stageNonTargetDElem.nativeElement.getAttribute('name'))
          .toBe(false);
      }
    });

    it(`should not uncheck any stages other than matches for the checked tourney stages`, () => {
      // console.log('=== SPEC - don't check any stage other than the clicked tourney stages');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_MULTIPLE_UNCHECK_TOURNEY_SERIES_ISOLATE.stages;
      const targetGameNames: string[] = STAGE_SELECTIONS.CROSS_MULTIPLE_UNCHECK_TOURNEY_SERIES_ISOLATE.targetIDs;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageSeriesDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-series .classification .form-check-input`));
      const stageTourneyTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-tourney .classification .form-check-input`)).filter(dElem => targetGameNames.includes(dElem.nativeElement.getAttribute('name')));
      const stageNonTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`)).filter(dElem => {
        return (targetGameNames.includes(dElem.nativeElement.getAttribute('name')) === false);
      });
      expect(stageNonTargetDElems.length)
        .withContext('sanity check - should find non-target checkmarks')
        .toBeGreaterThanOrEqual((inputStages.length + inputStages.filter(stage => stage.tourneyPresence > -1).length) - (targetGameNames.length * 2));

      for (const stageSeriesDElem of stageSeriesDElems) {
        stageSeriesDElem.nativeElement.click();
      }
      for (const stageTourneyTargetDElem of stageTourneyTargetDElems) {
        stageTourneyTargetDElem.nativeElement.click();
      }
      selectHostFixture.detectChanges();

      for (const stageNonTargetDElem of stageNonTargetDElems) {
        expect(stageNonTargetDElem.nativeElement.checked)
          .withContext(stageNonTargetDElem.nativeElement.getAttribute('name'))
          .toBe(true);
      }
    });

    it(`should not uncheck any stages other than matches for the checked series stages`, () => {
      // console.log('=== SPEC - don't check any stage other than the clicked series stages');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.CROSS_MULTIPLE_UNCHECK_SERIES_TOURNEY_ISOLATE.stages;
      const targetGameNames: string[] = STAGE_SELECTIONS.CROSS_MULTIPLE_UNCHECK_SERIES_TOURNEY_ISOLATE.targetIDs;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const stageSeriesDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-series .classification .form-check-input`));
      const stageSeriesTargetDElems: DebugElement[] = stageSeriesDElems.filter(dElem => targetGameNames.includes(dElem.nativeElement.getAttribute('name')));
      const stageNonTargetDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`)).filter(dElem => {
        return (targetGameNames.includes(dElem.nativeElement.getAttribute('name')) === false); });
      expect(stageNonTargetDElems.length)
        .withContext('sanity check - should find non-target checkmarks')
        .toBeGreaterThanOrEqual((inputStages.length + inputStages.filter(stage => stage.tourneyPresence > -1).length) - (targetGameNames.length * 2));

      for (const stageSeriesDElem of stageSeriesDElems) {
        stageSeriesDElem.nativeElement.click();
      }
      for (const stageSeriesTargetDElem of stageSeriesTargetDElems) {
        stageSeriesTargetDElem.nativeElement.click();
      }
      selectHostFixture.detectChanges();

      for (const stageNonTargetDElem of stageNonTargetDElems) {
        expect(stageNonTargetDElem.nativeElement.checked)
          .withContext(stageNonTargetDElem.nativeElement.getAttribute('name'))
          .toBe(true);
      }
    });
  });

  describe('update button', () => {
    it('should exist', () => {
      /**/
      // console.groupCollapsed(`=== SPEC - update button exists`);
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.UPDATE_EXISTS;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();
      
      const buttonDElem: DebugElement = selectDElem.query(By.css(`button[type="submit"]`));
      expect(buttonDElem.nativeElement.textContent.trim()).toEqual('Update');
      /**/
      // console.groupEnd();
    });

    it('should be disabled when no stages are selected', () => {
      /**/
      // console.group('=== SPEC - disable button when no stages are selected');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.UPDATE_DISABLED;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }
      selectHostFixture.detectChanges();

      const submitDElem: DebugElement = selectDElem.query(By.css(`button[type="submit"]`));
      expect(submitDElem.nativeElement.disabled).toBe(true);
      selectHostFixture.detectChanges();

      /**/
      // console.groupEnd();
    });

    it('should be enabled when there are stages selected', () => {
      /**/
      // console.group("=== SPEC - enable button when stages are selected");
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.UPDATE_ENABLED.inputStages;
      const selectedGameNames: string[] = STAGE_SELECTIONS.UPDATE_ENABLED.selectedStages;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      for (const selectedGameName of selectedGameNames) {
        const selectedStageDElem: DebugElement = selectDElem.query(By.css(`.classification .form-check-input[name="${selectedGameName}"]`));
        selectedStageDElem.nativeElement.click();
      }
      selectHostFixture.detectChanges();

      const submitDElem: DebugElement = selectDElem.query(By.css(`button[type="submit"]`));
      expect(submitDElem.nativeElement.disabled).toBe(false);

      /**/
      // console.groupEnd();
    });

    it('should send the selected gameNames', () => {
      /**/
      // console.group(`=== SPEC - send selected stages`);
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.UPDATE_SELECTED.inputStages;
      const expectedSelected: string[] = STAGE_SELECTIONS.UPDATE_SELECTED.selectedStages;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const selectedDElems: DebugElement[] = selectDElem.queryAll(By.css(`.by-series .classification .form-check-input`))
        .filter(   dElem => {   return expectedSelected.includes( dElem.nativeElement.getAttribute('name') );   }   );

      for (const selectedDElem of selectedDElems) {
        selectedDElem.nativeElement.click();
      }
      selectHostFixture.detectChanges();

      const submitDElem: DebugElement = selectDElem.query(By.css('button[type="submit"]'));
      submitDElem.nativeElement.click();
      selectHostFixture.detectChanges();
      
      const actualSelected: string[] = [...selectHostComp.selectedStages];
      for (const expectedStage of expectedSelected) {
        expect(actualSelected).toContain(expectedStage);
      }
      /**/
      // console.groupEnd();
    });

    it('should not send any unselected gameNames', () => {
      /**/
      // console.group(`=== SPEC - don't send unselected gameNames`);
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.UPDATE_UNSELECTED.inputStages;
      const selectedGameNames: string[] = STAGE_SELECTIONS.UPDATE_UNSELECTED.selectedStages;
      const targetGameNames: string[] = STAGE_SELECTIONS.UPDATE_UNSELECTED.targetStages;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      for (const selectedGameName of selectedGameNames) {
        const selectedDElem: DebugElement = selectDElem.query(By.css(`.classification .form-check-input[name="${selectedGameName}"]`));
        expect(selectDElem).withContext(`sanity - should find ${selectedGameName} checkbox`).toBeTruthy();
        selectedDElem.nativeElement.click();
        /**/expect(selectedDElem.nativeElement.checked).withContext(`sanity - should select ${selectedGameName} checkbox`).toBe(true);
      }
      selectHostFixture.detectChanges();

      const updateDElem: DebugElement = selectDElem.query(By.css('button[type="submit"]'));
      /**/expect(updateDElem.nativeElement.disabled).withContext('sanity - update button should be enabled').toBe(false);
      updateDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      const actualSelected: string[] = [...selectHostComp.selectedStages];
      for (const targetGameName of targetGameNames) {
        expect(actualSelected.includes(targetGameName)).withContext(targetGameName).toBe(false);
      }
      /**/
      // console.groupEnd();
    });

    it('should show an error message when no stages are selected', () => {
      /**/
      // console.group('=== SPEC - show error when no stages are selected');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.UPDATE_NO_STAGES;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      const submitDElem: DebugElement = selectDElem.query(By.css(`button[type="submit"]`));
      submitDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      const errorDElem: DebugElement = selectDElem.query(By.css(`.stage-select-submit .error`));
      expect(errorDElem).withContext('find error message element').toBeTruthy();

      expect(errorDElem.nativeElement.textContent.trim()).withContext('match error message').toEqual('Please select at least one stage.');

      /**/
      // console.groupEnd();
    });

    it('should not show an error message if there is a stage in the series section selected', () => {
      /**/
      // console.group("=== SPEC - don't show error when stages are selected");
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.UPDATE_NO_ERROR.inputStages;
      const targetGameNames: string[] = STAGE_SELECTIONS.UPDATE_NO_ERROR.targetStages;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }

      for (const targetGameName of targetGameNames) {
        const targetStageDElem: DebugElement = selectDElem.query(By.css(`.classification .form-check-input[name="${targetGameName}"]`));
        targetStageDElem.nativeElement.click();
      }

      const submitDElem: DebugElement = selectDElem.query(By.css(`button[type="submit"]`));
      submitDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      const errorDElem: DebugElement = selectDElem.query(By.css(`.stage-select-submit .error`));
      expect(errorDElem).toBeNull();

      /**/
      // console.groupEnd();
    });
  });

  describe('select / unselect all checkbox', () => {

    it('should appear in each root section', () => {
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.ALL_EXISTS;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const selectAllTourneyDElem: DebugElement = selectDElem.query(By.css('.by-tourney #tourneyPresence_all.form-check-input[name="all"]'));
      const selectAllSeriesDElem: DebugElement = selectDElem.query(By.css('.by-series #series_all.form-check-input[name="all"]'));
      expect(selectAllTourneyDElem).withContext('select all - tourney').toBeTruthy();
      expect(selectAllSeriesDElem).withContext('select all - series').toBeTruthy();
    });

    it('should have the label "Select / Unselect All"', () => {
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.ALL_LABEL;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const selectAllTourneyDElem: DebugElement = selectDElem.query(By.css('.by-tourney .form-check-label[for="tourneyPresence_all"]'));
      const selectAllSeriesDElem: DebugElement = selectDElem.query(By.css('.by-series .form-check-label[for="series_all"]'));
      expect(selectAllTourneyDElem.nativeElement.textContent.trim()).toEqual("Select / Unselect All");
      expect(selectAllSeriesDElem.nativeElement.textContent.trim()).toEqual("Select / Unselect All");
    });

    it('should be in the first subsection', () => {
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.ALL_FIRST_SECTION;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const selectAllTourneyDElem: DebugElement = selectDElem.query(By.css('.by-tourney .row')).query(By.css('#tourneyPresence_all'));
      const selectAllSeriesDElem: DebugElement = selectDElem.query(By.css('.by-series .row')).query(By.css('#series_all'));
      expect(selectAllTourneyDElem).withContext('select all - tourney').toBeTruthy();
      expect(selectAllSeriesDElem).withContext('select all - series').toBeTruthy();
    });

    it('should check all stages in its root section (tourney)', () => {
      /**/
      // console.group("=== SPEC - check all stages - tourney");
      let inputStages: StageSelectInfo[] = STAGE_SELECTIONS.ALL_CHECK_POSITIVE_TOURNEY;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css(`.classification .form-check-input`));
      const selectAllTourneyDElem: DebugElement = selectDElem.query(By.css('#tourneyPresence_all'));
      const allTourneyDElems: DebugElement[] = selectDElem.queryAll(By.css('.by-tourney .classification .form-check-input'));

      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }
      selectHostFixture.detectChanges();

      selectAllTourneyDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      for (const tourneyDElem of allTourneyDElems) {
        let stageName = tourneyDElem.nativeElement.getAttribute('name');
        expect(tourneyDElem.nativeElement.checked).withContext(stageName).toBe(true);
      }
      /**/
      // console.groupEnd();
    });

    it('should check all stages in its root section (series)', () => {
      /**/
      // console.groupCollapsed('=== SPEC - select all - check all series stages');
      let inputStages: StageSelectInfo[] = STAGE_SELECTIONS.ALL_CHECK_POSITIVE_SERIES;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css('.classification .form-check-input'));
      const selectAllSeriesDElem: DebugElement = selectDElem.query(By.css('#series_all'));
      const allSeriesDElems: DebugElement[] = selectDElem.queryAll(By.css('.by-series .classification .form-check-input'));

      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }
      selectHostFixture.detectChanges();

      selectAllSeriesDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      for (const seriesDElem of allSeriesDElems) {
        let stageName = seriesDElem.nativeElement.getAttribute('name');
        expect(seriesDElem.nativeElement.checked).withContext(stageName).toBe(true);
      }
      /**/
      // console.groupEnd();
    });

    it('should not check all stages in other sections (tourney > series)', () => {
      /**/
      // console.groupCollapsed('=== SPEC - select all - don\'t check stages in other section');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.ALL_CHECK_NEGATIVE_TOURNEY.inputStages;
      const targetGameNames: string[] = STAGE_SELECTIONS.ALL_CHECK_NEGATIVE_TOURNEY.targetStages;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css('.classification .form-check-input'));
      const selectAllTourneyDElem: DebugElement = selectDElem.query(By.css('#tourneyPresence_all'));

      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }
      selectHostFixture.detectChanges();

      selectAllTourneyDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      for (const targetGameName of targetGameNames) {
        const targetCheckDElem: DebugElement = selectDElem.query(By.css(`.by-series .form-check-input[name='${targetGameName}']`));
        expect(targetCheckDElem.nativeElement.checked).withContext(targetGameName).toBe(false);
      }
      /**/
      // console.groupEnd();
    });

    it('should be checked when all stages in its root section are checked - series', () => {
      /**/
      // console.groupCollapsed('=== SPEC - select all - check when all series stages checked');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.ALL_CHECKED_SERIES;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css('.classification .form-check-input'));
      const seriesDElems: DebugElement[] = selectDElem.queryAll(By.css('.by-series .classification .form-check-input'));
      const selectAllSeriesDElem: DebugElement = selectDElem.query(By.css('#series_all'));

      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }
      selectHostFixture.detectChanges();

      for (const seriesDElem of seriesDElems) {
        seriesDElem.nativeElement.click();
      }
      selectHostFixture.detectChanges();

      expect(selectAllSeriesDElem.nativeElement.checked).toBe(true);
      /**/
      // console.groupEnd();
    });

    it('should not be checked when not all stages in its root section are checked - series', () => {
      /**/
      // console.groupCollapsed('=== SPEC - select all - don\'t check when not all series stages checked');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.ALL_UNCHECKED_SERIES.inputStages;
      const targetGameNames: string[] = STAGE_SELECTIONS.ALL_UNCHECKED_SERIES.targetStages;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css('.classification .form-check-input'));
      const selectAllSeriesDElem: DebugElement = selectDElem.query(By.css('#series_all'));

      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }
      selectHostFixture.detectChanges();

      for (const targetGameName of targetGameNames) {
        const targetDElem: DebugElement = selectDElem.query(By.css(`.by-series .classification .form-check-input[name='${targetGameName}']`));
        targetDElem.nativeElement.click();
      }
      selectHostFixture.detectChanges();

      expect(selectAllSeriesDElem.nativeElement.checked).toBe(false);
      /**/
      // console.groupEnd();
    });

    it('should be checked when all stages in its root section are checked - tourney', () => {
      /**/
      // console.groupCollapsed('=== SPEC - select all - check when all tourney stages checked');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.ALL_CHECKED_TOURNEY;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css('.classification .form-check-input'));
      const tourneyDElems: DebugElement[] = selectDElem.queryAll(By.css('.by-tourney .classification .form-check-input'));
      const selectAllTourneyDElem: DebugElement = selectDElem.query(By.css('#tourneyPresence_all'));

      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }
      selectHostFixture.detectChanges();

      for (const tourneyDElem of tourneyDElems) {
        tourneyDElem.nativeElement.click();
      }
      selectHostFixture.detectChanges();

      expect(selectAllTourneyDElem.nativeElement.checked).toBe(true);
      /**/
      // console.groupEnd();
    });

    it('should not be checked when not all stages in its root section are checked - tourney', () => {
      /**/
      // console.groupCollapsed('=== SPEC - select all not checked');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.ALL_UNCHECKED_TOURNEY.inputStages;
      const targetGameNames: string[] = STAGE_SELECTIONS.ALL_UNCHECKED_TOURNEY.targetStages;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css('.classification .form-check-input'));
      const selectAllTourneyDElem: DebugElement = selectDElem.query(By.css('#tourneyPresence_all'));

      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = false;
      }
      selectHostFixture.detectChanges();

      for (const targetGameName of targetGameNames) {
        const targetDElem: DebugElement = selectDElem.query(By.css(`.by-tourney .classification .form-check-input[name='${targetGameName}']`));
        targetDElem.nativeElement.click();
      }
      selectHostFixture.detectChanges();

      expect(selectAllTourneyDElem.nativeElement.checked).toBe(false);
      /**/
      // console.groupEnd();
    });

    it('should uncheck all stages in its root section when unchecked (series)', () => {
      /**/
      // console.groupCollapsed('=== SPEC - uncheck all series stages');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.ALL_UNCHECK_POSITIVE_SERIES;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css('.classification .form-check-input'));
      const seriesCheckDElems: DebugElement[] = selectDElem.queryAll(By.css('.by-series .classification .form-check-input'));
      const selectAllDElem: DebugElement = selectDElem.query(By.css('#series_all'));

      /**/
      // console.group('SPEC - setting series toggle all to true');
      selectAllDElem.nativeElement.click();
      /**/
      // console.groupEnd();

      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = true;
      }
      selectHostFixture.detectChanges();

      /**/
      // console.group('SPEC - clicking series toggle all');
      selectAllDElem.nativeElement.click();
      /**/
      // console.groupEnd();
      selectHostFixture.detectChanges();

      for (const checkDElem of seriesCheckDElems) {
        let gameName: string = checkDElem.nativeElement.getAttribute('name');
        expect(checkDElem.nativeElement.checked).withContext(gameName).toBe(false);
      }
      /**/
      // console.groupEnd();
    });

    it('should uncheck all stages in its root section when unchecked (tourney)', () => {
      /**/
      // console.groupCollapsed('=== SPEC - uncheck all tourney stages');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.ALL_UNCHECK_POSITIVE_TOURNEY;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css('.classification .form-check-input'));
      const tourneyCheckDElems: DebugElement[] = selectDElem.queryAll(By.css('.by-tourney .classification .form-check-input'));
      const selectAllDElem: DebugElement = selectDElem.query(By.css('#tourneyPresence_all'));

      selectAllDElem.nativeElement.click();
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = true;
      }
      selectHostFixture.detectChanges();

      selectAllDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      for (const checkDElem of tourneyCheckDElems) {
        let gameName: string = checkDElem.nativeElement.getAttribute('name');
        expect(checkDElem.nativeElement.checked).withContext(gameName).toBe(false);
      }
      /**/
      // console.groupEnd();
    });

    it('should not uncheck all stages in other sections when unchecked (tourney > series)', () => {
      /**/
      // console.groupCollapsed('=== SPEC - select all - don\' uncheck stages in other sections');
      const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.ALL_UNCHECK_NEGATIVE_TOURNEY.inputStages;
      const targetGameNames: string[] = STAGE_SELECTIONS.ALL_UNCHECK_NEGATIVE_TOURNEY.targetStages;
      selectHostComp.stages = [...inputStages];
      selectHostFixture.detectChanges();

      const stageCheckDElems: DebugElement[] = selectDElem.queryAll(By.css('.classification .form-check-input'));
      const selectAllTourneyDElem: DebugElement = selectDElem.query(By.css('#tourneyPresence_all'));

      selectAllTourneyDElem.nativeElement.click();
      for (const checkDElem of stageCheckDElems) {
        checkDElem.nativeElement.checked = true;
      }
      selectHostFixture.detectChanges();

      selectAllTourneyDElem.nativeElement.click();
      selectHostFixture.detectChanges();

      for (const targetGameName of targetGameNames) {
        const targetCheckDElem: DebugElement = selectDElem.query(By.css(`.by-series .form-check-input[name='${targetGameName}']`));
        expect(targetCheckDElem.nativeElement.checked).withContext(targetGameName).toBe(true);
      }
      /**/
      // console.groupEnd();
    });

  });
  // TODO:
    // Make common legal stages selected and submitted to host component on init
    // Handle no stages loaded error
});
