import { resolve } from "node:path";

import { parsePMIR } from "./parser.js";
import { nextVersion } from "./version.js";
import { readTextFile } from "./utils.js";

import type {
  MilestoneDefinition,
  PMIRDocument,
  PMIRRenderingContext,
  PMIRUpdateOptions,
} from "./types.js";

const PMIR_PATH = resolve(
  process.cwd(),
  "..",
  "governance",
  "MASTER_IMPLEMENTATION_ROADMAP.md",
);

/**
 * Builds the immutable rendering context used by the
 * PMIR automation engine.
 */
export class PMIRRoadmap {
  private readonly document: PMIRDocument;

  constructor() {
    this.document = parsePMIR(readTextFile(PMIR_PATH));
  }

  public getDocument(): PMIRDocument {
    return this.document;
  }

  public getPath(): string {
    return PMIR_PATH;
  }

  private getMilestone(id: string): MilestoneDefinition {
    const milestone = this.document.milestones.get(id);

    if (!milestone) {
      throw new Error(`Unknown milestone: ${id}`);
    }

    return milestone;
  }

  private getNextMilestone(
    milestone: MilestoneDefinition,
  ): MilestoneDefinition | undefined {
    if (!milestone.next) {
      return undefined;
    }

    return this.document.milestones.get(milestone.next);
  }

  public createRenderingContext(
    options: PMIRUpdateOptions,
  ): PMIRRenderingContext {
    const completedMilestone = this.getMilestone(options.milestone);

    return {
      version: nextVersion(this.document.version),
      completedMilestone,
      nextMilestone: this.getNextMilestone(completedMilestone),
      options,
    };
  }
}
