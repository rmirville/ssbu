import { Observable } from 'rxjs';
import { StagePieceMap } from '../models/stage-piece-map.model';

/**
 * Service class for providing Super Smash Bros. Ultimate stage data
 *
 * @export
 * @abstract
 * @class StagePieceMapSubService
 */
export abstract class StagePieceMapSubService {
  /**
   * Fetch piece map data set
   *
   * @param {string} mapSetName name of piece map set to fetch
   * @returns {Observable<StagePieceMap[]>}
   * @memberof StagePieceMapSubService
   */
  abstract getMaps(mapSetName: string): Observable<StagePieceMap[]>;
}
