import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { StageSelectComponent } from './stage-select.component';

import { StageSelectHostMockComponent } from '../../stage/components/mocks/stage-select-host.mock.component';
import { StageSelectInfo } from '../../stage/models/stage-select-info.model';
import { STAGE_SELECTIONS_ONE } from '../../stage/models/mocks/stage-select-info';

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
    let expectedStages: StageSelectInfo[] = STAGE_SELECTIONS_ONE;
    selectHostComp.stages = [...expectedStages];
    expect(selectHostComp.stages.length).withContext('the number of stages should be the same').toEqual(expectedStages.length);
    expect(selectHostComp.stages).toEqual(expectedStages);
    
  })
  
  it('should have a stages property set to a provided value on init', () => {
    let expectedStages: StageSelectInfo[] = STAGE_SELECTIONS_ONE;
    selectHostComp.stages = [...expectedStages];
    /**/
    console.log(`SPEC - hostComponent stages set`);

    console.log(`SPEC - StageSelectHost::OnChanges() start.`);
    selectHostFixture.detectChanges();
    /**/
    console.log(`SPEC - StageSelectHost::OnChanges() done.`);

    console.log(`SPEC - Now checking state...`)
    console.log(`SPEC - expectedStages: ${JSON.stringify(expectedStages)}`);
    console.log(`SPEC - component.stages: ${JSON.stringify(selectComp.stages)}`);

    expect(selectComp.stages.length).withContext('the number of stages should be the same').toEqual(expectedStages.length);
    expect(selectComp.stages).toEqual(expectedStages);
  });

  it('should show a list of checkbox inputs', () => {
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS_ONE;

    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkInputDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check .form-check-input'));

    expect(checkInputDElems.length > 0).toEqual(true);
  });

  it('should show a list of checkbox labels', () => {
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS_ONE;

    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkLabelDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check .form-check-label'));

    expect(checkLabelDElems.length > 0).toEqual(true);
  });

  it('should show the same number of checkbox inputs as the stages provided', () => {
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS_ONE;
    
    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check'));
    
    // number of checkDElem's should equal
    expect(checkDElems.length).toEqual(expectedStages.length, 'Number of elements should match number of stages');
  });

  it(`should show a list of checkbox inputs with id's that match the provided stages' gameNames`, () => {
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS_ONE;

    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check'));
    const actualIDs = checkDElems.map(checkDElem => checkDElem.query(By.css('.form-check-input')).nativeElement.id);

    expect(actualIDs.length).toEqual(expectedStages.length, 'Number of inputs should match number of stages');
    expectedStages.forEach(expectedStage => {
      expect(actualIDs.includes(expectedStage.gameName)).toEqual(true, `no input with id '${expectedStage.gameName}'`);
    });
  });

  it(`should show a list of checkbox labels with for attributes that match the provided stages' gameNames`, () => {
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS_ONE;

    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check'));
    const actualLabelFors = checkDElems.map(checkDElem => checkDElem.query(By.css('.form-check-label')).nativeElement.getAttribute('for'));

    expect(actualLabelFors.length).toEqual(expectedStages.length, 'Number of labels should match number of stages');
    expectedStages.forEach(expectedStage => {
      expect(actualLabelFors.includes(expectedStage.gameName)).toEqual(true, `no label for attribute with value '${expectedStage.gameName}`);
    });
  });

  it(`should show a list of checkbox labels with texts that match the provided stages' names`, () => {
    const expectedStages: StageSelectInfo[] = STAGE_SELECTIONS_ONE;

    selectHostComp.stages = [...expectedStages];
    selectHostFixture.detectChanges();

    const checkDElems: DebugElement[] = selectDElem.queryAll(By.css('form .form-check'));
    const actualLabels = checkDElems.map(checkDElem => checkDElem.query(By.css('.form-check-label')).nativeElement.textContent);

    expect(actualLabels.length).toEqual(expectedStages.length, 'Number of labels should match number of stages');
    expectedStages.forEach(expectedStage => {
      expect(actualLabels.includes(expectedStage.name)).toEqual(true, `no label with text '${expectedStage.name}'`);
    });
  });

  xit('should show an error message if there no stages are loaded', () => {

  });

  // TODO: Categorization by Tourney Presence

  // TODO: Categorization by Series

  // TODO: Sorted by Name Alphabet
});
