/**
 * Represents immutable metadata describing a platform plugin.
 *
 * This contract intentionally contains no runtime behavior and is
 * framework-agnostic. It provides the minimum metadata required for
 * future plugin discovery, registration, and runtime composition.
 */
export interface PluginDescriptor {
  /**
   * Globally unique plugin identifier.
   */
  readonly id: string;

  /**
   * Human-readable plugin name.
   */
  readonly name: string;

  /**
   * Semantic version of the plugin.
   */
  readonly version: string;

  /**
   * Optional plugin description.
   */
  readonly description?: string;

  /**
   * Optional plugin author.
   */
  readonly author?: string;

  /**
   * Optional plugin license.
   */
  readonly license?: string;

  /**
   * Optional list of plugin capabilities.
   *
   * These are descriptive only and do not imply runtime behavior.
   */
  readonly capabilities?: readonly string[];
}
