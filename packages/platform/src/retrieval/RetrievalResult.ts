/**
 * Represents a single result returned from a retrieval operation.
 *
 * This contract defines provider-neutral retrieval output without
 * prescribing storage, ranking, or search implementation details.
 */
export interface RetrievalResult {
  /**
   * Unique result identifier.
   */
  readonly id: string;

  /**
   * Retrieved content.
   */
  readonly content: unknown;

  /**
   * Optional relevance score.
   */
  readonly score?: number;

  /**
   * Additional provider-specific metadata.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
