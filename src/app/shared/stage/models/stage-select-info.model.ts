/**
 * Represents info used for the Stage Select component form
 *
 * @export
 * @interface StageSelectInfo
 */
export interface StageSelectInfo {
  name: string;
  gameName: string;
  series: string;
  tourneyPresence: number;
}

export function isStageSelectInfo(info: any): info is StageSelectInfo {
  return ((typeof info.name === 'string')
    && (typeof info.gameName === 'string')
    && (typeof info.series === 'string')
    && (typeof info.tourneyPresence === 'number')
  );
}
