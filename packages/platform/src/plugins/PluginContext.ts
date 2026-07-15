/**
 * Represents the immutable execution context made available to a platform
 * plugin.
 *
 * This contract intentionally avoids exposing runtime implementations,
 * dependency injection containers, service locators, or framework-specific
 * concepts. Future runtime components may provide concrete implementations
 * while preserving this abstraction.
 */
export interface PluginContext {
  /**
   * Unique identifier of the hosting platform instance.
   */
  readonly platformId: string;

  /**
   * Environment name in which the plugin is executing.
   */
  readonly environment: string;

  /**
   * Arbitrary read-only contextual properties supplied by the host.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
