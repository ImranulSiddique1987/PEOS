import { RuntimeValidationIssue } from "./RuntimeValidationIssue";

/**
 * PEOS™
 * Runtime Validation Result
 *
 * Represents the aggregated outcome of a runtime validation
 * operation.
 */
export interface RuntimeValidationResult {
  /**
   * Indicates whether validation completed successfully.
   */
  readonly success: boolean;

  /**
   * Collection of validation issues discovered during validation.
   */
  readonly issues: readonly RuntimeValidationIssue[];
}
