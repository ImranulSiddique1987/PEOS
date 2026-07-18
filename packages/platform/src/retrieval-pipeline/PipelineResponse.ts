/**
 * Represents the response returned from a retrieval pipeline.
 *
 * A pipeline response encapsulates the provider-neutral output of a
 * pipeline execution while remaining framework-agnostic and
 * runtime-free.
 */
export interface PipelineResponse {
  /**
   * Unique response identifier.
   */
  readonly id: string;

  /**
   * Pipeline output.
   */
  readonly output: unknown;

  /**
   * Indicates whether the pipeline execution completed successfully.
   */
  readonly success: boolean;

  /**
   * Additional provider-specific response properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
