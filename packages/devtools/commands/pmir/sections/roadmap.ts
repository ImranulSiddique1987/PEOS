import { replaceRequired } from "../utils.js";

import type { PMIRDocument, PMIRRenderingContext } from "../types.js";

import type { PMIRSectionRenderer } from "./section-renderer.js";

/**
 * Renders the Phase Roadmap section.
 */
export class RoadmapSection implements PMIRSectionRenderer {
  public render(document: PMIRDocument, context: PMIRRenderingContext): string {
    let content = document.content;

    // Latest Completed Milestone
    content = replaceRequired(
      content,
      /\*\*M-\d+\s+—\s+.+?\*\*\s+\(Completed\)/,
      `**${context.completedMilestone.id} — ${context.completedMilestone.title}** (Completed)`,
      "Latest Completed Milestone",
    );

    // Next Ready Milestone
    if (context.nextMilestone) {
      content = replaceRequired(
        content,
        /####\s+M-\d+\s+—\s+.+?(?=\r?\n|$)/,
        `#### ${context.nextMilestone.id} — ${context.nextMilestone.title}`,
        "Next Milestone",
      );
    }

    return content;
  }
}
