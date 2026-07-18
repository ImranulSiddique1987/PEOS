import type { MemoryMetadata } from "./MemoryMetadata";

/**
 * Describes a memory contract exposed by the platform.
 *
 * A descriptor provides immutable metadata that identifies and
 * classifies a memory implementation without prescribing any
 * runtime behavior.
 */
export interface MemoryDescriptor {
  /**
   * Unique identifier of the memory.
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
   * Memory version.
   */
  readonly version: string;

  /**
   * Additional metadata.
   */
  readonly metadata?: MemoryMetadata;
}
