import type { PipelineContext } from "./PipelineContext";

/**
 * Represents a retrieval pipeline session within the platform.
 *
 * A pipeline session groups related pipeline executions under a common
 * identifier while remaining provider-neutral and runtime-free.
 */
export interface PipelineSession {
  /**
   * Unique session identifier.
   */
  readonly id: string;

  /**
   * Session creation timestamp.
   */
  readonly createdAt: Date;

  /**
   * Optional pipeline context associated with the session.
   */
  readonly context?: PipelineContext;

  /**
   * Additional provider-specific session properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
