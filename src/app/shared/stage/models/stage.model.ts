import { StageSummary, isStageSummary } from './stage-summary.model';
import { StageDetails, isStageDetails } from './stage-details.model';

/**
 * Represents complete data describing a stage
 *
 * @interface Stage
 * @extends {StageSummary}
 */
export interface Stage extends StageSummary {
  details: StageDetails[];
}

/**
 * Type guard for the Stage interface
 *
 * @param {*} stage the variable to validate
 * @returns {this is Stage}
 */
export function isStage(stage): stage is Stage {
  let tempStage = stage;
  if (!isStageSummary(tempStage)) { return false; }

  if (!Array.isArray(stage.details)) { return false; }

  for (const detail of stage.details) {
    if (!isStageDetails(detail)) { return false; }
  }
  
  return true;
}