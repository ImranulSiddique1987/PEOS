import * as fs from "node:fs";

import type { PMIRDocument, PMIRRenderingContext } from "./types.js";

import { RepositoryStateSection } from "./sections/repository-state.js";
import { RoadmapSection } from "./sections/roadmap.js";

import type { PMIRSectionRenderer } from "./sections/section-renderer.js";

export class PMIRRenderer {
  private readonly renderers: readonly PMIRSectionRenderer[];

  public constructor() {
    this.renderers = [new RepositoryStateSection(), new RoadmapSection()];
  }

  public render(document: PMIRDocument, context: PMIRRenderingContext): string {
    let content = document.content;

    for (const renderer of this.renderers) {
      content = renderer.render(
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
    fs.writeFileSync(path, content, "utf8");
  }
}
