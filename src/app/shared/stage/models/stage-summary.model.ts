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
 * @param {*} summary the variable to validate
 * @returns {this is StageSummary}
 */
export function isStageSummary(summary): summary is StageSummary {
  ///
  // console.log('  isStageSummary()');
  ///
  // console.log(`    * stage: ${JSON.stringify(stage)}`);
  if (!isStageInfo(summary)) {
    return false;
  } else if (typeof summary.Type !== 'number') {
    return false;
  }
  ///
  // console.log('    * returning true');
  return true;
}

/**
 * Checks that the parameter matches the format for an array of StageSummaries
 *
 * @param {*} summaries the variable to validate
 * @returns {boolean}
 */
export function isStageSummaryArray(summaries): boolean {
  if ((summaries === undefined)
  || (summaries === null)
  || (!Array.isArray(summaries))
  ) { return false; }

  for (const summary of summaries) {
    if (!isStageInfo(summary)) { return false; }
  }
  return true;
}
