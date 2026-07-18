/**
 * Represents contextual information associated with a retrieval pipeline.
 *
 * Pipeline contexts provide provider-neutral metadata that can be
 * used by pipeline implementations without introducing runtime
 * dependencies or framework-specific behavior.
 */
export interface PipelineContext {
  /**
   * Correlation identifier for the pipeline execution.
   */
  readonly correlationId?: string;

  /**
   * Tenant identifier.
   */
  readonly tenantId?: string;

  /**
   * User identifier.
   */
  readonly userId?: string;

  /**
   * Additional provider-specific context properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
