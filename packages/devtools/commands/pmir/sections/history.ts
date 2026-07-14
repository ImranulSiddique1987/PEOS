import { replaceRequired } from "../utils.js";

import type { PMIRDocument, PMIRRenderingContext } from "../types.js";

import type { PMIRSectionRenderer } from "./section-renderer.js";

/**
 * Renders the "Roadmap Version History" section.
 *
 * Ownership:
 * - Active PMIR Version
 * - Completed milestone summary
 * - Next promoted milestone
 */
export class HistorySection implements PMIRSectionRenderer {
  public render(document: PMIRDocument, context: PMIRRenderingContext): string {
    const history = `${context.version} Active

Repository synchronized through ${context.completedMilestone.id}.
Completed ${context.completedMilestone.id} - ${context.completedMilestone.title}.
Promoted ${context.nextMilestone?.id ?? "None"} to Ready.`;

    return replaceRequired(
      document.content,
      /# 18\. Roadmap Version History[\s\S]*?(?=---\s*# 19\.)/,
      `# 18. Roadmap Version History

---

Version Status Description

---

${history}

`,
      "Roadmap Version History",
    );
  }
}
