# Simply English Trinity ISE II Coach — Prototype

Task 1 voice prototype using OpenAI Realtime WebRTC and the Responses API. It includes both a Vercel Edge entry point and a native Cloudflare Worker build.

## Deploy on Vercel

1. Import this folder/repository into Vercel.
2. In Project Settings → Environment Variables, add `OPENAI_API_KEY` and select Production, Preview and Development.
3. Redeploy the project after saving the variable.

The API key remains server-side. Never put it into `src/worker.js`, browser code or a committed `.env` file.

## Local setup

1. Copy `.env.example` to `.env.local`.
2. Put your OpenAI Platform key in `.env.local` as `OPENAI_API_KEY`.
3. Run `npm install`.
4. Run `npm run build`.

Never commit `.env.local` or expose the API key in browser code.
