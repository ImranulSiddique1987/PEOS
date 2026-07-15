# PEOS Supported Toolchain

| Property              | Value                                                                    |
| --------------------- | ------------------------------------------------------------------------ |
| **Document**          | SUPPORTED_TOOLCHAIN.md                                                   |
| **Owner**             | PEOS Governance                                                          |
| **Status**            | Active                                                                   |
| **Version**           | 1.0.0                                                                    |
| **Last Updated**      | 2026-07-15                                                               |
| **Related Documents** | MASTER_IMPLEMENTATION_ROADMAP.md, WORKSPACE_PACKAGE_STANDARD.md, ADR-000 |

---

# Purpose

This document defines the officially supported development toolchain for the PEOS (Product Engineering Operating System) repository.

All contributors, CI/CD pipelines, and automation tooling **must** use the versions defined in this document unless an Architectural Decision Record (ADR) or approved governance milestone explicitly authorizes an update.

The objective of this document is to ensure repository stability, deterministic builds, consistent developer environments, and long-term maintainability.

---

# Runtime

| Component | Version     |
| --------- | ----------- |
| Node.js   | 24.18.0 LTS |
| npm       | 11.16.0     |
| Corepack  | Enabled     |

---

# Package Management

| Component | Version |
| --------- | ------- |
| pnpm      | 11.10.0 |

---

# Compiler

| Component  | Version |
| ---------- | ------- |
| TypeScript | 5.9.3   |

---

# Build System

| Component | Version |
| --------- | ------- |
| Turbo     | 2.10.4  |

---

# Testing

| Component | Version |
| --------- | ------- |
| Vitest    | 4.1.10  |

---

# Linting

| Component         | Version |
| ----------------- | ------- |
| ESLint            | 10.6.0  |
| typescript-eslint | 8.39.1  |

---

# Scope

This document defines the officially supported software toolchain for developing, validating, testing, building, and maintaining the PEOS repository.

This standard applies to:

- Repository contributors
- Local development environments
- Continuous Integration (CI)
- Continuous Delivery (CD)
- Build automation
- Governance automation
- Future infrastructure upgrades

Any deviation from this document must be approved through the PEOS governance process.

---

# Policy

The following policies are mandatory for all contributors:

- Use Corepack-managed pnpm.
- Do not install pnpm globally.
- Use only stable production releases.
- Do not use preview, beta, release candidate, nightly, or experimental compiler versions.
- Validate all toolchain upgrades before repository-wide adoption.
- Upgrade the supported toolchain only after successful repository-wide validation.
- Preserve successful Build, Lint, Typecheck, and Test execution before approving any toolchain change.
- Toolchain changes must never introduce repository instability.
- Infrastructure upgrades must be documented through Governance.
- Repository contributors should synchronize their local development environment with this document before contributing.

---

# Review Policy

The supported toolchain should be reviewed whenever one or more of the following occurs:

- A new Node.js LTS release becomes available.
- A major pnpm release becomes stable.
- A new stable TypeScript major release is published.
- Turbo introduces a significant stable release.
- Vitest introduces a significant stable release.
- ESLint introduces a significant stable release.
- Repository architecture requires new tooling.
- Infrastructure modernization is approved through Governance.

Toolchain upgrades should follow the standard PEOS implementation lifecycle:

1. Repository validation
2. Compatibility verification
3. Full workspace validation
4. Governance approval
5. Repository-wide adoption

---

# Validation Requirements

Before adopting any toolchain update, the following commands must complete successfully.

```bash
pnpm build -- --concurrency=1
pnpm lint -- --concurrency=1
pnpm typecheck -- --concurrency=1
pnpm test -- --concurrency=1
```

No toolchain update should be approved until all repository validation checks complete successfully.

---

# Supported Installation Method

The officially supported installation method is:

- Official Node.js LTS Installer
- Corepack enabled
- Corepack-managed pnpm
- Repository-defined packageManager version
- Stable TypeScript release

The following practices are **not supported**:

- Globally installed pnpm
- Preview TypeScript releases
- Nightly Node.js builds
- Experimental compiler versions
- Repository-specific toolchain overrides without Governance approval

---

# Related Milestones

- M-041 — Shared Platform Dependency Injection Contracts Foundation
- Infrastructure Investigation I-001 — Development Toolchain Stability

---

# Governance Approval

This document is governed under the PEOS Governance Framework.

Any modification to the supported development toolchain must:

- Preserve repository integrity.
- Successfully pass Build, Lint, Typecheck, and Test validation.
- Be reviewed through the PEOS governance process.
- Be approved through the appropriate Governance milestone.
- Be documented when architectural impact exists.
- Update this document upon successful adoption.

---

# Appendix A — Infrastructure Investigation I-001

## Title

Development Toolchain Stability

---

## Status

**Resolved**

---

## Background

During implementation of **M-041 – Shared Platform Dependency Injection Contracts Foundation**, repository-wide validation exposed persistent toolchain failures unrelated to the Platform implementation.

Initial symptoms suggested problems within:

- TypeScript
- DevTools
- PMIR Automation
- Platform Contracts

A structured infrastructure investigation isolated the failures to the local development toolchain.

---

## Root Cause

The instability resulted from a combination of:

- Older Node.js installation
- Mixed global and Corepack-managed pnpm installations
- TypeScript 6 preview compiler
- Toolchain version inconsistency
- Repository package manager mismatch

The repository implementation itself was verified as correct.

---

## Resolution

The development toolchain was standardized as follows:

- Node.js upgraded to **24.18.0 LTS**
- npm upgraded to **11.16.0**
- Corepack standardized
- pnpm standardized to **11.10.0**
- TypeScript standardized to **5.9.3**
- Repository packageManager updated
- Repository engines updated
- Development environment validated

---

## Validation

The following validations completed successfully:

- Repository installation
- Package resolution
- Corepack activation
- TypeScript compiler execution
- Workspace dependency validation
- Platform package validation
- PMIR Automation execution

---

## Result

The repository returned to a stable, reproducible, enterprise-grade development environment.

Infrastructure Investigation **I-001** is considered **Closed**.

---

## Lessons Learned

The following engineering principles are now permanent PEOS standards:

- Never assume the development environment is healthy.
- Investigate infrastructure before modifying application code.
- Standardize the development toolchain.
- Use Corepack-managed pnpm exclusively.
- Do not use globally installed pnpm.
- Use stable compiler releases only.
- Validate infrastructure upgrades before repository-wide adoption.
- Prefer root-cause analysis over workaround implementation.
- Preserve deterministic builds across all environments.
- Keep governance documentation synchronized with infrastructure changes.

---

## Future Improvements

Future infrastructure work may include:

- Automated toolchain verification
- Repository bootstrap validation
- Development environment diagnostics
- CI toolchain compliance checks
- Automated version compatibility verification
- Repository health reporting

These improvements should be implemented only when justified through future Governance milestones.

---

**End of Document**
