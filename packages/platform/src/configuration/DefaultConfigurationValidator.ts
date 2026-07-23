import type {
  ConfigurationValidation,
  ConfigurationValidationResult,
} from "./ConfigurationValidation.js";
import type { PlatformConfiguration } from "./PlatformConfiguration.js";

/**
 * Default implementation of ConfigurationValidation.
 *
 * Performs basic validation of the platform configuration.
 * Additional validation rules will be introduced in future
 * milestones.
 */
export class DefaultConfigurationValidator implements ConfigurationValidation {
  /**
   * Validates the supplied platform configuration.
   */
  public async validate(
    configuration: PlatformConfiguration,
  ): Promise<ConfigurationValidationResult> {
    const messages: string[] = [];

    if (!configuration.version.trim()) {
      messages.push("Configuration version is required.");
    }

    return Object.freeze({
      valid: messages.length === 0,
      messages: Object.freeze(messages),
    });
  }
}
