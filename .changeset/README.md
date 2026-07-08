# Changesets

This directory contains Changesets configuration and pending release notes for the PEOS monorepo.

## Purpose

Changesets provides:

- Semantic versioning
- Automated changelog generation
- Monorepo version management
- Enterprise release workflow
- Foundation for future package publishing

## Contents

- `config.json` — Repository-wide Changesets configuration.
- `*.md` — Individual changeset files created with `pnpm exec changeset`.

These markdown files describe package changes and determine the next version bump during the release process.
