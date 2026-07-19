import type { MilestoneDefinition, PMIRDocument } from "./types.js";

function extractVersion(content: string): string {
  const match = content.match(/Version\s+([0-9]+\.[0-9]+\.[0-9]+)/i);

  if (!match) {
    throw new Error("Unable to locate PMIR version.");
  }

  return match[1].trim();
}

function extractLatestCompleted(content: string): string {
  const matches = [
    ...content.matchAll(/\|\s*(M-\d+)\s*\|[^|]*\|\s*Completed\s*\|/g),
  ];

  if (matches.length === 0) {
    throw new Error("Unable to determine latest completed milestone.");
  }

  return matches[matches.length - 1][1];
}

function extractNextMilestone(
  content: string,
  latestCompleted: string,
): string {
  const current = Number.parseInt(latestCompleted.substring(2), 10);

  const regex = /\|\s*(M-(\d+))\s*\|[^|]*\|\s*Planned\s*\|/g;

  for (const match of content.matchAll(regex)) {
    const milestone = match[1];
    const number = Number.parseInt(match[2], 10);

    if (number > current) {
      return milestone;
    }
  }

  return "";
}

function extractMilestones(
  content: string,
): ReadonlyMap<string, MilestoneDefinition> {
  const milestones = new Map<string, MilestoneDefinition>();

  let currentPhase = "";

  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const phaseMatch = line.match(
      /^#\s+Chapter\s+\d+\s+—\s+(Phase\s+\d+:[^#]+)$/,
    );

    if (phaseMatch) {
      currentPhase = phaseMatch[1].trim();
      continue;
    }

    const milestoneMatch = line.match(
      /^\|\s*(M-\d+)\s*\|\s*(.*?)\s*\|\s*(Completed|Planned|Validation|In Progress|Released|Deprecated|Cancelled)\s*\|$/,
    );

    if (!milestoneMatch) {
      continue;
    }

    const [, id, title, status] = milestoneMatch;

    milestones.set(id, {
      id,
      title: title.trim(),
      phase: currentPhase,
      status,
    });
  }

  const values = [...milestones.values()];

  for (let i = 0; i < values.length - 1; i++) {
    const current = values[i];
    const next = values[i + 1];

    milestones.set(current.id, {
      ...current,
      next: next.id,
    });
  }

  return milestones;
}

export function parsePMIR(content: string): PMIRDocument {
  const version = extractVersion(content);

  const latestCompletedMilestone = extractLatestCompleted(content);

  const nextMilestone = extractNextMilestone(content, latestCompletedMilestone);

  const milestones = extractMilestones(content);

  return {
    content,
    version,
    latestCompletedMilestone,
    nextMilestone,
    milestones,
  };
}
