import { Location } from '@angular/common';
import { TestBed, async, inject } from '@angular/core/testing';
import { asyncData } from '../../testing/async-observable-helpers';

import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { isStage } from '../../shared/models/stage/stage.model';
import { PRINCESS_PEACH_CASTLE, STAGES_ONE, STAGES_TWO } from '../../shared/models/stage/mocks/stages';
import { DummyComponent } from '../../shared/mocks/dummy.component';
import { StageComparatorResolverService } from './stage-comparator-resolver.service';

describe('StageComparatorResolverService', () => {
  let resolverService: StageComparatorResolverService;
  let stageLoaderSpy: { loadStages: jasmine.Spy };
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
    router = TestBed.get(Router);
    resolverService = new StageComparatorResolverService(stageLoaderSpy as any, router);
  });

  beforeEach(inject([Router, Location], (_router: Router) => {
    router = _router;
  }));

  describe('resolve()', () => {
    let route: ActivatedRouteSnapshot;
    let state: RouterStateSnapshot;

    beforeEach(() => {
      route = jasmine.createSpyObj('ActivatedRouteSnapshot', ['']);
      state = jasmine.createSpyObj('RouterStateSnapshot', ['']);
    });

    it('should return an Observable of an array of Stages', async(() => {
      stageLoaderSpy.loadStages.and.returnValue(asyncData([PRINCESS_PEACH_CASTLE]));

      let actualStages$ = resolverService.resolve(route, state);
      actualStages$.subscribe((actualStages) => {
        if ( (!actualStages.forEach)
            || (!Array.isArray(actualStages))
        ) { fail('the returned data is not an array'); }
        actualStages.forEach((stage) => {
          expect(isStage(stage)).toEqual(true);
        });
      });

    }));

    it('should return the stage data provided by StageLoaderService', async(() => {
      const expectedStages = STAGES_ONE;

      stageLoaderSpy.loadStages.and.returnValue(asyncData(expectedStages));

      let actualStages$ = resolverService.resolve(route, state);
      actualStages$.subscribe((actualStages) => {
        expect(stageLoaderSpy.loadStages).toHaveBeenCalledTimes(1);
        expect(actualStages.length).toEqual(2);
        expect(actualStages).toEqual(expectedStages);
      });
    }));

    it('should return different stage data when StageLoaderService provides different data', async(() => {
      const expectedStages = STAGES_TWO;

      stageLoaderSpy.loadStages.and.returnValue(asyncData(expectedStages));

      let actualStages$ = resolverService.resolve(route, state);
      actualStages$.subscribe((actualStages) => {
        expect(stageLoaderSpy.loadStages).toHaveBeenCalledTimes(1);
        expect(actualStages.length).toEqual(3);
        expect(actualStages).toEqual(expectedStages);
      });
    }));

  });
});
