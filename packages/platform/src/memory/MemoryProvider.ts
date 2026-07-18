import type { Memory } from "./Memory";
import type { MemoryContext } from "./MemoryContext";

/**
 * Represents a provider capable of supplying memory instances.
 *
 * Providers expose framework-agnostic contracts only. Runtime-specific
 * implementations belong to higher layers of the platform.
 */
export interface MemoryProvider {
  /**
   * Unique provider identifier.
   */
  readonly id: string;

  /**
   * Human-readable provider name.
   */
  readonly name: string;

  /**
   * Creates or resolves a memory instance.
   *
   * @param context Optional memory context.
   * @returns A memory contract.
   */
  getMemory(context?: MemoryContext): Memory;
}
