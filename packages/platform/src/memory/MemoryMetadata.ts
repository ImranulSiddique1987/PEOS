/**
 * Represents additional metadata associated with a memory contract.
 *
 * Metadata provides provider-neutral descriptive information without
 * introducing runtime behavior.
 */
export interface MemoryMetadata {
  /**
   * Optional category of the memory.
   */
  readonly category?: string;

  /**
   * Optional tags describing the memory.
   */
  readonly tags?: readonly string[];

  /**
   * Indicates whether the memory is read-only.
   */
  readonly readOnly?: boolean;

  /**
   * Provider-specific metadata.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
