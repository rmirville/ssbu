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
  // console.group('  isStageSummary()');
  // console.log(`    * summary: ${JSON.stringify(summary)}`);
  // console.log(`typeof summary.Type: ${typeof summary.Type}`);
  // console.log(`typeof summary.name: ${typeof summary.name}`);
  // console.log(`typeof summary.gameName: ${typeof summary.gameName}`);
  if (!isStageInfo(summary)) {
    ///
    // console.groupEnd();
    return false;
  } else if (typeof summary.Type !== 'number') {
    ///
    // console.groupEnd();
    return false;
  }
  ///
  // console.log('    * returning true');
  // console.groupEnd();
  return true;
}

/**
 * Checks that the parameter matches the format for an array of StageSummaries
 *
 * @param {*} summaries the variable to validate
 * @returns {boolean}
 */
export function isStageSummaryArray(summaries): summaries is StageSummary[] {
  ///
  // console.group('isStageSummaryArray()');
  if ((summaries === undefined)
  || (summaries === null)
  || (!Array.isArray(summaries))
  ) {
    ///
    // console.groupEnd();
    return false;
  }

  for (const summary of summaries) {
    ///
    // console.log('calling isStageSummary()');
    if (!isStageSummary(summary)) {
      ///
      // console.groupEnd();
      return false;
    }
  }
  ///
  // console.groupEnd();
  return true;
}
