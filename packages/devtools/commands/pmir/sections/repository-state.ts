import { replaceRequired } from "../utils.js";

import type { PMIRDocument, PMIRRenderingContext } from "../types.js";

import type { PMIRSectionRenderer } from "./section-renderer.js";

/**
 * Constitutional Repository State Renderer
 *
 * Updates only the PMIR version inside the constitutional
 * document metadata table.
 */
export class RepositoryStateSection implements PMIRSectionRenderer {
  public render(document: PMIRDocument, context: PMIRRenderingContext): string {
    return replaceRequired(
      document.content,
      /(Version\s+)([0-9]+\.[0-9]+\.[0-9]+(?:\s+Enterprise\s+Extended\s+Edition)?)/,
      `$1${context.version}`,
      "PMIR Version",
    );
  }
}
