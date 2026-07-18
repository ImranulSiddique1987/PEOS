/**
 * PEOS PMIR Constitutional Automation Engine
 * Constitutional Marker Definitions
 *
 * These markers are the ONLY machine-readable contract
 * between the PMIR Constitution and the Automation Engine.
 *
 * Never depend on chapter numbers or section titles.
 */

export const ConstitutionMarkers = {
  Version: "PMIR:VERSION",

  LatestCompleted: "PMIR:LATEST_COMPLETED",

  NextMilestone: "PMIR:NEXT_MILESTONE",
} as const;

export type ConstitutionMarkerName =
  (typeof ConstitutionMarkers)[keyof typeof ConstitutionMarkers];

/**
 * Markdown marker format:
 *
 * <!-- PMIR:VERSION -->
 * <!-- PMIR:LATEST_COMPLETED -->
 * <!-- PMIR:NEXT_MILESTONE -->
 */
export function buildMarker(name: ConstitutionMarkerName): string {
  return `<!-- ${name} -->`;
}

/**
 * Finds the position of a constitutional marker.
 */
export function findMarker(
  content: string,
  marker: ConstitutionMarkerName,
): number {
  return content.indexOf(buildMarker(marker));
}

/**
 * Determines whether a marker exists.
 */
export function hasMarker(
  content: string,
  marker: ConstitutionMarkerName,
): boolean {
  return findMarker(content, marker) >= 0;
}

/**
 * Ensures a marker exists.
 */
export function requireMarker(
  content: string,
  marker: ConstitutionMarkerName,
): number {
  const index = findMarker(content, marker);

  if (index < 0) {
    throw new Error(`Missing constitutional marker: ${buildMarker(marker)}`);
  }

  return index;
}
