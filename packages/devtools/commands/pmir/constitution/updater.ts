import { ConstitutionMarkers, buildMarker } from "./markers.js";

import type {
  ConstitutionDocument,
  ConstitutionUpdateRequest,
  ConstitutionUpdateResult,
} from "./model.js";

/**
 * Constitutional Update Engine
 *
 * Updates ONLY machine-owned constitutional values.
 * Human-authored content is never modified.
 */
export class ConstitutionUpdater {
  private replaceAfterMarker(
    content: string,
    marker: string,
    newValue: string,
  ): string {
    const escaped = marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(
      `(<!--\\s*${escaped}\\s*-->\\s*\\r?\\n)([^\\r\\n]+)`,
      "m",
    );

    if (!regex.test(content)) {
      throw new Error(
        `Unable to locate constitutional marker: ${buildMarker(marker as never)}`,
      );
    }

    return content.replace(regex, `$1${newValue}`);
  }

  public update(
    document: ConstitutionDocument,
    request: ConstitutionUpdateRequest,
  ): ConstitutionUpdateResult {
    let updated = document.content;

    updated = this.replaceAfterMarker(
      updated,
      ConstitutionMarkers.Version,
      request.version,
    );

    updated = this.replaceAfterMarker(
      updated,
      ConstitutionMarkers.LatestCompleted,
      request.completedMilestone,
    );

    if (request.nextMilestone) {
      updated = this.replaceAfterMarker(
        updated,
        ConstitutionMarkers.NextMilestone,
        request.nextMilestone,
      );
    }

    return {
      updatedContent: updated,
      previousVersion: document.version.value,
      newVersion: request.version,
      completedMilestone: request.completedMilestone,
      nextMilestone: request.nextMilestone,
    };
  }
}
