# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 14** marketing website for UseEfficiently (an Airtable consulting company). It is a single-package project — not a monorepo.

### Key facts

- **Package manager**: npm (lockfile: `package-lock.json`)
- **No database, no environment variables, no Docker** — all content is hardcoded in `use.js` and `information.json`.
- **No automated test suite** — there are no unit/integration tests configured. The only check is ESLint via `npm run lint`.

### Common commands

See `package.json` scripts. Summary:

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (runs on port 3000) |
| Production build | `npm run build` |
| Lint | `npm run lint` |

### Non-obvious notes

- The dev server (`npm run dev`) supports hot reload. No restart needed after code changes.
- Remote images from `cdn.useefficiently.com`, `dl.airtable.com`, `github.com`, and `picsum.photos` are configured in `next.config.mjs`. They require network access to load but the app still renders without them.
- The `/schedule-meeting` page embeds a Fillout form that requires external network access to function.
- `tsconfig.json` includes a likely typo entry `config.tss` in the `include` array — this does not break the build.
