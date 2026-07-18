import type { KnowledgeMetadata } from "./KnowledgeMetadata";

/**
 * Describes a knowledge contract exposed by the platform.
 *
 * A descriptor provides immutable metadata that identifies and
 * classifies a knowledge implementation without prescribing any
 * runtime behavior.
 */
export interface KnowledgeDescriptor {
  /**
   * Unique identifier of the knowledge source.
   */
  readonly id: string;

  /**
   * Human-readable name.
   */
  readonly name: string;

  /**
   * Optional description.
   */
  readonly description?: string;

  /**
   * Knowledge version.
   */
  readonly version: string;

  /**
   * Additional metadata.
   */
  readonly metadata?: KnowledgeMetadata;
}
