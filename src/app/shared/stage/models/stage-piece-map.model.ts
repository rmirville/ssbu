/**
 * Represents stage lvd-to-piece mapper for Stage services
 *
 * @export
 * @StagePieceMap
 */
export interface StagePieceMap {
  lvd: string;
  pieceName: string;
}

export function isStagePieceMap(stageMap): stageMap is StagePieceMap {
  return ((stageMap !== undefined)
    && (stageMap !== null)
    && (typeof stageMap.lvd === 'string')
    && (typeof stageMap.pieceName === 'string')
  );
}
