/**
 * Represents immutable metadata associated with an agent.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AgentMetadata {
  /**
   * Unique metadata identifier.
   */
  readonly id: string;

  /**
   * Optional display name.
   */
  readonly name?: string;

  /**
   * Optional description.
   */
  readonly description?: string;

  /**
   * Optional metadata labels.
   */
  readonly labels?: Readonly<Record<string, string>>;

  /**
   * Optional metadata annotations.
   */
  readonly annotations?: Readonly<Record<string, string>>;
}
