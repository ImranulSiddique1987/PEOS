/**
 * Represents the canonical Platform Runtime contract.
 *
 * A Platform Runtime describes immutable runtime information shared across
 * future platform components. This contract intentionally avoids prescribing
 * runtime execution, lifecycle management, orchestration, scheduling,
 * dependency injection, or framework-specific implementations.
 */
export interface Runtime {
  /**
   * Unique runtime identifier.
   */
  readonly id: string;

  /**
   * Human-readable runtime name.
   */
  readonly name: string;

  /**
   * Arbitrary read-only runtime properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
