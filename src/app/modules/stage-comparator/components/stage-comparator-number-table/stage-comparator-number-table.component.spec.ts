import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StageComparatorNumberTableComponent as NumberTableComponent } from './stage-comparator-number-table.component';

import { StageComparatorNumberTableHostMockComponent as HostComponent } from '../../../../shared/stage/components/mocks/stage-comparator-number-table-host.mock.component';

import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';
import { StageDimensionsRange } from '../../../../shared/stage/models/stage-dimensions-range.model';

import * as NUMBER_TABLE from '../../../../shared/stage/models/mocks/stage-comparator-number-table-component';

describe('NumberTableComponent', () => {
  let hostComp: HostComponent;
  let hostFixture: ComponentFixture<HostComponent>;
  let numComp: NumberTableComponent;
  let numDElem: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NumberTableComponent,
        HostComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(HostComponent);
    hostComp = hostFixture.componentInstance;
    numDElem = hostFixture.debugElement.query(By.directive(NumberTableComponent));
    hostFixture.detectChanges();
    numComp = numDElem.componentInstance;
  });

  it('should create', () => {
    expect(numComp).toBeTruthy();
  });

  describe('basic display', () => {
    it('should have a table row with a class for each stage prefixed by "numtable_"', () => {
      ///
      // console.groupCollapsed('=== SPEC - display class');
      const inputSet: BinnedStageDimensionsSet = NUMBER_TABLE.CLASS.inputSet;
      const expectedClasses: string[] = NUMBER_TABLE.CLASS.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      ///
      // console.log(`hostComp.binnedStageDimensionsSet.bins: ${hostComp.binnedStageDimensionsSet.bins}`);
      hostFixture.detectChanges();

      ///
      // console.log(`numComp.stageData.bins: ${numComp.stageData.bins}`);
      // console.log(`numComp.displayData.dimensions stages: ${numComp.displayData.dimensions.length}`);

      const actualStageDElems: DebugElement[] = numDElem.queryAll(By.css('tbody tr:not(.stats)'));
      const actualClasses: string[] = actualStageDElems.map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')));

      for (const expectedClass of expectedClasses) {
        expect(actualClasses).withContext(expectedClass).toContain(expectedClass);
      }
      ///
      // console.groupEnd();
    });
    it('should display each stage\'s name', () => {
      const inputSet: BinnedStageDimensionsSet = NUMBER_TABLE.DISPLAY_NAME.inputSet;
      const expectedValues: { stage: string, value:string }[] = NUMBER_TABLE.DISPLAY_NAME.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = numDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')),
          value: dElem.query(By.css('.name')).nativeElement.textContent.trim()
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s blastzone width values as integers', () => {
      const inputSet: BinnedStageDimensionsSet = NUMBER_TABLE.DISPLAY_BLASTZONE.inputSet;
      const expectedValues: { stage: string, value: number }[] = NUMBER_TABLE.DISPLAY_BLASTZONE.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: {stage: string, value: number}[] = numDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')),
          value: dElem.query(By.css('.blastzone')).nativeElement.textContent.trim() * 1
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s stage length values as integers', () => {
      const inputSet: BinnedStageDimensionsSet = NUMBER_TABLE.DISPLAY_STAGELENGTH.inputSet;
      const expectedValues: { stage: string, value: number }[] = NUMBER_TABLE.DISPLAY_STAGELENGTH.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = numDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')),
          value: dElem.query(By.css('.stagelength')).nativeElement.textContent.trim() * 1
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s off-stage distance values as integers', () => {
      const inputSet: BinnedStageDimensionsSet = NUMBER_TABLE.DISPLAY_OFFSTAGE.inputSet;
      const expectedValues: { stage: string, value: number }[] = NUMBER_TABLE.DISPLAY_OFFSTAGE.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = numDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')),
          value: dElem.query(By.css('.offstage')).nativeElement.textContent.trim() * 1
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s ceiling height values as integers', () => {
      const inputSet: BinnedStageDimensionsSet = NUMBER_TABLE.DISPLAY_CEILING.inputSet;
      const expectedValues: { stage: string, value: number }[] = NUMBER_TABLE.DISPLAY_CEILING.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = numDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')),
          value: dElem.query(By.css('.ceiling')).nativeElement.textContent.trim() * 1
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display the dimension ranges as integers', () => {
      ///
      // console.groupCollapsed('=== SPEC - display ranges');
      function testRanges(dimension: string, attribute: string) {
        ///
        // console.group('SPEC - testRanges()');
        const actualMin: number = numDElem.query(By.css(`tbody .stats .${attribute} .min`)).nativeElement.textContent.trim() * 1;
        const actualMax: number = numDElem.query(By.css(`tbody .stats .${attribute} .max`)).nativeElement.textContent.trim() * 1;
        const actualRange: number = numDElem.query(By.css(`tbody .stats .${attribute} .range`)).nativeElement.textContent.trim() * 1;

        ///
        // console.log(`tbody .stats .${attribute} .min: ${numDElem.query(By.css(`tbody .stats .${attribute} .min`)).nativeElement.textContent}`);
        // console.log(`tbody .stats .${attribute} .max: ${numDElem.query(By.css(`tbody .stats .${attribute} .max`)).nativeElement.textContent}`);
        // console.log(`tbody .stats .${attribute} .range: ${numDElem.query(By.css(`tbody .stats .${attribute} .range`)).nativeElement.textContent }`);
        expect(actualMin).withContext(`${dimension} min`).toEqual(expectedRanges[dimension].min);
        expect(actualMax).withContext(`${dimension} max`).toEqual(expectedRanges[dimension].max);
        expect(actualRange).withContext(`${dimension} range`).toEqual(expectedRanges[dimension].range);
        ///
        // console.groupEnd();
      }

      const inputSet: BinnedStageDimensionsSet = NUMBER_TABLE.DISPLAY_RANGES.inputSet;
      const expectedRanges: { [dimension: string]: StageDimensionsRange } = NUMBER_TABLE.DISPLAY_RANGES.expectedRanges;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      testRanges('blastzoneWidth', 'blastzone');
      testRanges('stageLength', 'stagelength');
      testRanges('offStageDistance', 'offstage');
      testRanges('ceilingHeight', 'ceiling');
      ///
      // console.groupEnd();
    });
  });

  describe('error handling', () => {

  });
});
