import { replaceRequired } from "../utils.js";

import type { PMIRDocument, PMIRRenderingContext } from "../types.js";

import type { PMIRSectionRenderer } from "./section-renderer.js";

/**
 * Renders the "Lessons Learned" section.
 *
 * Ownership:
 * - Lessons Learned
 */
export class LessonsSection implements PMIRSectionRenderer {
  public render(document: PMIRDocument, context: PMIRRenderingContext): string {
    return replaceRequired(
      document.content,
      /# 21\. Lessons Learned[\s\S]*?(?=# 22\.)/,
      `# 21. Lessons Learned

## ${context.options.lesson}

`,
      "Lessons Learned",
    );
  }
}
