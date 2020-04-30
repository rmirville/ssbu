import { StageInfo, isStageInfo } from './stage-info.model';
/**
 * Represents info used for the Stage Select component form
 *
 * @export
 * @interface StageSelectInfo
 */
export interface StageSelectInfo extends StageInfo {
  series: string;
  tourneyPresence: number;
}

export function isStageSelectInfo(info: any): info is StageSelectInfo {
  return ((isStageInfo(info))
    && (typeof info.series === 'string')
    && (typeof info.tourneyPresence === 'number')
  );
}
