import { StageSummary } from './stage-summary.model';
import { StageDetails } from './stage-details.model';

/**
 * Represents complete data describing a stage
 *
 * @interface Stage
 * @extends {StageSummary}
 */
export interface Stage extends StageSummary {
  details: StageDetails[];
}
