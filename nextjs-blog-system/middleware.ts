import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const token = await getToken({ req });

  const { pathname } = req.nextUrl;

  // Protect routes that require authentication
  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  // Allow access to public routes
  if (pathname.startsWith('/auth') || pathname.startsWith('/blog')) {
    return NextResponse.next();
  }

  // Redirect if the user is authenticated and tries to access the login or register page
  if (token && (pathname.startsWith('/auth/login') || pathname.startsWith('/auth/register'))) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*', '/blog/:path*'],
};