import { Location } from '@angular/common';
import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { asyncData } from '../../testing/async-observable-helpers';

import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Stage, isStage } from '../../shared/stage/models/stage.model';
import { StageDimensionsRange } from '../../shared/stage/models/stage-dimensions-range.model';
import { StageDimensionsSet, isStageDimensionsSet } from '../../shared/stage/models/stage-dimensions-set.model';
import { StageClassifications, isStageClassifications } from '../../shared/stage/models/stage-classifications.model';

import { StageComparatorResolverService } from './stage-comparator-resolver.service';
import { StagePieceMapService } from '../../shared/stage/services/stage-piece-map.service';

import { STAGES_ONE, STAGES_TWO, STAGES_THREE } from '../../shared/stage/models/mocks/stages';
import * as STAGE_DIMENSIONS_SETS from '../../shared/stage/models/mocks/stage-dimensions-set';
import * as STAGE_CLASSES from '../../shared/stage/models/mocks/stage-classifications';
import * as PIECE_MAPS from '../../shared/stage/models/mocks/stage-piece-map';
import { EmptyMockComponent } from '../../shared/mocks/empty.mock.component';

describe('StageComparatorResolverService', () => {
  let resolverService: StageComparatorResolverService;
  let stageLoaderSpy: { loadStages: jasmine.Spy };
  let stageDimensionsSpy: { getDimensionsFull: jasmine.Spy };
  let stageClassificationsSpy: { classifyStages: jasmine.Spy };
  let stagePieceMapStub: Partial<StagePieceMapService>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyMockComponent],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: EmptyMockComponent,
            resolve: {
              stages: StageComparatorResolverService
            }
          }
        ])
      ],
      providers: [
        StageComparatorResolverService
      ]
    });
    stageLoaderSpy = jasmine.createSpyObj('StageLoaderService', ['loadStages']);
    stageDimensionsSpy = jasmine.createSpyObj('StageDimensionsService', ['getDimensionsFull']);
    stageClassificationsSpy = jasmine.createSpyObj('StageClassificationsService', ['classifyStages']);
    stagePieceMapStub = {
      getMaps: () => { return asyncData(PIECE_MAPS.STAGE_COMPARATOR); }
    };
    router = TestBed.inject(Router);
    resolverService = new StageComparatorResolverService(stageLoaderSpy as any, stageDimensionsSpy as any, stageClassificationsSpy as any, stagePieceMapStub as any, router);
  });

  beforeEach(inject([Router, Location], (_router: Router) => {
    router = _router;
  }));

  describe('resolve()', () => {
    /**/
    // console.log('=== SPEC SUITE - RESOLVE()');
    let route: ActivatedRouteSnapshot;
    let state: RouterStateSnapshot;

    beforeEach(() => {
      route = jasmine.createSpyObj('ActivatedRouteSnapshot', ['']);
      state = jasmine.createSpyObj('RouterStateSnapshot', ['']);
    });

    function _testRange(actualRange: StageDimensionsRange, expectedRange: StageDimensionsRange) {
      expect(actualRange['min']).toBeCloseTo(expectedRange['min'], 6);
      expect(actualRange['max']).toBeCloseTo(expectedRange['max'], 6);
      expect(actualRange['range']).toBeCloseTo(expectedRange['range'], 6);
    }

    function _compareStageData(expectedStages: Stage[], expectedDimensionsSet: StageDimensionsSet, expectedClassifications: StageClassifications[]) {

      const expectedDimensions = expectedDimensionsSet.dimensions;
      const expectedRanges = expectedDimensionsSet.ranges;

      stageLoaderSpy.loadStages.and.returnValue(asyncData(expectedStages));
      stageDimensionsSpy.getDimensionsFull.and.returnValue(asyncData(expectedDimensionsSet));
      stageClassificationsSpy.classifyStages.and.returnValue(asyncData(expectedClassifications))

      const actualStageData$ = resolverService.resolve(route, state);
      actualStageData$.subscribe((actualStageData) => {
        const actualStages = actualStageData['stages'];
        const actualDimensionsSet = actualStageData['dimensionsFull'];
        const actualClassifications = actualStageData['stageClassifications'];

        expect(stageLoaderSpy.loadStages).toHaveBeenCalledTimes(1);
        expect(stageDimensionsSpy.getDimensionsFull).toHaveBeenCalledTimes(1);
        expect(stageClassificationsSpy.classifyStages).toHaveBeenCalledTimes(1);
        expect(actualStages['length']).toEqual(expectedStages.length);
        expect(actualStages).toEqual(expectedStages);
        expect(actualClassifications['length']).toEqual(expectedClassifications.length);
        expect(actualClassifications).toEqual(expectedClassifications);

        const actualDimensions = actualDimensionsSet['dimensions'];
        expect(actualDimensions.length).toEqual(expectedDimensions.length);
        for (let i = 0; i < 2; i++) {
          expect(actualDimensions[i]['name']).toEqual(expectedDimensions[i]['name']);
          expect(actualDimensions[i]['gameName']).toEqual(expectedDimensions[i]['gameName']);
          expect(actualDimensions[i]['blastzoneWidth']).toBeCloseTo(expectedDimensions[i]['blastzoneWidth'], 6);
          expect(actualDimensions[i]['stageLength']).toBeCloseTo(expectedDimensions[i]['stageLength'], 6);
          expect(actualDimensions[i]['offStageDistance']).toBeCloseTo(expectedDimensions[i]['offStageDistance'], 6);
          expect(actualDimensions[i]['ceilingHeight']).toBeCloseTo(expectedDimensions[i]['ceilingHeight'], 6);
        }

        const actualRanges = actualDimensionsSet['ranges'];
        _testRange(actualRanges['blastzoneWidth'], expectedRanges['blastzoneWidth']);
        _testRange(actualRanges['stageLength'], expectedRanges['stageLength']);
        _testRange(actualRanges['offStageDistance'], expectedRanges['offStageDistance']);
        _testRange(actualRanges['ceilingHeight'], expectedRanges['ceilingHeight']);
      });

    }

    it('should return an Observable of an object with an array of Stages, an array of StageClassifications, and a StageDimensionsSet', waitForAsync(() => {
      /**/
      // console.log('=== SPEC - OUTPUT TYPE ===');
      stageLoaderSpy.loadStages.and.returnValue(asyncData(STAGES_ONE));
      stageDimensionsSpy.getDimensionsFull.and.returnValue(asyncData(STAGE_DIMENSIONS_SETS.TWO_STAGE_SET));
      stageClassificationsSpy.classifyStages.and.returnValue(asyncData(STAGE_CLASSES.ONE));

      let actualStageData$ = resolverService.resolve(route, state);
      actualStageData$.subscribe({
        next: (actualStageData) => {
          /**/
          // console.log('\n');
          // console.log('  * SPEC - actualStageData received');
          // console.log(`  * SPEC - actualStageData: ${JSON.stringify(actualStageData)}`);
          if ( (!actualStageData['stages'].forEach)
              || (!Array.isArray(actualStageData['stages']))
          ) { fail('the returned stages data is not an array'); }
          /**/
          // console.log(`  * SPEC - stages[0]: ${JSON.stringify(actualStageData['stages'][0])}`);
          actualStageData['stages'].forEach((stage) => {
            expect(isStage(stage)).withContext(`SPEC FAILURE - ${stage.name} is not a stage`).toEqual(true);
          });

          if ( (!actualStageData['stageClassifications'].forEach)
              || (!Array.isArray(actualStageData['stages']))
          ) { fail('the returned stageClassifications data is not an array'); }
          actualStageData['stageClassifications'].forEach(selection => {
            expect(isStageClassifications(selection)).withContext(`SPEC FAILURE - ${JSON.stringify(selection)} is not a stage`).toEqual(true);
          });

          expect(isStageDimensionsSet(actualStageData['dimensionsFull'])).withContext('SPEC FAILURE - dimensionsFull is not a StageDimensionsSet').toEqual(true);
        },
        error: (err) => {
          fail(err);
        },
        complete: () => {}
      });

    }));

    it('should return the data that StageLoaderService and StageDimensionsService provide', waitForAsync(() => {
      const expectedStages = STAGES_TWO;
      const expectedDimensionsSet = STAGE_DIMENSIONS_SETS.DIMENSIONS_SET_TWO;
      const expectedClassifications = STAGE_CLASSES.TWO;

      _compareStageData(expectedStages, expectedDimensionsSet, expectedClassifications);
    }));

    it('should return different data provided by StageLoaderService and StageDimensionsService', waitForAsync(() => {
      const expectedStages = STAGES_THREE;
      const expectedDimensionsSet = STAGE_DIMENSIONS_SETS.DIMENSIONS_SET_THREE;
      const expectedClassifications = STAGE_CLASSES.THREE;

      _compareStageData(expectedStages, expectedDimensionsSet, expectedClassifications);
    }));

  });
});
