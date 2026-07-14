import { replaceRequired } from "../utils.js";

import type { PMIRDocument, PMIRRenderingContext } from "../types.js";

import type { PMIRSectionRenderer } from "./section-renderer.js";

/**
 * Renders the "Implementation Summary" section.
 *
 * Ownership:
 * - PMIR Version
 * - Completed Milestone
 * - Next Milestone
 * - Current Phase
 */
export class SummarySection implements PMIRSectionRenderer {
  public render(document: PMIRDocument, context: PMIRRenderingContext): string {
    const summary = `## Implementation Summary

- PMIR Version: ${context.version}
- Latest Completed Milestone: ${context.completedMilestone.id} — ${context.completedMilestone.title}
- Next Milestone: ${context.nextMilestone?.id ?? "None"} — ${context.nextMilestone?.title ?? "None"}
- Current Phase: ${context.completedMilestone.phase}
`;

    return replaceRequired(
      document.content,
      /# 20\. Implementation Summary[\s\S]*?(?=# 21\.)/,
      `# 20. Implementation Summary

---

${summary}

`,
      "Implementation Summary",
    );
  }
}
