/**
 * PEOS Platform
 * Shared Platform Orchestration Contracts Foundation
 *
 * Represents the execution context supplied to an orchestration component.
 */

export interface OrchestrationContext {
  /**
   * Correlation identifier.
   */
  readonly correlationId: string;

  /**
   * Execution identifier.
   */
  readonly executionId: string;

  /**
   * Arbitrary orchestration values.
   */
  readonly values: Readonly<Record<string, unknown>>;
}
