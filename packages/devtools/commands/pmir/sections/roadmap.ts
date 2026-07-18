import { replaceRequired } from "../utils.js";

import type { PMIRDocument, PMIRRenderingContext } from "../types.js";
import type { PMIRSectionRenderer } from "./section-renderer.js";

/**
 * Constitutional PMIR Roadmap Renderer
 *
 * Updates milestone status tables inside the constitutional PMIR.
 *
 * Responsibilities:
 * - Marks the completed milestone as Completed.
 * - Promotes the next milestone from Planned to Ready.
 *
 * This renderer is independent of chapter numbers and works across
 * all milestone tables (M-001 → M-499).
 */
export class RoadmapSection implements PMIRSectionRenderer {
  public render(document: PMIRDocument, context: PMIRRenderingContext): string {
    let content = document.content;

    const completedRegex = new RegExp(
      `(\\|\\s*${context.completedMilestone.id}\\s*\\|[^|]*\\|\\s*)(Planned|Ready|In Progress|Validation)(\\s*\\|)`,
      "i",
    );

    content = replaceRequired(
      content,
      completedRegex,
      `$1Completed$3`,
      context.completedMilestone.id,
    );

    if (context.nextMilestone) {
      const nextRegex = new RegExp(
        `(\\|\\s*${context.nextMilestone.id}\\s*\\|[^|]*\\|\\s*)Planned(\\s*\\|)`,
        "i",
      );

      content = replaceRequired(
        content,
        nextRegex,
        `$1Ready$2`,
        context.nextMilestone.id,
      );
    }

    return content;
  }
}
