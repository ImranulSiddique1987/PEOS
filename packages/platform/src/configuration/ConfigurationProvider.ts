/**
 * PEOS Configuration Provider
 *
 * Defines the contract responsible for providing platform
 * configuration.
 *
 * This contract specifies the provider abstraction without
 * prescribing how configuration is obtained.
 *
 * Runtime implementations are introduced in future milestones.
 */

import type { PlatformConfiguration } from "./PlatformConfiguration";

/**
 * Represents a provider capable of supplying platform configuration.
 */
export interface ConfigurationProvider {
  /**
   * Provider identifier.
   */
  readonly id: string;

  /**
   * Human-readable provider name.
   */
  readonly name: string;

  /**
   * Returns the current platform configuration.
   */
  getConfiguration(): Promise<PlatformConfiguration>;
}
