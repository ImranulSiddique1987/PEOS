import type { ConfigurationLoader } from "./ConfigurationLoader.js";
import type { PlatformConfiguration } from "./PlatformConfiguration.js";

/**
 * Default implementation of ConfigurationLoader.
 *
 * This implementation provides an in-memory platform configuration
 * and serves as the runtime foundation for future configuration
 * loading strategies (file, environment, remote, etc.).
 */
export class DefaultConfigurationLoader implements ConfigurationLoader {
  /**
   * Loads the platform configuration.
   */
  public async load(): Promise<PlatformConfiguration> {
    return Object.freeze({
      version: "1.0.0",
      sections: Object.freeze({}),
    });
  }
}
