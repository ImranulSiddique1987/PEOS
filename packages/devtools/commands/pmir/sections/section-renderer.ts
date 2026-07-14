import type { PMIRDocument, PMIRRenderingContext } from "../types.js";

/**
 * Contract implemented by every PMIR section renderer.
 *
 * Each renderer owns exactly one PMIR section.
 */
export interface PMIRSectionRenderer {
  render(document: PMIRDocument, context: PMIRRenderingContext): string;
}
