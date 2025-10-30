'use client';

import Link from 'next/link';
import { MotionSection } from '@/components/motion/MotionSection';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Activity,
  AlertTriangle,
  CalendarCheck,
  BarChart3,
  Boxes,
  ClipboardCheck,
  ShieldCheck,
  Wrench,
  Smartphone,
  Gauge,
} from 'lucide-react';

const painpoints = [
  {
    title: 'Unexpected Downtime',
    desc: 'Production stops, scrap rates spike, and emergency overtime erodes margins when maintenance is purely reactive.',
    Icon: AlertTriangle,
  },
  {
    title: 'Complex Scheduling',
    desc: 'Manual work order coordination creates silos between maintenance, production, and stores teams.',
    Icon: CalendarCheck,
  },
  {
    title: 'Limited Visibility',
    desc: 'Without reliable CMMS analytics, leaders cannot prove ROI or forecast maintenance budgets with confidence.',
    Icon: BarChart3,
  },
  {
    title: 'Inefficient Inventory',
    desc: 'Unplanned stockouts and overstocked critical spares tie up capital and increase technician frustration.',
    Icon: Boxes,
  },
];

const featureHighlights = [
  {
    title: 'Asset Performance Management',
    Icon: Gauge,
    bullets: [
      'Complete digital history and condition monitoring for every equipment asset.',
      'Attach SOPs, drawings, certifications, and IoT sensor data in one secure repository.',
      'Automated alerts for warranty milestones, lifecycle events, and compliance inspections.',
    ],
  },
  {
    title: 'Work Order Intelligence',
    Icon: ClipboardCheck,
    bullets: [
      'Drag-and-drop planning board with technician skills, shifts, and availability.',
      'Configurable approval workflows, SLA timers, and escalation rules.',
      'Rich mobile forms with photos, meter readings, checklists, and digital signatures.',
    ],
  },
  {
    title: 'Preventive & Predictive Maintenance',
    Icon: CalendarCheck,
    bullets: [
      'Time-, condition-, and usage-based triggers aligned with OEM recommendations.',
      'Calendar, meter, and event schedules to ensure PM completion compliance.',
      'AI-assisted forecasting to extend asset lifecycle and reduce MTTR.',
    ],
  },
  {
    title: 'Spare Parts & Procurement',
    Icon: Boxes,
    bullets: [
      'Multi-site inventory visibility with minimum/maximum thresholds and reorder automation.',
      'Supplier performance scorecards and lead-time tracking to support procurement teams.',
      'Barcode scanning, lot tracking, and cost roll-ups for accurate maintenance budgeting.',
    ],
  },
  {
    title: 'Analytics & Dashboards',
    Icon: BarChart3,
    bullets: [
      'MTTR, MTBF, OEE, backlog, and compliance dashboards ready out of the box.',
      'Role-based scorecards for maintenance managers, reliability engineers, and executives.',
      'Export to Power BI or Excel for deeper reporting and stakeholder presentations.',
    ],
  },
  {
    title: 'Security & Deployment',
    Icon: ShieldCheck,
    bullets: [
      'Available on-premise or cloud with data residency in Algeria.',
      'Role-based access control, audit trail, and ISO 27001-aligned security practices.',
      'Dedicated local implementation, training, and 24/7 bilingual support hotline.',
    ],
  },
];

const testimonialQuotes = [
  {
    quote:
      'Maintafox gave us instant visibility into backlog, technician workload, and spare part consumption. Downtime is down 32% since go-live.',
    name: 'Maintenance Director',
    company: 'Food & Beverage Plant – Oran',
  },
  {
    quote:
      'The mobile CMMS app keeps our field teams synchronized and compliant with safety procedures even in remote sites.',
    name: 'Reliability Supervisor',
    company: 'Oil & Gas Operator – Hassi Messaoud',
  },
  {
    quote:
      'We finally have traceability across assets, work orders, and costs to justify capital investments to leadership.',
    name: 'Operations Manager',
    company: 'Pharmaceutical Manufacturer – Algiers',
  },
];

const industriesServed = [
  'Manufacturing & Industrial Plants',
  'Oil & Gas, Energy, and Utilities',
  'Healthcare Facilities & Biomedical Teams',
  'Transportation, Fleet, and Logistics',
  'Hospitality, Real Estate, and Facility Management',
  'Public Sector, Municipalities, and Smart Cities',
];

const faqs = [
  {
    question: 'How fast can our maintenance team be live on Maintafox?',
    answer:
      'Most Algerian plants go live in 4-6 weeks. We import your asset register, configure preventive maintenance plans, train users, and validate KPIs before handover.',
  },
  {
    question: 'Does Maintafox integrate with ERP or SCADA systems?',
    answer:
      'Yes. Our API and integration toolkit connect with SAP, Odoo, Dynamics, and leading SCADA or historian platforms to synchronize assets, work orders, and inventory levels.',
  },
  {
    question: 'Is the solution available on-premise?',
    answer:
      'We support both secure cloud hosting in Algeria and on-premise deployments to meet IT and compliance requirements, including offline-capable technician apps.',
  },
  {
    question: 'Can Maintafox help with regulatory compliance?',
    answer:
      'Audit trails, digital logbooks, calibration schedules, and document control help teams meet ISO 55000, GMP, API, and national safety regulations.',
  },
];

const pricingPlans = [
  {
    name: 'Launch',
    price: '€390 / month',
    desc: 'Ideal for small maintenance teams digitalizing their first CMMS.',
    items: [
      'Up to 15 users with mobile access',
      'Asset register + PM scheduling + work order automation',
      'Local onboarding workshop and bilingual support',
    ],
  },
  {
    name: 'Scale',
    price: '€690 / month',
    desc: 'Best for multi-site operations seeking centralized maintenance governance.',
    items: [
      'Unlimited sites, teams, and advanced analytics dashboards',
      'Inventory optimization, procurement workflows, and vendor portal',
      'API integrations, SSO, and quarterly health checks',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Tailored for highly regulated industries requiring hybrid or on-premise deployment.',
    items: [
      'Dedicated success manager and 24/7 support SLA',
      'Private cloud or on-premise installation with hardening services',
      'Advanced cybersecurity, multi-language rollout, and change management program',
    ],
  },
];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-slate-950 via-brand to-slate-900">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent blur-[120px]" />
            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500 blur-[120px]" />
          </div>

          <div className="container-12 relative flex min-h-[90vh] flex-col justify-center py-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative z-10">
                {/* Floating badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-xl backdrop-blur-sm ring-1 ring-white/20">
                  <Activity className="h-3.5 w-3.5 animate-pulse text-accent" />
                  <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                    {t.hero.badge}
                  </span>
                </div>

                <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                  {t.hero.title1}
                  <span className="bg-gradient-to-r from-accent to-orange-300 bg-clip-text text-transparent">
                    {' '}
                    {t.hero.title2}
                  </span>
                  <br />
                  {t.hero.title3}
                  <span className="bg-gradient-to-r from-blue-400 to-brand-accent bg-clip-text text-transparent">
                    {' '}
                    {t.hero.title4}
                  </span>
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-slate-300 lg:text-xl">
                  {t.hero.subtitle}
                </p>

                {/* Stat pills */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="group relative overflow-hidden rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm ring-1 ring-white/20 transition-all hover:bg-white/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative text-3xl font-bold text-white">
                      {t.hero.stat1Value}
                    </div>
                    <div className="relative text-xs uppercase tracking-wider text-slate-300">
                      {t.hero.stat1Label}
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm ring-1 ring-white/20 transition-all hover:bg-white/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative text-3xl font-bold text-white">
                      {t.hero.stat2Value}
                    </div>
                    <div className="relative text-xs uppercase tracking-wider text-slate-300">
                      {t.hero.stat2Label}
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm ring-1 ring-white/20 transition-all hover:bg-white/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative text-3xl font-bold text-white">
                      {t.hero.stat3Value}
                    </div>
                    <div className="relative text-xs uppercase tracking-wider text-slate-300">
                      {t.hero.stat3Label}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/demo"
                    className="group relative overflow-hidden rounded-xl bg-accent px-8 py-4 font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:shadow-accent/50"
                  >
                    <span className="relative z-10">{t.hero.ctaPrimary}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-accent opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                  <Link
                    href="/features"
                    className="group rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
                  >
                    {t.hero.ctaSecondary}
                  </Link>
                </div>
              </div>

              {/* Floating dashboard preview */}
              <div className="relative scale-125">
                {/* Dashboard image with 3D floating effect */}
                <div
                  className="relative transform-gpu transition-all duration-500 hover:scale-110"
                  style={{
                    animation: 'float 6s ease-in-out infinite',
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/dashboard.png"
                    alt="Real-time CMMS Dashboard showing maintenance metrics"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="white"
              />
            </svg>
          </div>
        </section>{' '}
        <MotionSection className="border-t border-b border-slate-200 bg-white/70 py-6">
          <div className="container-12 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            <span>Trusted by Algerian innovators</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden="true" />
            <span>Industrial Manufacturing</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden="true" />
            <span>Oil &amp; Gas Operations</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden="true" />
            <span>Healthcare Facilities</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden="true" />
            <span>Smart Cities</span>
          </div>
        </MotionSection>
        {/* Pain points - Alternating layout */}
        <MotionSection id="benefits" className="section">
          <div className="container-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold text-brand">{t.painPoints.title}</h2>
              <p className="mt-4 text-lg text-slate-600">{t.painPoints.subtitle}</p>
            </div>

            <div className="mt-16 space-y-12">
              {painpoints.map(({ Icon }, index) => (
                <div
                  key={t.painPoints.items[index].title}
                  className={`group grid items-center gap-8 lg:grid-cols-2 ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Icon side */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative mx-auto flex h-64 w-64 items-center justify-center">
                      {/* Animated background rings */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-blue-500/20 blur-2xl transition-all group-hover:scale-110" />
                      <div className="absolute inset-4 rounded-full bg-white ring-1 ring-slate-200 transition-all group-hover:ring-accent" />
                      <div className="relative grid h-24 w-24 place-items-center rounded-2xl bg-gradient-to-br from-accent to-orange-600 text-white shadow-xl transition-all group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-12 w-12" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-100 transition-all group-hover:shadow-xl">
                      <h3 className="text-2xl font-bold text-brand">
                        {t.painPoints.items[index].title}
                      </h3>
                      <p className="mt-4 text-slate-600 leading-relaxed">
                        {t.painPoints.items[index].description}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-accent font-semibold">
                        <span>{t.painPoints.learnMore}</span>
                        <svg
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>
        {/* Feature pillars - Split screen with diagonal */}
        <MotionSection id="features" className="section section-muted relative overflow-hidden">
          {/* Diagonal background split */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50" />
            <div
              className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-br from-accent/5 to-orange-50"
              style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }}
            />
          </div>

          <div className="container-12 relative">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold text-brand">
                Six pillars of maintenance excellence
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Every module shares a unified data model and adapts to Algerian regulatory
                frameworks.
              </p>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {featureHighlights.map(({ title, bullets, Icon }, index) => (
                <article key={title} className="group relative">
                  {/* Hover glow effect */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent/0 via-accent/50 to-blue-500/50 opacity-0 blur transition-opacity group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200 transition-all group-hover:shadow-2xl">
                    {/* Icon header with gradient background */}
                    <div className="mb-6 inline-flex">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent to-orange-600 blur-md opacity-50" />
                        <div className="relative grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-accent to-orange-600 text-white shadow-lg">
                          <Icon className="h-7 w-7" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-brand">{title}</h3>

                    <ul className="mt-6 space-y-4 text-sm text-slate-600">
                      {bullets.map((point, idx) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                            <span className="text-xs font-bold">{idx + 1}</span>
                          </span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover reveal footer */}
                    <div className="mt-6 pt-6 border-t border-slate-100 opacity-0 transition-opacity group-hover:opacity-100">
                      <Link
                        href="/features"
                        className="flex items-center gap-2 text-sm font-semibold text-accent"
                      >
                        <span>Explore in detail</span>
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </MotionSection>
        {/* KPI highlights - Visual metrics with progress */}
        <MotionSection
          id="kpis"
          className="section bg-gradient-to-br from-slate-900 to-brand text-white relative overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-1/3 top-1/3 h-96 w-96 rounded-full bg-accent blur-[100px] animate-pulse" />
            <div
              className="absolute right-1/3 bottom-1/3 h-96 w-96 rounded-full bg-blue-500 blur-[100px] animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </div>

          <div className="container-12 relative">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold">Results that speak louder than promises</h2>
              <p className="mt-4 text-lg text-slate-300">
                Real performance data from Algerian plants using Maintafox CMMS.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: 'Mean Time To Repair',
                  value: '1.8',
                  unit: 'hours',
                  detail: 'Faster resolution with guided workflows',
                  color: 'from-accent to-orange-400',
                },
                {
                  label: 'Mean Time Between Failures',
                  value: '120',
                  unit: 'days',
                  detail: 'Extended asset health via PM compliance',
                  color: 'from-blue-400 to-brand-accent',
                },
                {
                  label: 'Asset Uptime',
                  value: '99.2',
                  unit: '%',
                  detail: 'Planned maintenance reduces surprises',
                  color: 'from-emerald-400 to-green-500',
                },
                {
                  label: 'PM Compliance',
                  value: '94',
                  unit: '%',
                  detail: 'Automated scheduling boosts adherence',
                  color: 'from-accent to-orange-400',
                },
              ].map((metric, index) => (
                <div
                  key={metric.label}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card with glassmorphism */}
                  <div className="relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-xl ring-1 ring-white/20 transition-all hover:bg-white/20 hover:scale-105">
                    {/* Top gradient bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${metric.color}`}
                    />

                    {/* Large number */}
                    <div className="relative">
                      <div
                        className={`text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
                      >
                        {metric.value}
                      </div>
                      <div className="text-lg font-semibold text-slate-300">{metric.unit}</div>
                    </div>

                    {/* Label */}
                    <div className="mt-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                      {metric.label}
                    </div>

                    {/* Detail text - reveals on hover */}
                    <p className="mt-3 text-xs leading-relaxed text-slate-400 opacity-0 transition-opacity group-hover:opacity-100">
                      {metric.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>
        {/* How it works timeline */}
        <MotionSection id="how-it-works" className="section">
          <div className="container-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-brand">
                From kickoff to continuous improvement
              </h2>
              <p className="mt-3 text-slate-600">
                Our proven implementation playbook delivers value quickly while equipping your
                maintenance team for long-term success.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              {[
                {
                  title: 'Discover',
                  body: 'Audit existing workflows, assets, compliance requirements, and available data sources. Build the rollout roadmap with your stakeholders.',
                },
                {
                  title: 'Configure',
                  body: 'Import asset registers, set preventive maintenance plans, create work order templates, and configure notifications in Arabic, French, or English.',
                },
                {
                  title: 'Adopt',
                  body: 'Deliver classroom and on-the-floor training. Launch mobile CMMS apps, digital checklists, and technician certifications.',
                },
                {
                  title: 'Optimize',
                  body: 'Review KPIs, fine-tune dashboards, connect to ERP/SCADA systems, and unlock predictive maintenance insights.',
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Step {index + 1}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-brand">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>
        {/* Testimonials - Quote-forward design */}
        <MotionSection id="testimonials" className="section bg-white relative overflow-hidden">
          {/* Decorative quote marks */}
          <div className="absolute top-10 left-10 text-[200px] font-serif text-accent/5 leading-none">
            &ldquo;
          </div>
          <div className="absolute bottom-10 right-10 text-[200px] font-serif text-brand/5 leading-none rotate-180">
            &rdquo;
          </div>

          <div className="container-12 relative">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold text-brand">Loved by maintenance professionals</h2>
              <p className="mt-4 text-lg text-slate-600">
                Hear from Algerian plant managers, reliability engineers, and technicians who trust
                Maintafox every day.
              </p>
            </div>

            {/* Staggered testimonials */}
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              {[
                {
                  quote:
                    'Maintafox transformed our reactive culture into a proactive maintenance environment. The mobile CMMS and spare parts tracking reduced unplanned downtime by 40% in six months.',
                  author: 'Karim B.',
                  role: 'Maintenance Manager',
                  company: 'Leading Chemical Plant',
                  location: 'Skikda, Algeria',
                },
                {
                  quote:
                    'The work order system with barcode scanning is a game-changer. Technicians love the offline-first mobile app, and we finally have accurate labor and parts cost data for budgeting.',
                  author: 'Amina L.',
                  role: 'Reliability Engineer',
                  company: 'Steel Manufacturing',
                  location: 'Annaba, Algeria',
                },
                {
                  quote:
                    'Automated PM scheduling ensures we never miss critical inspections. The calendar heatmap and KPI dashboard help us demonstrate maintenance value to senior leadership.',
                  author: 'Yacine M.',
                  role: 'Plant Manager',
                  company: 'Pharmaceutical Production',
                  location: 'Constantine, Algeria',
                },
                {
                  quote:
                    'Integration with our IoT sensors for condition monitoring is seamless. Real-time alerts help us prevent failures before they happen, improving both safety and productivity.',
                  author: 'Sofiane K.',
                  role: 'Operations Director',
                  company: 'Oil & Gas Facility',
                  location: 'Hassi Messaoud, Algeria',
                },
              ].map((testimonial, index) => (
                <div
                  key={testimonial.author}
                  className={`group relative ${index % 2 === 0 ? 'lg:translate-y-8' : ''}`}
                >
                  {/* Card */}
                  <div className="relative rounded-3xl bg-gradient-to-br from-slate-50 to-white p-8 shadow-xl ring-1 ring-slate-200 transition-all hover:shadow-2xl hover:-translate-y-1">
                    {/* Accent corner */}
                    <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-full rounded-tr-3xl bg-gradient-to-br from-accent/20 to-transparent" />

                    {/* Large quote */}
                    <div className="text-5xl font-serif text-accent/30">&ldquo;</div>

                    {/* Quote text */}
                    <p className="mt-2 text-lg leading-relaxed text-slate-700">
                      {testimonial.quote}
                    </p>

                    {/* Attribution */}
                    <div className="mt-6 flex items-center gap-4">
                      {/* Avatar placeholder with gradient */}
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-brand flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </div>

                      <div className="flex-1">
                        <div className="font-semibold text-brand">{testimonial.author}</div>
                        <div className="text-sm text-slate-600">{testimonial.role}</div>
                        <div className="text-xs text-slate-500">
                          {testimonial.company} • {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>
        {/* Industries served */}
        <MotionSection className="section">
          <div className="container-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="text-3xl font-semibold text-brand">
                  Purpose-built for mission-critical industries
                </h2>
                <p className="mt-3 text-slate-600">
                  Maintafox adapts to the way your maintenance organization works. Our domain
                  experts bring field experience from manufacturing, energy, transportation, real
                  estate, and government sectors across the MENA region.
                </p>
                <p className="mt-4 text-slate-600">
                  Each deployment includes industry-specific templates, KPI dashboards, and
                  regulatory checklists to accelerate adoption.
                </p>
              </div>
              <ul className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:grid-cols-2">
                {industriesServed.map((industry) => (
                  <li key={industry} className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MotionSection>
        {/* Pricing - Minimal Single Card with Animated Text */}
        <MotionSection id="pricing" className="section bg-slate-50">
          <div className="container-12">
            {/* Minimal Single Card */}
            <div className="mx-auto max-w-3xl">
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                {/* Small header */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {t.pricing.badge}
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-brand">{t.pricing.title}</h2>
                </div>

                {/* Animated rotating text factors */}
                <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
                  {t.pricing.factors.map((factor, index) => (
                    <span
                      key={factor}
                      className="inline-block rounded-lg bg-slate-50 px-3 py-1.5 text-slate-700 ring-1 ring-slate-200 transition-all hover:bg-brand/5 hover:text-brand hover:ring-brand/20"
                      style={{
                        animation: 'fadeIn 0.5s ease-in-out',
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: 'both',
                      }}
                    >
                      {factor}
                    </span>
                  ))}
                </div>

                {/* Simple CTA */}
                <div className="mt-8 flex items-center justify-center gap-4">
                  <a
                    href="/demo"
                    className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark"
                  >
                    {t.pricing.ctaPrimary}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className="text-sm font-medium text-slate-600 hover:text-brand"
                  >
                    {t.pricing.ctaSecondary}
                  </a>
                </div>

                {/* Bottom note */}
                <p className="mt-6 text-center text-xs text-slate-500">{t.pricing.footer}</p>
              </div>
            </div>
          </div>
        </MotionSection>
        {/* Resources CTA - Split design with contrasts */}
        <MotionSection className="section">
          <div className="container-12">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left card - Light theme with icon */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white p-10 shadow-xl ring-1 ring-slate-200 transition-all hover:shadow-2xl hover:-translate-y-1">
                {/* Icon badge */}
                <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand/10 to-accent/10 blur-2xl" />

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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-brand">CMMS Buyer&apos;s Guide</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Learn how to evaluate computerized maintenance management systems, calculate
                    ROI, and build stakeholder alignment. The guide includes checklists, KPI
                    benchmarks, and an implementation roadmap.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-brand transition-all hover:gap-3"
                  >
                    Request the PDF guide
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right card - Dark theme with gradient */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900 p-10 text-white shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
                {/* Animated glow */}
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl animate-pulse" />

                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 backdrop-blur-sm ring-1 ring-accent/50">
                    <svg
                      className="h-7 w-7 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">Maintenance Excellence Webinar Series</h3>
                  <p className="mt-3 text-slate-200 leading-relaxed">
                    Join our monthly live sessions covering reliability-centered maintenance, spare
                    part optimization, and asset performance analytics tailored for Algerian
                    industries.
                  </p>

                  <Link
                    href="/demo"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-all hover:gap-3"
                  >
                    Reserve your seat
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>
        {/* FAQ */}
        <MotionSection id="faq" className="section section-muted">
          <div className="container-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-brand">
                Frequently asked questions about Maintafox
              </h2>
              <p className="mt-3 text-slate-600">
                Everything you need to know about our computerized maintenance management system,
                implementation methodology, and support services.
              </p>
            </div>
            <div className="mt-10 grid gap-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-brand">
                    {faq.question}
                    <span className="text-sm font-normal text-slate-400 group-open:hidden">+</span>
                    <span className="hidden text-sm font-normal text-slate-400 group-open:block">
                      −
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </MotionSection>
        {/* Final CTA */}
        <MotionSection className="section">
          <div className="container-12 text-center">
            <h2 className="text-3xl font-semibold text-brand">
              Ready to modernize maintenance with a CMMS built in Algeria?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              See Maintafox in action and discover how our localized computerized maintenance
              management system boosts reliability, asset uptime, and operational profitability.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/demo" className="btn-primary">
                Schedule your free demo
              </Link>
              <Link href="/contact" className="btn-outline">
                Talk with our experts
              </Link>
            </div>
          </div>
        </MotionSection>
      </main>
    </>
  );
}
