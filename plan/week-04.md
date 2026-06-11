# Week 4 — Graphs

The highest-leverage week for senior backend roles — dependency resolution, routing, and
"is X reachable / connected" problems are everywhere (including blockchain tx graphs and
agent task graphs). Nail the representations and the four core algorithms.

---

## Day 16 (Mon) — Representations & DFS

- **Theory:** adjacency list vs. matrix (space/time trade-offs), directed vs. undirected,
  weighted vs. unweighted. DFS on graphs + the `visited` set (graphs have cycles, trees don't).
- **Implement:** graph (adjacency list) + DFS (recursive + iterative).
  → `data-structures/graph` and `algorithms/graph-dfs`
- **LeetCode:** Number of Islands (M), Clone Graph (M), Max Area of Island (M).

## Day 17 (Tue) — BFS & shortest path (unweighted)

- **Theory:** BFS gives shortest path in an unweighted graph. Multi-source BFS. Grid as graph.
- **Implement:** graph/grid BFS (distance from source(s)).
  → `algorithms/graph-bfs`
- **LeetCode:** Rotting Oranges (M), Walls and Gates (M), Word Ladder (H).

## Day 18 (Wed) — Topological sort

- **Theory:** DAGs, topological order, cycle detection. Kahn's algorithm (in-degree + queue)
  vs. DFS post-order. The "course schedule / build order" pattern.
- **Implement:** topological sort (Kahn's *and* DFS-based).
  → `algorithms/topological-sort`
- **LeetCode:** Course Schedule (M), Course Schedule II (M), Alien Dictionary (H).

## Day 19 (Thu) — Union-Find (disjoint set)

- **Theory:** DSU with union-by-rank + path compression → near-O(1) amortized. Connectivity
  and cycle detection in undirected graphs; Kruskal's MST building block.
- **Implement:** union-find (find, union, connected) with both optimizations.
  → `data-structures/union-find`
- **LeetCode:** Number of Connected Components in an Undirected Graph (M), Redundant Connection (M),
  Accounts Merge (M).

## Day 20 (Fri) — Weighted shortest paths (Dijkstra) + review

- **Theory:** Dijkstra with a min-heap, why it needs non-negative weights. Relaxation.
  (Mention Bellman-Ford for negative edges, A* for heuristics — read, don't implement yet.)
- **Implement:** Dijkstra (adjacency list + binary heap).
  → `algorithms/dijkstra`
- **LeetCode:** Network Delay Time (M), Cheapest Flights Within K Stops (M), Path With Minimum Effort (M).
- **Review:** redo topo sort (Kahn's) and union-find blank.

---

**End-of-week check:** explain why BFS = shortest path only when unweighted; write Kahn's
algorithm and union-find with path compression from memory.
