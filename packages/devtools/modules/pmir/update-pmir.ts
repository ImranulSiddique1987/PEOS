/**
 * PEOS DevTools
 * PMIR Update Command
 *
 * Thin entry point that delegates execution to the PMIR CLI.
 */

import { runPMIRCli } from "./cli.js";

async function main(): Promise<void> {
  try {
    await runPMIRCli();
  } catch (error) {
    console.error(error);

    process.exitCode = 1;
  }
}

void main();
