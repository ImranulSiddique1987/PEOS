/**
 * PMIR automation options supplied by the CLI.
 */
export interface PMIRUpdateOptions {
  /**
   * Completed milestone identifier.
   */
  readonly milestone: string;

  /**
   * Execute without writing changes.
   */
  readonly dryRun: boolean;

  /**
   * Validate only.
   */
  readonly validateOnly: boolean;

  /**
   * Lesson learned for the current milestone.
   */
  readonly lesson?: string;
}

/**
 * Parsed PMIR document.
 */
export interface PMIRDocument {
  readonly content: string;
  readonly version: string;
  readonly latestCompletedMilestone: string;
  readonly nextMilestone: string;
}

/**
 * Registry milestone definition.
 */
export interface MilestoneDefinition {
  readonly id: string;
  readonly title: string;
  readonly next?: string;
  readonly phase: string;
  readonly status: "Completed" | "Ready" | "Planned";
}

/**
 * Shared rendering context.
 *
 * Every section renderer receives the same immutable context.
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
