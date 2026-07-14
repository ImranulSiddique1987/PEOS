import type { PMIRDocument } from "./types.js";

/**
 * Parses the PMIR document and extracts the
 * metadata required by the automation engine.
 */
export function parsePMIR(content: string): PMIRDocument {
  const versionMatch = content.match(/^Version\s+(\d+\.\d+\.\d+)$/m);

  if (!versionMatch) {
    throw new Error("Unable to locate PMIR Version.");
  }

  const completedMatch = content.match(/^- Latest Completed:\s*(M-\d+)$/m);

  if (!completedMatch) {
    throw new Error("Unable to locate Latest Completed milestone.");
  }

  const nextMatch = content.match(/^- Next Milestone:\s*(M-\d+)/m);

  if (!nextMatch) {
    throw new Error("Unable to locate Next Milestone.");
  }

  return {
    content,
    version: versionMatch[1],
    latestCompletedMilestone: completedMatch[1],
    nextMilestone: nextMatch[1],
  };
}
