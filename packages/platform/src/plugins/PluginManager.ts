import type { Plugin } from "./Plugin.js";
import type { PluginDescriptor } from "./PluginDescriptor.js";

/**
 * Defines the contract for managing platform plugins.
 *
 * This interface intentionally represents only the public abstraction.
 * It does not prescribe storage, discovery, loading, execution,
 * dependency resolution, or lifecycle management.
 */
export interface PluginManager {
  /**
   * Registers a plugin with the host.
   */
  register(plugin: Plugin): void | Promise<void>;

  /**
   * Unregisters a plugin by its identifier.
   */
  unregister(pluginId: string): void | Promise<void>;

  /**
   * Retrieves a plugin by its identifier.
   */
  get(pluginId: string): Plugin | undefined;

  /**
   * Returns all registered plugin descriptors.
   */
  list(): readonly PluginDescriptor[];
}
