# Day 01 — Complexity & Dynamic Arrays

**Implemented:** `typescript/src/data-structures/dynamic-array.ts` (resizable vector,
grow-by-doubling).

---

## Highlights

### Why doubling capacity gives *amortized* O(1) append

A dynamic array stores elements in a fixed-capacity buffer. While there's spare capacity,
`push` is a plain O(1) write. When the buffer is full, we **allocate a new buffer of double
the size and copy everything over** — that single push is O(n). The question is: averaged
over many pushes, what does each one cost?

**Aggregate analysis.** Start empty and do `n` pushes. Resizes happen when the array is
full — at sizes 1, 2, 4, 8, …, up to n. The copy work done across *all* resizes is:

```
1 + 2 + 4 + 8 + ... + n  ≈  2n      (a geometric series sums to ~2× its last term)
```

So the total cost of `n` pushes is `n` cheap writes + `~2n` copy operations = **O(n) total**.
Divide by n pushes → **O(1) amortized per push**. The expensive resizes are rare enough
(they get geometrically farther apart) that their cost spreads out to a constant.

**Accounting view (same result, different lens).** Charge each push a "fee" of 3 units:
1 unit pays for the write itself, and 2 units are banked. By the time the buffer fills,
every element has banked enough credit to pay for copying itself (and one earlier element)
into the new buffer. The bank never goes negative, so the true cost ≤ the charged cost =
3·n = O(n) total → O(1) amortized.

**Key intuition to keep:** the *doubling* (geometric growth) is what makes it work. If you
instead grew by a **fixed amount** (e.g. +1 or +10 each time), resizes would happen every
few pushes, total copy work becomes `1 + 2 + 3 + ... + n ≈ n²/2`, and append degrades to
**O(n) amortized**. Multiplicative growth, not additive, is the whole trick.

> Note: amortized O(1) is the *average over a sequence*. Any single push can still be
> O(n) worst-case (the one that triggers a resize) — relevant for latency-sensitive code.

---

## Comprehension questions

The questions posed before implementing, to re-test myself cold later:

1. **What is the amortized cost of appending to a dynamic array that doubles its capacity,
   and why?** (Be able to give the geometric-series argument: n pushes cost ~2n copies
   total → O(1) amortized.)
2. **Why doubling specifically?** What's the amortized append cost if the array instead
   grows by a *fixed* increment each time it fills, and why is it worse?
3. **Amortized vs. worst-case:** is any individual `push` still O(n)? When, and why does
   that matter in practice?
4. **Dynamic array vs. linked list:** both can grow; why is the contiguous array usually
   faster to iterate, and what does it cost you on insert-in-the-middle?
