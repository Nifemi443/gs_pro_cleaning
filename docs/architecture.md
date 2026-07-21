# Architecture Overview

This monorepo keeps **frontend** and **backend** fully independent so each can deploy, scale, and iterate without coupling release cycles.

## Why a monorepo?

- Single source of truth for docs, conventions, and CI later.
- Independent package managers (`npm` vs `pip`) — no shared runtime.
- Clear ownership boundaries for Vercel (frontend) and Railway (backend).

## Frontend (`frontend/`)

| Decision | Rationale |
| --- | --- |
| Next.js 15 App Router | Server Components by default, streaming, file-based routing, first-class SEO. |
| TypeScript strict + path aliases (`@/*`) | Catch regressions early; absolute imports scale better than relative nesting. |
| Tailwind CSS + shadcn/ui | Utility-first styling with accessible, composable primitives. |
| Framer Motion | Intentional motion without ad-hoc CSS keyframes sprawl. |
| React Hook Form + Zod | Performant forms with shared client validation schemas. |
| next-themes + sonner | Theme switching and non-blocking feedback without custom state machines. |
| Folder split (`ui` / `layout` / `sections` / `features` / design folders) | Separates primitives from composition from product features. |

## Backend (`backend/`)

| Decision | Rationale |
| --- | --- |
| FastAPI | Async-ready, OpenAPI docs, Pydantic-native validation. |
| Layered folders (`api` → `services` → `repositories` → `models`) | Keeps HTTP, business rules, and persistence separable and testable. |
| SQLAlchemy 2.x + Alembic | Typed ORM + versioned migrations for PostgreSQL. |
| pydantic-settings | Typed, validated env config with a single source of truth. |
| CORS + request logging middleware | Safe local/prod frontend calls and operational visibility. |

## Deployment targets

- **Frontend → Vercel**: static + edge-friendly Next.js hosting.
- **Backend → Railway**: container-friendly FastAPI + managed Postgres.
- **Images → Cloudinary**: CDN delivery + `next/image` remote patterns.

## Out of scope (this phase)

No marketing pages, booking flows, auth, or domain models yet — foundation only.
