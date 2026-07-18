import { ConstitutionMarkers, hasMarker } from "./markers.js";

import type {
  ConstitutionDocument,
  ConstitutionValidationResult,
} from "./model.js";

/**
 * Constitutional validator.
 *
 * Verifies the PMIR contains all mandatory machine-readable
 * constitutional markers before any update is performed.
 */
export class ConstitutionValidator {
  public validate(
    document: ConstitutionDocument,
  ): ConstitutionValidationResult {
    const errors: string[] = [];

    if (!hasMarker(document.content, ConstitutionMarkers.Version)) {
      errors.push(`Missing marker: ${ConstitutionMarkers.Version}`);
    }

    if (!hasMarker(document.content, ConstitutionMarkers.LatestCompleted)) {
      errors.push(`Missing marker: ${ConstitutionMarkers.LatestCompleted}`);
    }

    if (!hasMarker(document.content, ConstitutionMarkers.NextMilestone)) {
      errors.push(`Missing marker: ${ConstitutionMarkers.NextMilestone}`);
    }

    if (!document.version.value) {
      errors.push("PMIR version is missing.");
    }

    if (!document.latestCompleted.id) {
      errors.push("Latest completed milestone is missing.");
    }

    if (!document.nextMilestone?.id) {
      errors.push("Next milestone is missing.");
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  public ensure(document: ConstitutionDocument): void {
    const result = this.validate(document);

    if (!result.valid) {
      throw new Error(
        ["PMIR constitutional validation failed.", "", ...result.errors].join(
          "\n",
        ),
      );
    }
  }
}
