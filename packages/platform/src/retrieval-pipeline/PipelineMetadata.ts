/**
 * Represents additional metadata associated with a retrieval pipeline.
 *
 * Metadata provides provider-neutral descriptive information without
 * introducing runtime behavior.
 */
export interface PipelineMetadata {
  /**
   * Optional category of the pipeline.
   */
  readonly category?: string;

  /**
   * Optional tags describing the pipeline.
   */
  readonly tags?: readonly string[];

  /**
   * Indicates whether the pipeline is read-only.
   */
  readonly readOnly?: boolean;

  /**
   * Provider-specific metadata.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
