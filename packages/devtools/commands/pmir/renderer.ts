import { writeTextFile } from "./utils.js";

import { HistorySection } from "./sections/history.js";
import { LessonsSection } from "./sections/lessons.js";
import { RepositoryStateSection } from "./sections/repository-state.js";
import { RoadmapSection } from "./sections/roadmap.js";

import type { PMIRDocument, PMIRRenderingContext } from "./types.js";

import type { PMIRSectionRenderer } from "./sections/section-renderer.js";

/**
 * PMIR Renderer
 *
 * Orchestrates all PMIR section renderers.
 *
 * Responsibilities:
 * - Execute section renderers in deterministic order.
 * - Pass immutable rendering context.
 * - Persist rendered output.
 *
 * This class intentionally contains no business logic.
 */
export class PMIRRenderer {
  private readonly sections: readonly PMIRSectionRenderer[];

  constructor() {
    this.sections = [
      new RepositoryStateSection(),
      new RoadmapSection(),
      new HistorySection(),
      new LessonsSection(),
    ];
  }

  public render(document: PMIRDocument, context: PMIRRenderingContext): string {
    let content = document.content;

    for (const section of this.sections) {
      content = section.render(
        {
          ...document,
          content,
        },
        context,
      );
    }

    return content;
  }

  public save(path: string, content: string): void {
    writeTextFile(path, content);
  }
}
