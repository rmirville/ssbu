import { DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
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

  beforeEach(waitForAsync(() => {
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

      const actualStageDElems: DebugElement[] = numDElem.queryAll(By.css('.ssbu-table .entry'));
      const actualClasses: string[] = actualStageDElems.map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')));

      for (const expectedClass of expectedClasses) {
        expect(actualClasses).withContext(expectedClass).toContain(expectedClass);
      }
      ///
      // console.groupEnd();
    });
    it('should display each stage\'s name', () => {
      const inputSet: BinnedStageDimensionsSet = NUMBER_TABLE.DISPLAY_NAME.inputSet;
      const expectedValues: { stage: string, value: string }[] = NUMBER_TABLE.DISPLAY_NAME.expectedValues;
      const dimensions: string[] = ['blastzoneWidth', 'stageLength', 'offStageDistance', 'ceilingHeight'];

      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      for (const dimension of dimensions) {
        hostComp.selectedDimension = dimension;
        hostFixture.detectChanges();

        const actualValues: { stage: string, value: string }[] = numDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => {
          return {
            stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')),
            value: dElem.query(By.css('.name')).nativeElement.textContent.trim()
          };
        });

        for (const stage in expectedValues) {
          expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
        }
      }
    });

    it('should display each stage\'s blastzone width values as integers', () => {
      const inputSet: BinnedStageDimensionsSet = NUMBER_TABLE.DISPLAY_BLASTZONE.inputSet;
      const expectedValues: { stage: string, value: number }[] = NUMBER_TABLE.DISPLAY_BLASTZONE.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'blastzoneWidth';
      hostFixture.detectChanges();

      const actualValues: {stage: string, value: number}[] = numDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')),
          value: dElem.query(By.css('.value')).nativeElement.textContent.trim() * 1
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

      hostComp.selectedDimension = 'stageLength';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = numDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')),
          value: dElem.query(By.css('.value')).nativeElement.textContent.trim() * 1
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

      hostComp.selectedDimension = 'offStageDistance';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = numDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')),
          value: dElem.query(By.css('.value')).nativeElement.textContent.trim() * 1
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

      hostComp.selectedDimension = 'ceilingHeight';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = numDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')),
          value: dElem.query(By.css('.value')).nativeElement.textContent.trim() * 1
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display the dimension ranges as integers', () => {
      ///
      // console.groupCollapsed('=== SPEC - display ranges');
      function testRanges(dimension: string) {
        ///
        // console.group('SPEC - testRanges()');
        hostComp.selectedDimension = dimension;
        hostFixture.detectChanges();

        const actualMin: number = numDElem.query(By.css(`.ssbu-table .stats .min`)).nativeElement.textContent.trim() * 1;
        const actualMax: number = numDElem.query(By.css(`.ssbu-table .stats .max`)).nativeElement.textContent.trim() * 1;
        const actualRange: number = numDElem.query(By.css(`.ssbu-table .stats .range`)).nativeElement.textContent.trim() * 1;

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

      testRanges('blastzoneWidth');
      testRanges('stageLength');
      testRanges('offStageDistance');
      testRanges('ceilingHeight');
      ///
      // console.groupEnd();
    });
  });

  describe('sorting', () => {
    it('should sort stages by blastzone width descending by default', () => {
      ///
      // console.groupCollapsed('=== SPEC - sort by blastzone by default');

      const inputSet: BinnedStageDimensionsSet = NUMBER_TABLE.DISPLAY_SORT_DEFAULT.inputSet;
      const expectedClasses: string[] = NUMBER_TABLE.DISPLAY_SORT_DEFAULT.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualClasses: string[] = numDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')));

      for (let i: number = 0; i < expectedClasses.length; i++) {
        expect(actualClasses[i]).withContext(`position ${i}`).toEqual(expectedClasses[i]);
      }

      ///
      // console.groupEnd();
    });

    it('should sort stages by blastzone width descending when showing blastzone widths', () => {
      ///
      // console.groupCollapsed('=== SPEC - sort by blastzone');

      const inputSet: BinnedStageDimensionsSet = NUMBER_TABLE.DISPLAY_SORT_BLASTZONE.inputSet;
      const expectedClasses: string[] = NUMBER_TABLE.DISPLAY_SORT_BLASTZONE.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'blastzoneWidth';
      hostFixture.detectChanges();

      const actualClasses: string[] = numDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')));

      for (let i: number = 0; i < expectedClasses.length; i++) {
        expect(actualClasses[i]).withContext(`position ${i}`).toEqual(expectedClasses[i]);
      }

      ///
      // console.groupEnd();
    });

    it('should sort stages by floor length descending when showing floor lengths', () => {
      ///
      // console.groupCollapsed('=== SPEC - sort by floor length');

      const inputSet: BinnedStageDimensionsSet = NUMBER_TABLE.DISPLAY_SORT_STAGELENGTH.inputSet;
      const expectedClasses: string[] = NUMBER_TABLE.DISPLAY_SORT_STAGELENGTH.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'stageLength';
      hostFixture.detectChanges();

      const actualClasses: string[] = numDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')));

      for (let i: number = 0; i < expectedClasses.length; i++) {
        expect(actualClasses[i]).withContext(`position ${i}`).toEqual(expectedClasses[i]);
      }

      ///
      // console.groupEnd();
    });

    it('should sort stages by off-stage distance descending when showing off-stage distances', () => {
      ///
      // console.groupCollapsed('=== SPEC - sort by off-stage distance');

      const inputSet: BinnedStageDimensionsSet = NUMBER_TABLE.DISPLAY_SORT_OFFSTAGE.inputSet;
      const expectedClasses: string[] = NUMBER_TABLE.DISPLAY_SORT_OFFSTAGE.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'offStageDistance';
      hostFixture.detectChanges();

      const actualClasses: string[] = numDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')));

      for (let i: number = 0; i < expectedClasses.length; i++) {
        expect(actualClasses[i]).withContext(`position ${i}`).toEqual(expectedClasses[i]);
      }

      ///
      // console.groupEnd();
    });

    it('should sort stages by ceiling height descending when showing ceiling heights', () => {
      ///
      // console.groupCollapsed('=== SPEC - sort by ceiling height');

      const inputSet: BinnedStageDimensionsSet = NUMBER_TABLE.DISPLAY_SORT_CEILING.inputSet;
      const expectedClasses: string[] = NUMBER_TABLE.DISPLAY_SORT_CEILING.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'ceilingHeight';
      hostFixture.detectChanges();

      const actualClasses: string[] = numDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('numtable_')));

      for (let i: number = 0; i < expectedClasses.length; i++) {
        expect(actualClasses[i]).withContext(`position ${i}`).toEqual(expectedClasses[i]);
      }

      ///
      // console.groupEnd();
    });
  });

  describe('error handling', () => {

  });
});
