import { StageInfo, isStageInfo } from './stage-info.model';
/**
 * Represents summary data describing a Stage
 *
 * @interface StageSummary
 */
export interface StageSummary extends StageInfo {
  Type: number;
}

/**
 * Type guard for the StageSummary interface
 *
 * @param {*} stage the variable to validate
 * @returns {this is StageSummary}
 */
export function isStageSummary(stage): stage is StageSummary {
  /**/
  // console.log('  isStageSummary()');
  /**/
  // console.log(`    * stage: ${JSON.stringify(stage)}`);
  if (!isStageInfo(stage)) {
    return false;
  } else if (typeof stage.Type !== 'number') {
    return false;
  }
  /**/
  // console.log('    * returning true');
  return true;
}
