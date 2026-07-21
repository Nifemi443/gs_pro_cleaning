# Installation Commands Reference

Copy-paste commands used to bootstrap this monorepo (Phase 0).

## Root

```bash
mkdir -p frontend backend docs
git init
git branch -m main
```

## Frontend

```bash
# Scaffold Next.js 15 (App Router, TS, Tailwind, ESLint, src/, @/*)
npx create-next-app@15 frontend \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-npm \
  --turbopack \
  --no-git

cd frontend

# Runtime dependencies
npm install \
  framer-motion \
  react-hook-form \
  zod \
  @hookform/resolvers \
  clsx \
  tailwind-merge \
  lucide-react \
  sonner \
  next-themes \
  class-variance-authority

# Tooling
npm install -D \
  prettier \
  prettier-plugin-tailwindcss \
  eslint-config-prettier \
  husky \
  lint-staged

# shadcn/ui
npx shadcn@latest init -d -y

# Optional: add more shadcn primitives later
# npx shadcn@latest add button card input label textarea dialog sheet

# Env
cp .env.example .env.local

# Quality scripts
npm run lint
npm run typecheck
npm run format:check
npm run build
npm run dev
```

## Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate

pip install --upgrade pip
pip install -r requirements.txt
# Optional: pip install -r requirements-dev.txt

cp .env.example .env

# Run API
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Migrations (requires PostgreSQL + DATABASE_URL)
alembic revision --autogenerate -m "init"
alembic upgrade head
```

## Git hooks (from repo root)

```bash
# Installed via frontend prepare script → root .husky/
cd frontend && npm run prepare
```
