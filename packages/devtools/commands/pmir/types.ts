/**
 * PMIR automation options supplied by the CLI.
 */
export interface PMIRUpdateOptions {
  readonly milestone: string;
  readonly dryRun: boolean;
  readonly validateOnly: boolean;
  readonly lesson?: string;
}

/**
 * A milestone parsed directly from the constitutional PMIR.
 */
export interface MilestoneDefinition {
  readonly id: string;
  readonly title: string;
  readonly phase: string;
  readonly status: string;
  readonly next?: string;
}

/**
 * Parsed constitutional PMIR document.
 *
 * The parser is the single source of truth.
 */
export interface PMIRDocument {
  readonly content: string;
  readonly version: string;

  /**
   * Latest completed milestone discovered from the roadmap.
   */
  readonly latestCompletedMilestone: string;

  /**
   * Next milestone discovered from the roadmap.
   */
  readonly nextMilestone: string;

  /**
   * Every milestone parsed directly from the PMIR.
   */
  readonly milestones: ReadonlyMap<string, MilestoneDefinition>;
}

/**
 * Shared rendering context.
 */
export interface PMIRRenderingContext {
  readonly version: string;
  readonly completedMilestone: MilestoneDefinition;
  readonly nextMilestone?: MilestoneDefinition;
  readonly options: PMIRUpdateOptions;
}

/**
 * PMIR update result.
 */
export interface PMIRUpdateResult {
  readonly previousVersion: string;
  readonly newVersion: string;
  readonly completedMilestone: string;
  readonly nextMilestone?: string;
  readonly updated: boolean;
}
