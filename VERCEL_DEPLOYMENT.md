# Vercel Deployment Guide

## Critical: Environment Variables Setup

Your deployment failed because the environment variables are not set in Vercel. Follow these steps:

### 1. Add Environment Variables in Vercel Dashboard

Go to your Vercel project settings and add these environment variables:

**Required Variables:**

```bash
DATABASE_URL="mongodb+srv://maintafox_db:RvfFiOPl2IGY7A7q@cluster0.bzrtt1v.mongodb.net/maintafox?retryWrites=true&w=majority&appName=Cluster0"

NEXTAUTH_SECRET="your-production-secret-here"

NEXTAUTH_URL="https://www.maintafox.systems"
```

**Optional Variables (can add later):**

```bash
SENDGRID_API_KEY="your-sendgrid-api-key"
SENDGRID_FROM_EMAIL="noreply@maintafox.systems"
DEMO_REQUEST_TO="contact@maintafox.systems"
DEMO_REQUEST_FROM="no-reply@maintafox.systems"
```

### 2. Generate NEXTAUTH_SECRET

Generate a secure production secret:

```bash
openssl rand -base64 32
```

Copy the output and use it as your `NEXTAUTH_SECRET` in Vercel.

### 3. MongoDB Atlas - Allow Vercel IPs

Your MongoDB Atlas cluster needs to allow connections from Vercel:

1. Go to MongoDB Atlas Dashboard
2. Navigate to Network Access
3. Click "Add IP Address"
4. Click "Allow Access from Anywhere" (0.0.0.0/0)
   - **Note**: This is required for Vercel as their IPs are dynamic
   - Alternatively, add specific Vercel IP ranges if you want stricter security

### 4. Set Environment Variables in Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - Name: `DATABASE_URL`
   - Value: Your MongoDB connection string
   - Environments: Check **Production**, **Preview**, and **Development**
5. Click "Save"
6. Repeat for `NEXTAUTH_SECRET` and `NEXTAUTH_URL`

#### Option B: Via Vercel CLI

```bash
vercel env add DATABASE_URL
# Paste your MongoDB connection string when prompted

vercel env add NEXTAUTH_SECRET
# Paste your generated secret when prompted

vercel env add NEXTAUTH_URL
# Enter: https://www.maintafox.systems
```

### 5. Redeploy

After adding environment variables:

```bash
# Trigger a new deployment
git commit --allow-empty -m "Trigger rebuild with env vars"
git push origin main
```

Or in Vercel Dashboard:

1. Go to **Deployments**
2. Click the **•••** menu on the latest deployment
3. Select **Redeploy**
4. Check "Use existing Build Cache" is OFF
5. Click **Redeploy**

## What Was Fixed

### 1. Dynamic Rendering for Blog Pages

- Added `export const dynamic = 'force-dynamic'` to `/app/blog/page.tsx`
- This prevents Next.js from trying to statically generate the page at build time
- The page will now be rendered on-demand when users visit

### 2. Error Handling

- Added try-catch blocks around database queries
- If database is unreachable during build, it gracefully fails instead of crashing
- Empty arrays/results are returned as fallback

### 3. Sitemap Error Handling

- Added error handling in `app/sitemap.ts`
- Sitemap will generate with static pages even if database is unavailable
- Blog posts will be added dynamically when database is connected

## Troubleshooting

### Build Still Failing?

**Check 1: Verify Environment Variables Are Set**

```bash
vercel env ls
```

**Check 2: Check MongoDB Atlas Network Access**

- Ensure 0.0.0.0/0 is in the IP whitelist
- Or add Vercel's IP ranges

**Check 3: Test Database Connection Locally**

```bash
npm run build
```

If this works locally but fails in Vercel, it's definitely an environment variable issue.

**Check 4: View Build Logs**
Look for these specific errors:

- `DATABASE_URL is not defined` → Environment variable not set in Vercel
- `Server selection timeout` → MongoDB Atlas network access issue
- `Authentication failed` → Wrong database credentials

### MongoDB Connection Issues

If you see "Server selection timeout" errors:

1. **Verify Connection String Format**

   ```
   mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
   ```

2. **Check MongoDB Atlas Status**

   - Visit https://status.mongodb.com/
   - Ensure no ongoing incidents

3. **Test Connection String**

   ```bash
   # Install MongoDB Shell
   npm install -g mongosh

   # Test connection
   mongosh "mongodb+srv://maintafox_db:RvfFiOPl2IGY7A7q@cluster0.bzrtt1v.mongodb.net/maintafox"
   ```

## Production Checklist

Before going live, ensure:

- [x] All environment variables set in Vercel
- [x] MongoDB Atlas allows Vercel IPs (0.0.0.0/0)
- [ ] Strong NEXTAUTH_SECRET generated (not the default)
- [ ] NEXTAUTH_URL points to production domain
- [ ] Test login/register flow
- [ ] Test blog post creation
- [ ] Test admin moderation
- [ ] Verify SEO metadata loading correctly
- [ ] Check sitemap at `/sitemap.xml`
- [ ] Test all blog post links

## Next Steps After Successful Deployment

1. **Create Admin Account**

   ```bash
   # Connect to your Vercel deployment
   # Register at: https://www.maintafox.systems/auth/register
   # Use role: ADMIN in the registration form
   ```

2. **Test Blog Workflow**

   - Create a test post as AUTHOR
   - Approve it as ADMIN
   - Verify it appears on blog page
   - Check SEO with meta tags inspector

3. **Add SendGrid (Optional)**

   - Get SendGrid API key
   - Add to Vercel environment variables
   - Uncomment email code in API routes

4. **Monitor Performance**
   - Vercel Analytics: https://vercel.com/docs/analytics
   - Check response times for database queries
   - Set up error tracking (Sentry recommended)

## Support

If you continue to have issues:

1. Check Vercel deployment logs: `vercel logs <deployment-url>`
2. Check MongoDB Atlas logs in the dashboard
3. Verify network connectivity between Vercel and MongoDB Atlas

---

**Last Updated:** October 30, 2025
