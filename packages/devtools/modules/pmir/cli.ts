import { PMIRRenderer } from "./renderer.js";
import { PMIRRoadmap } from "./roadmap.js";
import { milestoneRegistry } from "./registry.js";

import type { PMIRUpdateOptions } from "./types.js";

function parseArguments(): PMIRUpdateOptions {
  const args = process.argv.slice(2);

  const index = args.indexOf("--milestone");

  if (index === -1 || index + 1 >= args.length) {
    throw new Error("Missing required argument: --milestone");
  }

  return {
    milestone: args[index + 1],
    dryRun: args.includes("--dry-run"),
    validateOnly: args.includes("--validate"),
  };
}

export async function runPMIRCli(): Promise<void> {
  const options = parseArguments();

  const roadmap = new PMIRRoadmap();

  const document = roadmap.getDocument();

  const completed = milestoneRegistry[options.milestone];

  if (!completed) {
    throw new Error(`Unknown milestone: ${options.milestone}`);
  }

  if (!completed.next) {
    throw new Error(
      `Milestone ${completed.id} does not define a next milestone.`,
    );
  }

  const next = milestoneRegistry[completed.next];

  if (!next) {
    throw new Error(`Unable to locate next milestone: ${completed.next}`);
  }

  const version = roadmap.getNextVersion();

  console.log("========================================");
  console.log(" PEOS DevTools");
  console.log(" PMIR Automation Engine");
  console.log("========================================");
  console.log(`Current Version     : ${document.version}`);
  console.log(`Next Version        : ${version}`);
  console.log(`Completed Milestone : ${completed.id}`);
  console.log(`Next Milestone      : ${next.id}`);
  console.log("========================================");

  if (options.validateOnly) {
    console.log("Validation completed successfully.");
    return;
  }

  const renderer = new PMIRRenderer();

  const updatedContent = renderer.render(document, version, completed, next);

  if (options.dryRun) {
    console.log("Dry run completed successfully.");
    return;
  }

  console.log(
    "PMIR rendering completed. File persistence will be enabled in the next iteration.",
  );

  void updatedContent;
}
