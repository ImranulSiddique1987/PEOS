import type { PMIRDocument } from "./types.js";

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractSection(content: string, heading: string): string {
  const escapedHeading = escapeRegex(heading);

  const regex = new RegExp(
    `^##\\s+${escapedHeading}\\s*\\r?\\n([\\s\\S]*?)(?=^##\\s+|\\Z)`,
    "m",
  );

  const match = content.match(regex);

  if (!match) {
    throw new Error(`Unable to locate section: ${heading}`);
  }

  return match[1];
}

function readField(section: string, label: string): string {
  const escapedLabel = escapeRegex(label);

  const regex = new RegExp(`^-\\s+${escapedLabel}:\\s*(.+)$`, "m");

  const match = section.match(regex);

  if (!match) {
    throw new Error(`Unable to locate field: ${label}`);
  }

  return match[1].trim();
}

export function parsePMIR(content: string): PMIRDocument {
  const repositoryState = extractSection(
    content,
    "7. Current Repository State",
  );

  const version = readField(repositoryState, "PMIR Version");

  const latestCompleted = readField(repositoryState, "Latest Completed");

  const nextMilestone = readField(repositoryState, "Next Milestone");

  const completedMatch = latestCompleted.match(/M-\d+/);

  if (!completedMatch) {
    throw new Error("Invalid Latest Completed milestone.");
  }

  const nextMatch = nextMilestone.match(/M-\d+/);

  return {
    content,
    version,
    latestCompletedMilestone: completedMatch[0],
    nextMilestone: nextMatch?.[0] ?? "",
  };
}
