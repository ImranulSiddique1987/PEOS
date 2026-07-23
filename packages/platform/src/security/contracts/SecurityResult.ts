/**
 * Represents the outcome of a runtime security evaluation.
 */
export interface SecurityResult {
  /**
   * Indicates whether the security evaluation succeeded.
   */
  readonly allowed: boolean;

  /**
   * Optional reason describing the evaluation result.
   */
  readonly reason?: string;
}
