/**
 * Represents contextual information associated with a retrieval operation.
 *
 * Retrieval contexts provide framework-agnostic metadata that can be
 * used by providers without introducing runtime dependencies.
 */
export interface RetrievalContext {
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
