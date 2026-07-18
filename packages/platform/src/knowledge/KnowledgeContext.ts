/**
 * Represents contextual information associated with a knowledge operation.
 *
 * Knowledge contexts provide framework-agnostic metadata that can be
 * used by providers without introducing runtime dependencies.
 */
export interface KnowledgeContext {
  /**
   * Optional correlation identifier.
   */
  readonly correlationId?: string;

  /**
   * Optional tenant identifier.
   */
  readonly tenantId?: string;

  /**
   * Optional user identifier.
   */
  readonly userId?: string;

  /**
   * Additional context values.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
