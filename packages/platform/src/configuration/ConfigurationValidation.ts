/**
 * PEOS Configuration Validation
 *
 * Defines the contract responsible for validating platform
 * configuration.
 *
 * This contract specifies the validation abstraction without
 * prescribing validation rules or implementation details.
 *
 * Runtime validation implementations are introduced in future
 * milestones.
 */

import type { PlatformConfiguration } from "./PlatformConfiguration";

/**
 * Represents the outcome of configuration validation.
 */
export interface ConfigurationValidationResult {
  /**
   * Indicates whether the configuration is valid.
   */
  readonly valid: boolean;

  /**
   * Validation messages.
   *
   * Empty when validation succeeds.
   */
  readonly messages: readonly string[];
}

/**
 * Represents a validator for platform configuration.
 */
export interface ConfigurationValidation {
  /**
   * Validates the supplied platform configuration.
   *
   * @param configuration Platform configuration to validate.
   * @returns Validation result.
   */
  validate(
    configuration: PlatformConfiguration,
  ): Promise<ConfigurationValidationResult>;
}
