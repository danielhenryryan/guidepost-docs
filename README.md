# Guidepost Help

The user documentation for Guidepost, published at https://docs.guidepostpresenter.com. Built with [Starlight](https://starlight.astro.build) and served as static files by a Cloudflare Worker.

## Develop

Use Node 22.22 or later.

```sh
npm ci
npm run dev
```

Pages live in `src/content/docs`, one Markdown or MDX file per page. The sidebar order is set in `astro.config.mjs`.

## Writing

- Write for people running services, not for developers. Describe what the user sees and does.
- Use the app's own words for every label, in **bold**, and one name per concept: presentation, slide, group, theme, layout, saved slide, audience screen, Stage Display, network viewers, message, cue.
- Keys use `<kbd>`, with Mac symbols: `<kbd>⇧⌘B</kbd>`.
- Keep the tone helpful and neutral: no marketing, no jokes.
- Use plain, specific wording. Explain what a control does or what happens next; skip promotional claims, filler introductions and repeated reassurances. Use contractions where they sound natural.
- Preserve app labels and quoted messages when editing copy. Keep technical limits and exceptions explicit.

## Screenshots

Screenshots are captures of the Guidepost app, stored as WebP in `src/assets/screens`. Add one to a page with:

```mdx
import Screenshot from '../../../components/Screenshot.astro';

<Screenshot name="present-live" alt="What the picture shows." caption="Optional caption." />
```

Add `narrow` for small pictures such as dialogs. Never include a real network address, QR code, Mac name or license key in a screenshot.

## Design

Colors come from the Guidepost design system. After the design system's `tokens.json` changes, regenerate `src/styles/tokens.css`:

```sh
node scripts/sync-tokens.mjs <path/to/tokens.json>
```

`src/styles/theme.css` maps those tokens onto Starlight.

## Build and deploy

```sh
npm run build
npx wrangler deploy
```

`wrangler.jsonc` deploys `dist/` as static assets under the Worker name `guidepost-docs`. No Worker script or adapter is needed. For Cloudflare Workers Builds, use `npm run build` as the build command and `npx wrangler deploy` as the deploy command, then add `docs.guidepostpresenter.com` as a custom domain on the Worker.
