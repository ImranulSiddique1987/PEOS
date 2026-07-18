import type { KnowledgeRecord } from "./KnowledgeRecord";

/**
 * Represents the result of a knowledge query.
 *
 * This contract is provider-neutral and contains only the knowledge
 * records returned together with optional result metadata.
 */
export interface KnowledgeResult {
  /**
   * Knowledge records returned by the query.
   */
  readonly records: readonly KnowledgeRecord[];

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
