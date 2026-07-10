# PEOS Workspace Package Standard

| Item       | Value                           |
| ---------- | ------------------------------- |
| Document   | PEOS Workspace Package Standard |
| Version    | 1.0.0                           |
| Status     | Active                          |
| Owner      | @peos/governance                |
| Applies To | All workspace packages          |

---

# 1. Purpose

The PEOS Workspace Package Standard defines the architectural contract for all workspace packages within the PEOS monorepo.

Its purpose is to ensure every package follows a consistent structure while preserving the unique responsibilities of each package category.

The standard promotes:

- Consistency
- Maintainability
- Reusability
- Discoverability
- Long-term scalability

---

# 2. Scope

This standard applies to every package located under:

```text
packages/
```

The standard governs:

- Package categorization
- Package metadata
- Package responsibilities
- Build expectations
- Export conventions
- Workspace consistency

This document does not govern:

- Application packages
- Service implementations
- Runtime business logic

---

# 3. Workspace Package Categories

PEOS currently defines the following workspace package categories.

| Category      | Purpose                                                           |
| ------------- | ----------------------------------------------------------------- |
| Runtime       | Reusable runtime libraries consumed by applications and services. |
| Configuration | Shared configuration for development tools and infrastructure.    |
| Testing       | Shared testing infrastructure and configuration.                  |
| Development   | Shared development tooling used by contributors.                  |
| Documentation | Shared documentation assets and documentation infrastructure.     |
| Governance    | Engineering governance artifacts and implementation standards.    |

Every workspace package shall belong to exactly one category.

---

# 4. Runtime Package Standard

## Purpose

Runtime packages provide reusable implementation shared across applications and services.

## Required

- `name`
- `version`
- `private`
- `description`
- `type`
- `main`
- `types`
- `exports`
- `files`
- `build`
- `lint`
- `typecheck`
- `test`

## Optional

- `clean`
- Additional runtime exports

## Not Applicable

- Governance artifacts
- Documentation-only content

## Current Example

- `@peos/core`

---

# 5. Configuration Package Standard

## Purpose

Configuration packages provide reusable configuration for tools used throughout the PEOS workspace.

## Required

- `name`
- `version`
- `private`
- `description`
- Appropriate `exports`

## Optional

- `peerDependencies`
- `files`

## Build Expectations

Configuration packages normally do not produce compiled runtime artifacts.

## Current Examples

- `@peos/commitlint`
- `@peos/eslint-config`
- `@peos/prettier-config`
- `@peos/tailwind`
- `@peos/tsconfig`

---

# 6. Testing Package Standard

## Purpose

Testing packages provide shared testing infrastructure and configuration.

## Required

- `name`
- `version`
- `private`
- `description`
- `exports`

## Optional

- `peerDependencies`
- Testing utilities

## Build Expectations

Testing packages expose reusable testing configuration rather than application runtime code.

## Current Example

- `@peos/testing`

---

# 7. Development Package Standard

## Purpose

Development packages provide reusable tooling that supports engineering workflows.

## Required

- `name`
- `version`
- `private`
- `description`

## Build Expectations

Development packages may not require compilation.

No-op validation scripts are acceptable when no build artifacts are produced.

## Current Examples

- `@peos/devtools`
- `@peos/husky`

---

# 8. Documentation Package Standard

## Purpose

Documentation packages contain shared documentation infrastructure.

They do not contain runtime functionality.

## Required

- `name`
- `version`
- `private`
- `description`
- Documentation assets

## Build Expectations

Documentation packages normally do not produce runtime artifacts.

## Current Example

- `@peos/documentation`

---

# 9. Governance Package Standard

## Purpose

Governance packages define engineering execution, standards, and architectural guidance.

Governance artifacts direct implementation but are not part of the runtime platform.

## Required

- `name`
- `version`
- `private`
- `description`
- Governance documents

## Typical Contents

- Master Implementation Roadmap (PMIR)
- Engineering standards
- Architecture governance
- Compliance documentation

## Build Expectations

Governance packages normally do not produce runtime artifacts.

## Current Example

- `@peos/governance`

---

# 10. Compliance Matrix

The following matrix records compliance of current workspace packages against this standard.

| Package               | Category      | Compliance   | Notes                                                                                                        |
| --------------------- | ------------- | ------------ | ------------------------------------------------------------------------------------------------------------ |
| @peos/core            | Runtime       | ✅ Compliant | Conforms to the Runtime Package Standard.                                                                    |
| @peos/testing         | Testing       | ✅ Compliant | Conforms to the Testing Package Standard.                                                                    |
| @peos/documentation   | Documentation | ✅ Compliant | Conforms to the Documentation Package Standard.                                                              |
| @peos/devtools        | Development   | ✅ Compliant | Conforms to the Development Package Standard.                                                                |
| @peos/governance      | Governance    | ✅ Compliant | Conforms to the Governance Package Standard.                                                                 |
| @peos/commitlint      | Configuration | ✅ Compliant | Conforms to the Configuration Package Standard.                                                              |
| @peos/eslint-config   | Configuration | ✅ Compliant | Conforms to the Configuration Package Standard.                                                              |
| @peos/prettier-config | Configuration | ✅ Compliant | Conforms to the Configuration Package Standard.                                                              |
| @peos/tailwind        | Configuration | ✅ Compliant | Conforms to the Configuration Package Standard.                                                              |
| @peos/tsconfig        | Configuration | ✅ Compliant | Conforms to the Configuration Package Standard.                                                              |
| @peos/husky           | Development   | ✅ Compliant | Current classification is acceptable. Future architectural reviews may refine package taxonomy if justified. |

---

# 11. Architectural Notes

The current workspace package taxonomy has been validated against the repository.

Future architectural reviews may refine package classifications as the platform evolves.

Such refinements shall be introduced only through an approved implementation milestone and must preserve existing package responsibilities unless an explicit architectural decision authorizes a change.

This standard shall evolve incrementally alongside the repository and remain aligned with the PEOS Master Implementation Roadmap (PMIR).
