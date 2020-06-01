import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StageComparatorGraphComponent as GraphComponent } from './stage-comparator-graph.component';

import { StageComparatorGraphHostMockComponent as HostComponent } from '../../../../shared/stage/components/mocks/stage-comparator-graph-host.mock.component';

import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';

import * as GRAPH from '../../../../shared/stage/models/mocks/stage-comparator-graph-component';

describe('StageComparatorGraphComponent', () => {
  let hostComp: HostComponent;
  let hostFixture: ComponentFixture<HostComponent>;
  let graphComp: GraphComponent;
  let graphDElem: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HostComponent,
        GraphComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(HostComponent);
    hostComp = hostFixture.componentInstance;
    graphDElem = hostFixture.debugElement.query(By.directive(GraphComponent));
    hostFixture.detectChanges();
    graphComp = graphDElem.componentInstance;
  });

  it('should create', () => {
    expect(graphComp).toBeTruthy();
  });

  describe('basic display', () => {
    it('should have a table row with a class for each stage prefixed by "graph_"', () => {
      ///
      // console.groupCollapsed('=== SPEC - display class');
      const inputSet: BinnedStageDimensionsSet = GRAPH.CLASS.inputSet;
      const expectedClasses: string[] = GRAPH.CLASS.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      ///
      // console.log(`hostComp.binnedStageDimensionsSet.bins: ${hostComp.binnedStageDimensionsSet.bins}`);
      hostFixture.detectChanges();

      ///
      // console.log(`graphComp.stageData.bins: ${graphComp.stageData.bins}`);
      // console.log(`graphComp.displayData.dimensions stages: ${graphComp.displayData.dimensions.length}`);

      const actualStageDElems: DebugElement[] = graphDElem.queryAll(By.css('tbody tr:not(.stats)'));
      const actualClasses: string[] = actualStageDElems.map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')));

      for (const expectedClass of expectedClasses) {
        expect(actualClasses).withContext(expectedClass).toContain(expectedClass);
      }
      ///
      // console.groupEnd();
    });

    it('should display each stage\'s name', () => {
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_NAME.inputSet;
      const expectedValues: {stage: string, value: string}[] = GRAPH.DISPLAY_NAME.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: {stage: string, value: string}[] = graphDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem =>
        {
          return {
            stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
            value: dElem.query(By.css('.name')).nativeElement.textContent.trim()
          };
        });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s abbreviation', () => {
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_ABBR.inputSet;
      const expectedValues: {stage: string, value: string}[] = GRAPH.DISPLAY_ABBR.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: string }[] = graphDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: dElem.query(By.css('.abbr')).nativeElement.textContent.trim()
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s blastzone width values as a pixel-width', () => {
      ///
      // console.groupCollapsed('=== SPEC - display blastzone')
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_BLASTZONE_VALUE.inputSet;
      const expectedValues: { stage: string, value: number }[] = GRAPH.DISPLAY_BLASTZONE_VALUE.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = graphDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: Math.round(dElem.query(By.css('.blastzone')).nativeElement.getClientRects()[0].width)
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
      ///
      console.groupEnd();
    });

    it('should encode each stage\'s blastzone width bin value as a class', () => {
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_BLASTZONE_BIN.inputSet;
      const expectedValues: { stage: string, value: string }[] = GRAPH.DISPLAY_BLASTZONE_BIN.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: string }[] = graphDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: dElem.query(By.css('.blastzone')).nativeElement.className.split(' ').find(name => name.startsWith('bin-'))
        }
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s stage length values as a pixel-width', () => {
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_STAGELENGTH_VALUE.inputSet;
      const expectedValues: { stage: string, value: number }[] = GRAPH.DISPLAY_STAGELENGTH_VALUE.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = graphDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: Math.round(dElem.query(By.css('.stagelength')).nativeElement.getClientRects()[0].width)
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should encode each stage\'s stage length bin value as a class', () => {
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_STAGELENGTH_BIN.inputSet;
      const expectedValues: { stage: string, value: string }[] = GRAPH.DISPLAY_STAGELENGTH_BIN.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: string }[] = graphDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: dElem.query(By.css('.stagelength')).nativeElement.className.split(' ').find(name => name.startsWith('bin-'))
        }
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s off-stage distance values as a pixel-width', () => {
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_OFFSTAGE_VALUE.inputSet;
      const expectedValues: { stage: string, value: number }[] = GRAPH.DISPLAY_OFFSTAGE_VALUE.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = graphDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: Math.round(dElem.query(By.css('.offstage')).nativeElement.getClientRects()[0].width)
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should encode each stage\'s off-stage distance bin value as a class', () => {
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_OFFSTAGE_BIN.inputSet;
      const expectedValues: { stage: string, value: string }[] = GRAPH.DISPLAY_OFFSTAGE_BIN.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: string }[] = graphDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: dElem.query(By.css('.offstage')).nativeElement.className.split(' ').find(name => name.startsWith('bin-'))
        }
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s ceiling height value as a pixel-width', () => {
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_CEILING_VALUE.inputSet;
      const expectedValues: { stage: string, value: number }[] = GRAPH.DISPLAY_CEILING_VALUE.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = graphDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: Math.round(dElem.query(By.css('.ceiling')).nativeElement.getClientRects()[0].width)
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should encode each stage\'s ceiling height bin value as a class', () => {
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_CEILING_BIN.inputSet;
      const expectedValues: { stage: string, value: string }[] = GRAPH.DISPLAY_CEILING_BIN.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: string }[] = graphDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: dElem.query(By.css('.ceiling')).nativeElement.className.split(' ').find(name => name.startsWith('bin-'))
        }
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

  });

  describe('sorting', () => {
    it('should sort stages by blastzone width descending by default', () => {
      ///
      // console.groupCollapsed('=== SPEC - sort by blastzone');

      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_SORT_DEFAULT.inputSet;
      const expectedClasses: string[] = GRAPH.DISPLAY_SORT_DEFAULT.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualClasses: string[] = graphDElem.queryAll(By.css('tbody tr:not(.stats)')).map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')));

      for (let i: number = 0; i < expectedClasses.length; i++) {
        expect(actualClasses[i]).withContext(`position ${i}`).toEqual(expectedClasses[i]);
      }
      
      ///
      // console.groupEnd();
    });
  });
});
