# Setup Guide

## Prerequisites

- Node.js 20+ (22/24 recommended)
- Python 3.12+
- PostgreSQL 15+ (local or hosted)
- Git

## 1. Clone & install

```bash
git clone <repo-url> gs_pro_cleaning
cd gs_pro_cleaning
```

### Frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

App: [http://localhost:3000](http://localhost:3000)

### Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit DATABASE_URL / SECRET_KEY as needed
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API docs: [http://localhost:8000/docs](http://localhost:8000/docs)  
Health: [http://localhost:8000/health](http://localhost:8000/health)

## 2. Database migrations

With Postgres running and `DATABASE_URL` set:

```bash
cd backend
source .venv/bin/activate
alembic revision --autogenerate -m "init"
alembic upgrade head
```

## 3. Code quality (frontend)

```bash
cd frontend
npm run lint
npm run format:check
npm run typecheck
```

Husky + lint-staged run ESLint/Prettier on staged files before commit.

## 4. Environment variables

| Location | File | Purpose |
| --- | --- | --- |
| Frontend | `frontend/.env.example` → `.env.local` | Public API URL, Cloudinary, WhatsApp |
| Backend | `backend/.env.example` → `.env` | DB, secrets, SMTP, Cloudinary |

Never commit real `.env` / `.env.local` files.
