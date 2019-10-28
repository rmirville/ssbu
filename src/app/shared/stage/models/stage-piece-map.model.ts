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
  if ((typeof stageMap.lvd !== 'string') || (typeof stageMap.pieceName !== 'string')) {
    return false;
  }
  return true;
}
