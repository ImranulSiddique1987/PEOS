import type { PipelineDescriptor } from "./PipelineDescriptor";
import type { PipelineProvider } from "./PipelineProvider";

/**
 * Represents a retrieval pipeline within the platform.
 *
 * Pipelines orchestrate provider-neutral retrieval workflows while
 * remaining framework-agnostic and runtime-free.
 */
export interface Pipeline {
  /**
   * Unique pipeline identifier.
   */
  readonly id: string;

  /**
   * Human-readable pipeline name.
   */
  readonly name: string;

  /**
   * Pipeline descriptor.
   */
  readonly descriptor: PipelineDescriptor;

  /**
   * Pipeline provider.
   */
  readonly provider: PipelineProvider;
}
