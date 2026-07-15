/**
 * Represents the canonical Platform Context contract.
 *
 * A Platform Context describes immutable execution information shared across
 * future platform components. This contract intentionally avoids prescribing
 * runtime behavior, storage, lifecycle management, dependency injection, or
 * framework-specific implementations.
 */
export interface Context {
  /**
   * Unique context identifier.
   */
  readonly id: string;

  /**
   * Human-readable context name.
   */
  readonly name: string;

  /**
   * Arbitrary read-only contextual properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
