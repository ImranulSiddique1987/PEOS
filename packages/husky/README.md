# @peos/husky

Shared Husky configuration package for the PEOS (Product Engineering Operating System) monorepo.

## Purpose

This package centralizes the repository's Git hook configuration to ensure a consistent development workflow across all applications and packages.

## Responsibilities

- Manage shared Git hook configuration.
- Enforce repository quality gates.
- Integrate with lint-staged and other repository tooling.
- Support Conventional Commits and repository standards.

## Scope

This package contains only shared Husky configuration. Individual applications and packages must not define their own Git hook configuration.
