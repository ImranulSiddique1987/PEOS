import { RuntimeValidationSeverity } from "./RuntimeValidationSeverity";

/**
 * PEOS™
 * Runtime Validation Issue
 *
 * Represents a single validation issue discovered during
 * runtime validation.
 */
export interface RuntimeValidationIssue {
  /**
   * Unique validation code.
   */
  readonly code: string;

  /**
   * Human-readable validation message.
   */
  readonly message: string;

  /**
   * Severity of the validation issue.
   */
  readonly severity: RuntimeValidationSeverity;
}
