# SER Landing Page

## Project Overview

SER landing page built with Next.js 16 + Tailwind CSS v4 + TypeScript, deployed on Vercel at ser-landing.vercel.app.

## Tech Stack

- **Next.js** 16.2.2 (App Router, Turbopack)
- **Tailwind CSS** v4 with `@theme inline`
- **TypeScript**
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel

## Design Tokens

All custom colors use the `ser-` prefix to avoid Tailwind v4 collisions.

**CRITICAL**: Never use bare color names in `@theme inline` (e.g. `--color-purple`). Always use the `ser-` prefix to avoid overriding Tailwind defaults.

| Token             | Value     | Usage           |
|--------------------|-----------|-----------------|
| `ser-purple`       | `#3621A4` | Primary         |
| `ser-purple-light` | `#5F33E1` |                 |
| `ser-purple-dark`  | `#2A1A7E` |                 |
| `ser-zafiro`       | `#1A5BC4` |                 |
| `ser-gold`         | `#B19034` |                 |
| `ser-green`        | `#2CA534` |                 |
| `ser-pink`         | `#FF6B9D` |                 |
| `ser-coral`        | `#FF6B6B` |                 |
| `ser-lavender`     | `#F5F0FF` |                 |
| `ser-cream`        | `#FFFBF0` |                 |

## Project Structure

```
src/
  app/                          # Next.js App Router pages and layout
  components/
    sections/                   # Page sections
      Hero, ProblemSolution, Benefits, HowItWorks,
      Plans, SocialProof, Faq, CtaFinal, Footer, Navbar
    ui/                         # Reusable UI components
      Button, Logo, SectionLabel
public/
  images/                       # Static assets (app-icon.png, logos)
    screens/                    # App screenshots from Figma
      home.png, therapies.png, calendar.png, plans.png
```

## Key Conventions

- All UI text is in Spanish
- Mobile-first responsive: headings use `text-2xl` on mobile, `text-4xl` on `md+`
- When using `<br className="hidden sm:block" />`, always add `{" "}` before it to prevent word joining on mobile
- Section components are self-contained with their own data
- Rounded corners: `20px` for cards (`rounded-[20px]`)
- Plans pricing: Estandar $120K, Zafiro $180K (highlighted), Diamante $250K

## Figma

- **App designs**: file key `pB3BVcRvqA2ecvGX6s1g4i`
- **Landing designs**: file key `16eGrIT77hY57ZsXaVkl34`

## Deployment

```sh
npx vercel --yes --prod
```

Run from the project root.
