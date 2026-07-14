# PMIR Automation Specification (PAS)

---

| Item              | Value                                                                   |
| ----------------- | ----------------------------------------------------------------------- |
| Project           | PEOS (Product Engineering Operating System)                             |
| Document          | PMIR Automation Specification                                           |
| Identifier        | PAS-001                                                                 |
| Version           | 1.0.0                                                                   |
| Status            | Draft                                                                   |
| Owner             | PEOS DevTools                                                           |
| Package           | @peos/devtools                                                          |
| Module            | commands/pmir                                                           |
| Related Documents | PEOS Master Implementation Roadmap (PMIR), ADR-001, Workspace Standards |

---

# 1. Purpose

The PMIR Automation Specification (PAS) defines the architecture,
contracts, responsibilities and implementation rules governing the
automation of the PEOS Master Implementation Roadmap (PMIR).

This specification is the authoritative source governing how the PMIR
is parsed, validated, updated and rendered.

The objective is to eliminate manual synchronization work while ensuring
that the PMIR remains the single authoritative implementation roadmap
for the PEOS repository.

Automation shall always preserve repository integrity and shall never
modify content outside the responsibilities defined by this specification.

---

# 2. Objectives

The PMIR Automation Engine shall:

- Eliminate repetitive manual PMIR updates.
- Produce deterministic document updates.
- Preserve all manually authored sections.
- Update only explicitly owned sections.
- Support future automation modules.
- Maintain enterprise governance standards.
- Remain fully idempotent.
- Be testable.
- Be extensible.
- Be repository-first.

---

# 3. Design Principles

The automation shall follow these principles:

- Contract First
- Section Ownership
- Deterministic Rendering
- Repository First
- Incremental Evolution
- One Logical Responsibility Per Component
- Immutable Manual Content
- Validation Before Persistence
- Enterprise Traceability
- Backward Compatibility

---

# 4. PMIR Ownership Matrix

The PMIR is divided into independently managed sections.

Each section has exactly one owner.

Automation shall never modify a section that it does not own.

---

| PMIR Section                    | Owner      | Update Strategy |
| ------------------------------- | ---------- | --------------- |
| Document Header                 | Automation | Automatic       |
| Purpose                         | Human      | Manual          |
| Vision                          | Human      | Manual          |
| Engineering Principles          | Human      | Manual          |
| Repository Governance           | Human      | Manual          |
| Canonical Source of Truth       | Human      | Manual          |
| Architectural Maturity Gates    | Human      | Manual          |
| Current Repository State        | Automation | Automatic       |
| Repository Architecture         | Human      | Manual          |
| Workspace Taxonomy              | Human      | Manual          |
| Repository Principles           | Human      | Manual          |
| Repository Maturity             | Human      | Manual          |
| Governance Additions            | Human      | Manual          |
| Phase Roadmap                   | Automation | Automatic       |
| Milestone Lifecycle             | Human      | Manual          |
| Milestone Selection Rules       | Human      | Manual          |
| Dependency Policy               | Human      | Manual          |
| Strategic Backlog               | Human      | Manual          |
| Roadmap Governance              | Human      | Manual          |
| Roadmap Version History         | Automation | Automatic       |
| Enterprise Handoff Requirements | Human      | Manual          |
| Completion Criteria             | Human      | Manual          |
| Lessons Learned                 | Automation | Automatic       |
| Architecture Decision Records   | Human      | Manual          |
| Milestone Dependency Matrix     | Automation | Automatic       |
| Repository Health Checklist     | Human      | Manual          |
| Implementation Order            | Automation | Automatic       |

---

## Ownership Rules

Each PMIR section shall have exactly one owner.

Manual sections shall never be modified by automation.

Automatic sections shall be regenerated entirely from repository state.

Hybrid ownership is intentionally prohibited.

If a future requirement introduces mixed ownership, the section shall be
split into two independent sections rather than allowing partial updates.

This rule guarantees deterministic rendering and prevents automation from
overwriting manually maintained engineering knowledge.

---

# 5. Automation Responsibilities

The PMIR Automation Engine is composed of independent components.

Each component has a single responsibility.

Components communicate through well-defined contracts and shall not
duplicate responsibilities.

---

## 5.1 CLI

File:

commands/pmir/cli.ts

Responsibilities:

- Parse command line arguments.
- Validate execution options.
- Invoke the automation workflow.
- Display execution summary.
- Return appropriate exit codes.

The CLI shall never modify the PMIR directly.

---

## 5.2 Roadmap Service

File:

commands/pmir/roadmap.ts

Responsibilities:

- Load the current PMIR.
- Build the automation context.
- Resolve milestone information.
- Resolve repository version.
- Coordinate the rendering workflow.

The roadmap service shall never perform text rendering.

---

## 5.3 Parser

File:

commands/pmir/parser.ts

Responsibilities:

- Parse the PMIR.
- Validate document structure.
- Locate every owned section.
- Produce a structured PMIRDocument.

The parser shall never modify content.

---

## 5.4 Renderer

File:

commands/pmir/renderer.ts

Responsibilities:

- Invoke section renderers.
- Merge rendered sections.
- Produce the updated PMIR document.

The renderer shall never parse repository state.

---

## 5.5 Section Renderers

Folder:

commands/pmir/sections/

Responsibilities:

Each renderer owns one PMIR section.

Examples:

- Repository State
- Phase Roadmap
- Version History
- Lessons Learned
- Dependency Matrix
- Implementation Order

A section renderer may update only its own section.

---

## 5.6 Registry

File:

commands/pmir/registry.ts

Responsibilities:

- Maintain milestone metadata.
- Maintain milestone sequencing.
- Maintain implementation phases.
- Maintain milestone status.

The registry is the authoritative milestone catalogue.

---

## 5.7 Version Engine

File:

commands/pmir/version.ts

Responsibilities:

- Parse semantic versions.
- Increment versions.
- Validate version format.

---

## 5.8 Utilities

File:

commands/pmir/utils.ts

Responsibilities:

- File operations.
- Shared helper functions.
- Common validation.
- String utilities.

Utilities shall never contain business rules.

---

## 5.9 Types

File:

commands/pmir/types.ts

Responsibilities:

- Shared contracts.
- Shared interfaces.
- Shared result objects.
- Shared request models.

Types contain no implementation logic.

---

# 6. PMIR Rendering Pipeline

The PMIR Automation Engine shall execute the rendering workflow in a
strict, deterministic sequence.

Every execution shall follow the same pipeline.

No section renderer may execute outside this workflow.

---

## Rendering Pipeline

1. Parse command line arguments.
2. Validate execution options.
3. Load the PMIR document.
4. Parse the PMIR into a structured document model.
5. Validate the document structure.
6. Load milestone metadata from the registry.
7. Resolve the target repository version.
8. Build the rendering context.
9. Execute each section renderer in ownership order.
10. Merge rendered sections into a new PMIR document.
11. Validate the rendered document.
12. Persist the updated PMIR.
13. Display execution summary.
14. Return execution status.

---

## Rendering Order

Section renderers shall execute in the following order:

1. Document Header
2. Current Repository State
3. Phase Roadmap
4. Roadmap Version History
5. Lessons Learned
6. Milestone Dependency Matrix
7. Implementation Order

The rendering order is fixed.

Future sections may only be appended to this list.

Existing rendering order shall never be changed without an approved
Architecture Decision Record (ADR).

---

## Deterministic Execution

For identical inputs, the automation shall always produce identical
outputs.

The renderer shall not depend on:

- Current system time (unless explicitly requested).
- Random values.
- Execution order variations.
- Non-deterministic repository state.

This guarantees repeatable execution and simplifies validation.

---

# 7. Validation Rules

Every execution of the PMIR Automation Engine shall perform validation
before any modification is written to the repository.

Validation is mandatory.

No document shall be persisted if any validation step fails.

---

## 7.1 Validation Levels

Validation shall occur in five stages.

### Stage 1 — Repository Validation

The automation shall verify:

- PMIR document exists.
- Repository structure is valid.
- Required governance files exist.
- Required command modules are available.

Failure terminates execution.

---

### Stage 2 — Document Validation

The parser shall verify:

- Document header exists.
- Required sections exist.
- Section ordering is valid.
- Required headings are unique.
- PMIR version is present.
- Current milestone is identifiable.

Failure terminates execution.

---

### Stage 3 — Ownership Validation

The renderer shall verify:

- Every section has exactly one owner.
- No manual section is modified.
- No unknown section is modified.
- No duplicate section renderer exists.

Failure terminates execution.

---

### Stage 4 — Rendering Validation

The renderer shall verify:

- Every owned section rendered successfully.
- No unresolved placeholders remain.
- No duplicated generated content exists.
- Markdown structure remains valid.

Failure terminates execution.

---

### Stage 5 — Repository Validation

Before persistence the automation shall verify:

- Updated document is structurally valid.
- Version progression is valid.
- Milestone progression is valid.
- Generated content passes all validation rules.

Only then may the updated PMIR be written.

---

## 7.2 Fail Fast Policy

The PMIR Automation Engine shall never guess.

If required information cannot be determined with certainty,
execution shall terminate immediately.

Examples include:

- Missing section
- Duplicate heading
- Unknown milestone
- Invalid version
- Missing dependency
- Unknown repository state

Best-effort updates are prohibited.

---

## 7.3 Exit Codes

| Exit Code | Meaning                     |
| --------- | --------------------------- |
| 0         | Success                     |
| 1         | Validation Failure          |
| 2         | Parser Failure              |
| 3         | Rendering Failure           |
| 4         | Repository Failure          |
| 5         | Internal Automation Failure |

Every failure shall produce a deterministic and human-readable error
message.

---

## 7.4 Immutable Manual Content

Automation shall never modify:

- Vision
- Engineering Principles
- Repository Governance
- Strategic Backlog
- ADR Content
- Human-authored governance text

Only automation-owned sections may be regenerated.

---

# 8. Section Renderer Contract

Every PMIR section renderer shall implement a common rendering contract.

The objective is to ensure that every renderer behaves consistently,
is independently testable, and can be executed deterministically by
the PMIR Renderer.

---

## 8.1 Responsibilities

A section renderer shall:

- Own exactly one PMIR section.
- Receive a validated PMIR document.
- Receive a validated rendering context.
- Update only its owned section.
- Return the updated document.

A renderer shall never:

- Modify another section.
- Parse repository state.
- Read or write files.
- Execute another renderer.
- Modify manual content.

---

## 8.2 Required Inputs

Every renderer shall receive:

- Parsed PMIR document.
- Rendering context.
- Repository metadata.
- Milestone metadata.
- Version information.

Renderers shall never access the file system directly.

---

## 8.3 Required Output

Every renderer shall return:

- Updated PMIR document.

The renderer shall never return partial updates.

---

## 8.4 Idempotency

Running the same renderer multiple times using identical inputs
shall always produce identical output.

Repeated execution shall never duplicate content.

---

## 8.5 Error Handling

If a renderer cannot complete its responsibility it shall:

1. Stop immediately.
2. Return a deterministic error.
3. Leave the document unchanged.

Partial rendering is prohibited.

---

## 8.6 Future Renderers

Future renderers may be introduced only for new automation-owned
sections.

Existing renderers shall not assume knowledge of future sections.

This guarantees long-term extensibility without introducing coupling.

---

# 9. Rendering Context Contract

Every section renderer shall receive exactly one rendering context.

The rendering context is the single source of runtime information during
PMIR generation.

Individual renderers shall never request additional parameters.

---

## 9.1 Rendering Context

The rendering context shall contain:

- Repository metadata
- PMIR version
- Current milestone
- Completed milestone
- Next milestone
- Phase information
- Registry information
- Generated timestamp (optional)
- Automation options
- Validation results

---

## 9.2 Context Ownership

The rendering context is created exactly once.

Ownership:

Roadmap Service

The rendering context is immutable after creation.

Renderers shall never modify the rendering context.

---

## 9.3 Benefits

Using a shared rendering context provides:

- Single source of truth
- Reduced coupling
- Easier testing
- Simpler renderer implementations
- Future extensibility
- Deterministic execution

---

## 9.4 Example

The following is a conceptual representation only.

```
Rendering Context
│
├── Repository
├── PMIR Version
├── Current Phase
├── Completed Milestone
├── Next Milestone
├── Registry
├── Validation
└── Options
```

The exact implementation is defined by the TypeScript contracts and not
by this specification.

---

# 10. PMIR Automation Roadmap

The PMIR Automation Engine shall evolve incrementally.

Features shall be introduced through logical milestones while preserving
backward compatibility.

---

## Phase A — Foundation

- Command Line Interface
- Parser
- Renderer
- Registry
- Version Engine
- Validation
- Repository State Rendering
- Lessons Rendering
- Version History Rendering

---

## Phase B — Complete PMIR Automation

- Dependency Matrix Rendering
- Phase Roadmap Rendering
- Implementation Order Rendering
- Automatic Milestone Promotion
- Automatic Version Advancement
- Repository Snapshot Generation

---

## Phase C — Enterprise Integration

- Enterprise Handoff Generation
- Repository Validation
- Governance Validation
- ADR Integration
- Release Integration
- Changelog Integration

---

## Phase D — Intelligent Automation

Future capabilities may include:

- Repository Analysis
- Change Impact Analysis
- Milestone Recommendations
- Engineering Analytics
- Automated Governance Reports

All future capabilities shall remain compatible with this specification.
