import { StageInfo, isStageInfo } from './stage-info.model';

/**
 * Represents information about a stage's qualitative categories
 *
 * @export
 * @interface StageClassifications
 */
export interface StageClassifications extends StageInfo {
  abbr: string;
  series: string;
  tourneyPresence: number;
}

export function isStageClassifications(classes: any): classes is StageClassifications {
  return ((isStageInfo(classes))
    && (typeof classes.abbr === 'string')
    && (typeof classes.series === 'string')
    && (typeof classes.tourneyPresence === 'number')
  );
}
