/**
 * Represents a stage within a retrieval pipeline.
 *
 * Pipeline stages describe the logical units that compose a retrieval
 * pipeline without prescribing execution behavior or runtime
 * implementation details.
 */
export interface PipelineStage {
  /**
   * Unique stage identifier.
   */
  readonly id: string;

  /**
   * Human-readable stage name.
   */
  readonly name: string;

  /**
   * Optional stage description.
   */
  readonly description?: string;

  /**
   * Defines the execution order of the stage.
   */
  readonly order: number;

  /**
   * Additional provider-specific stage properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
