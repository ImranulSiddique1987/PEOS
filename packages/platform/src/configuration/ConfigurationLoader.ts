/**
 * PEOS Configuration Loader
 *
 * Defines the contract responsible for loading platform
 * configuration.
 *
 * This contract specifies how platform configuration is
 * requested without prescribing where it originates or
 * how it is implemented.
 *
 * Runtime implementations are introduced in future milestones.
 */

import type { PlatformConfiguration } from "./PlatformConfiguration";

/**
 * Represents a loader capable of loading platform configuration.
 */
export interface ConfigurationLoader {
  /**
   * Loads the platform configuration.
   *
   * The loading strategy is implementation-specific and
   * intentionally undefined by this contract.
   */
  load(): Promise<PlatformConfiguration>;
}
