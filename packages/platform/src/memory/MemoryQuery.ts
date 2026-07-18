/**
 * Represents a provider-neutral query for retrieving memory records.
 *
 * This contract defines query parameters only and contains no runtime
 * behavior or storage-specific semantics.
 */
export interface MemoryQuery {
  /**
   * Optional query identifier.
   */
  readonly id?: string;

  /**
   * Optional free-form search text.
   */
  readonly text?: string;

  /**
   * Maximum number of records to return.
   */
  readonly limit?: number;

  /**
   * Number of records to skip.
   */
  readonly offset?: number;

  /**
   * Additional provider-specific query properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
