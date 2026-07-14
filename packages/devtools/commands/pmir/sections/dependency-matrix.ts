import { replaceRequired } from "../utils.js";

import type { PMIRDocument, PMIRRenderingContext } from "../types.js";

import type { PMIRSectionRenderer } from "./section-renderer.js";

/**
 * Renders the "Dependency Matrix" section.
 *
 * Ownership:
 * - Preserves the existing dependency matrix.
 *
 * NOTE:
 * Dynamic dependency generation will be implemented
 * in PMIR Automation v2.
 */
export class DependencyMatrixSection implements PMIRSectionRenderer {
  public render(document: PMIRDocument, context: PMIRRenderingContext): string {
    // Context is intentionally unused in PMIR Automation v1.
    void context;

    return replaceRequired(
      document.content,
      /# 19\. Dependency Matrix[\s\S]*?(?=# 20\.)/,
      document.content.match(
        /# 19\. Dependency Matrix[\s\S]*?(?=# 20\.)/,
      )?.[0] ?? "",
      "Dependency Matrix",
    );
  }
}
