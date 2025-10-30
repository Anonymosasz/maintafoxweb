'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <main>
        {/* Hero with gradient and icons */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand via-brand-dark to-slate-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent blur-[120px] animate-pulse" />
            <div
              className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500 blur-[120px] animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </div>

          <div className="container-12 relative py-20">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm ring-1 ring-white/20">
                <svg
                  className="h-3.5 w-3.5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {t.contact.badge}
              </div>
              <h1 className="mt-6 text-5xl font-bold tracking-tight">
                {t.contact.title}{' '}
                <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                  {t.contact.titleHighlight}
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-200">{t.contact.subtitle}</p>
            </div>

            {/* Quick contact methods */}
            <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
              <a
                href="mailto:contact@maintafox.systems"
                className="group flex items-center gap-4 rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10 transition-all hover:bg-white/10 hover:scale-105"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 ring-1 ring-accent/50">
                  <svg
                    className="h-6 w-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium text-slate-300">{t.contact.emailUs}</div>
                  <div className="text-sm text-white group-hover:text-accent transition-colors">
                    contact@maintafox.systems
                  </div>
                </div>
                <svg
                  className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="tel:+213540537886"
                className="group flex items-center gap-4 rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10 transition-all hover:bg-white/10 hover:scale-105"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 ring-1 ring-accent/50">
                  <svg
                    className="h-6 w-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium text-slate-300">{t.contact.callUs}</div>
                  <div className="text-sm text-white group-hover:text-accent transition-colors">
                    +213 (540) 537-886
                  </div>
                </div>
                <svg
                  className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 43.3C840 46.7 960 53.3 1080 56.7C1200 60 1320 60 1380 60L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* Contact cards with enhanced design */}
        <section className="section bg-white">
          <div className="container-12 grid gap-8 lg:grid-cols-3">
            {/* Sales card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/5 to-orange-50 p-8 shadow-lg ring-1 ring-accent/20 transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-orange-600 shadow-lg">
                  <svg
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="mt-4 text-xl font-bold text-brand">{t.contact.sales.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {t.contact.sales.description}
                </p>
                <a
                  href="/demo"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
                >
                  {t.contact.sales.cta}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Support card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-brand/5 p-8 shadow-lg ring-1 ring-brand/20 transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/10 blur-2xl" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark shadow-lg">
                  <svg
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h2 className="mt-4 text-xl font-bold text-brand">{t.contact.support.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {t.contact.support.description}
                </p>
                <a
                  href="mailto:support@maintafox.systems"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all hover:gap-3"
                >
                  {t.contact.support.cta}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Office card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 shadow-lg ring-1 ring-slate-200 transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-slate-300/20 blur-2xl" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg">
                  <svg
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h2 className="mt-4 text-xl font-bold text-brand">{t.contact.office.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {t.contact.office.address}
                  <br />
                  {t.contact.office.city}
                  <br />
                  {t.contact.office.country}
                </p>
                <div className="mt-4 rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                  📅 {t.contact.office.hours}
                  <br />
                  🕐 {t.contact.office.time}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project questions with visual design */}
        <section className="section section-muted">
          <div className="container-12">
            <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl ring-1 ring-slate-200">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-brand">
                    {t.contact.projectQuestions.title}
                  </h2>
                  <p className="mt-2 text-slate-600">{t.contact.projectQuestions.description}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {t.contact.projectQuestions.questions.map((question, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                          {index + 1}
                        </div>
                        <span className="text-sm text-slate-700">{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social links with dark card */}
        <section className="section">
          <div className="container-12">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900 p-12 text-white shadow-2xl">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold">{t.contact.social.title}</h2>
                <p className="mt-4 text-slate-200">{t.contact.social.subtitle}</p>
                <div className="mt-8 flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/company/maintafox-systems/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-xl bg-white/10 px-6 py-3 backdrop-blur-sm ring-1 ring-white/20 transition-all hover:bg-white/20 hover:scale-105"
                  >
                    <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="text-sm font-semibold">{t.contact.social.linkedin}</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1CGCAFfz8y/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-xl bg-white/10 px-6 py-3 backdrop-blur-sm ring-1 ring-white/20 transition-all hover:bg-white/20 hover:scale-105"
                  >
                    <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="text-sm font-semibold">{t.contact.social.facebook}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* In-person meeting CTA */}
        <section className="section section-muted">
          <div className="container-12">
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-lg">
              <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <svg
                  className="h-8 w-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="mt-6 text-2xl font-bold text-brand">{t.contact.inPerson.title}</h2>
              <p className="mt-3 text-slate-600">{t.contact.inPerson.description}</p>
              <a
                href="/demo"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-orange-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
              >
                {t.contact.inPerson.cta}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
