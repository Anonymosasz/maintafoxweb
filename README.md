# Maintafox v1 Website

Production-ready Next.js (App Router) website for Maintafox CMMS with integrated blog system and user authentication.

## 🎉 New Features

### Blog System

- ✍️ User-authored blog posts with rich text editor
- 🔐 User authentication (NextAuth)
- 👥 Role-based access (READER, AUTHOR, ADMIN)
- ✅ Admin moderation workflow
- 📈 SEO optimized with dynamic metadata
- 🏷️ Categories and tags

**[📖 Complete Blog Setup Guide →](./BLOG_SETUP_GUIDE.md)**

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- TailwindCSS + Framer Motion
- NextAuth (Authentication)
- Prisma + MongoDB (Database)
- React-Quill (Rich Text Editor)
- Zod (Validation)
- SendGrid (Email)
- Jest + React Testing Library
- Playwright e2e
- GitHub Actions CI

## Quick Start

1. Install deps
2. Set up environment variables
3. Initialize database
4. Create admin user
5. Start dev server

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local
# Edit .env.local with your values

# Generate Prisma client and push schema
npm run db:generate
npm run db:push

# Create admin user
npm run create-admin

# Start development server
npm run dev
```

## Environment variables

Required variables in `.env.local`:

```bash
# Database
DATABASE_URL="mongodb+srv://..."

# NextAuth
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
NEXTAUTH_URL="http://localhost:3000"

# SendGrid (optional)
SENDGRID_API_KEY="your-key"
SENDGRID_FROM_EMAIL="noreply@maintafox.systems"

# Demo form
DEMO_REQUEST_TO="contact@maintafox.systems"
DEMO_REQUEST_FROM="no-reply@maintafox.systems"
```

## Build

```bash
npm run build && npm start
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Type checking
npm test             # Run unit tests
npm run test:e2e     # Run E2E tests
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:studio    # Open Prisma Studio
npm run create-admin # Create admin user
```

## Pages

- /
- /features
- /about
- /demo (request a demo form)
- /blog (placeholder)
- /privacy
- /terms
- /contact

## Deployment

- Preferred: Vercel
- Alternative: Netlify

## Content updates

- Edit React pages in `app/`
- Global components in `components/`
- Styles in `styles/`

## LICENSE

Private.
