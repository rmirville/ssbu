/**
 * Represents basic information about a Stage
 *
 * @export
 * @interface StageInfo
 */
export interface StageInfo {
  gameName: string;
  [propName: string]: any;
}

export function isStageInfo(info: any): info is StageInfo {
  return ((info !== undefined)
    && (info !== null)
    && (typeof info.gameName === 'string')
    && (typeof info.name === 'string'));
}
