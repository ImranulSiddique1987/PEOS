import type { KnowledgeDescriptor } from "./KnowledgeDescriptor";
import type { KnowledgeProvider } from "./KnowledgeProvider";

/**
 * Represents a knowledge component within the platform.
 *
 * Knowledge implementations expose provider-neutral knowledge
 * capabilities through framework-agnostic contracts.
 */
export interface Knowledge {
  /**
   * Unique identifier of the knowledge source.
   */
  readonly id: string;

  /**
   * Human-readable name.
   */
  readonly name: string;

  /**
   * Knowledge descriptor.
   */
  readonly descriptor: KnowledgeDescriptor;

  /**
   * Knowledge provider.
   */
  readonly provider: KnowledgeProvider;
}
