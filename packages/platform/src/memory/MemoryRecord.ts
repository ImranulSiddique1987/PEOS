/**
 * Represents a single memory record exposed by a memory provider.
 *
 * This contract is intentionally storage-agnostic and contains only
 * immutable metadata and payload information.
 */
export interface MemoryRecord {
  /**
   * Unique record identifier.
   */
  readonly id: string;

  /**
   * Memory payload.
   */
  readonly value: unknown;

  /**
   * Record creation timestamp.
   */
  readonly createdAt?: Date;

  /**
   * Record last modification timestamp.
   */
  readonly updatedAt?: Date;

  /**
   * Provider-specific metadata.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
