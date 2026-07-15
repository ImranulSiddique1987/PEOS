import type { PluginDescriptor } from "./PluginDescriptor.js";
import type { PluginLifecycle } from "./PluginLifecycle.js";

/**
 * Represents the primary abstraction for a platform plugin.
 *
 * A plugin is defined entirely by its immutable metadata and optional
 * lifecycle callbacks. This contract intentionally contains no runtime
 * behavior, dependency injection semantics, or execution logic.
 */
export interface Plugin extends PluginLifecycle {
  /**
   * Immutable metadata describing the plugin.
   */
  readonly descriptor: PluginDescriptor;
}
