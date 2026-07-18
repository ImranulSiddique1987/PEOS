/**
 * Represents contextual information associated with a memory operation.
 *
 * Memory contexts provide framework-agnostic metadata that can be
 * used by providers without introducing runtime dependencies.
 */
export interface MemoryContext {
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
