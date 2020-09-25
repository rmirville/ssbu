import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StageComparatorGraphComponent as GraphComponent } from './stage-comparator-graph.component';

import { StageComparatorGraphHostMockComponent as HostComponent } from '../../../../shared/stage/components/mocks/stage-comparator-graph-host.mock.component';

import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';

import * as GRAPH from '../../../../shared/stage/models/mocks/stage-comparator-graph-component';

const SCALE: number = 860;

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

      const actualStageDElems: DebugElement[] = graphDElem.queryAll(By.css('.graph-rows .graph-row'));
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

      const actualValues: {stage: string, value: string}[] = graphDElem.queryAll(By.css('.graph-rows .graph-row')).map(dElem =>
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

    it('should display each stage\'s blastzone width values as a proportional pixel-width', () => {
      ///
      // console.groupCollapsed('=== SPEC - display blastzone')
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_BLASTZONE_VALUE.inputSet;
      const expectedValues: { stage: string, value: number }[] = GRAPH.DISPLAY_BLASTZONE_VALUE.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'blastzoneWidth';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = graphDElem.queryAll(By.css('.graph-rows .graph-row')).map(dElem => {
        const barWidth: number = dElem.query(By.css('.bar')).nativeElement.getClientRects()[0].width;
        const containerWidth: number = dElem.query(By.css('.bar-container')).nativeElement.getClientRects()[0].width;
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: Math.round(barWidth * (SCALE / containerWidth))
        };
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
      ///
      // console.groupEnd();
    });

    it('should encode each stage\'s blastzone width bin value as a class', () => {
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_BLASTZONE_BIN.inputSet;
      const expectedValues: { stage: string, value: string }[] = GRAPH.DISPLAY_BLASTZONE_BIN.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'blastzoneWidth';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: string }[] = graphDElem.queryAll(By.css('.graph-rows .graph-row')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: dElem.query(By.css('.bar')).nativeElement.className.split(' ').find(name => name.startsWith('bin-'))
        }
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s stage length values as a proportional pixel-width', () => {
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_STAGELENGTH_VALUE.inputSet;
      const expectedValues: { stage: string, value: number }[] = GRAPH.DISPLAY_STAGELENGTH_VALUE.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'stageLength';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = graphDElem.queryAll(By.css('.graph-rows .graph-row')).map(dElem => {
        const barWidth: number = dElem.query(By.css('.bar')).nativeElement.getClientRects()[0].width;
        const containerWidth: number = dElem.query(By.css('.bar-container')).nativeElement.getClientRects()[0].width;
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: Math.round(barWidth * (SCALE / containerWidth))
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

      hostComp.selectedDimension = 'stageLength';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: string }[] = graphDElem.queryAll(By.css('.graph-rows .graph-row')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: dElem.query(By.css('.bar')).nativeElement.className.split(' ').find(name => name.startsWith('bin-'))
        }
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s off-stage distance values as a proportional pixel-width', () => {
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_OFFSTAGE_VALUE.inputSet;
      const expectedValues: { stage: string, value: number }[] = GRAPH.DISPLAY_OFFSTAGE_VALUE.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'offStageDistance';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = graphDElem.queryAll(By.css('.graph-rows .graph-row')).map(dElem => {
        const barWidth: number = dElem.query(By.css('.bar')).nativeElement.getClientRects()[0].width;
        const containerWidth: number = dElem.query(By.css('.bar-container')).nativeElement.getClientRects()[0].width;
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: Math.round(barWidth * (SCALE / containerWidth))
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

      hostComp.selectedDimension = 'offStageDistance';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: string }[] = graphDElem.queryAll(By.css('.graph-rows .graph-row')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: dElem.query(By.css('.bar')).nativeElement.className.split(' ').find(name => name.startsWith('bin-'))
        }
      });

      for (const stage in expectedValues) {
        expect(actualValues).withContext(expectedValues[stage].stage).toContain(expectedValues[stage]);
      }
    });

    it('should display each stage\'s ceiling height value as a proportional pixel-width', () => {
      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_CEILING_VALUE.inputSet;
      const expectedValues: { stage: string, value: number }[] = GRAPH.DISPLAY_CEILING_VALUE.expectedValues;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'ceilingHeight';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: number }[] = graphDElem.queryAll(By.css('.graph-rows .graph-row')).map(dElem => {
        const barWidth: number = dElem.query(By.css('.bar')).nativeElement.getClientRects()[0].width;
        const containerWidth: number = dElem.query(By.css('.bar-container')).nativeElement.getClientRects()[0].width;
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: Math.round(barWidth * (SCALE / containerWidth))
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

      hostComp.selectedDimension = 'ceilingHeight';
      hostFixture.detectChanges();

      const actualValues: { stage: string, value: string }[] = graphDElem.queryAll(By.css('.graph-rows .graph-row')).map(dElem => {
        return {
          stage: dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')),
          value: dElem.query(By.css('.bar')).nativeElement.className.split(' ').find(name => name.startsWith('bin-'))
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
      // console.groupCollapsed('=== SPEC - sort by blastzone by default');

      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_SORT_DEFAULT.inputSet;
      const expectedClasses: string[] = GRAPH.DISPLAY_SORT_DEFAULT.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      const actualClasses: string[] = graphDElem.queryAll(By.css('.graph-rows .graph-row')).map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')));

      for (let i: number = 0; i < expectedClasses.length; i++) {
        expect(actualClasses[i]).withContext(`position ${i}`).toEqual(expectedClasses[i]);
      }
      
      ///
      // console.groupEnd();
    });
    
    it('should sort stages by blastzone width descending when showing blastzone widths', () => {
      ///
      // console.groupCollapsed('=== SPEC - sort by blastzone');

      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_SORT_BLASTZONE.inputSet;
      const expectedClasses: string[] = GRAPH.DISPLAY_SORT_BLASTZONE.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'blastzoneWidth';
      hostFixture.detectChanges();

      const actualClasses: string[] = graphDElem.queryAll(By.css('.graph-rows .graph-row')).map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')));

      for (let i: number = 0; i < expectedClasses.length; i++) {
        expect(actualClasses[i]).withContext(`position ${i}`).toEqual(expectedClasses[i]);
      }
      
      ///
      // console.groupEnd();
    });
    
    it('should sort stages by floor length descending when showing floor lengths', () => {
      ///
      // console.groupCollapsed('=== SPEC - sort by floor length');

      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_SORT_STAGELENGTH.inputSet;
      const expectedClasses: string[] = GRAPH.DISPLAY_SORT_STAGELENGTH.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'stageLength';
      hostFixture.detectChanges();

      const actualClasses: string[] = graphDElem.queryAll(By.css('.graph-rows .graph-row')).map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')));

      for (let i: number = 0; i < expectedClasses.length; i++) {
        expect(actualClasses[i]).withContext(`position ${i}`).toEqual(expectedClasses[i]);
      }
      
      ///
      // console.groupEnd();
    });
    
    it('should sort stages by off-stage distance descending when showing off-stage distances', () => {
      ///
      // console.groupCollapsed('=== SPEC - sort by off-stage distance');

      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_SORT_OFFSTAGE.inputSet;
      const expectedClasses: string[] = GRAPH.DISPLAY_SORT_OFFSTAGE.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'offStageDistance';
      hostFixture.detectChanges();

      const actualClasses: string[] = graphDElem.queryAll(By.css('.graph-rows .graph-row')).map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')));

      for (let i: number = 0; i < expectedClasses.length; i++) {
        expect(actualClasses[i]).withContext(`position ${i}`).toEqual(expectedClasses[i]);
      }
      
      ///
      // console.groupEnd();
    });
    
    it('should sort stages by ceiling height descending when showing ceiling heights', () => {
      ///
      // console.groupCollapsed('=== SPEC - sort by ceiling height');

      const inputSet: BinnedStageDimensionsSet = GRAPH.DISPLAY_SORT_CEILING.inputSet;
      const expectedClasses: string[] = GRAPH.DISPLAY_SORT_CEILING.expectedClasses;
      hostComp.binnedStageDimensionsSet = inputSet;
      hostFixture.detectChanges();

      hostComp.selectedDimension = 'ceilingHeight';
      hostFixture.detectChanges();

      const actualClasses: string[] = graphDElem.queryAll(By.css('.graph-rows .graph-row')).map(dElem => dElem.nativeElement.className.split(' ').find(name => name.startsWith('graph_')));

      for (let i: number = 0; i < expectedClasses.length; i++) {
        expect(actualClasses[i]).withContext(`position ${i}`).toEqual(expectedClasses[i]);
      }
      
      ///
      // console.groupEnd();
    });
  });
});
