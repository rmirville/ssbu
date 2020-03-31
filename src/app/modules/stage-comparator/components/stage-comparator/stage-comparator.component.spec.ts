import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';

import { asyncData } from '../../../../testing/async-observable-helpers';

import { StageComparatorComponent } from './stage-comparator.component';

import { DataNotFoundError } from '../../../../shared/errors/data-not-found-error.model';
import { DatasetNotFoundError } from '../../../../shared/errors/dataset-not-found-error.model';

import { StageSelectMockComponent } from '../../../../shared/stage/components/mocks/stage-select.mock.component';
import { StageComparatorGraphMockComponent } from '../../../../shared/stage/components/mocks/stage-comparator-graph.mock.component';
import { StageComparatorTextTableMockComponent } from '../../../../shared/stage/components/mocks/stage-comparator-text-table.mock.component';
import { StageComparatorNumberTableMockComponent } from '../../../../shared/stage/components/mocks/stage-comparator-number-table.mock.component';

import { StageDimensionsService } from '../../../../shared/stage/services/stage-dimensions.service';
import { StagePieceMapService } from '../../../../shared/stage/services/stage-piece-map.service';

import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';
import { StageDimensionsSet } from '../../../../shared/stage/models/stage-dimensions-set.model';
import { StageSelectInfo } from '../../../../shared/stage/models/stage-select-info.model';

import { STAGES_ONE } from '../../../../shared/stage/models/mocks/stages';
import * as STAGE_SELECTIONS from '../../../../shared/stage/models/mocks/stage-select-info';
import * as STAGE_DIMENSIONS_SET from '../../../../shared/stage/models/mocks/stage-dimensions-set';
import * as STAGE_COMPARATOR_CMP from '../../../../shared/stage/models/mocks/stage-comparator-component';
import * as PIECE_MAPS from '../../../../shared/stage/models/mocks/stage-piece-map';

describe('StageComparatorComponent', () => {
  let comparator: StageComparatorComponent;
  let fixture: ComponentFixture<StageComparatorComponent>;
  let mocks: {
    select: {
      comp: StageSelectMockComponent,
      dElem: DebugElement,
      fixture: ComponentFixture<StageSelectMockComponent>
    },
    graph: {
      comp: StageComparatorGraphMockComponent,
      dElem: DebugElement,
      fixture: ComponentFixture<StageComparatorGraphMockComponent>
    },
    text: {
      comp: StageComparatorTextTableMockComponent,
      dElem: DebugElement,
      fixture: ComponentFixture<StageComparatorTextTableMockComponent>
    },
    number: {
      comp: StageComparatorNumberTableMockComponent,
      dElem: DebugElement,
      fixture: ComponentFixture<StageComparatorNumberTableMockComponent>
    }
  };
  let activatedRouteStub: Partial<ActivatedRoute>;
  let dElem: DebugElement;
  let stageDimensionsSpy: { getDimensionsFull: jasmine.Spy, getDimensionsBinned: jasmine.Spy };
  let stagePieceMapStub: Partial<StagePieceMapService>;

  beforeEach(async(() => {
    activatedRouteStub = {
      data: Observable.create((observer) => {
        observer.next({stageData: {
          stages: STAGES_ONE,
          dimensionsFull: STAGE_DIMENSIONS_SET.DIMENSIONS_SET_ONE,
          stageSelectInfo: STAGE_SELECTIONS.ONE
        }});
        observer.complete();
      })
    };
    stageDimensionsSpy = jasmine.createSpyObj('StageDimensionsService', ['getDimensionsFull', 'getDimensionsBinned']);
    stagePieceMapStub = {
      getMaps: function(mapSetName: string) {
        return asyncData(PIECE_MAPS.STAGE_COMPARATOR);
      }
    };
    TestBed.configureTestingModule({
      declarations: [
        StageComparatorComponent,
        StageSelectMockComponent,
        StageComparatorGraphMockComponent,
        StageComparatorTextTableMockComponent,
        StageComparatorNumberTableMockComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub
        },
        {
          provide: StageDimensionsService,
          useValue: stageDimensionsSpy
        },
        {
          provide: StagePieceMapService,
          useValue: stagePieceMapStub
        }
      ],
      imports: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageComparatorComponent);
    mocks = {
      select: {
        comp: null,
        dElem: null,
        fixture: TestBed.createComponent(StageSelectMockComponent)
      },
      graph: {
        comp: null,
        dElem: null,
        fixture: TestBed.createComponent(StageComparatorGraphMockComponent)
      },
      text: {
        comp: null,
        dElem: null,
        fixture: TestBed.createComponent(StageComparatorTextTableMockComponent)
      },
      number: {
        comp: null,
        dElem: null,
        fixture: TestBed.createComponent(StageComparatorNumberTableMockComponent)
      }
    };
    comparator = fixture.componentInstance;
    fixture.detectChanges();

    dElem = fixture.debugElement;
  });

  it('should create', () => {
    expect(comparator).toBeTruthy();
  });

  it('should have a view property set to graph on init', () => {
    expect(comparator.view).toEqual('graph');
  });

  it('should have a stages property set to the stages provided by the ActivatedRoute on init', () => {
    expect(comparator.stages).toEqual(STAGES_ONE);
  });

  it('should have a stageSelectInfo property set to the classified stages provided by the ActivatedRoute on init', () => {
    expect(comparator.stageSelectInfo).toEqual(STAGE_SELECTIONS.ONE);
  });

  it('should have a fullDimensionsSet property set to the DimensionsSet provided by the ActivatedRoute on init', () => {
    expect(comparator.stageDimensionsSet).toEqual(STAGE_DIMENSIONS_SET.DIMENSIONS_SET_ONE);
  });

  describe('setView()', () => {

    it(`should change the view property to 'text' when given 'text'`, () => {
      comparator.setView('text');
      expect(comparator.view).toEqual('text');
    });

    it(`should change the view property to 'number' when given 'number'`, () => {
      comparator.setView('number');
      expect(comparator.view).toEqual('number');
    });

    it(`should change the view property to 'graph' when given 'graph'`, () => {
      comparator.setView('graph');
      expect(comparator.view).toEqual('graph');
    });

    it(`should change the view property to 'graph' when given 'graph', after view was another value`, () => {
      comparator.setView('number');
      comparator.setView('graph');
      expect(comparator.view).toEqual('graph');
    });

    it(`should not change the view property for string values that aren't 'graph', 'text' or 'number'`, () => {
      comparator.setView('food');
      expect(comparator.view).toEqual('graph');
    });

    it(`should not change the view property for blank string values`, () => {
      comparator.setView('');
      expect(comparator.view).toEqual('graph');
    });

  });

  describe('StageSelectComponent::submitSelection event handling', () => {

    it('should call getStats()', () => {
      /**/
      // console.groupCollapsed('=== SPEC - submitSelection - call getStats() ===')
      let getStatsSpy: jasmine.Spy = spyOn(comparator, 'getStats').and.stub();

      mocks.select.comp = dElem.query(By.css('ssbu-stage-select')).componentInstance;
      mocks.select.comp.submitSelection.emit(['ZTqzLekxtt','OeqGT2BfYF']);
      fixture.detectChanges();

      expect(getStatsSpy).toHaveBeenCalled();
      /**/
      // console.groupEnd();
    });

    describe('getStats()', () => {

      it('should call getDimensionsBinned()', async(() => {
        /**/
        // console.groupCollapsed('=== SPEC - getStats - call getDimensionsBinned() ===');
        const inputGameNames: string[] = STAGE_COMPARATOR_CMP.GETSTATS_CALLBINNED.inputGameNames;
        const expectedData: BinnedStageDimensionsSet = STAGE_COMPARATOR_CMP.GETSTATS_CALLBINNED.expectedData;
        stageDimensionsSpy.getDimensionsBinned.and.returnValue(asyncData(expectedData));
        comparator.getStats(inputGameNames);

        fixture.whenStable().then(() => {
          fixture.detectChanges();

          expect(stageDimensionsSpy.getDimensionsBinned).toHaveBeenCalled();
          /**/
          // console.groupEnd();
        });
      }));

      it('should send a BinnedStageDimensionsSet to the number table component', async(() => {
        /**/
        // console.groupCollapsed('=== SPEC - getStats - send data to number table ===');
        const inputGameNames: string[] = STAGE_COMPARATOR_CMP.GETSTATS_NUMBER.inputGameNames;
        const expectedData: BinnedStageDimensionsSet = STAGE_COMPARATOR_CMP.GETSTATS_NUMBER.expectedData;
        stageDimensionsSpy.getDimensionsBinned.and.returnValue(asyncData(expectedData));

        comparator.view = 'number';
        fixture.detectChanges();

        comparator.getStats(inputGameNames);

        fixture.whenStable().then(() => {
          fixture.detectChanges();

          mocks.number.comp = dElem.query(By.css('ssbu-stage-comparator-number-table')).componentInstance;
          expect(mocks.number.comp.stageData).toEqual(expectedData);
          /**/
          // console.groupEnd();
        });
      }));

      it('should send a BinnedStageDimensionsSet to the number table when the table is available', async(() => {
        /**/
        // console.groupCollapsed('=== SPEC - getStats - send data to number table when available ===');
        const inputGameNames: string[] = STAGE_COMPARATOR_CMP.GETSTATS_NUMBER.inputGameNames;
        const expectedData: BinnedStageDimensionsSet = STAGE_COMPARATOR_CMP.GETSTATS_NUMBER.expectedData;
        stageDimensionsSpy.getDimensionsBinned.and.returnValue(asyncData(expectedData));

        comparator.view = 'graph';
        fixture.detectChanges();

        comparator.getStats(inputGameNames);

        fixture.whenStable().then(() => {
          fixture.detectChanges();

          comparator.view = 'number';
          fixture.detectChanges();

          mocks.number.comp = dElem.query(By.css('ssbu-stage-comparator-number-table')).componentInstance;
          expect(mocks.number.comp.stageData).toEqual(expectedData);
          /**/
          // console.groupEnd();
        });
      }));

      it('should send a BinnedStageDimensionsSet to the text table component', async(() => {
        /**/
        // console.groupCollapsed('=== SPEC - getStats - send data to text table ===');
        const inputGameNames: string[] = STAGE_COMPARATOR_CMP.GETSTATS_TEXT.inputGameNames;
        const expectedData: BinnedStageDimensionsSet = STAGE_COMPARATOR_CMP.GETSTATS_TEXT.expectedData;
        stageDimensionsSpy.getDimensionsBinned.and.returnValue(asyncData(expectedData));

        comparator.view = 'text';
        comparator.getStats(inputGameNames);

        fixture.whenStable().then(() => {
          fixture.detectChanges();

          mocks.text.comp = dElem.query(By.css('ssbu-stage-comparator-text-table')).componentInstance;
          expect(mocks.text.comp.stageData).toEqual(expectedData);
          /**/
          // console.groupEnd();
        });
      }));

      it('should send a BinnedStageDimensionsSet to the text table when the table is available', async(() => {
        /**/
        // console.groupCollapsed('=== SPEC - getStats - send data to text table when available ===');
        const inputGameNames: string[] = STAGE_COMPARATOR_CMP.GETSTATS_TEXT.inputGameNames;
        const expectedData: BinnedStageDimensionsSet = STAGE_COMPARATOR_CMP.GETSTATS_TEXT.expectedData;
        stageDimensionsSpy.getDimensionsBinned.and.returnValue(asyncData(expectedData));

        comparator.view = 'graph';
        fixture.detectChanges();

        comparator.getStats(inputGameNames);

        fixture.whenStable().then(() => {
          fixture.detectChanges();

          comparator.view = 'text';
          fixture.detectChanges();

          mocks.text.comp = dElem.query(By.css('ssbu-stage-comparator-text-table')).componentInstance;
          expect(mocks.text.comp.stageData).toEqual(expectedData);
          /**/
          // console.groupEnd();
        });
      }));

      it('should send a BinnedStageDimensionsSet to the graph component', async(() => {
        /**/
        // console.groupCollapsed('=== SPEC - getStats - send data to graph ===');
        const inputGameNames: string[] = STAGE_COMPARATOR_CMP.GETSTATS_GRAPH.inputGameNames;
        const expectedData: BinnedStageDimensionsSet = STAGE_COMPARATOR_CMP.GETSTATS_GRAPH.expectedData;
        stageDimensionsSpy.getDimensionsBinned.and.returnValue(asyncData(expectedData));

        comparator.view = 'graph';
        comparator.getStats(inputGameNames);

        fixture.whenStable().then(() => {
          fixture.detectChanges();

          mocks.graph.comp = dElem.query(By.css('ssbu-stage-comparator-graph')).componentInstance;
          expect(mocks.graph.comp.stageData).toEqual(expectedData);
          /**/
          // console.groupEnd();
        });
      }));

      it('should send a BinnedStageDimensionsSet to the graph when the graph is available', async(() => {
        /**/
        // console.groupCollapsed('=== SPEC - getStats - send data to graph when available ===');
        const inputGameNames: string[] = STAGE_COMPARATOR_CMP.GETSTATS_GRAPH.inputGameNames;
        const expectedData: BinnedStageDimensionsSet = STAGE_COMPARATOR_CMP.GETSTATS_GRAPH.expectedData;
        stageDimensionsSpy.getDimensionsBinned.and.returnValue(asyncData(expectedData));

        comparator.view = 'number';
        fixture.detectChanges();

        comparator.getStats(inputGameNames);

        fixture.whenStable().then(() => {
          fixture.detectChanges();

          comparator.view = 'graph';
          fixture.detectChanges();

          mocks.text.comp = dElem.query(By.css('ssbu-stage-comparator-graph')).componentInstance;
          expect(mocks.text.comp.stageData).toEqual(expectedData);
          /**/
          // console.groupEnd();
        });
      }));

      it('should refuse to update the view components when an empty set is received', async(() => {
        /**/
        // console.groupCollapsed('=== SPEC - getStats - empty set -> no change ===');
        const inputGameNames: string[] = STAGE_COMPARATOR_CMP.GETSTATS_EMPTY.inputGameNames;
        const emptyGameNames: string[] = [];
        const expectedData: BinnedStageDimensionsSet = STAGE_COMPARATOR_CMP.GETSTATS_EMPTY.expectedData;
        stageDimensionsSpy.getDimensionsBinned.and.returnValues(asyncData(expectedData), throwError(new DataNotFoundError()));

        comparator.view = 'graph';
        comparator.getStats(inputGameNames);

        fixture.whenStable().then(() => {
          fixture.detectChanges();

          comparator.getStats(emptyGameNames);

          fixture.whenStable().then(() => {
            fixture.detectChanges();
            mocks.graph.comp = dElem.query(By.css('ssbu-stage-comparator-graph')).componentInstance;
            expect(mocks.graph.comp.stageData).toEqual(expectedData);
            /**/
            // console.groupEnd();
          });
        });
      }));

      it('should not call getDimensionsBinned when an empty set is received', async(() => {
        /**/
        // console.groupCollapsed('=== SPEC - getStats - empty set - no call to getDimensionsBinned ===');
        const emptyGameNames: string[] = [];

        comparator.view = 'graph';
        comparator.getStats(emptyGameNames);

        fixture.whenStable().then(() => {
          fixture.detectChanges();

          expect(stageDimensionsSpy.getDimensionsBinned).toHaveBeenCalledTimes(0);
          /**/
          // console.groupEnd();
        });
      }));

      it('should call StagePieceMapService::getMaps() if it gets a DatasetNotFoundError from getDimensionsBinned()', async(() => {
        let pieceMapSpy: { getMaps: jasmine.Spy } = jasmine.createSpyObj('StagePieceMapService', ['getMaps']);
        TestBed.resetTestingModule();

        TestBed.configureTestingModule({
          declarations: [
            StageComparatorComponent,
            StageSelectMockComponent,
            StageComparatorGraphMockComponent,
            StageComparatorTextTableMockComponent,
            StageComparatorNumberTableMockComponent
          ],
          providers: [
            {
              provide: ActivatedRoute,
              useValue: activatedRouteStub
            },
            {
              provide: StageDimensionsService,
              useValue: stageDimensionsSpy
            },
            {
              provide: StagePieceMapService,
              useValue: pieceMapSpy
            }
          ],
          imports: []
        }).compileComponents();
        fixture = TestBed.createComponent(StageComparatorComponent);
        comparator = fixture.componentInstance;
        fixture.detectChanges();

        /**/
        // console.groupCollapsed('=== SPEC - getStats - call getMaps on DatasetNotFoundError ===');
        const inputGameNames: string[] = STAGE_COMPARATOR_CMP.GETSTATS_SETNOTFOUND.inputGameNames;
        const binnedData: BinnedStageDimensionsSet = STAGE_COMPARATOR_CMP.GETSTATS_SETNOTFOUND.binnedData;
        const dimensionsData: StageDimensionsSet = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
        pieceMapSpy.getMaps.and.returnValue(asyncData(PIECE_MAPS.STAGE_COMPARATOR));
        stageDimensionsSpy.getDimensionsFull.and.returnValue(asyncData(dimensionsData));
        stageDimensionsSpy.getDimensionsBinned.and.returnValues(throwError(new DatasetNotFoundError()), asyncData(binnedData));

        comparator.view = 'graph';
        comparator.getStats(inputGameNames);
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(pieceMapSpy.getMaps).toHaveBeenCalled();
          /**/
          // console.groupEnd();
        });
      }));

      it('should call StageDimensionsService::getDimensionsFull() if it gets a DatasetNotFoundError from getDimensionsBinned()', async(() => {
        /**/
        // console.groupCollapsed('=== SPEC - getStats - call getDimensionsFull on DatasetNotFoundError ===');
        const inputGameNames: string[] = STAGE_COMPARATOR_CMP.GETSTATS_SETNOTFOUND.inputGameNames;
        const binnedData: BinnedStageDimensionsSet = STAGE_COMPARATOR_CMP.GETSTATS_SETNOTFOUND.binnedData;
        const dimensionsData: StageDimensionsSet = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
        stageDimensionsSpy.getDimensionsFull.and.returnValue(asyncData(dimensionsData));
        stageDimensionsSpy.getDimensionsBinned.and.returnValues(throwError(new DatasetNotFoundError()), asyncData(binnedData));

        comparator.view = 'graph';
        comparator.getStats(inputGameNames);
        fixture.whenStable().then(() => {
          fixture.detectChanges();

          expect(stageDimensionsSpy.getDimensionsFull).toHaveBeenCalled();
          /**/
          // console.groupEnd();
        });
      }));

      it('should still be able to get data if it gets a DatasetNotFoundError from getDimensionsBinned()', async(() => {
        /**/
        // console.groupCollapsed('=== SPEC - getStats - get data on DatasetNotFound ===');
        const inputGameNames: string[] = STAGE_COMPARATOR_CMP.GETSTATS_SETNOTFOUND.inputGameNames;
        const binnedData: BinnedStageDimensionsSet = STAGE_COMPARATOR_CMP.GETSTATS_SETNOTFOUND.binnedData;
        const dimensionsData: StageDimensionsSet = STAGE_DIMENSIONS_SET.FULL_SIMPLE;
        stageDimensionsSpy.getDimensionsFull.and.returnValue(asyncData(dimensionsData));
        stageDimensionsSpy.getDimensionsBinned.and.returnValues(throwError(new DatasetNotFoundError()), asyncData(binnedData));

        comparator.view = 'graph';
        comparator.getStats(inputGameNames);
        fixture.whenStable().then(() => {
          /**/
          // console.group('SPEC - whenStable().then()');
          fixture.detectChanges();
          expect(comparator.binnedStageDimensionsSet).toEqual(binnedData);
          /**/
          // console.groupEnd();
        });
      }));

      xit('should refuse to update the view components if it gets a DataNotFoundError from getDimensionsBinned()');
      xit('should tell the user to refresh the page if it gets a DataNotFoundError from getDimensionsBinned()');
    });
  });

  describe('template', () => {

    it(`should show the stage select component`, () => {
      /**/
      // console.group('SPEC - Show StageSelectComponent');
      let expectedContent: string = mocks.select.fixture.nativeElement.textContent;
      /**/
      // console.log(`expectedContent: ${expectedContent}`);
      mocks.select.dElem = dElem.query(By.css('ssbu-stage-select'));
      /**/
      // console.log(`selectDElem: ${JSON.stringify(selectDElem.nativeElement)}`);
      let actualContent: string = mocks.select.dElem.nativeElement.textContent;
      /**/
      // console.log(`selectDElem.textContent: ${JSON.stringify(selectDElem.nativeElement.textContent)}`);
      // console.log(`actualContent: ${actualContent}`);
      expect(actualContent).toEqual(expectedContent);
      /**/
      // console.groupEnd();
    });

    it('should provide the stage selection from the ActivatedRoute to the stage select component', () => {
      /**/
      // console.group('SPEC - Send stage select info to StageSelectComponent');
      mocks.select.dElem = dElem.query(By.css('ssbu-stage-select'));
      /**/
      // console.log(`selectDElem: ${JSON.stringify(selectDElem.nativeElement)}`);
      mocks.select.comp = mocks.select.dElem.componentInstance;
      /**/
      // console.log(`selectComp: ${JSON.stringify(selectComp)}`);
      // console.log(`selectComp.stages: ${JSON.stringify(Object.keys(selectComp))}`);
      let actualStages: StageSelectInfo[] = mocks.select.comp.stages;

      expect(actualStages).toEqual(STAGE_SELECTIONS.ONE);
      /**/
      // console.groupEnd();
    });
    
    describe('default view', () => {

      it(`should show the graph component by default`, () => {
        let expectedContent: string = mocks.graph.fixture.nativeElement.textContent;
        mocks.graph.dElem = dElem.query(By.css('ssbu-stage-comparator-graph'));
        let actualContent: string = mocks.graph.dElem.nativeElement.textContent;
        expect(actualContent).toEqual(expectedContent);
      });

      it(`should not show the text table component by default`, () => {
        mocks.text.dElem = dElem.query(By.css('ssbu-stage-comparator-text-table'));
        expect(mocks.text.dElem).toBeNull();
      });

      it(`should not show the number table component by default`, () => {
        mocks.number.dElem = dElem.query(By.css('ssbu-stage-comparator-number-table'));
        expect(mocks.number.dElem).toBeNull();
      });

      it(`should have a graph button with the 'active' class`, () => {
        let graphNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(1) a'));
        expect(graphNavDElem.nativeElement.classList.contains('active')).toBe(true);
      });

      it(`should have a text button without the 'active' class`, () => {
        let textNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(2) a'));
        expect(textNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

      it(`should have a numbers button without the 'active' class`, () => {
        let numNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(3) a'));
        expect(numNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

    });

    describe('graph view', () => {

      beforeEach(() => {
        comparator.setView('text');
        comparator.setView('graph');
        fixture.detectChanges();
      });

      it(`should show the graph component`, () => {
        mocks.graph.dElem = dElem.query(By.css('ssbu-stage-comparator-graph'));
        let expectedContent: string = mocks.graph.fixture.nativeElement.textContent;
        let actualContent: string = mocks.graph.dElem.nativeElement.textContent;
        expect(actualContent).toEqual(expectedContent);
      });

      it(`should not show the text table component`, () => {
        mocks.text.dElem = dElem.query(By.css('ssbu-stage-comparator-text-table'));
        expect(mocks.text.dElem).toBeNull();
      });

      it(`should not show the number table component`, () => {
        mocks.number.dElem = dElem.query(By.css('ssbu-stage-comparator-number-table'));
        expect(mocks.number.dElem).toBeNull();
      });

      it(`should have a graph button with the 'active' class`, () => {
        let graphNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(1) a'));
        expect(graphNavDElem.nativeElement.classList.contains('active')).toBe(true);
      });

      it(`should have a text button without the 'active' class`, () => {
        let textNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(2) a'));
        expect(textNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

      it(`should have a numbers button without the 'active' class`, () => {
        let numNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(3) a'));
        expect(numNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

    });

    describe('text view', () => {

      beforeEach(() => {
        comparator.setView('text');
        fixture.detectChanges();
      });

      it('should not show the graph component', () => {
        mocks.graph.dElem = dElem.query(By.css('ssbu-stage-comparator-graph'));
        expect(mocks.graph.dElem).toBeNull();
      });

      it('should show the text table component', () => {
        let expectedContent: string = mocks.text.fixture.nativeElement.textContent;
        mocks.text.dElem = dElem.query(By.css('ssbu-stage-comparator-text-table'));
        let actualContent: string = mocks.text.dElem.nativeElement.textContent;
        expect(actualContent).toEqual(expectedContent);
      });

      it('should not show the number component', () => {
        mocks.number.dElem = dElem.query(By.css('ssbu-stage-comparator-number-table'));
        expect(mocks.number.dElem).toBeNull();
      });

      it(`should have a graph button without the 'active' class`, () => {
        let graphNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(1) a'));
        expect(graphNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

      it(`should have a text button with the 'active' class`, () => {
        let textNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(2) a'));
        expect(textNavDElem.nativeElement.classList.contains('active')).toBe(true);
      });

      it(`should have a numbers button without the 'active' class`, () => {
        let numNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(3) a'));
        expect(numNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

    });

    describe('number view', () => {

      beforeEach(() => {
        comparator.setView('number');
        fixture.detectChanges();
      });

      it('should not show the graph component', () => {
        mocks.graph.dElem = dElem.query(By.css('ssbu-stage-comparator-graph'));
        expect(mocks.graph.dElem).toBeNull();
      });

      it('should not show the text table component', () => {
        mocks.text.dElem = dElem.query(By.css('ssbu-stage-comparator-text-table'));
        expect(mocks.text.dElem).toBeNull();
      });

      it('should show the number table component', () => {
        let expectedContent: string = mocks.number.fixture.nativeElement.textContent;
        mocks.number.dElem = dElem.query(By.css('ssbu-stage-comparator-number-table'));
        let actualContent: string = mocks.number.dElem.nativeElement.textContent;
        expect(actualContent).toEqual(expectedContent);
      });

      it(`should have a graph button without the 'active' class`, () => {
        let graphNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(1) a'));
        expect(graphNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

      it(`should have a text button without the 'active' class`, () => {
        let textNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(2) a'));
        expect(textNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

      it(`should have a numbers button with the 'active' class`, () => {
        let numNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(3) a'));
        expect(numNavDElem.nativeElement.classList.contains('active')).toBe(true);
      });

    });

  });

});
