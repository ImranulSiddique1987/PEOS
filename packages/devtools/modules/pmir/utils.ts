import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

/**
 * Reads a UTF-8 text file.
 */
export function readTextFile(path: string): string {
  if (!existsSync(path)) {
    throw new Error(`File not found: ${path}`);
  }

  return readFileSync(path, "utf8");
}

/**
 * Writes a UTF-8 text file.
 */
export function writeTextFile(path: string, content: string): void {
  writeFileSync(path, content, "utf8");
}

/**
 * Replaces all matching values.
 */
export function replaceValue(
  content: string,
  search: RegExp,
  replacement: string,
): string {
  return content.replace(search, replacement);
}

/**
 * Ensures that a replacement actually occurred.
 */
export function replaceRequired(
  content: string,
  search: RegExp,
  replacement: string,
  description: string,
): string {
  if (!search.test(content)) {
    throw new Error(`Unable to locate ${description}.`);
  }

  return content.replace(search, replacement);
}

/**
 * Returns the parent directory of a path.
 */
export function getDirectory(path: string): string {
  return dirname(path);
}
