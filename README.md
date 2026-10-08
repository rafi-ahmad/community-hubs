# Community Hubs

A global network for discovering local and online communities, events, people, discussions, and resources.
React 19 + TypeScript + Vite + Tailwind CSS v4 + React Router. Demo state is persisted in `localStorage` (mock auth, no backend).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build -> dist/
npm run preview  # serve the build
```

For static hosting, add a rewrite of `/*` to `/index.html` (client-side routing).
