import type { PMIRDocument } from "./types.js";

/**
 * Parses the current PMIR document and extracts
 * the metadata required for automation.
 */
export function parsePMIR(content: string): PMIRDocument {
  const versionMatch = content.match(/Version\s+(\d+\.\d+\.\d+)/);

  if (!versionMatch) {
    throw new Error("Unable to determine PMIR version.");
  }

  const completedMatch = content.match(
    /Latest Completed Milestone\s+([A-Z]-\d+)/,
  );

  if (!completedMatch) {
    throw new Error("Unable to determine latest completed milestone.");
  }

  const nextMatch = content.match(/Next Milestone\s+([A-Z]-\d+)/);

  if (!nextMatch) {
    throw new Error("Unable to determine next milestone.");
  }

  return {
    content,
    version: versionMatch[1],
    latestCompletedMilestone: completedMatch[1],
    nextMilestone: nextMatch[1],
  };
}
