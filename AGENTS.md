# AI Agent Repository Guide

## Setup Commands
- **Install dependencies**: `npm install`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Test**: `npm run test:e2e`
- **Dev server**: `npm run dev`

## Tech Stack
- **Framework**: Next.js 13 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI API + Vercel AI SDK
- **Vector DB**: Pinecone
- **Testing**: Playwright (E2E)
- **Linting**: ESLint with Next.js config

## Architecture
- **Frontend**: React components in `src/app/components/`
- **API**: Edge functions in `src/app/api/`
- **Utils**: Helper functions in `src/app/utils/`
- **Config**: Path aliases with `@/*` → `./src/app/*`

## Code Style
- Use TypeScript strict mode
- Prefer functional components with hooks
- Follow Next.js App Router conventions
- Use Tailwind for styling
- Keep components in separate files
- Use absolute imports with `@/` prefix