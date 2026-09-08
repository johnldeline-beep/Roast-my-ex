# ONE15 Media

The website for [115audio.com](https://115audio.com), built with Next.js and ready for Vercel.

## Pages

- `/` — ONE15 Media studio homepage
- `/audit` — ONE15 Audit sales page, including the $149 Conversion Leak Scan, $495 Full Website Audit, sample finding, and contact form

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
```

## Vercel deployment

1. Import this GitHub repository into Vercel.
2. Keep the detected **Next.js** framework preset and default build settings.
3. Deploy to a Vercel preview URL for review.
4. Add `115audio.com` in **Project Settings → Domains** when the preview is approved.

Pushes and pull requests will then create automatic Vercel deployments. No environment variables are currently required.

## Before launch

- Replace the email request link in `app/audit/page.tsx` with the live Stripe Payment Link when it is available.
- Confirm that `hello@115audio.com` is the preferred public contact email.
