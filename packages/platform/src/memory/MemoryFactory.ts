import type { Memory } from "./Memory";
import type { MemoryContext } from "./MemoryContext";

/**
 * Factory contract responsible for creating memory instances.
 *
 * Implementations are provided by runtime layers. The Platform package
 * defines only the contract.
 */
export interface MemoryFactory {
  /**
   * Creates a memory instance.
   *
   * @param context Optional memory context.
   * @returns A memory contract.
   */
  create(context?: MemoryContext): Memory;
}
