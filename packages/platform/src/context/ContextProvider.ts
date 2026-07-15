import type { Context } from "./Context.js";

/**
 * Represents a provider capable of supplying a Platform Context.
 *
 * This contract intentionally avoids prescribing how a context is stored,
 * created, resolved, cached, or managed.
 */
export interface ContextProvider {
  /**
   * Returns the current platform context.
   */
  getContext(): Context;
}
