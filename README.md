# Adithi Varma Sagi · Chef Portfolio

A premium Next.js portfolio website for an aspiring chef and third-year Culinary Arts Management student. The experience is designed to feel warm, editorial, refined, and honest about student-level experience while still presenting a polished personal brand.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Data-driven content structure

## Run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Available scripts
- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — run the production build locally
- `npm run lint` — run lint checks
- `npm run typecheck` — run TypeScript checks

## Content editing
Portfolio content is stored in `data/content.ts`, making it easy to update:
- chef profile details
- education information
- internship history
- signature dishes
- culinary skills
- certifications
- testimonials
- social links

## Notes
- Dish visuals use local SVG artwork placeholders so the project is fully self-contained.
- The contact form currently includes frontend validation and demo submission feedback; it can later be connected to an email or form service.
