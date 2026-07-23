import type { ConfigurationLoader } from "./ConfigurationLoader.js";
import type { ConfigurationProvider } from "./ConfigurationProvider.js";
import type { PlatformConfiguration } from "./PlatformConfiguration.js";
import { DefaultConfigurationLoader } from "./DefaultConfigurationLoader.js";

/**
 * Default implementation of ConfigurationProvider.
 *
 * Delegates configuration loading to a ConfigurationLoader while
 * remaining independent from configuration storage, caching,
 * refresh, and lifecycle management.
 */
export class DefaultConfigurationProvider implements ConfigurationProvider {
  private readonly loader: ConfigurationLoader;

  /**
   * Creates a DefaultConfigurationProvider.
   */
  public constructor(loader?: ConfigurationLoader) {
    this.loader = loader ?? new DefaultConfigurationLoader();
  }

  /**
   * Provider identifier.
   */
  public get id(): string {
    return "default";
  }

  /**
   * Human-readable provider name.
   */
  public get name(): string {
    return "Default Configuration Provider";
  }

  /**
   * Returns the current platform configuration.
   */
  public async getConfiguration(): Promise<PlatformConfiguration> {
    return this.loader.load();
  }
}
