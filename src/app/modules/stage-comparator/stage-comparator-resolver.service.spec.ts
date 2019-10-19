import { Location } from '@angular/common';
import { TestBed, async, inject } from '@angular/core/testing';
import { asyncData } from '../../testing/async-observable-helpers';

import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { isStage } from '../../shared/stage/models/stage.model';
import { isStageDimensionsSet } from '../../shared/stage/models/stage-dimensions-set.model';

import { StageComparatorResolverService } from './stage-comparator-resolver.service';

import { STAGES_TWO } from '../../shared/stage/models/mocks/stages';
import * as STAGE_DIMENSIONS_SETS from '../../shared/stage/models/mocks/stage-dimensions-set';
import { DummyComponent } from '../../shared/mocks/dummy.component';

describe('StageComparatorResolverService', () => {
  let resolverService: StageComparatorResolverService;
  let stageLoaderSpy: { loadStages: jasmine.Spy };
  let stageDimensionsSpy: { getDimensionsFull: jasmine.Spy };
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyComponent],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: DummyComponent,
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
    router = TestBed.get(Router);
    resolverService = new StageComparatorResolverService(stageLoaderSpy as any, stageDimensionsSpy as any, router);
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

    it('should return an Observable of an object with an array of Stages and a StageDimensionsSet', async(() => {
      /**/
      // console.log('=== SPEC - OUTPUT TYPE ===');Cz
      stageLoaderSpy.loadStages.and.returnValue(asyncData(STAGES_TWO));
      stageDimensionsSpy.getDimensionsFull.and.returnValue(asyncData(STAGE_DIMENSIONS_SETS.TWO_STAGE_SET));

      let actualStageData$ = resolverService.resolve(route, state);
      actualStageData$.subscribe({
        next: (actualStageData) => {
          /**/
          // console.log('\n');
          // console.log('  * SPEC - actualStageData received');
          // console.log(`  * SPEC - actualStageData: ${JSON.stringify(actualStageData)}`);
          if ( (!actualStageData['stages'].forEach)
              || (!Array.isArray(actualStageData['stages']))
          ) { fail('the returned data is not an array'); }
          /**/
          // console.log(`  * SPEC - stages[0]: ${JSON.stringify(actualStageData['stages'][0])}`);
          actualStageData['stages'].forEach((stage) => {
            expect(isStage(stage)).withContext(`SPEC FAILURE - ${stage.name} is not a stage`).toEqual(true);
          });
          expect(isStageDimensionsSet(actualStageData['dimensionsFull'])).withContext('SPEC FAILURE - dimensionsFull is not a StageDimensionsSet').toEqual(true);
        },
        error: (err) => {
          fail(err);
        },
        complete: () => {}
      });

    }));

    xit('should return the stage data provided by StageLoaderService', async(() => {
      /*const expectedStages = STAGES_ONE;

      stageLoaderSpy.loadStages.and.returnValue(asyncData(expectedStages));

      let actualStages$ = resolverService.resolve(route, state);
      actualStages$.subscribe((actualStages) => {
        expect(stageLoaderSpy.loadStages).toHaveBeenCalledTimes(1);
        expect(actualStages['stages'].length).toEqual(2);
        expect(actualStages['stages']).toEqual(expectedStages);
      });*/
    }));

    xit('should return different stage data when StageLoaderService provides different data', async(() => {
      /*const expectedStages = STAGES_TWO;

      stageLoaderSpy.loadStages.and.returnValue(asyncData(expectedStages));

      let actualStages$ = resolverService.resolve(route, state);
      actualStages$.subscribe((actualStages) => {
        expect(stageLoaderSpy.loadStages).toHaveBeenCalledTimes(1);
        expect(actualStages.length).toEqual(3);
        expect(actualStages).toEqual(expectedStages);
      });*/
    }));

  });
});
