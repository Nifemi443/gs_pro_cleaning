# GS Pro Cleaning Services

Production monorepo for the **GS Pro Cleaning Services** web platform.

```
gs_pro_cleaning/
├── frontend/     # Next.js 15 (App Router) → Vercel
├── backend/      # FastAPI + PostgreSQL → Railway
└── docs/         # Architecture & setup
```

Frontend and backend are fully independent — separate runtimes, env files, and deploy targets.

## Quick start

### Frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

### Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

Full instructions: [docs/setup.md](docs/setup.md)  
Architecture decisions: [docs/architecture.md](docs/architecture.md)

## Stack

| Layer | Tech |
| --- | --- |
| Frontend | Next.js 15, TypeScript, Tailwind, shadcn/ui, Framer Motion, RHF, Zod |
| Backend | FastAPI, SQLAlchemy, Alembic, PostgreSQL, Pydantic |
| Media | Cloudinary |
| Deploy | Vercel + Railway |

## Phase status

**Phase 0 — Foundation (current):** repo structure, tooling, configs, design-system folders.  
No marketing pages or business logic yet — wait for Phase 1.
