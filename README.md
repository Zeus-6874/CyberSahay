# CyberSahay

Civic cyber-safety desk for suspicious messages, payment scams, and everyday digital distress.

- Frontend: static `index.html`
- Backend: Vercel Serverless Functions in `api/`
- Database: MongodB Atlas

## Local

```
cp .env.example .env.local
npm install
npx vercel dev
```

## Deploy

Follow `DEPLOY.md` for MongoDB Atlas + Vercel setup.

## Endpoints

- `GET /api/health`
- `POST /api/help`
- `POST /api/report`
