import { TestBed, async } from '@angular/core/testing';

import { StagePieceMapService } from './stage-piece-map.service';

import { StagePieceMap, isStagePieceMap } from '../models/stage-piece-map.model';

import { DataNotFoundError } from '../../errors/data-not-found-error.model';
import { EmptyArgumentError } from '../../errors/empty-argument-error.model';

import * as PIECE_MAP_SVC from '../models/mocks/stage-piece-map-service';

const MAPS_NAME_STAGE_COMPARATOR: string = 'stageComparator';

describe('StagePieceMapService', () => {

  let service: StagePieceMapService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.get(StagePieceMapService);
    expect(service).toBeTruthy();
  });

  describe('getMaps()', () => {

    beforeEach(() => {
      service = new StagePieceMapService();
    });

    it('should produce a StagePieceMap array when given the map name', async(() => {
      ///
      // console.groupCollapsed('=== SPEC - getMaps - output type ===');
      const inputMapSetName: string = MAPS_NAME_STAGE_COMPARATOR;
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

    it('should produce the associated StagePieceMap array when given the map name', async(() => {
      ///
      // console.groupCollapsed('=== SPEC - getMaps - output value ===')
      const inputMapSetName: string = MAPS_NAME_STAGE_COMPARATOR;
      const expectedMaps: StagePieceMap[] = PIECE_MAP_SVC.GETMAPS_OUTPUT_VALUE;
      let actualMaps$ = service.getMaps(inputMapSetName);

      actualMaps$.subscribe(actualMaps => {
        expect(actualMaps.length).withContext('There should be items in the array').toEqual(expectedMaps.length);
        actualMaps.forEach(actualMap => {
          expect(expectedMaps).toContain(actualMap);
        });
        ///
        // console.groupEnd();
      });
    }));
  
    describe('data validation', () => {

      it('should reject a map set name that is not in the data source', async(() => {
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

      it('should reject a non-string map set name', async(() => {
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

      it('should reject an empty map set name', async(() => {
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
