/**
 * PEOS Platform
 * Shared Platform Planning Contracts Foundation
 *
 * Represents the execution context supplied to a planning component.
 */

export interface PlanningContext {
  /**
   * Correlation identifier.
   */
  readonly correlationId: string;

  /**
   * Execution identifier.
   */
  readonly executionId: string;

  /**
   * Arbitrary planning values.
   */
  readonly values: Readonly<Record<string, unknown>>;
}
