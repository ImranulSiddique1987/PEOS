import type { MilestoneDefinition } from "./types.js";

export const milestoneRegistry: Readonly<Record<string, MilestoneDefinition>> =
  {
    "M-039": {
      id: "M-039",
      title: "Shared Platform Error Contracts Foundation",
      next: "M-040",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-040": {
      id: "M-040",
      title: "Shared Platform Event Contracts Foundation",
      next: "M-041",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-041": {
      id: "M-041",
      title: "Shared Platform Dependency Injection Contracts Foundation",
      next: "M-042",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-042": {
      id: "M-042",
      title: "Shared Platform Plugin Contracts Foundation",
      next: "M-043",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-043": {
      id: "M-043",
      title: "Shared Platform Service Contracts Foundation",
      next: "M-044",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-044": {
      id: "M-044",
      title: "Shared Platform Context Contracts Foundation",
      next: "M-045",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-045": {
      id: "M-045",
      title: "Shared Platform Runtime Contracts Foundation",
      next: "M-046",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-046": {
      id: "M-046",
      title: "Shared Platform Kernel Contracts Foundation",
      next: "M-047",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-047": {
      id: "M-047",
      title: "Shared Platform Workflow Contracts Foundation",
      next: "M-048",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-048": {
      id: "M-048",
      title: "Shared Platform AI Runtime Contracts Foundation",
      next: "M-049",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-049": {
      id: "M-049",
      title: "Shared Platform Agent Contracts Foundation",
      next: "M-050",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-050": {
      id: "M-050",
      title: "Shared Platform Memory Contracts Foundation",
      next: "M-051",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-051": {
      id: "M-051",
      title: "Shared Platform Knowledge Contracts Foundation",
      next: "M-052",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-052": {
      id: "M-052",
      title: "Shared Platform Retrieval Contracts Foundation",
      next: "M-053",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-053": {
      id: "M-053",
      title: "Shared Platform Retrieval Pipeline Contracts Foundation",
      next: "M-054",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-054": {
      id: "M-054",
      title: "Shared Platform Prompt Contracts Foundation",
      next: "M-055",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-055": {
      id: "M-055",
      title: "Shared Platform Tool Contracts Foundation",
      next: "M-056",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Completed",
    },

    "M-056": {
      id: "M-056",
      title: "Shared Platform Capability Contracts Foundation",
      next: "M-057",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Ready",
    },

    "M-057": {
      id: "M-057",
      title: "Shared Platform Planning Contracts Foundation",
      next: "M-058",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Planned",
    },

    "M-058": {
      id: "M-058",
      title: "Shared Platform Reasoning Contracts Foundation",
      next: "M-059",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Planned",
    },

    "M-059": {
      id: "M-059",
      title: "Shared Platform Execution Contracts Foundation",
      next: "M-060",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Planned",
    },

    "M-060": {
      id: "M-060",
      title: "Shared Platform Orchestration Contracts Foundation",
      phase: "Phase 2 — Shared Platform Foundation",
      status: "Planned",
    },
  };

export function getMilestone(id: string): MilestoneDefinition {
  const milestone = milestoneRegistry[id];

  if (!milestone) {
    throw new Error(`Unknown milestone: ${id}`);
  }

  return milestone;
}

export function getNextMilestone(
  milestone: MilestoneDefinition,
): MilestoneDefinition | undefined {
  return milestone.next ? milestoneRegistry[milestone.next] : undefined;
}

export function getMilestones(): readonly MilestoneDefinition[] {
  return Object.values(milestoneRegistry);
}
