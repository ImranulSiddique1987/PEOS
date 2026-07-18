import type { Pipeline } from "./Pipeline";
import type { PipelineContext } from "./PipelineContext";

/**
 * Represents a provider capable of supplying pipeline instances.
 *
 * Providers expose framework-agnostic contracts only. Runtime-specific
 * implementations belong to higher layers of the platform.
 */
export interface PipelineProvider {
  /**
   * Unique provider identifier.
   */
  readonly id: string;

  /**
   * Human-readable provider name.
   */
  readonly name: string;

  /**
   * Creates or resolves a pipeline instance.
   *
   * @param context Optional pipeline context.
   * @returns A pipeline contract.
   */
  getPipeline(context?: PipelineContext): Pipeline;
}
