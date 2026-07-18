/**
 * Represents a single knowledge record exposed by a knowledge provider.
 *
 * This contract is intentionally provider-neutral and contains only
 * immutable metadata and knowledge content information.
 */
export interface KnowledgeRecord {
  /**
   * Unique knowledge record identifier.
   */
  readonly id: string;

  /**
   * Knowledge content.
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
