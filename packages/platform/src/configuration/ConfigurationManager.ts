import type { PlatformConfiguration } from "./PlatformConfiguration.js";
import type { ConfigurationLoader } from "./ConfigurationLoader.js";
import type { ConfigurationProvider } from "./ConfigurationProvider.js";
import type { ConfigurationValidation } from "./ConfigurationValidation.js";

import { DefaultConfigurationLoader } from "./DefaultConfigurationLoader.js";
import { DefaultConfigurationProvider } from "./DefaultConfigurationProvider.js";
import { DefaultConfigurationValidator } from "./DefaultConfigurationValidator.js";

/**
 * Coordinates platform configuration loading and validation.
 *
 * ConfigurationManager orchestrates configuration components while
 * delegating loading, providing, and validation to their respective
 * implementations.
 *
 * It intentionally avoids runtime bootstrapping, dependency injection,
 * caching, persistence, hot reload, and configuration mutation.
 */
export class ConfigurationManager {
  private readonly provider: ConfigurationProvider;

  private readonly validator: ConfigurationValidation;

  /**
   * Creates a ConfigurationManager.
   */
  public constructor(
    provider?: ConfigurationProvider,
    validator?: ConfigurationValidation,
    loader?: ConfigurationLoader,
  ) {
    const resolvedLoader = loader ?? new DefaultConfigurationLoader();

    this.provider =
      provider ?? new DefaultConfigurationProvider(resolvedLoader);

    this.validator = validator ?? new DefaultConfigurationValidator();
  }

  /**
   * Loads and validates the platform configuration.
   *
   * @throws Error when validation fails.
   */
  public async getConfiguration(): Promise<PlatformConfiguration> {
    const configuration = await this.provider.getConfiguration();

    const validation = await this.validator.validate(configuration);

    if (!validation.valid) {
      throw new Error(validation.messages.join("\n"));
    }

    return configuration;
  }

  /**
   * Returns the active configuration provider.
   */
  public get configurationProvider(): ConfigurationProvider {
    return this.provider;
  }

  /**
   * Returns the active configuration validator.
   */
  public get configurationValidator(): ConfigurationValidation {
    return this.validator;
  }
}
