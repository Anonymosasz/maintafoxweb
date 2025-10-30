import Link from 'next/link';
import { MotionSection } from '@/components/motion/MotionSection';
import {
  Gauge,
  ClipboardCheck,
  CalendarCheck,
  Boxes,
  BarChart3,
  ShieldCheck,
  Workflow,
  Bot,
  SatelliteDish,
  MessagesSquare,
  Smartphone,
} from 'lucide-react';

const coreModules = [
  {
    title: 'Asset Lifecycle Management',
    Icon: Gauge,
    details: [
      'Complete equipment register with customizable hierarchies, BOMs, and risk ratings.',
      'Attach manuals, drawings, warranties, and compliance certificates.',
      'Capture condition data, meter readings, and failure codes to spot trends.',
    ],
  },
  {
    title: 'Intelligent Work Orders',
    Icon: ClipboardCheck,
    details: [
      'Smart forms, checklists, and photo capture on mobile devices with offline sync.',
      'Role-based approvals, SLA monitoring, and automatic escalations.',
      'Technician workload balancing with drag-and-drop planning board.',
    ],
  },
  {
    title: 'Preventive Maintenance Automation',
    Icon: CalendarCheck,
    details: [
      'Calendar, meter, event, and condition-based schedules covering assets and subassemblies.',
      'Generate routes and inspections to standardize safety and compliance tasks.',
      'Track PM compliance and overdue tasks with dashboards and notifications.',
    ],
  },
  {
    title: 'Spare Parts & Procurement',
    Icon: Boxes,
    details: [
      'Multi-warehouse inventory with reorder points, lead times, and supplier scorecards.',
      'Cost tracking, purchase requisitions, and approvals built for maintenance buyers.',
      'Barcode scanning and kits for rapid technician issuing.',
    ],
  },
  {
    title: 'Analytics & Reporting',
    Icon: BarChart3,
    details: [
      'Executive dashboards for MTTR, MTBF, backlog, OEE, and budget vs actual.',
      'Scheduler productivity, technician utilization, and labor cost reporting.',
      'Export to Excel, Power BI, or PDF with one click.',
    ],
  },
  {
    title: 'Health, Safety & Compliance',
    Icon: ShieldCheck,
    details: [
      'Permit-to-work workflows, lockout/tagout checklists, and risk mitigation forms.',
      'Audit-ready traceability with digital signatures and time-stamped history.',
      'Documentation control for ISO 55000, API, GMP, and local regulations.',
    ],
  },
];

const reliabilityFeatures = [
  'Failure mode analytics and Pareto charts to prioritize reliability initiatives.',
  'Condition monitoring dashboards for vibration, temperature, and energy readings.',
  'AI-assisted recommendations for spare part optimization and predictive maintenance.',
  'Maintenance budgeting tools that forecast costs based on backlog and asset criticality.',
  'Root cause analysis templates and 5-Why workflows to institutionalize learnings.',
];

const integrations = [
  {
    category: 'Business Systems',
    tools: ['SAP', 'Odoo', 'Microsoft Dynamics 365', 'Sage', 'Custom ERP'],
    Icon: Workflow,
  },
  {
    category: 'OT & IoT',
    tools: ['SCADA', 'OPC UA', 'Modbus Gateways', 'Industrial IoT sensors', 'Historian databases'],
    Icon: SatelliteDish,
  },
  {
    category: 'Collaboration',
    tools: ['Microsoft Teams', 'Slack', 'Email alerts', 'SMS gateways'],
    Icon: MessagesSquare,
  },
];

const mobilityHighlights = [
  'Native Android app with offline-first sync for field technicians.',
  'Digital work instructions, checklists, and auditable signatures.',
  'QR code scanning to instantly view asset history and open new requests.',
  'Voice dictation and photo annotations to capture rich maintenance feedback.',
];

export default function FeaturesPage() {
  return (
    <>
      <main>
        <section className="section bg-gradient-to-br from-slate-50 via-white to-slate-100">
          <div className="container-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-brand">
                CMMS features engineered for reliability leaders
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Maintafox unifies assets, work execution, spare parts, and analytics in one
                localized CMMS platform. Every feature is designed with Algerian maintenance teams
                to drive uptime, safety, and cost control.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/demo" className="btn-primary">
                  Request a feature walkthrough
                </Link>
                <Link href="/contact" className="btn-outline">
                  Talk with our solution engineers
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <h2 className="text-lg font-semibold text-brand">What makes Maintafox different?</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                  <span>
                    Localized deployment options (cloud or on-premise) with Algerian data residency.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                  <span>
                    Multi-language interface (Arabic, French, English) and configurable user roles.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                  <span>
                    Implementation accelerators, templates, and KPI dashboards for mission-critical
                    industries.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <MotionSection className="section">
          <div className="container-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-brand">Core CMMS modules</h2>
              <p className="mt-3 text-slate-600">
                Streamline maintenance operations with connected modules that share the same data
                model and analytics engine.
              </p>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {coreModules.map(({ title, details, Icon }) => (
                <article
                  key={title}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-lg font-semibold text-brand">{title}</h3>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {details.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection className="section section-muted">
          <div className="container-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold text-brand">
                Reliability and continuous improvement toolkit
              </h2>
              <p className="mt-3 text-slate-600">
                Go beyond basic maintenance management. Maintafox empowers reliability engineers
                with analytics, collaboration, and predictive insights to drive sustainable
                performance.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {reliabilityFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">Reliability dashboards</h3>
              <dl className="mt-6 space-y-4 text-sm text-slate-600">
                <div>
                  <dt className="font-semibold text-brand">Reliability snapshot</dt>
                  <dd className="mt-1 text-slate-500">
                    Compare MTBF and MTTR across sites, assets, and production lines.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand">Backlog and risk</dt>
                  <dd className="mt-1 text-slate-500">
                    Visualize overdue PMs, critical corrective work, and risk scoring in one view.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand">Cost intelligence</dt>
                  <dd className="mt-1 text-slate-500">
                    Track maintenance budget vs actual, labor cost, and spare part consumption
                    trends.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="section">
          <div className="container-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-brand">
                Mobile-first maintenance execution
              </h2>
              <p className="mt-3 text-slate-600">
                Give technicians the tools they need on the shop floor, in remote facilities, or
                across expansive sites.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {mobilityHighlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-4 text-sm text-slate-600">
                Offline mode ensures technicians can execute work orders, capture data, and sync
                once connectivity is restored.
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand">Role-based CMMS experiences</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    role: 'Maintenance Manager',
                    value:
                      'Plan resources, approve work, and analyze KPIs from a single command center.',
                  },
                  {
                    role: 'Reliability Engineer',
                    value:
                      'Drill into root causes, failure modes, and lifecycle cost to drive strategy.',
                  },
                  {
                    role: 'Technician',
                    value:
                      'Receive prioritized work, complete guided procedures, and capture completion data in seconds.',
                  },
                  {
                    role: 'Stores & Procurement',
                    value:
                      'Control stock levels, manage suppliers, and track part usage directly from the CMMS.',
                  },
                ].map((item) => (
                  <div
                    key={item.role}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h4 className="text-sm font-semibold text-brand">{item.role}</h4>
                    <p className="mt-2 text-xs text-slate-600">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="section section-muted">
          <div className="container-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-brand">
                Integrations and interoperability
              </h2>
              <p className="mt-3 text-slate-600">
                Maintafox connects with your existing business systems, OT infrastructure, and
                collaboration tools to create a closed loop between maintenance, operations, and
                finance.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {integrations.map(({ category, tools, Icon }) => (
                <div
                  key={category}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-sm font-semibold text-brand">{category}</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                    {tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection className="section">
          <div className="container-12">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
              <h2 className="text-3xl font-semibold text-brand">
                Experience the Maintafox platform
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                Discover how Maintafox can transform your maintenance organization with a guided
                feature-by-feature demonstration tailored to your KPIs, assets, and workforce.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/demo" className="btn-primary">
                  Book a live demo
                </Link>
                <Link href="/contact" className="btn-outline">
                  Download the feature checklist
                </Link>
              </div>
            </div>
          </div>
        </MotionSection>
      </main>
    </>
  );
}
