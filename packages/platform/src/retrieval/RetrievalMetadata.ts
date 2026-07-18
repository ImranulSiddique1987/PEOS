/**
 * Represents additional metadata associated with a retrieval contract.
 *
 * Metadata provides provider-neutral descriptive information without
 * introducing runtime behavior.
 */
export interface RetrievalMetadata {
  /**
   * Optional category of the retrieval component.
   */
  readonly category?: string;

  /**
   * Optional tags describing the retrieval component.
   */
  readonly tags?: readonly string[];

  /**
   * Indicates whether the retrieval component is read-only.
   */
  readonly readOnly?: boolean;

  /**
   * Provider-specific metadata.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
