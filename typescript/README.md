# TypeScript implementations

```bash
npm install
npm test                       # all tests (vitest run)
npx vitest run dynamic-array   # one topic (substring of the file name)
npx vitest dynamic-array       # one topic, watch mode
npm run typecheck              # tsc --noEmit
```

From the repo root: `make t-ts NAME=dynamic-array`.

Put code under `src/data-structures/` or `src/algorithms/`, with a co-located
`*.test.ts`. Note the `.js` extension in imports (ESM + bundler resolution):

```ts
import { DynamicArray } from "./dynamic-array.js";
```

`dynamic-array.ts` is a worked example of the conventions.
