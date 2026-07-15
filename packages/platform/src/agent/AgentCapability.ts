/**
 * Represents a capability supported by an agent.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AgentCapability {
  /**
   * Unique capability identifier.
   */
  readonly id: string;

  /**
   * Human-readable capability name.
   */
  readonly name: string;

  /**
   * Optional capability description.
   */
  readonly description?: string;
}
