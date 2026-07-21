# Backend folder map

```
backend/
├── app/
│   ├── main.py              # FastAPI entrypoint
│   ├── api/v1/              # Versioned HTTP routers
│   │   └── endpoints/       # Route modules
│   ├── core/                # Settings, logging, dependencies
│   ├── db/                  # Engine, session, Base metadata
│   ├── models/              # SQLAlchemy ORM models
│   ├── schemas/             # Pydantic request/response schemas
│   ├── services/            # Business logic
│   ├── repositories/        # Data access
│   ├── utils/               # Pure helpers
│   └── middleware/          # Cross-cutting HTTP middleware
├── alembic/                 # Migrations
├── tests/                   # Pytest suite
├── requirements.txt
└── .env.example
```

**Request flow:** `endpoint` → `service` → `repository` → `model` / DB
