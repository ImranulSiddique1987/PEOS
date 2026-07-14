import { replaceRequired } from "../utils.js";

import type { PMIRDocument, PMIRRenderingContext } from "../types.js";

import type { PMIRSectionRenderer } from "./section-renderer.js";

/**
 * Renders the "Current Repository State" section.
 *
 * Ownership:
 * - PMIR Version
 * - Latest Completed Milestone
 * - Next Milestone
 */
export class RepositoryStateSection implements PMIRSectionRenderer {
  public render(document: PMIRDocument, context: PMIRRenderingContext): string {
    let content = document.content;

    content = replaceRequired(
      content,
      /- PMIR Version:\s*.*/,
      `- PMIR Version: ${context.version}`,
      "PMIR Version",
    );

    content = replaceRequired(
      content,
      /- Latest Completed:\s*.*/,
      `- Latest Completed: ${context.completedMilestone.id}`,
      "Latest Completed",
    );

    content = replaceRequired(
      content,
      /- Next Milestone:\s*.*/,
      `- Next Milestone: ${context.nextMilestone?.id ?? "None"} (Ready)`,
      "Next Milestone",
    );

    return content;
  }
}
