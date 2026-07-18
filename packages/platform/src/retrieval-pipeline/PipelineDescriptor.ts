import type { PipelineMetadata } from "./PipelineMetadata";

/**
 * Describes a retrieval pipeline exposed by the platform.
 *
 * A descriptor provides immutable metadata that identifies and
 * classifies a pipeline without prescribing runtime behavior.
 */
export interface PipelineDescriptor {
  /**
   * Unique pipeline identifier.
   */
  readonly id: string;

  /**
   * Human-readable pipeline name.
   */
  readonly name: string;

  /**
   * Optional description.
   */
  readonly description?: string;

  /**
   * Pipeline version.
   */
  readonly version: string;

  /**
   * Additional pipeline metadata.
   */
  readonly metadata?: PipelineMetadata;
}
