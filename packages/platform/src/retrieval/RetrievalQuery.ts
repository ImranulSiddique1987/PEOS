/**
 * Represents a provider-neutral query for retrieving information.
 *
 * This contract defines retrieval query parameters only and contains
 * no runtime behavior or provider-specific semantics.
 */
export interface RetrievalQuery {
  /**
   * Optional query identifier.
   */
  readonly id?: string;

  /**
   * Optional free-form search text.
   */
  readonly text?: string;

  /**
   * Maximum number of results to return.
   */
  readonly limit?: number;

  /**
   * Number of results to skip.
   */
  readonly offset?: number;

  /**
   * Additional provider-specific query properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
