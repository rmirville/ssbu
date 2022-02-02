import { waitForAsync } from '@angular/core/testing';
import { Observable, throwError } from 'rxjs';
import { asyncData } from '../../../testing/async-observable-helpers';

import { Stage } from '../models/stage.model';
import * as STAGE_LOADER_SVC from '../models/mocks/stage-loader-service';

import { StageLoaderService } from './stage-loader.service';

describe('StageLoaderService', () => {
  let service: StageLoaderService;
  let constSpy: { loadStages: jasmine.Spy };
  let httpSpy: { loadStages: jasmine.Spy };

  beforeEach(() => {
    constSpy = jasmine.createSpyObj('StageLoaderConstService', ['loadStages']);
    httpSpy = jasmine.createSpyObj('StageLoaderHttpService', ['loadStages']);
    service = new StageLoaderService(constSpy as any, httpSpy as any);
  });

  describe('loadStages', () => {

    it('should return an array of Stages', waitForAsync(() => {
      ///
      // console.groupCollapsed('=== SPEC - RETURN STAGES ===');
      const expectedStages: Stage[] = STAGE_LOADER_SVC.GET_STAGES;

      constSpy.loadStages.and.returnValue(asyncData(expectedStages));
      httpSpy.loadStages.and.returnValue(asyncData(expectedStages));

      const actualStages$: Observable<Stage[]> = service.loadStages();
      actualStages$.subscribe(actualStages => {
        expect(actualStages).toEqual(expectedStages);
        ///
        // console.groupEnd();
      });
    }));

    it('should not call the http service when the constant service succeeds', waitForAsync(() => {
      ///
      // console.groupCollapsed('=== SPEC - DON\'T USE HTTP SVC ON CONST SVC SUCCESS ===');
      const storedStages: Stage[] = STAGE_LOADER_SVC.CONST_SVC_ONLY;

      constSpy.loadStages.and.returnValue(asyncData(storedStages));
      httpSpy.loadStages.and.returnValue(asyncData(storedStages));

      const stages$: Observable<Stage[]> = service.loadStages();
      stages$.subscribe(() => {
        expect(constSpy.loadStages).withContext('StageLoaderConstService').toHaveBeenCalled();
        expect(httpSpy.loadStages).withContext('StageLoaderHttpService').toHaveBeenCalledTimes(0);
        ///
        // console.groupEnd();
      });
    }));

    it('should return data even when the constant service fails', waitForAsync(() => {
      ///
      // console.groupCollapsed('=== SPEC - USE HTTP SVC ON CONST SVC FAIL ===');
      const expectedStages: Stage[] = STAGE_LOADER_SVC.CONST_SVC_FAIL;

      constSpy.loadStages.and.returnValue(throwError(new Error()));
      httpSpy.loadStages.and.returnValue(asyncData(expectedStages));

      const actualStages$: Observable<Stage[]> = service.loadStages();
      actualStages$.subscribe({
        next: actualStages => {
          expect(actualStages).toEqual(expectedStages);
          ///
          // console.groupEnd();
        },
        error: () => {
          fail('loadStages() should not emit an error');
          ///
          // console.groupEnd();
        }
      });
    }));

    describe('data validation', () => {
      it('should reject a filter that isn\'t a string', waitForAsync(() => {
        ///
        // console.groupCollapsed('=== SPEC - REJECT NON-STRING FILTER ===');
        const storedStages: Stage[] = STAGE_LOADER_SVC.BAD_FILTER;
        const badFilter = {
          filter: [true, true, false]
        };
        const propName: string = 'filter';

        constSpy.loadStages.and.returnValue(asyncData(storedStages));
        httpSpy.loadStages.and.returnValue(asyncData(storedStages));

        expect(() => {
          const stages$ = service.loadStages(badFilter[propName]);
        }).toThrow(TypeError('The filter argument was not a string.'));
        ///
        // console.groupEnd();
      }));

      it('should reject a filterList that isn\'t a string array', waitForAsync(() => {
        ///
        // console.groupCollapsed('=== SPEC - REJECT NON-STRING ARRAY FILTERLIST ===');
        const storedStages: Stage[] = STAGE_LOADER_SVC.BAD_FILTER_LIST;
        const inputFilter = 'include';
        const badFilterList = {
          filterList: [9, -34.3, 0]
        };
        const propName: string = 'filterList';

        constSpy.loadStages.and.returnValue(asyncData(storedStages));
        httpSpy.loadStages.and.returnValue(asyncData(storedStages));

        expect(() => {
          const stages$ = service.loadStages(inputFilter, badFilterList[propName]);
        }).toThrow(TypeError('The list of stages to filter was not a string array.'));
        ///
        // console.groupEnd();
      }));
    });

  });
});
