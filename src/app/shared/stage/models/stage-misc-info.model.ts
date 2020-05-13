import { StageInfo, isStageInfo } from './stage-info.model';

/**
 * Represents undefined miscellaneous information about a Stage
 *
 * @export
 * @interface StageMiscInfo
 */
export interface StageMiscInfo {
  gameName: string;
  [propName: string]: any;
}

export function isStageMiscInfo(info: any): info is StageMiscInfo {
  return ((info !== undefined)
    && (info !== null)
    && (typeof info.gameName === 'string'));
}

export function isStageMiscInfoArray(info: any): info is StageMiscInfo[] {
  if ((info === undefined)
    || (info === null)
    || (!Array.isArray(info))
  ) { return false; }

  for (const position of info) {
    if (!isStageMiscInfo(position)) { return false; }
  }

  return true;
}