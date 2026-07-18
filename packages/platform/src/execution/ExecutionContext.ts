/**
 * PEOS Platform
 * Shared Platform Execution Contracts Foundation
 *
 * Represents the execution context supplied to an execution component.
 */

export interface ExecutionContext {
  /**
   * Correlation identifier.
   */
  readonly correlationId: string;

  /**
   * Execution identifier.
   */
  readonly executionId: string;

  /**
   * Arbitrary execution values.
   */
  readonly values: Readonly<Record<string, unknown>>;
}
