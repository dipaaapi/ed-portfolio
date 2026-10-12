---
name: run-portfolio
description: Start, build, and visually verify the ed-portfolio Next.js site. Use when asked to run the site, check a page, take a screenshot, or confirm a change works.
---

# Run and verify the portfolio

Stack: Next.js 15 (Pages Router), React 19, TypeScript 5, Tailwind CSS 3.4. Node 20+.

## Commands

- `npm install` — install deps
- `npm run dev` — dev server on http://localhost:3000 (run it in the background)
- `npm run typecheck` — `tsc --noEmit`
- `npm run lint` — ESLint (`next lint`)
- `npm run build` — production build; this is the real gate before committing

## Routes to check

`/`, `/skills`, `/projects`, `/workxp`, `/education`, `/certifications`, `/aboutme`, `/personal`, `/hobbies`, `/specialthanks`

Quick smoke test once the dev server is up:

```sh
for p in / /skills /projects /workxp /education /certifications /aboutme /personal /hobbies /specialthanks; do
  echo "$p $(curl -s -o /dev/null -w '%{http_code}' http://localhost:3000$p)"
done
```

For visual checks, use the `playwright` MCP server (configured in `.mcp.json`) to open a route and screenshot it at desktop (1280px) and mobile (390px) widths. The `next-devtools` MCP server can read build/runtime errors from the running dev server.

## Gotchas

- The repo lives in OneDrive. If files fail to read with "cloud file provider is not running", OneDrive has left them as online-only placeholders; start OneDrive, or restore from git with `git checkout-index -a -f` (safe only when `git status` is clean).
- The nav clock renders after mount to avoid a hydration mismatch — keep time-dependent output behind the `isMounted` guard.
