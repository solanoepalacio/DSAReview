# CLAUDE.md

Personal repo to re-train **Data Structures & Algorithms** for coding interviews
(targeting Sr backend roles in blockchain / AI-agent companies).

## What this repo is

- I implement core data structures & algorithms **from scratch** here (45–60 min/day).
- I then solve related LeetCode problems (rest of a ~3h daily block).
- Languages: **TypeScript**, **Python**, **Rust**. Some topics are done in more than one.

## Layout

- `plan/` — the 6-week study plan (`week-01.md` … `week-06.md`), Mon–Fri. Start at `plan/README.md`.
- `typescript/` — Vitest. Code + co-located `*.test.ts`.
- `python/` — Pytest. Code + co-located `*_test.py`.
- `rust/` — single Cargo lib crate, inline `#[cfg(test)]` tests.

Mirror the plan: put each implementation under `data-structures/` or `algorithms/`
in whichever language directory I'm using that day.

## Running

```bash
make test        # run all languages
make test-ts     # TypeScript only   (cd typescript && npm test)
make test-py     # Python only       (cd python && pytest)
make test-rs     # Rust only         (cd rust && cargo test)

# Run a single topic (NAME = substring of the file/test name):
make t-ts NAME=dynamic-array
make t-py NAME=binary_search
make t-rs NAME=stack
```

## Working agreement (for the assistant)

- Default to **explaining the algorithm first** (intuition, invariants, Big-O), then code.
- When I implement something, review for correctness, edge cases, and complexity — don't just hand me a solution.
- Keep implementations idiomatic per language; favor clarity over cleverness.
- If I'm stuck on a LeetCode problem, give hints in stages, not the full answer unless I ask.
