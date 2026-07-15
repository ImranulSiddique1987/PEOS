import type { Context } from "./Context.js";
import type { ContextDescriptor } from "./ContextDescriptor.js";

/**
 * Defines a contract for creating Platform Contexts.
 *
 * Runtime construction, storage, initialization, and lifecycle management
 * are intentionally outside the scope of this contract.
 */
export interface ContextFactory {
  /**
   * Metadata describing the context produced by this factory.
   */
  readonly descriptor: ContextDescriptor;

  /**
   * Creates a platform context.
   */
  create(): Context;
}
