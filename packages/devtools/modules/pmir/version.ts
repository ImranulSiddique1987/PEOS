/**
 * Calculates the next semantic PMIR version.
 *
 * Current strategy:
 * - Increment PATCH version only.
 *
 * Examples:
 * 1.2.0 -> 1.2.1
 * 1.2.1 -> 1.2.2
 */
export function nextVersion(current: string): string {
  const parts = current.split(".").map(Number);

  if (parts.length !== 3 || parts.some(Number.isNaN)) {
    throw new Error(`Invalid semantic version: ${current}`);
  }

  const [major, minor, patch] = parts;

  return `${major}.${minor}.${patch + 1}`;
}

/**
 * Validates semantic version format.
 */
export function isValidVersion(version: string): boolean {
  return /^\d+\.\d+\.\d+$/.test(version);
}

/**
 * Compares two semantic versions.
 *
 * Returns:
 * -1 => current < target
 *  0 => equal
 *  1 => current > target
 */
export function compareVersions(current: string, target: string): number {
  const currentParts = current.split(".").map(Number);
  const targetParts = target.split(".").map(Number);

  for (let i = 0; i < 3; i++) {
    if (currentParts[i] < targetParts[i]) {
      return -1;
    }

    if (currentParts[i] > targetParts[i]) {
      return 1;
    }
  }

  return 0;
}
