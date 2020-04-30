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
  return ((typeof info.gameName === 'string')
    && (typeof info.name === 'string'));
}
