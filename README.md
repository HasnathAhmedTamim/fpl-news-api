# FPL News API

A simple REST API providing Fantasy Premier League news updates.

## Features

- Latest FPL news with injury updates, transfers, and tactical information
- CORS enabled for cross-origin requests
- Dummy images for each news item
- Easy deployment on Vercel

## API Endpoints

- `GET /` - API status check
- `GET /api/latest-news` - Get all latest FPL news

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Visit `http://localhost:3000` to see the API running

## Deployment on Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Method 2: GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project" and select your GitHub repository
4. Vercel will automatically detect and deploy your Express app

## Environment Variables

No environment variables are required for basic functionality. The app uses `PORT` from environment or defaults to 3000.

## API Response Example

```json
[
  {
    "id": 101,
    "title": "Haaland Fit for Gameweek 1",
    "date": "2025-08-03",
    "summary": "Erling Haaland is confirmed fit and will start for Man City against Burnley.",
    "team": "Manchester City",
    "category": "Injury Update",
    "image": "https://via.placeholder.com/300x200/87CEEB/000000?text=Haaland+Fit"
  }
]
```
