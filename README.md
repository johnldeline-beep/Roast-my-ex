# Roast My Ex

AI-powered roast generator built with Next.js 16 and the App Router. Users submit messy lore about their exes and get back chaotic roasts, duel battles, shareable roast cards, and AI-generated audio burns.

## Prerequisites

- Node.js 20.x (matched via `netlify.toml`)
- npm 10+
- An [OpenAI API key](https://platform.openai.com/)

## Local Development

1. Duplicate the provided environment template and add your key:
   ```bash
   cp env.example .env.local
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Visit http://localhost:3000.

### Netlify-aware dev server

If you prefer to mimic the Netlify runtime locally, install the Netlify CLI (`npm i -g netlify-cli`) and run:

```bash
netlify dev
```

The `[dev]` block inside `netlify.toml` proxies requests through `next dev`, so API routes and streaming responses behave just like they will in production.

## Environment Variables

| Name            | Required | Description                        |
| --------------- | -------- | ---------------------------------- |
| `OPENAI_API_KEY`| ✅       | Used by `/api/roast` and `/api/tts`|

## Available Scripts

| Script       | Description                            |
| ------------ | -------------------------------------- |
| `npm run dev`| Start Next.js in development mode      |
| `npm run build` | Production build (used by Netlify)  |
| `npm run start` | Serve the production build locally  |
| `npm run lint`  | Run ESLint                          |

## Deploying to Netlify

Netlify is already configured via `netlify.toml`:

- `@netlify/next` plugin handles SSR, App Router, and route handlers.
- Functions bundle with `esbuild` and keep the `openai` dependency external.
- Node 20 is enforced so the OpenAI SDK and Next 16 run against a supported runtime.

### One-time setup

1. Install & authenticate the CLI: `npm i -g netlify-cli && netlify login`
2. Initialize the site (or link an existing one): `netlify init`
3. Add your API key: `netlify env:set OPENAI_API_KEY <your-key>`

### Deploy

```bash
netlify deploy --build            # deploy to a draft URL
netlify deploy --build --prod     # deploy to production
```

The build command (`npm run build`) and publish directory (`.next`) are read from `netlify.toml`, so no extra flags are necessary. Once deployed, Netlify will automatically expose the generated Next.js functions at `/.netlify/functions/`.

## Project Structure

- `app/` – Next.js App Router pages and route handlers
- `app/api/roast` – Generates roast text via the OpenAI Chat Completions API
- `app/api/tts` – Creates shareable audio via OpenAI TTS
- `public/` – Static assets for the marketing surface
- `netlify.toml` – Build, dev, and plugin configuration for Netlify

## Testing & Linting

Use `npm run lint` before opening a PR or triggering a deploy to ensure App Router components and API handlers pass ESLint.
