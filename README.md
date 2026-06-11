# coding-interview

DS&A practice repo. Implement data structures & algorithms from scratch in
**TypeScript**, **Python**, and **Rust**, alongside LeetCode practice.

See [`plan/README.md`](plan/README.md) for the 6-week study plan and
[`CLAUDE.md`](CLAUDE.md) for how the repo is organized.

## Quick start

```bash
# TypeScript
cd typescript && npm install && npm test

# Python  (uses a virtualenv + pytest)
cd python && python -m venv .venv && source .venv/bin/activate && pip install -e ".[dev]" && pytest

# Rust
cd rust && cargo test
```

Or from the repo root, with `make`:

```bash
make test        # everything
make test-ts
make test-py
make test-rs
```

### Run a single topic's tests

Pass `NAME=` a substring of the file/test name — no need to run the whole suite:

```bash
make t-ts NAME=dynamic-array   # cd typescript && npx vitest run dynamic-array
make t-py NAME=binary_search   # cd python && pytest -k binary_search
make t-rs NAME=stack           # cd rust && cargo test stack
```

Or call the runners directly: `npx vitest run <pat>` / `pytest -k <pat>` /
`cargo test <pat>`. Add `npx vitest <pat>` (no `run`) for watch mode while coding.

## Conventions

| Language   | Test framework | Test file pattern        | Where code goes                          |
|------------|----------------|--------------------------|------------------------------------------|
| TypeScript | Vitest         | `*.test.ts` (co-located) | `typescript/src/{data-structures,algorithms}/` |
| Python     | Pytest         | `*_test.py` (co-located) | `python/{data_structures,algorithms}/`   |
| Rust       | built-in       | inline `#[cfg(test)]`    | `rust/src/{data_structures,algorithms}/` |

Each topic = one implementation file + its tests. Keep names matching the plan
(e.g. `binary-search`, `union-find`, `dijkstra`).
