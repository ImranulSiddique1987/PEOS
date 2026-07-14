import { resolve } from "node:path";

import { parsePMIR } from "./parser.js";
import { getMilestone, getNextMilestone } from "./registry.js";
import { nextVersion } from "./version.js";
import { readTextFile } from "./utils.js";

import type {
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

  public createRenderingContext(
    options: PMIRUpdateOptions,
  ): PMIRRenderingContext {
    const completedMilestone = getMilestone(options.milestone);

    return {
      version: nextVersion(this.document.version),
      completedMilestone,
      nextMilestone: getNextMilestone(completedMilestone),
      options,
    };
  }
}
