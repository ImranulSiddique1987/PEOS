/**
 * Describes metadata for a Platform Context.
 *
 * This contract provides descriptive information only and does not define
 * runtime creation, ownership, storage, or lifecycle behavior.
 */
export interface ContextDescriptor {
  /**
   * Unique context identifier.
   */
  readonly id: string;

  /**
   * Human-readable context name.
   */
  readonly name: string;

  /**
   * Optional description of the context.
   */
  readonly description?: string;

  /**
   * Semantic version of the context contract.
   */
  readonly version: string;
}
