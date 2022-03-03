import { waitForAsync } from '@angular/core/testing';
import { Observable, throwError } from 'rxjs';
import { asyncData } from '../../../testing/async-observable-helpers';

import { StagePieceMap } from '../models/stage-piece-map.model';
import * as PIECE_MAP_SVC from '../models/mocks/stage-piece-map-service';

import { StagePieceMapService } from './stage-piece-map.service';

describe('StagePieceMapService', () => {
  let service: StagePieceMapService;
  let constSpy: { getMaps: jasmine.Spy };
  let httpSpy: { getMaps: jasmine.Spy };

  beforeEach(() => {
    constSpy = jasmine.createSpyObj('StagePieceMapConstService', ['getMaps']);
    httpSpy = jasmine.createSpyObj('StagePieceMapHttpService', ['getMaps']);
    service = new StagePieceMapService(constSpy as any, httpSpy as any);
  });

  describe('getMaps', () => {

    it('should return a StagePieceMap array when given the map name', waitForAsync(() => {
      ///
      // console.groupCollapsed('=== SPEC - RETURN STAGES ===');
      const mapName: string = PIECE_MAP_SVC.GETMAPS.mapName;
      const expectedMaps: StagePieceMap[] = PIECE_MAP_SVC.GETMAPS.maps;

      httpSpy.getMaps.and.returnValue(asyncData(expectedMaps));
      constSpy.getMaps.and.returnValue(asyncData(expectedMaps));

      const actualMaps$: Observable<StagePieceMap[]> = service.getMaps(mapName);
      actualMaps$.subscribe(actualMaps => {
        expect(actualMaps).toEqual(expectedMaps);
        ///
        // console.groupEnd();
      });
    }));

    it('should not call the constant service when the http service succeeds', waitForAsync(() => {
      ///
      // console.groupCollapsed('=== SPEC - DON\'T USE CONST SVC ON HTTP SVC SUCCESS ===');
      const storedMaps: StagePieceMap[] = PIECE_MAP_SVC.HTTP_SVC_ONLY.maps;
      const mapName: string = PIECE_MAP_SVC.HTTP_SVC_ONLY.mapName;

      constSpy.getMaps.and.returnValue(asyncData(storedMaps));
      httpSpy.getMaps.and.returnValue(asyncData(storedMaps));

      const stages$: Observable<StagePieceMap[]> = service.getMaps(mapName);
      stages$.subscribe(() => {
        expect(httpSpy.getMaps).withContext('StagePieceMapHttpService').toHaveBeenCalled();
        expect(constSpy.getMaps).withContext('StagePieceMapConstService').toHaveBeenCalledTimes(0);
        ///
        // console.groupEnd();
      });
    }));

    it('should return data even when the http service fails', waitForAsync(() => {
      ///
      // console.groupCollapsed('=== SPEC - USE CONST SVC ON HTTP SVC FAIL ===');
      const expectedMaps: StagePieceMap[] = PIECE_MAP_SVC.HTTP_SVC_FAIL.maps;
      const mapName: string = PIECE_MAP_SVC.HTTP_SVC_FAIL.mapName;

      constSpy.getMaps.and.returnValue(asyncData(expectedMaps));
      httpSpy.getMaps.and.returnValue(throwError(new Error()));

      const actualStages$: Observable<StagePieceMap[]> = service.getMaps(mapName);
      actualStages$.subscribe({
        next: actualStages => {
          expect(actualStages).toEqual(expectedMaps);
          ///
          // console.groupEnd();
        },
        error: () => {
          fail('getMaps() should not emit an error');
          ///
          // console.groupEnd();
        }
      });
    }));
  });
});
