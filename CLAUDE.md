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

## Daily review notes

`review/` holds one file per study day: `day-01.md`, `day-02.md`, … Each is a recap of
what's worth revisiting later. Every day we add to that day's file:

1. **Highlights** — a summary of the topics worth reviewing.
2. **Comprehension questions** — the exact understanding-check questions posed that day
   (so I can re-test myself cold later).

Workflow each day: before I implement, you give me the comprehension questions for the
topic. After I've implemented and we've discussed, you write `review/day-NN.md` capturing
the highlights + those questions.

## Working agreement (for the assistant)

- Default to **explaining the algorithm first** (intuition, invariants, Big-O), then code.
- When illustrating a concept, **describe the problem in a paragraph** and use it to teach the
  idea — don't just name LeetCode problems (e.g. "Container With Most Water") as if I already
  know them. Assume I don't. Name-drops are fine as *labels after* the explanation, not as the
  explanation itself.
- Before I implement, **pose the comprehension questions** for the topic (these go into the
  day's review file).
- When I implement something, review for correctness, edge cases, and complexity — don't just hand me a solution.
- Keep implementations idiomatic per language; favor clarity over cleverness.
- If I'm stuck on a LeetCode problem, give hints in stages, not the full answer unless I ask.
