import { TestBed, waitForAsync } from '@angular/core/testing';

import { StagePieceMapHttpService } from './stage-piece-map-http.service';
import * as PIECE_MAP_SVC from '../models/mocks/stage-piece-map-http-service';
import { StagePieceMap, isStagePieceMap } from '../models/stage-piece-map.model';
import { DataNotFoundError } from '../../errors/data-not-found-error.model';
import { EmptyArgumentError } from '../../errors/empty-argument-error.model';
import { asyncData } from '../../../testing/async-observable-helpers';
import { HttpClient } from '@angular/common/http';

describe('StagePieceMapHttpService', () => {

  const MAPS_NAME_STAGE_COMPARATOR: string = 'stageComparator';
  const MAPS_ID_STAGE_COMPARATOR: string = 'stage-comparator';
  const API_URL_BASE: string = 'https://api.ssbutools.com/v1/stages/piece-maps/';
  const API_URL_STAGE_COMPARATOR: string = API_URL_BASE + MAPS_ID_STAGE_COMPARATOR;

  let service: StagePieceMapHttpService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: HttpClient, useValue: httpClientSpy}],
  }));

  it('should be created', () => {
    service = TestBed.inject(StagePieceMapHttpService);
    expect(service).toBeTruthy();
  });

  describe('getMaps()', () => {

    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new StagePieceMapHttpService(httpClientSpy as any);
    });

    it('should produce a StagePieceMap array when given the map name', waitForAsync(() => {
      ///
      // console.groupCollapsed('=== SPEC - getMaps - output type ===');
      const inputMapSetName: string = MAPS_NAME_STAGE_COMPARATOR;
      httpClientSpy.get.withArgs(API_URL_STAGE_COMPARATOR).and.returnValue(asyncData(PIECE_MAP_SVC.GETMAPS_OUTPUT_TYPE.httpRes));
      
      const actualMaps$ = service.getMaps(inputMapSetName);
      actualMaps$.subscribe(actualMaps => {

        expect(actualMaps.length).withContext('There should be items in the array').toBeGreaterThan(0);

        actualMaps.forEach(actualMap => {
          expect(isStagePieceMap(actualMap)).toEqual(true);
        });

        ///
        // console.groupEnd();
      });

    }));

    it('should produce the associated StagePieceMap array when given the map name', waitForAsync(() => {
      ///
      // console.groupCollapsed('=== SPEC - getMaps - output value ===')
      const inputMapSetName: string = MAPS_NAME_STAGE_COMPARATOR;
      const expectedMaps: StagePieceMap[] = PIECE_MAP_SVC.GETMAPS_OUTPUT_VALUE;

      httpClientSpy.get.withArgs(API_URL_STAGE_COMPARATOR).and.returnValue(asyncData(PIECE_MAP_SVC.GETMAPS_OUTPUT_TYPE.httpRes));

      const actualMaps$ = service.getMaps(inputMapSetName);
      actualMaps$.subscribe(actualMaps => {
        expect(actualMaps.length).withContext('There should be items in the array').toEqual(expectedMaps.length);
        actualMaps.forEach(actualMap => {
          expect(expectedMaps).toContain(actualMap);
        });
        ///
        // console.groupEnd();
      });
    }));
  
    xdescribe('data validation', () => {

      it('should reject a map set name that is not in the data source', waitForAsync(() => {
        ///
        // console.groupCollapsed('=== SPEC - getMaps - reject unknown map set name');
        const inputMapSetName: string = PIECE_MAP_SVC.GETMAPS_INVALID_UNKNOWN;
        
        const actualMaps$ = service.getMaps(inputMapSetName);
        actualMaps$.subscribe({
          next: () => {
            fail('should throw an error');
          },
          error: (e) => {
            expect(e instanceof DataNotFoundError).withContext('error should be a DataNotFoundError').toBe(true);
          },
          complete: () => {
            fail('should throw an error');
          }
        });

        ///
        // console.groupEnd();
      }));

      it('should reject a non-string map set name', waitForAsync(() => {
        ///
        // console.groupCollapsed('=== SPEC - getMaps - reject non-string map set name');
        const badInput = {
          setName: 38
        };
        const propName: string = 'setName';

        expect(() => {
          const actualMaps$ = service.getMaps(badInput[propName]);
        }).toThrow(new TypeError());

        ///
        // console.groupEnd();

      }));

      it('should reject an empty map set name', waitForAsync(() => {
        ///
        // console.groupCollapsed('=== SPEC - getMaps - reject empty map set name');
        const inputMapSetName: string = '';

        expect(() => {
          const actualMaps$ = service.getMaps(inputMapSetName);
        }).toThrow(new EmptyArgumentError());

        ///
        // console.groupEnd();
      }));

    });
  });
});
