/**
 * Represents additional metadata associated with a knowledge contract.
 *
 * Metadata provides provider-neutral descriptive information without
 * introducing runtime behavior.
 */
export interface KnowledgeMetadata {
  /**
   * Optional category of the knowledge source.
   */
  readonly category?: string;

  /**
   * Optional tags describing the knowledge.
   */
  readonly tags?: readonly string[];

  /**
   * Indicates whether the knowledge source is read-only.
   */
  readonly readOnly?: boolean;

  /**
   * Provider-specific metadata.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
