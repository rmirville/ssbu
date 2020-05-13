import { StageInfo, isStageInfo } from './stage-info.model';

/**
 * Represents undefined miscellaneous information about a Stage
 *
 * @export
 * @interface StageMiscInfo
 */
export interface StageMiscInfo extends StageInfo {
  [propName: string]: any;
}

export function isStageMiscInfo(info: any): info is StageMiscInfo {
  return isStageInfo(info);
}

export function isStageMiscInfoArray(info: any): info is StageMiscInfo[] {
  if ((info === undefined)
    || (info === null)
    || (!Array.isArray(info))
  ) { return false; }

  for (const position of info) {
    if (!isStageInfo(position)) { return false; }
  }

  return true;
}