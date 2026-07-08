# Contributing to PEOS

Thank you for your interest in contributing to PEOS (Product Engineering Operating System).

This document describes the contribution process, development standards, and repository workflow.

---

# Repository Philosophy

PEOS follows an enterprise-first engineering approach.

Every contribution should improve one or more of the following:

- Reliability
- Maintainability
- Scalability
- Security
- Documentation
- Developer Experience

---

# Prerequisites

Before contributing, ensure you have installed:

- Node.js 24+
- pnpm 11+
- Git

---

# Development Setup

Clone the repository:

```bash
git clone <repository-url>
cd PEOS
```

Install dependencies:

```bash
pnpm install
```

---

# Development Commands

Start development:

```bash
pnpm dev
```

Build:

```bash
pnpm build
```

Lint:

```bash
pnpm lint
```

Run tests:

```bash
pnpm test
```

---

# Branching Strategy

- main → Production-ready code
- feature/* → New features
- fix/* → Bug fixes
- docs/* → Documentation
- chore/* → Maintenance

---

# Commit Messages

PEOS follows Conventional Commits.

Examples:

```text
feat(core): add workspace package generator

fix(ci): correct workflow permissions

docs: update repository guide
```

---

# Changesets

When a contribution changes package behavior or public APIs, add a Changeset before submitting the Pull Request.

---

# Pull Requests

Before opening a Pull Request:

- Ensure the project builds successfully.
- Run linting.
- Run tests.
- Update documentation if required.
- Add a Changeset when appropriate.

---

# Code Review

Every Pull Request should:

- Follow repository architecture.
- Keep changes focused.
- Avoid unrelated modifications.
- Preserve existing conventions.
- Include clear descriptions.

---

# Reporting Issues

Use the provided GitHub Issue Templates for:

- Bug Reports
- Feature Requests

---

# Questions

For general questions, use GitHub Discussions once available.

---

Thank you for helping improve PEOS.
