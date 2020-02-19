import { Location } from '@angular/common';
import { TestBed, async, inject } from '@angular/core/testing';
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
import { StageSelectInfo, isStageSelectInfo } from '../../shared/stage/models/stage-select-info.model';

import { StageComparatorResolverService } from './stage-comparator-resolver.service';

import { STAGES_ONE, STAGES_TWO, STAGES_THREE } from '../../shared/stage/models/mocks/stages';
import * as STAGE_DIMENSIONS_SETS from '../../shared/stage/models/mocks/stage-dimensions-set';
import * as STAGE_SELECTIONS from '../../shared/stage/models/mocks/stage-select-info';
import { EmptyMockComponent } from '../../shared/mocks/empty.mock.component';

describe('StageComparatorResolverService', () => {
  let resolverService: StageComparatorResolverService;
  let stageLoaderSpy: { loadStages: jasmine.Spy };
  let stageDimensionsSpy: { getDimensionsFull: jasmine.Spy };
  let stageClassificationsSpy: { classifyStages: jasmine.Spy };
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
    router = TestBed.get(Router);
    resolverService = new StageComparatorResolverService(stageLoaderSpy as any, stageDimensionsSpy as any, stageClassificationsSpy as any, router);
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

    function _compareStageData(expectedStages: Stage[], expectedDimensionsSet: StageDimensionsSet, expectedSelectInfo: StageSelectInfo[]) {

      const expectedDimensions = expectedDimensionsSet.dimensions;
      const expectedRanges = expectedDimensionsSet.ranges;

      stageLoaderSpy.loadStages.and.returnValue(asyncData(expectedStages));
      stageDimensionsSpy.getDimensionsFull.and.returnValue(asyncData(expectedDimensionsSet));
      stageClassificationsSpy.classifyStages.and.returnValue(asyncData(expectedSelectInfo))

      const actualStageData$ = resolverService.resolve(route, state);
      actualStageData$.subscribe((actualStageData) => {
        const actualStages = actualStageData['stages'];
        const actualDimensionsSet = actualStageData['dimensionsFull'];
        const actualSelectInfo = actualStageData['stageSelectInfo'];

        expect(stageLoaderSpy.loadStages).toHaveBeenCalledTimes(1);
        expect(stageDimensionsSpy.getDimensionsFull).toHaveBeenCalledTimes(1);
        expect(stageClassificationsSpy.classifyStages).toHaveBeenCalledTimes(1);
        expect(actualStages['length']).toEqual(expectedStages.length);
        expect(actualStages).toEqual(expectedStages);
        expect(actualSelectInfo['length']).toEqual(expectedSelectInfo.length);
        expect(actualSelectInfo).toEqual(expectedSelectInfo);

        const actualDimensions = actualDimensionsSet['dimensions'];
        expect(actualDimensions.length).toEqual(expectedDimensions.length);
        for (let i = 0; i < 2; i++) {
          expect(actualDimensions[i]['name']).toEqual(expectedDimensions[i]['name']);
          expect(actualDimensions[i]['gameName']).toEqual(expectedDimensions[i]['gameName']);
          expect(actualDimensions[i]['values']['blastzoneWidth']).toBeCloseTo(expectedDimensions[i]['values']['blastzoneWidth'], 6);
          expect(actualDimensions[i]['values']['stageLength']).toBeCloseTo(expectedDimensions[i]['values']['stageLength'], 6);
          expect(actualDimensions[i]['values']['offStageDistance']).toBeCloseTo(expectedDimensions[i]['values']['offStageDistance'], 6);
          expect(actualDimensions[i]['values']['ceilingHeight']).toBeCloseTo(expectedDimensions[i]['values']['ceilingHeight'], 6);
        }

        const actualRanges = actualDimensionsSet['ranges'];
        _testRange(actualRanges['blastzoneWidth'], expectedRanges['blastzoneWidth']);
        _testRange(actualRanges['stageLength'], expectedRanges['stageLength']);
        _testRange(actualRanges['offStageDistance'], expectedRanges['offStageDistance']);
        _testRange(actualRanges['ceilingHeight'], expectedRanges['ceilingHeight']);
      });

    }

    it('should return an Observable of an object with an array of Stages, an array of StageSelectInfo, and a StageDimensionsSet', async(() => {
      /**/
      // console.log('=== SPEC - OUTPUT TYPE ===');
      stageLoaderSpy.loadStages.and.returnValue(asyncData(STAGES_ONE));
      stageDimensionsSpy.getDimensionsFull.and.returnValue(asyncData(STAGE_DIMENSIONS_SETS.TWO_STAGE_SET));
      stageClassificationsSpy.classifyStages.and.returnValue(asyncData(STAGE_SELECTIONS.ONE));

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

          if ( (!actualStageData['stageSelectInfo'].forEach)
              || (!Array.isArray(actualStageData['stages']))
          ) { fail('the returned stageSelectInfo data is not an array'); }
          actualStageData['stageSelectInfo'].forEach(selection => {
            expect(isStageSelectInfo(selection)).withContext(`SPEC FAILURE - ${JSON.stringify(selection)} is not a stage`).toEqual(true);
          });

          expect(isStageDimensionsSet(actualStageData['dimensionsFull'])).withContext('SPEC FAILURE - dimensionsFull is not a StageDimensionsSet').toEqual(true);
        },
        error: (err) => {
          fail(err);
        },
        complete: () => {}
      });

    }));

    it('should return the data that StageLoaderService and StageDimensionsService provide', async(() => {
      const expectedStages = STAGES_TWO;
      const expectedDimensionsSet = STAGE_DIMENSIONS_SETS.DIMENSIONS_SET_TWO;
      const expectedSelectInfo = STAGE_SELECTIONS.TWO;

      _compareStageData(expectedStages, expectedDimensionsSet, expectedSelectInfo);
    }));

    it('should return different data provided by StageLoaderService and StageDimensionsService', async(() => {
      const expectedStages = STAGES_THREE;
      const expectedDimensionsSet = STAGE_DIMENSIONS_SETS.DIMENSIONS_SET_THREE;
      const expectedSelectInfo = STAGE_SELECTIONS.THREE;

      _compareStageData(expectedStages, expectedDimensionsSet, expectedSelectInfo);
    }));

  });
});
