import { replaceRequired, writeTextFile } from "./utils.js";

import type { MilestoneDefinition, PMIRDocument } from "./types.js";

export class PMIRRenderer {
  public render(
    document: PMIRDocument,
    version: string,
    completed: MilestoneDefinition,
    next: MilestoneDefinition,
  ): string {
    let content = document.content;

    content = replaceRequired(
      content,
      /Version\s+\d+\.\d+\.\d+/,
      `Version ${version}`,
      "PMIR Version",
    );

    content = replaceRequired(
      content,
      /PMIR Version:\s*\d+\.\d+\.\d+/,
      `PMIR Version: ${version}`,
      "Repository Version",
    );

    content = replaceRequired(
      content,
      /Latest Completed Milestone\s+M-\d+\s+—\s+.+/,
      `Latest Completed Milestone ${completed.id} — ${completed.title}`,
      "Latest Completed Milestone",
    );

    content = replaceRequired(
      content,
      /Next Milestone\s+M-\d+\s+—\s+.+/,
      `Next Milestone ${next.id} — ${next.title}`,
      "Next Milestone",
    );

    return content;
  }

  public save(path: string, content: string): void {
    writeTextFile(path, content);
  }
}
