/**
 * PMIR automation options supplied by the CLI.
 */
export interface PMIRUpdateOptions {
  readonly milestone: string;
  readonly dryRun: boolean;
  readonly validateOnly: boolean;
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
 * PMIR update result.
 */
export interface PMIRUpdateResult {
  readonly previousVersion: string;
  readonly newVersion: string;
  readonly completedMilestone: string;
  readonly nextMilestone?: string;
  readonly updated: boolean;
}
