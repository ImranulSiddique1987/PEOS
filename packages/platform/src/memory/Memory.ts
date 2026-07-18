import type { MemoryDescriptor } from "./MemoryDescriptor";
import type { MemoryProvider } from "./MemoryProvider";

/**
 * Represents a memory component within the platform.
 *
 * Memory implementations are responsible for exposing
 * framework-agnostic memory capabilities through
 * provider-defined contracts.
 */
export interface Memory {
  /**
   * Unique identifier of the memory.
   */
  readonly id: string;

  /**
   * Human-readable name.
   */
  readonly name: string;

  /**
   * Memory descriptor.
   */
  readonly descriptor: MemoryDescriptor;

  /**
   * Memory provider.
   */
  readonly provider: MemoryProvider;
}
