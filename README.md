# Bader Mohammad's Portfolio

Personal portfolio rebuilt with AnalogJS and Angular.

## Stack

- AnalogJS with file-based routing under `src/app/pages`
- Angular standalone components
- SSR and prerendering through Vite/Analog
- SCSS component styles
- Angular signals for lightweight UI state
- Static assets served from `public/`

## Routes

- `/` - portfolio homepage
- `/cv` - PDF CV viewer

Homepage section anchors:

- `/#my-projects`
- `/#skills`
- `/#about`

## Development

```bash
npm install
npm run dev
```

If the local OS file watcher limit blocks Vite dev mode, use the production preview flow:

```bash
npm run build
npm run preview
```

## Build

```bash
npm run typecheck
npm run build
```

The build creates the Analog SSR output under `dist/analog` and generates `sitemap.xml` during the `sitemap` script.

## Project Structure

- `src/app/pages` - Analog file-based routes
- `src/app/components` - standalone Angular UI sections
- `src/app/layouts` - shared page shell/navigation
- `src/app/services` - typed application data services
- `src/app/directives` - reusable Angular directives
- `src/app/shared` - shared models and icon utilities
- `public` - static images, PDFs, icons, manifest, robots file
