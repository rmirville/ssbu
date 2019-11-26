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
    let expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_ONE;
    selectHostComp.stages = [...expectedStages];
    expect(selectHostComp.stages.length).withContext('the number of stages should be the same').toEqual(expectedStages.length);
    expect(selectHostComp.stages).toEqual(expectedStages);
    
  })
  
  it('should have a stages property set to a provided value on init', () => {
    let expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_ONE;
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
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_ONE;

    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkInputDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check .form-check-input'));

    expect(checkInputDElems.length > 0).toEqual(true);
  });

  it('should show a list of checkbox labels', () => {
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_ONE;

    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkLabelDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check .form-check-label'));

    expect(checkLabelDElems.length > 0).toEqual(true);
  });

  it(`should show a list of checkbox inputs with id's that match the provided stages' gameNames`, () => {
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_ONE;

    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check'));
    const actualIDs = checkDElems.map(checkDElem => checkDElem.query(By.css('.form-check-input')).nativeElement.id);

    expectedStages.forEach(expectedStage => {
      expect(actualIDs.includes(expectedStage.gameName)).toEqual(true, `no input with id '${expectedStage.gameName}'`);
    });
  });

  it(`should show a list of checkbox labels with for attributes that match the provided stages' gameNames`, () => {
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_ONE;

    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check'));
    const actualLabelFors = checkDElems.map(checkDElem => checkDElem.query(By.css('.form-check-label')).nativeElement.getAttribute('for'));

    expectedStages.forEach(expectedStage => {
      expect(actualLabelFors.includes(expectedStage.gameName)).toEqual(true, `no label for attribute with value '${expectedStage.gameName}`);
    });
  });

  it(`should show a list of checkbox labels with texts that match the provided stages' names`, () => {
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_ONE;

    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check'));
    const actualLabels = checkDElems.map(checkDElem => checkDElem.query(By.css('.form-check-label')).nativeElement.textContent);

    expectedStages.forEach(expectedStage => {
      expect(actualLabels.includes(expectedStage.name)).toEqual(true, `no label with text '${expectedStage.name}'`);
    });
  });

  describe('tournament legality section', () => {

    describe('commonly legal stages', () => {

      it('should show a common legal stages category if there are commonly legal stages', () => {
        /**/
        // console.log('=== SPEC - Show common legal category ===');
        const stages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_COMMON_PRESENT;
        selectHostComp.stages = [...stages];
        selectHostFixture.detectChanges();

        expect(selectDElem.queryAll(By.css('form .tourney-legal-common')).length).toEqual(1);
      });

      it('should not show a common legal stages category if there are no commonly legal stages', () => {
        /**/
        // console.log('=== SPEC - Hide common legal category ===');
        const stages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_COMMON_ABSENT;
        selectHostComp.stages = [...stages];
        selectHostFixture.detectChanges();
        
        const actualStagesDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-common'));
        expect(actualStagesDElems.length).toEqual(0);
      });

      it('should show all common legal stages in the common legal stages category', () => {
        /**/
        // console.log('=== SPEC - Show all common legal stages in common legal category ===');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_COMMON_INCLUDE.allStages;
        const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_COMMON_INCLUDE.includedStages;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();
        
        const actualStageDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-common .form-check-input'));

        expectedStages.forEach(expectedStage => {
          const index = actualStageDElems.findIndex(actualStageDElem => {
            return (actualStageDElem.nativeElement.id === expectedStage.gameName);
          });
          expect(index).toBeGreaterThan(-1, `Could not find ${expectedStage.gameName}`);
        });
      });

      it('should not show other stages in the common legal stages category', () => {
        /**/
        // console.log('=== SPEC - Hide other stages from common legal category');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_COMMON_EXCLUDE.allStages;
        const excludedStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_COMMON_EXCLUDE.excludedStages;

        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const actualStageDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-common .form-check-input'));
        
        excludedStages.forEach(excludedStage => {
          const index = actualStageDElems.findIndex(actualStageDElem => {
            return (actualStageDElem.nativeElement.id === excludedStage.gameName);
          });
          expect(index).toEqual(-1, `${excludedStage.gameName} should not be in common legal stages`);
        });
      });

    });

    describe('uncommonly legal stages', () => {

      it('should show an uncommonly legal stages category if there are uncommonly legal stages', () => {
        /**/
        // console.log('=== SPEC - Show uncommon legal category ===');
        const stages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_UNCOMMON_PRESENT;
        selectHostComp.stages = [...stages];
        selectHostFixture.detectChanges();

        expect(selectDElem.queryAll(By.css('form .tourney-legal-uncommon')).length).toEqual(1);
      });
      
      it('should not show an uncommon legal stages category if there are no uncommonly legal stages', () => {
        /**/
        // console.log('=== SPEC - Hide uncommon legal category ===');
        const stages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_UNCOMMON_ABSENT;
        selectHostComp.stages = [...stages];
        selectHostFixture.detectChanges();

        const actualStagesDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-uncommon'));
        expect(actualStagesDElems.length).toEqual(0);
      });

      it('should show all uncommon legal stages in the uncommon legal stages category', () => {
        /**/
        // console.log('=== SPEC - Show all uncommon legal stages in uncommon legal category ===');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_UNCOMMON_INCLUDE.allStages;
        const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_UNCOMMON_INCLUDE.includedStages;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const actualStageDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-uncommon .form-check-input'));

        expectedStages.forEach(expectedStage => {
          const index = actualStageDElems.findIndex(actualStageDElem => {
            return (actualStageDElem.nativeElement.id === expectedStage.gameName);
          });
          expect(index).toBeGreaterThan(-1, `Could not find ${expectedStage.gameName}`);
        });
      });

      it('should not show other stages in the uncommon legal stages category', () => {
        /**/
        // console.log('=== SPEC - Hide other stages from uncommon legal category');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_UNCOMMON_EXCLUDE.allStages;
        const excludedStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_UNCOMMON_EXCLUDE.excludedStages;

        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const actualStageDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-uncommon .form-check-input'));

        excludedStages.forEach(excludedStage => {
          const index = actualStageDElems.findIndex(actualStageDElem => {
            return (actualStageDElem.nativeElement.id === excludedStage.gameName);
          });
          expect(index).toEqual(-1, `${excludedStage.gameName} should not be in uncommon legal stages`);
        });
      });

    });

    describe('rarely legal stages', () => {

      it('should show a rarely legal stages category if there are rarely legal stages', () => {
        /**/
        // console.log('=== SPEC - Show rare legal category ===');
        const stages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_RARE_PRESENT;
        selectHostComp.stages = [...stages];
        selectHostFixture.detectChanges();

        expect(selectDElem.queryAll(By.css('form .tourney-legal-rare')).length).toEqual(1);
      });

      it('should not show a rare legal stages category if there are no rarely legal stages', () => {
        /**/
        // console.log('=== SPEC - Hide rare legal category ===');
        const stages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_RARE_ABSENT;
        selectHostComp.stages = [...stages];
        selectHostFixture.detectChanges();

        const actualStagesDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-rare'));
        expect(actualStagesDElems.length).toEqual(0);
      });

      it('should show all rarely legal stages in the rarely legal stages category', () => {
        /**/
        // console.log('=== SPEC - Show all rare legal stages in rare legal category ===');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_RARE_INCLUDE.allStages;
        const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_RARE_INCLUDE.includedStages;
        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const actualStageDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-rare .form-check-input'));

        expectedStages.forEach(expectedStage => {
          const index = actualStageDElems.findIndex(actualStageDElem => {
            return (actualStageDElem.nativeElement.id === expectedStage.gameName);
          });
          expect(index).toBeGreaterThan(-1, `Could not find ${expectedStage.gameName}`);
        });
      });

      it('should not show other stages in the rarely legal stages category', () => {
        /**/
        // console.log('=== SPEC - Hide other stages from rare legal category');
        const inputStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_RARE_EXCLUDE.allStages;
        const excludedStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_LEGAL_RARE_EXCLUDE.excludedStages;

        selectHostComp.stages = [...inputStages];
        selectHostFixture.detectChanges();

        const actualStageDElems: DebugElement[] = selectDElem.queryAll(By.css('form .tourney-legal-rare .form-check-input'));

        excludedStages.forEach(excludedStage => {
          const index = actualStageDElems.findIndex(actualStageDElem => {
            return (actualStageDElem.nativeElement.id === excludedStage.gameName);
          });
          expect(index).toEqual(-1, `${excludedStage.gameName} should not be in rare legal stages`);
        });

      });
    });

    it('should put a mix of tourney-legal stages in the appropriate tourney categories', () => {
      const providedStages: StageSelectInfo[] = STAGE_SELECTIONS.STAGE_SELECTIONS_TOURNEY.input;
      const expectedStages = {
        legalCommon: STAGE_SELECTIONS.STAGE_SELECTIONS_TOURNEY.output.legalCommon,
        legalUncommon: STAGE_SELECTIONS.STAGE_SELECTIONS_TOURNEY.output.legalUncommon,
        legalRare: STAGE_SELECTIONS.STAGE_SELECTIONS_TOURNEY.output.legalRare
      };

      selectHostComp.stages = [...providedStages];
      selectHostFixture.detectChanges();

      const actualStageDElems = {
        legalCommon: selectDElem.queryAll(By.css('form .tourney-legal-common .form-check-input')),
        legalUncommon: selectDElem.queryAll(By.css('form .tourney-legal-uncommon .form-check-input')),
        legalRare: selectDElem.queryAll(By.css('form .tourney-legal-rare .form-check-input'))
      };
      for (const legalType in expectedStages) {
        expectedStages[legalType].forEach(expectedStage => {
          const index = actualStageDElems[legalType].findIndex(actualStageDElem => {
            return (actualStageDElem.nativeElement.id === expectedStage.gameName);
          });
          
          expect(index).toBeGreaterThan(-1, `Could not find ${expectedStage.gameName} in ${legalType} section`);
        });
      }
    });

    xit('should appear if there are commonly legal stages present', () => {

    });

    xit('should appear if there are uncommonly legal stages present', () => {

    });

    xit('should appear if there are rarely legal stages present', () => {

    });

    xit('should appear if there are commonly and uncommonly legal stages present', () => {

    });

    xit('should appear if there are commonly and rarely legal stages present', () => {

    });

    xit('should appear if there are uncommonly and rarely legal stages present', () => {

    });

    xit('should not appear if there are no legal stages present', () => {

    });

  });

  // TODO: Categorization by Series

  // TODO: Sorted by Name Alphabet

  // TODO: Handle no stages loaded error
});
