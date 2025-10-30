'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-slate-600" />
      <button
        onClick={() => setLocale('en')}
        className={`text-sm font-medium transition-colors ${
          locale === 'en' ? 'text-brand' : 'text-slate-600 hover:text-brand'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-slate-400">|</span>
      <button
        onClick={() => setLocale('fr')}
        className={`text-sm font-medium transition-colors ${
          locale === 'fr' ? 'text-brand' : 'text-slate-600 hover:text-brand'
        }`}
        aria-label="Switch to French"
      >
        FR
      </button>
    </div>
  );
}
