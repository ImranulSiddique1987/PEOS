/**
 * PEOS Platform
 * Shared Platform Reasoning Contracts Foundation
 *
 * Represents the execution context supplied to a reasoning component.
 */

export interface ReasoningContext {
  /**
   * Correlation identifier.
   */
  readonly correlationId: string;

  /**
   * Execution identifier.
   */
  readonly executionId: string;

  /**
   * Arbitrary reasoning values.
   */
  readonly values: Readonly<Record<string, unknown>>;
}
