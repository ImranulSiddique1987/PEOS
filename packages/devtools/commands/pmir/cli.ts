import { PMIRRenderer } from "./renderer.js";
import { PMIRRoadmap } from "./roadmap.js";

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

  const context = roadmap.createRenderingContext(options);

  console.log("========================================");
  console.log(" PEOS DevTools");
  console.log(" PMIR Automation Engine");
  console.log("========================================");
  console.log(`Current Version     : ${document.version}`);
  console.log(`Next Version        : ${context.version}`);
  console.log(`Completed Milestone : ${context.completedMilestone.id}`);
  console.log(`Next Milestone      : ${context.nextMilestone?.id ?? "None"}`);
  console.log("========================================");

  if (options.validateOnly) {
    console.log("Validation completed successfully.");
    return;
  }

  const renderer = new PMIRRenderer();

  const updatedContent = renderer.render(document, context);

  if (options.dryRun) {
    console.log("Dry run completed successfully.");
    return;
  }

  console.log(
    "PMIR rendering completed. File persistence will be enabled in the next iteration.",
  );

  void updatedContent;
}
