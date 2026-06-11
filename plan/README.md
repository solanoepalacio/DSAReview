# 6-Week Interview Prep Plan

**Goal:** re-sharpen DS&A for live coding interviews (Sr backend, blockchain / AI-agent roles).
**Cadence:** Mon–Fri, ~3h/day. Weekends = rest or catch-up on missed days.

## Daily structure (~3h)

1. **Theory (20–30 min)** — read/understand the day's topic *before* coding. Know the
   invariants, the Big-O, and *when* you'd reach for it.
2. **Implement from scratch (45–60 min)** — build the day's data structure / algorithm in
   this repo, in TS, Python, or Rust. Write tests. This cements the mechanics.
3. **LeetCode (~90 min)** — solve the listed problems. Start with Easy/Medium to warm up,
   push into the harder one if time allows. Re-solve missed ones the next morning.

## The 6 weeks

| Week | Theme | File |
|------|-------|------|
| 1 | Arrays, strings, two pointers, hashing, sliding window | [week-01.md](week-01.md) |
| 2 | Linked lists, stacks, queues, monotonic stack | [week-02.md](week-02.md) |
| 3 | Trees, BST, heaps, tries | [week-03.md](week-03.md) |
| 4 | Graphs: DFS/BFS, topo sort, union-find, Dijkstra | [week-04.md](week-04.md) |
| 5 | Recursion, divide & conquer, backtracking, DP | [week-05.md](week-05.md) |
| 6 | Binary search, intervals, greedy, bit tricks, mocks | [week-06.md](week-06.md) |

## How to use the daily entries

Each day lists: **Theory** (what to read), **Implement** (what to build here, with a
suggested path), and **LeetCode** (problems, with difficulty). The implement target tells
you which folder/language — but feel free to redo a structure in a second language on a
lighter day; that's some of the best reinforcement.

## Method notes

- **Spaced repetition:** keep a running list of problems you struggled with; re-attempt
  them ~3 days later from a blank editor.
- **Talk out loud.** In a real interview you narrate. Practice stating the brute force,
  the complexity, then the optimization *before* coding.
- **Time-box.** If a LeetCode problem exceeds ~35 min, read the editorial, understand it,
  and re-solve from scratch the next day.
- **Patterns over problems.** The goal isn't to memorize 300 problems; it's to recognize
  the ~15 patterns (two pointers, sliding window, BFS/DFS, backtracking, DP, binary search
  on the answer, monotonic stack, union-find, heap top-k).

## Reference resources

- **NeetCode 150 roadmap** — maps 1:1 to most weeks here (neetcode.io/roadmap).
- **CLRS** (*Introduction to Algorithms*) — deep theory when you want the proof.
- **Sedgewick, *Algorithms*** — clean, practical explanations + diagrams.
- **VisuAlgo** (visualgo.net) — animated data structures, great for intuition.
- **Tech Interview Handbook** (techinterviewhandbook.org) — patterns + behavioral.
