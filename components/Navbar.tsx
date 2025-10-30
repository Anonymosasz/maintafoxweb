'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import logo from '@/assets/logo.webp';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-white/80 backdrop-blur border-b' : 'bg-white/60 backdrop-blur'
      }`}
    >
      <nav className="container-12 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="Maintafox" width={28} height={28} className="rounded-sm" />
          <span className="font-semibold text-brand">Maintafox</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/features" className="hover:text-brand">
            {t.nav.features}
          </Link>
          <Link href="/about" className="hover:text-brand">
            {t.nav.about}
          </Link>
          <Link href="/#pricing" className="hover:text-brand">
            {t.nav.pricing}
          </Link>
          <Link href="/blog" className="hover:text-brand">
            {t.nav.blog}
          </Link>
          <Link href="/contact" className="hover:text-brand">
            {t.nav.contact}
          </Link>
          <LanguageSwitcher />

          {/* Auth Section */}
          {session ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100"
              >
                <div className="h-8 w-8 rounded-full bg-brand text-white flex items-center justify-center font-semibold">
                  {session.user.name?.charAt(0).toUpperCase()}
                </div>
                <span className="text-slate-700">{session.user.name}</span>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-xl ring-1 ring-slate-200 py-2">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs text-slate-500">Signed in as</p>
                    <p className="text-sm font-medium text-slate-900 truncate">
                      {session.user.email}
                    </p>
                    <p className="text-xs text-slate-500 capitalize">
                      {session.user.role.toLowerCase()}
                    </p>
                  </div>

                  {(session.user.role === 'AUTHOR' || session.user.role === 'ADMIN') && (
                    <Link href="/blog/create" className="block px-4 py-2 text-sm hover:bg-slate-50">
                      Write Post
                    </Link>
                  )}

                  {session.user.role === 'ADMIN' && (
                    <Link href="/admin/blog" className="block px-4 py-2 text-sm hover:bg-slate-50">
                      Admin Dashboard
                    </Link>
                  )}

                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/auth/login" className="btn-primary">
              Sign In
            </Link>
          )}

          <Link href="/demo" className="btn-primary">
            {t.nav.demo}
          </Link>
        </div>
      </nav>
    </header>
  );
}
