# Car Doctor AI Pro

A clean, mobile-first automotive diagnostic app.

## Included
- 6-language UI
- Built-in DTC database with common powertrain, diesel and CAN codes
- Dynamic P0301-P0312 cylinder-misfire recognition
- AI-enhanced diagnosis via the OpenAI Responses API when `OPENAI_API_KEY` is set
- Safe DTC-database fallback when AI is not configured
- Optional persistent PostgreSQL diagnosis history using `DATABASE_URL` (Neon/Vercel Postgres compatible)

## Vercel environment variables
```text
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-5.6-luna
DATABASE_URL=postgresql://...   # optional
```

Without an API key, DTC reading still works from the built-in database.
