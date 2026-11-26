# Deploying to Vercel

This project uses Next.js static export. `npm run build` produces the deployable site in `out/`; `vercel.json` tells Vercel to build with Next.js, serve that directory, and map its generated `.html` pages to clean route URLs.

## Project settings

- Framework preset: Next.js
- Root directory: project root
- Build command: `npm run build`
- Output directory: `out`
- Node.js: 22.x
- Environment variables: none currently required

These values are recorded in `vercel.json` and `package.json` where possible. Vercel detects npm from `package-lock.json`.

## Before the first deployment

There is no Git remote or Vercel project link configured for this folder yet. For Git-based deployments:

1. Create a Git repository for this project and push it to GitHub, GitLab, or Bitbucket.
2. Import that repository into Vercel. Keep the project root as the Root Directory.
3. Review the detected build settings above, then deploy a Preview before promoting to Production.

Alternatively, use the Vercel CLI from the project root: `npx vercel` for a Preview deployment, then `npx vercel --prod` when ready for Production. These commands require Vercel login and are intentionally not run as part of local preparation.

## Local pre-deploy checks

```powershell
npm ci
npm run typecheck
npm run build
npm run start
```

Check these routes in the preview: `/`, `/dewasa`, `/pembaca-muda`, and `/dewasa/tentang`.

## Static export limits

The current site is static and has no request-time server, API routes, or environment variables. Features that need a server at request time would require revisiting `output: "export"` and the `out` output setting before they are added.
