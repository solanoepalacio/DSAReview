# Week 6 — Binary Search, Intervals, Greedy, Bits & Mocks

Round out the pattern toolkit, then spend the back half rehearsing under interview
conditions. By now the implement-block is lighter — the priority is timed practice and
plugging weak spots.

> **Top 150** numbers below refer to LeetCode's "Top Interview 150" study plan.
> Check off `[x]` as you go.

---

## Day 26 (Mon) — Binary search (and "binary search on the answer")

- **Theory:** the exact-match template (off-by-one discipline, loop invariant), lower/upper
  bound, and the powerful "binary search on the answer space" pattern.
- **Implement:**
  - [ ] binary search + lower_bound/upper_bound + a "search on answer" example → `python/algorithms/binary_search.py` (already stubbed) or another language
- **LeetCode:**
  - [ ] Binary Search (E)
  - [ ] Search in Rotated Sorted Array (M)
  - [ ] Find Minimum in Rotated Sorted Array (M)
  - [ ] Koko Eating Bananas (M)
- **Top 150:**
  - [ ] 35 Search Insert Position (E)
  - [ ] 74 Search a 2D Matrix (M)
  - [ ] 162 Find Peak Element (M)
  - [ ] 33 Search in Rotated Sorted Array (M)
  - [ ] 34 Find First and Last Position (M)
  - [ ] 153 Find Minimum in Rotated Sorted Array (M)
  - [ ] 4 Median of Two Sorted Arrays (H)

## Day 27 (Tue) — Intervals

- **Theory:** sort-by-start, sweep, the merge/overlap test. Classic interval patterns.
- **Implement:**
  - [ ] merge intervals + insert interval utilities → `algorithms/intervals`
- **LeetCode:**
  - [ ] Merge Intervals (M)
  - [ ] Insert Interval (M)
  - [ ] Non-overlapping Intervals (M)
  - [ ] Meeting Rooms II (M)
- **Top 150:**
  - [ ] 228 Summary Ranges (E)
  - [ ] 56 Merge Intervals (M)
  - [ ] 57 Insert Interval (M)
  - [ ] 452 Minimum Number of Arrows to Burst Balloons (M)

## Day 28 (Wed) — Greedy

- **Theory:** when greedy is provably correct (exchange argument), vs. when you need DP.
  Local-optimal → global-optimal intuition.
- **Implement:**
  - [ ] a couple of greedy templates (interval scheduling, jump reachability) → `algorithms/greedy`
- **LeetCode:**
  - [ ] Jump Game (M)
  - [ ] Gas Station (M)
  - [ ] Hand of Straights (M)
- **Top 150:**
  - [ ] 55 Jump Game (M)
  - [ ] 45 Jump Game II (M)
  - [ ] 134 Gas Station (M)
  - [ ] 135 Candy (H)
  - [ ] 122 Best Time to Buy and Sell Stock II (M)
  - [ ] 274 H-Index (M)

## Day 29 (Thu) — Bit manipulation & math

- **Theory:** AND/OR/XOR/shift, two's complement, common tricks (x & -x, n & (n-1), XOR for
  pairing). Useful in low-level/blockchain contexts.
- **Implement:**
  - [ ] bit-trick helpers (count set bits, is-power-of-two, single-number via XOR) → `algorithms/bit-manipulation`
- **LeetCode:**
  - [ ] Single Number (E)
  - [ ] Number of 1 Bits (E)
  - [ ] Counting Bits (E)
  - [ ] Reverse Bits (E)
  - [ ] Missing Number (E)
- **Top 150:**
  - [ ] 67 Add Binary (E)
  - [ ] 190 Reverse Bits (E)
  - [ ] 191 Number of 1 Bits (E)
  - [ ] 136 Single Number (E)
  - [ ] 137 Single Number II (M)
  - [ ] 201 Bitwise AND of Numbers Range (M)

## Day 30 (Fri) — Mock interviews & consolidation

- **No new theory.** Do **2 timed 45-min mock problems** (use a random Medium + a Medium/Hard).
  Narrate out loud, no IDE autocomplete. Simulate the real thing.
- Review your "struggled" list from all 6 weeks; re-solve the 3 worst blank.
- **Top 150 grab-bag** (sections not slotted elsewhere — good random-mock material):
  - *Matrix:*
    - [ ] 36 Valid Sudoku (M)
    - [ ] 54 Spiral Matrix (M)
    - [ ] 48 Rotate Image (M)
    - [ ] 73 Set Matrix Zeroes (M)
    - [ ] 289 Game of Life (M)
  - *Math:*
    - [ ] 9 Palindrome Number (E)
    - [ ] 66 Plus One (E)
    - [ ] 172 Factorial Trailing Zeroes (M)
    - [ ] 69 Sqrt(x) (E)
    - [ ] 50 Pow(x, n) (M)
    - [ ] 149 Max Points on a Line (H)
  - *Kadane:*
    - [ ] 53 Maximum Subarray (M)
    - [ ] 918 Maximum Sum Circular Subarray (M)
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
