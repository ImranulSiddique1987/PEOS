/**
 * Describes metadata for a Platform Runtime.
 *
 * This contract provides descriptive information only and does not define
 * runtime creation, execution, ownership, scheduling, or lifecycle behavior.
 */
export interface RuntimeDescriptor {
  /**
   * Unique runtime identifier.
   */
  readonly id: string;

  /**
   * Human-readable runtime name.
   */
  readonly name: string;

  /**
   * Optional description of the runtime.
   */
  readonly description?: string;

  /**
   * Semantic version of the runtime contract.
   */
  readonly version: string;
}
