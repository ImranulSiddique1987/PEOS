/**
 * PEOS PMIR Constitutional Automation Engine
 * Constitutional Domain Model
 *
 * Defines the immutable model used by the constitutional parser,
 * validator, updater and renderer.
 */

export interface ConstitutionMarker {
  readonly id: string;
  readonly value: string;
  readonly start: number;
  readonly end: number;
}

export interface ConstitutionVersion {
  readonly value: string;
}

export interface ConstitutionMilestone {
  readonly id: string;
  readonly title?: string;
  readonly phase?: string;
}

export interface ConstitutionDocument {
  /**
   * Complete markdown document.
   */
  readonly content: string;

  /**
   * Current PMIR semantic version.
   */
  readonly version: ConstitutionVersion;

  /**
   * Latest completed milestone.
   */
  readonly latestCompleted: ConstitutionMilestone;

  /**
   * Next milestone.
   */
  readonly nextMilestone?: ConstitutionMilestone;

  /**
   * Machine-readable markers discovered in the document.
   */
  readonly markers: ReadonlyMap<string, ConstitutionMarker>;
}

export interface ConstitutionUpdateRequest {
  readonly completedMilestone: string;
  readonly nextMilestone?: string;
  readonly version: string;
}

export interface ConstitutionValidationResult {
  readonly valid: boolean;
  readonly errors: readonly string[];
}

export interface ConstitutionUpdateResult {
  readonly updatedContent: string;
  readonly previousVersion: string;
  readonly newVersion: string;
  readonly completedMilestone: string;
  readonly nextMilestone?: string;
}
