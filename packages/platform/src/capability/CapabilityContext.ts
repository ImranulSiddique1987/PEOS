/**
 * PEOS Platform
 * Shared Platform Capability Contracts Foundation
 *
 * Represents the execution context supplied to a capability.
 */

export interface CapabilityContext {
  /**
   * Correlation identifier.
   */
  readonly correlationId: string;

  /**
   * Execution identifier.
   */
  readonly executionId: string;

  /**
   * Arbitrary context values.
   */
  readonly values: Readonly<Record<string, unknown>>;
}
