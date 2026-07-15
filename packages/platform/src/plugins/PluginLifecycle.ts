import type { PluginContext } from "./PluginContext.js";

/**
 * Defines the lifecycle contract for a platform plugin.
 *
 * This interface establishes lifecycle extension points without prescribing
 * any runtime implementation, execution model, or hosting framework.
 */
export interface PluginLifecycle {
  /**
   * Invoked when the host initializes the plugin.
   *
   * Future runtime implementations determine when and how this method is
   * called.
   */
  initialize?(context: PluginContext): void | Promise<void>;

  /**
   * Invoked immediately before the plugin is unloaded.
   *
   * Future runtime implementations determine when and how this method is
   * called.
   */
  dispose?(context: PluginContext): void | Promise<void>;
}
