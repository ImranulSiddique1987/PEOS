import type { PipelineContext } from "./PipelineContext";

/**
 * Represents a request submitted to a retrieval pipeline.
 *
 * A pipeline request encapsulates the input and contextual information
 * required to execute a provider-neutral retrieval pipeline. This
 * contract remains framework-agnostic and runtime-free.
 */
export interface PipelineRequest {
  /**
   * Unique request identifier.
   */
  readonly id: string;

  /**
   * Pipeline input.
   */
  readonly input: unknown;

  /**
   * Optional pipeline context.
   */
  readonly context?: PipelineContext;

  /**
   * Additional provider-specific request properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
