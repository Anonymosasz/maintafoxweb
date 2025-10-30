# Blog System & Authentication - Setup Guide

## Overview

This project now includes a complete blog system with user authentication and admin moderation capabilities.

## New Features

### 🔐 Authentication System

- **User Registration & Login**: Email/password authentication via NextAuth
- **Role-Based Access Control**: Three user roles (READER, AUTHOR, ADMIN)
- **Session Management**: Secure JWT-based sessions

### ✍️ Blog System

- **Post Creation**: Rich text editor (React-Quill) for creating blog posts
- **Draft & Publish Workflow**: Save drafts or submit for review
- **Admin Moderation**: Admins can approve/reject posts before publication
- **SEO Optimized**: Dynamic metadata, Open Graph tags, JSON-LD structured data
- **Categories & Tags**: Organize content effectively
- **Reading Time Calculation**: Automatic estimation based on word count

### 📊 Admin Dashboard

- **Post Moderation**: Review, approve, or reject pending posts
- **Status Filters**: Filter posts by DRAFT, PENDING, APPROVED, REJECTED
- **Rejection Notes**: Provide feedback to authors

## Setup Instructions

### 1. Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Database (MongoDB)
DATABASE_URL="mongodb+srv://user:password@cluster.mongodb.net/db"

# NextAuth
NEXTAUTH_SECRET="generate-with: openssl rand -base64 32"
NEXTAUTH_URL="http://localhost:3000"

# SendGrid (optional, for email notifications)
SENDGRID_API_KEY="your-sendgrid-api-key"
SENDGRID_FROM_EMAIL="noreply@maintafox.systems"
```

### 2. Database Setup

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to MongoDB
npx prisma db push

# (Optional) Seed initial data
npx prisma db seed
```

### 3. Create Admin User

You'll need to create an admin user manually in the database or via MongoDB Compass:

```javascript
{
  name: "Admin User",
  email: "admin@maintafox.systems",
  password: "$2a$12$...", // Hash using bcrypt
  role: "ADMIN",
  emailVerified: new Date(),
  createdAt: new Date(),
  updatedAt: new Date()
}
```

Or use this script:

```bash
node scripts/create-admin.js
```

### 4. Run Development Server

```bash
npm run dev
```

## User Roles

### READER

- View published blog posts
- Cannot create or edit content

### AUTHOR

- All READER permissions
- Create and edit own blog posts
- Submit posts for admin review
- View own draft and pending posts

### ADMIN

- All AUTHOR permissions
- Approve or reject all posts
- Access admin dashboard at `/admin/blog`
- Manage all users (future feature)

## Routes

### Public Routes

- `/` - Homepage
- `/blog` - Blog listing (approved posts only)
- `/blog/[slug]` - Individual blog post
- `/auth/login` - Login page
- `/auth/register` - Registration page

### Protected Routes (Authors & Admins)

- `/blog/create` - Create new post
- `/blog/edit/[id]` - Edit existing post

### Admin Only Routes

- `/admin/blog` - Post moderation dashboard

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/[...nextauth]` - NextAuth handler

### Posts

- `GET /api/posts` - List posts (with filters)
- `POST /api/posts` - Create new post
- `GET /api/posts/[id]` - Get single post
- `PATCH /api/posts/[id]` - Update post
- `DELETE /api/posts/[id]` - Delete post

## SEO Features

### Implemented

✅ Dynamic metadata API (Next.js 14)
✅ Open Graph tags for social sharing
✅ Twitter Card tags
✅ JSON-LD structured data for articles
✅ Dynamic sitemap.xml (includes blog posts)
✅ Robots.txt configuration
✅ Canonical URLs
✅ Semantic HTML structure

### Best Practices

- All blog posts include proper meta descriptions
- Images have alt text
- Heading hierarchy is maintained
- Internal linking structure
- Mobile-responsive design

## Testing

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Type checking
npm run typecheck

# Linting
npm run lint
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

- Set `NEXTAUTH_URL` to your production domain
- Use strong `NEXTAUTH_SECRET`
- Configure MongoDB Atlas connection string
- Add SendGrid API key for email notifications

## Email Notifications (TODO)

The following email triggers are prepared but need SendGrid templates:

- Welcome email on registration
- Post approval notification to author
- Post rejection notification with feedback
- New post pending review (to admins)

## Future Enhancements

- [ ] Comment system for blog posts
- [ ] User profile pages
- [ ] OAuth providers (Google, GitHub)
- [ ] Image upload functionality
- [ ] Post analytics (views, engagement)
- [ ] Newsletter subscription management
- [ ] Full-text search
- [ ] Post scheduling

## Troubleshooting

### Prisma Client Issues

```bash
rm -rf node_modules/.prisma
npx prisma generate
```

### Database Connection

- Ensure MongoDB Atlas IP whitelist includes your IP
- Verify connection string format
- Check database user permissions

### Authentication Issues

- Clear browser cookies
- Verify NEXTAUTH_SECRET is set
- Check NEXTAUTH_URL matches your domain

## Support

For issues or questions, contact support@maintafox.systems
