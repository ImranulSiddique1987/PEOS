import type { MemoryRecord } from "./MemoryRecord";

/**
 * Represents the result of a memory query.
 *
 * This contract is provider-neutral and contains only the records
 * returned together with optional result metadata.
 */
export interface MemoryResult {
  /**
   * Records returned by the query.
   */
  readonly records: readonly MemoryRecord[];

  /**
   * Total number of matching records, if known.
   */
  readonly totalCount?: number;

  /**
   * Indicates whether additional records are available.
   */
  readonly hasMore?: boolean;

  /**
   * Provider-specific result metadata.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
