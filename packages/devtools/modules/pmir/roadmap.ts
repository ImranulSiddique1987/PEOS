import { resolve } from "node:path";

import { parsePMIR } from "./parser.js";
import { milestoneRegistry } from "./registry.js";
import { nextVersion } from "./version.js";
import { readTextFile } from "./utils.js";

import type {
  MilestoneDefinition,
  PMIRDocument,
  PMIRUpdateResult,
} from "./types.js";

const PMIR_PATH = resolve(
  process.cwd(),
  "..",
  "governance",
  "MASTER_IMPLEMENTATION_ROADMAP.md",
);

export class PMIRRoadmap {
  private readonly document: PMIRDocument;

  constructor() {
    const content = readTextFile(PMIR_PATH);

    this.document = parsePMIR(content);
  }

  public getDocument(): PMIRDocument {
    return this.document;
  }

  public getCurrentVersion(): string {
    return this.document.version;
  }

  public getNextVersion(): string {
    return nextVersion(this.document.version);
  }

  public getCompletedMilestone(): MilestoneDefinition {
    const milestone = milestoneRegistry[this.document.latestCompletedMilestone];

    if (!milestone) {
      throw new Error(
        `Unknown milestone: ${this.document.latestCompletedMilestone}`,
      );
    }

    return milestone;
  }

  public getNextMilestone(): MilestoneDefinition {
    const milestone = milestoneRegistry[this.document.nextMilestone];

    if (!milestone) {
      throw new Error(`Unknown milestone: ${this.document.nextMilestone}`);
    }

    return milestone;
  }

  public createUpdateResult(): PMIRUpdateResult {
    const completed = this.getCompletedMilestone();
    const next = this.getNextMilestone();

    return {
      previousVersion: this.getCurrentVersion(),
      newVersion: this.getNextVersion(),
      completedMilestone: completed.id,
      nextMilestone: next.id,
      updated: false,
    };
  }
}
