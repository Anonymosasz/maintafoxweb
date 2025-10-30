'use client';
import { useState } from 'react';
import { z } from 'zod';

const FormSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  message: z.string().min(5),
});

export default function DemoPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus('loading');
    setError(null);
    const data = Object.fromEntries(formData.entries());
    const parsed = FormSchema.safeParse(data);
    if (!parsed.success) {
      setStatus('error');
      setError('Please fill all fields correctly.');
      return;
    }
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch (e) {
      setStatus('error');
      setError('Something went wrong. Please try again later.');
    }
  }

  return (
    <>
      <main>
        {/* Hero with gradient background */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand via-brand-dark to-slate-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-1/3 top-1/3 h-80 w-80 rounded-full bg-accent blur-[100px]" />
            <div className="absolute right-1/3 bottom-1/3 h-80 w-80 rounded-full bg-blue-500 blur-[100px]" />
          </div>

          <div className="container-12 relative py-16">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm ring-1 ring-white/20">
                <svg className="h-3.5 w-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="10" />
                </svg>
                Schedule Your Demo
              </div>
              <h1 className="mt-6 text-5xl font-bold tracking-tight">
                See Maintafox in{' '}
                <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                  Action
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-200">
                Share your maintenance objectives and we&apos;ll tailor a walkthrough of the
                Maintafox platform covering asset hierarchies, work order intelligence, preventive
                maintenance plans, inventory optimization, and analytics dashboards relevant to your
                operations.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
              {[
                { icon: '⏱️', text: '45-minute demo with Q&A' },
                { icon: '🌍', text: 'Arabic, French, or English' },
                { icon: '🎯', text: 'Tailored to your industry' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 backdrop-blur-sm ring-1 ring-white/10"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
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

        <section className="section bg-white">
          <div className="container-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Form side with enhanced design */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-white p-8 shadow-xl ring-1 ring-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark">
                      <svg
                        className="h-6 w-6 text-white"
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
                    <div>
                      <h2 className="text-2xl font-bold text-brand">Request Your Demo</h2>
                      <p className="text-sm text-slate-600">
                        We&apos;ll respond within 1 business day
                      </p>
                    </div>
                  </div>

                  <form action={onSubmit} className="mt-8 space-y-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">
                        Full name *
                      </label>
                      <input
                        name="name"
                        placeholder="John Smith"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 transition-all focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">
                        Company *
                      </label>
                      <input
                        name="company"
                        placeholder="Your Company Name"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 transition-all focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">
                        Work email *
                      </label>
                      <input
                        name="email"
                        placeholder="john@company.com"
                        type="email"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 transition-all focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">
                        Phone *
                      </label>
                      <input
                        name="phone"
                        placeholder="+213 XXX XXX XXX"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 transition-all focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">
                        Tell us about your needs *
                      </label>
                      <textarea
                        name="message"
                        placeholder="Describe your assets, current tools, and KPIs you want to improve..."
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 transition-all focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        rows={4}
                        required
                      />
                    </div>
                    <button
                      disabled={status === 'loading'}
                      className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-accent to-orange-600 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                      type="submit"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {status === 'loading' ? (
                          <>
                            <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Request
                            <svg
                              className="h-5 w-5 transition-transform group-hover:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                    {status === 'success' && (
                      <div className="rounded-xl bg-green-50 p-4 text-center text-sm font-medium text-green-700 ring-1 ring-green-200">
                        ✓ Thanks! We&apos;ll be in touch shortly.
                      </div>
                    )}
                    {status === 'error' && error && (
                      <div className="rounded-xl bg-red-50 p-4 text-center text-sm font-medium text-red-700 ring-1 ring-red-200">
                        {error}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Info side with visual enhancements */}
            <div className="space-y-6">
              {/* What to expect card */}
              <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-accent/10 to-transparent" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                    <svg
                      className="h-6 w-6 text-brand"
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
                  <h3 className="mt-4 text-xl font-bold text-brand">What to Expect</h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      'Discovery conversation on your maintenance workflows, compliance requirements, and integration landscape.',
                      'Live tour of asset management, work order intelligence, preventive scheduling, and analytics dashboards.',
                      'Discussion of deployment options (cloud, on-premise, hybrid) and security best practices.',
                      'Recommended next steps, from pilot projects to enterprise rollouts with change management support.',
                    ].map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                          {index + 1}
                        </div>
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact card with dark theme */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-brand-dark p-8 text-white shadow-xl">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 backdrop-blur-sm ring-1 ring-accent/50">
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
                  <h3 className="mt-4 text-lg font-bold">Need Immediate Help?</h3>
                  <div className="mt-4 space-y-3 text-sm text-slate-200">
                    <div className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-accent"
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
                      <a
                        href="mailto:contact@maintafox.systems"
                        className="hover:text-accent transition-colors"
                      >
                        contact@maintafox.systems
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-accent"
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
                      <a href="tel:+213540537886" className="hover:text-accent transition-colors">
                        +213 (540) 537-886
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
