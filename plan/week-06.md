# Week 6 — Binary Search, Intervals, Greedy, Bits & Mocks

Round out the pattern toolkit, then spend the back half rehearsing under interview
conditions. By now the implement-block is lighter — the priority is timed practice and
plugging weak spots.

---

## Day 26 (Mon) — Binary search (and "binary search on the answer")

- **Theory:** the exact-match template (off-by-one discipline, loop invariant), lower/upper
  bound, and the powerful "binary search on the answer space" pattern.
- **Implement:** binary search + lower_bound/upper_bound + a "search on answer" example.
  → `python/algorithms/binary_search.py` (already stubbed) or another language.
- **LeetCode:** Binary Search (E), Search in Rotated Sorted Array (M), Find Minimum in Rotated Sorted Array (M),
  Koko Eating Bananas (M).

## Day 27 (Tue) — Intervals

- **Theory:** sort-by-start, sweep, the merge/overlap test. Classic interval patterns.
- **Implement:** merge intervals + insert interval utilities.
  → `algorithms/intervals`
- **LeetCode:** Merge Intervals (M), Insert Interval (M), Non-overlapping Intervals (M),
  Meeting Rooms II (M).

## Day 28 (Wed) — Greedy

- **Theory:** when greedy is provably correct (exchange argument), vs. when you need DP.
  Local-optimal → global-optimal intuition.
- **Implement:** a couple of greedy templates (interval scheduling, jump reachability).
  → `algorithms/greedy`
- **LeetCode:** Jump Game (M), Gas Station (M), Hand of Straights (M).

## Day 29 (Thu) — Bit manipulation & math

- **Theory:** AND/OR/XOR/shift, two's complement, common tricks (x & -x, n & (n-1), XOR for
  pairing). Useful in low-level/blockchain contexts.
- **Implement:** bit-trick helpers (count set bits, is-power-of-two, single-number via XOR).
  → `algorithms/bit-manipulation`
- **LeetCode:** Single Number (E), Number of 1 Bits (E), Counting Bits (E), Reverse Bits (E),
  Missing Number (E).

## Day 30 (Fri) — Mock interviews & consolidation

- **No new theory.** Do **2 timed 45-min mock problems** (use a random Medium + a Medium/Hard).
  Narrate out loud, no IDE autocomplete. Simulate the real thing.
- Review your "struggled" list from all 6 weeks; re-solve the 3 worst blank.
- Audit coverage: which patterns still feel shaky? Schedule targeted re-practice into the
  following week.

---

## After week 6

You've covered the core. Keep a maintenance rhythm:

- **Daily:** 1–2 Mediums to stay warm, rotating patterns.
- **Weekly:** 1 mock interview (pramp.com, interviewing.io, or with a peer).
- **Per company:** check their tagged LeetCode list; skim their tech stack and tailor.
- **Don't forget behavioral + system design** — for Sr roles these often weigh as much as
  the coding round. (Worth a separate prep track once DS&A feels solid.)
