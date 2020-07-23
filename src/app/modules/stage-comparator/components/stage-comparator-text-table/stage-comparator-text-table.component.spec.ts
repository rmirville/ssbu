import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StageComparatorTextTableComponent as TextComponent } from './stage-comparator-text-table.component';

import { StageComparatorTextTableHostMockComponent as HostComponent } from '../../../../shared/stage/components/mocks/stage-comparator-text-table-host.mock.component';

import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';
import { StageDimensionsRange } from '../../../../shared/stage/models/stage-dimensions-range.model';

import * as TEXT from '../../../../shared/stage/models/mocks/stage-comparator-text-table-component';

describe('StageComparatorTextTableComponent', () => {
  let hostComp: HostComponent;
  let hostFixture: ComponentFixture<HostComponent>;
  let textComp: TextComponent;
  let textDElem: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HostComponent,
        TextComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(HostComponent);
    hostComp = hostFixture.componentInstance;
    textDElem = hostFixture.debugElement.query(By.directive(TextComponent));
    hostFixture.detectChanges();
    textComp = textDElem.componentInstance;
  });

  it('should create', () => {
    expect(textComp).toBeTruthy();
  });

  describe('basic display', () => {
    it('should have a table row with a class for each stage prefixed by "texttable_"', () => {
      ///
      // console.groupCollapsed('=== SPEC - display class');
      const inputSet: BinnedStageDimensionsSet = TEXT.CLASS.inputSet;
      const expectedClasses: string[] = TEXT.CLASS.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      ///
      // console.log(`hostComp.binnedStageDimensionsSet.bins: ${hostComp.binnedStageDimensionsSet.bins}`);
      hostFixture.detectChanges();

      ///
      // console.log(`textComp.stageData.bins: ${textComp.stageData.bins}`);
      // console.log(`textComp.displayData.dimensions stages: ${textComp.displayData.dimensions.length}`);

      const actualStageDElems: DebugElement[] = textDElem.queryAll(By.css('.ssbu-table .entry'));
      const actualClasses: string[] = actualStageDElems.map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('texttable_')));

      for (const expectedClass of expectedClasses) {
        expect(actualClasses).withContext(expectedClass).toContain(expectedClass);
      }
      ///
      // console.groupEnd();
    });

    it('should display each stage\'s name', () => {
      const inputSet: BinnedStageDimensionsSet = TEXT.DISPLAY_NAME.inputSet;
      const expectedValues: { stage: string, value: string }[] = TEXT.DISPLAY_NAME.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: string }[] = textDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('texttable_')),
          value: dElem.query(By.css('.name')).nativeElement.textContent.trim()
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s relative blastzone width', () => {
      const inputSet: BinnedStageDimensionsSet = TEXT.DISPLAY_BLASTZONE.inputSet;
      const expectedValues: { stage: string, value: string }[] = TEXT.DISPLAY_BLASTZONE.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'blastzoneWidth';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: string }[] = textDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('texttable_')),
          value: dElem.query(By.css('.value')).nativeElement.textContent.trim()
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s relative stage length', () => {
      const inputSet: BinnedStageDimensionsSet = TEXT.DISPLAY_STAGELENGTH.inputSet;
      const expectedValues: { stage: string, value: string }[] = TEXT.DISPLAY_STAGELENGTH.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'stageLength';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: string }[] = textDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('texttable_')),
          value: dElem.query(By.css('.value')).nativeElement.textContent.trim()
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s relative off-stage distance', () => {
      const inputSet: BinnedStageDimensionsSet = TEXT.DISPLAY_OFFSTAGE.inputSet;
      const expectedValues: { stage: string, value: string }[] = TEXT.DISPLAY_OFFSTAGE.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'offStageDistance';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: string }[] = textDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('texttable_')),
          value: dElem.query(By.css('.value')).nativeElement.textContent.trim()
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s relative ceiling height', () => {
      const inputSet: BinnedStageDimensionsSet = TEXT.DISPLAY_CEILING.inputSet;
      const expectedValues: { stage: string, value: string }[] = TEXT.DISPLAY_CEILING.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'ceilingHeight';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: string }[] = textDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('texttable_')),
          value: dElem.query(By.css('.value')).nativeElement.textContent.trim()
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    // TODO: Separate the tests for these
    it('should display the dimension ranges as integers', () => {
      ///
      // console.groupCollapsed('=== SPEC - display ranges');
      function testRanges(dimension: string) {
        ///
        // console.group('SPEC - testRanges()');
        hostComp.selectedDimension = dimension;
        hostFixture.detectChanges();

        const actualMin: number = textDElem.query(By.css(`.ssbu-table .stats .min`)).nativeElement.textContent.trim() * 1;
        const actualMax: number = textDElem.query(By.css(`.ssbu-table .stats .max`)).nativeElement.textContent.trim() * 1;
        const actualRange: number = textDElem.query(By.css(`.ssbu-table .stats .range`)).nativeElement.textContent.trim() * 1;

        ///
        // console.log(`tbody .stats .${attribute} .min: ${textDElem.query(By.css(`tbody .stats .${attribute} .min`)).nativeElement.textContent}`);
        // console.log(`tbody .stats .${attribute} .max: ${textDElem.query(By.css(`tbody .stats .${attribute} .max`)).nativeElement.textContent}`);
        // console.log(`tbody .stats .${attribute} .range: ${textDElem.query(By.css(`tbody .stats .${attribute} .range`)).nativeElement.textContent }`);
        expect(actualMin).withContext(`${dimension} min`).toEqual(expectedRanges[dimension].min);
        expect(actualMax).withContext(`${dimension} max`).toEqual(expectedRanges[dimension].max);
        expect(actualRange).withContext(`${dimension} range`).toEqual(expectedRanges[dimension].range);
        ///
        // console.groupEnd();
      }

      const inputSet: BinnedStageDimensionsSet = TEXT.DISPLAY_RANGES.inputSet;
      const expectedRanges: { [dimension: string]: StageDimensionsRange } = TEXT.DISPLAY_RANGES.expectedRanges;
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
      // console.groupCollapsed('=== SPEC - sort by blastzone');

      const inputSet: BinnedStageDimensionsSet = TEXT.DISPLAY_SORT_DEFAULT.inputSet;
      const expectedClasses: string[] = TEXT.DISPLAY_SORT_DEFAULT.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualClasses: string[] = textDElem.queryAll(By.css('.ssbu-table .entry')).map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('texttable_')));

      for (let i: number = 0; i < expectedClasses.length; i++) {
        expect(actualClasses[i]).withContext(`position ${i}`).toEqual(expectedClasses[i]);
      }
      
      ///
      // console.groupEnd();
    });
  });
});
