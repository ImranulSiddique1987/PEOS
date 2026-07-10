/**
 * PEOS Platform Configuration
 *
 * Root configuration contract shared across the PEOS platform.
 *
 * This contract defines the shape of platform configuration without
 * prescribing how configuration is loaded, stored, or validated.
 *
 * Runtime implementations are introduced in future milestones.
 */

/**
 * Represents the complete platform configuration.
 */
export interface PlatformConfiguration {
  /**
   * Configuration schema version.
   */
  readonly version: string;

  /**
   * Named configuration sections.
   *
   * Each section represents a logical grouping of configuration values.
   */
  readonly sections: Readonly<Record<string, PlatformConfigurationSection>>;
}

/**
 * Represents a logical configuration section.
 */
export interface PlatformConfigurationSection {
  /**
   * Section identifier.
   */
  readonly name: string;

  /**
   * Configuration values belonging to this section.
   */
  readonly values: Readonly<Record<string, unknown>>;
}
