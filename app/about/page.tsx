import Link from 'next/link';

const milestones = [
  {
    year: '2021',
    title: 'Concept & Research',
    description:
      'Partnered with maintenance directors across Algerian manufacturing plants to map daily challenges and document the CMMS capabilities needed locally.',
  },
  {
    year: '2022',
    title: 'Product Build',
    description:
      'Developed the Maintafox platform with bilingual interfaces, on-premise deployment, and integration connectors for popular ERPs.',
  },
  {
    year: '2023',
    title: 'Market Validation',
    description:
      'Recognized by NABTAKAR / Ministry of Startups – Algeria as an Innovative Project after successful pilots in industrial and energy sectors.',
  },
  {
    year: 'Today',
    title: 'Scaling Reliability',
    description:
      'Supporting organizations across manufacturing, healthcare, utilities, and public sector as they modernize maintenance operations.',
  },
];

const values = [
  {
    title: 'Local partnership',
    detail:
      'We co-create with Algerian maintenance, engineering, and IT teams to ensure Maintafox fits operational realities and regulatory frameworks.',
  },
  {
    title: 'Operational excellence',
    detail:
      'Every feature we build must improve uptime, safety, and cost control. We measure success by your maintenance KPIs.',
  },
  {
    title: 'Transparency & trust',
    detail:
      'From implementation roadmaps to product roadmap visibility, we operate with clarity so stakeholders stay aligned.',
  },
  {
    title: 'Continuous learning',
    detail:
      'We are engineers, data scientists, and maintenance professionals who continuously iterate based on field feedback.',
  },
];

const leadership = [
  {
    name: 'Oussama ZERBIB',
    role: 'Founder & CEO',
    bio: 'Reliability engineer and entrepreneur with a passion for industrial innovation, digital transformation, and building resilient maintenance teams.',
  },
  {
    name: 'Samir Bekhti',
    role: 'Head of Product',
    bio: 'Over 12 years designing mission-critical software for energy and transport sectors, specializing in human-centered UX and CMMS workflows.',
  },
  {
    name: 'Imène Benali',
    role: 'Customer Success Lead',
    bio: 'Maintenance management consultant supporting clients through training, change management, and KPI-driven optimization.',
  },
];

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="section bg-gradient-to-br from-slate-50 via-white to-slate-100">
          <div className="container-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-brand">About Maintafox</h1>
              <p className="mt-4 text-lg text-slate-700">
                Maintafox is Algeria&apos;s first locally built computerized maintenance management
                system (CMMS). We combine deep industry expertise with modern engineering to empower
                maintenance teams to work smarter, safer, and more transparently.
              </p>
              <p className="mt-4 text-slate-700">
                Our mission is to help organizations shift from reactive firefighting to proactive
                asset performance management through technology, training, and trusted partnership.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <h2 className="text-lg font-semibold text-brand">Fast facts</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                  <span>
                    Headquartered in Algiers with implementation teams across key industrial
                    regions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                  <span>
                    Recognized by NABTAKAR / Ministry of Startups as an Innovative Project in the
                    maintenance technology space.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                  <span>
                    Bilingual product and support (Arabic, French, English) to match the needs of
                    Algerian teams.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-brand">How Maintafox started</h2>
              <p className="mt-3 text-slate-600">
                After years solving industrial maintenance challenges, our founders saw the gap
                between global CMMS products and the realities of Algerian plants. Maintafox was
                born to deliver a localized, secure, and affordable alternative with hands-on
                support to ensure adoption sticks.
              </p>
              <p className="mt-3 text-slate-600">
                We work side-by-side with manufacturing, energy, healthcare, and public-sector
                organizations to digitize maintenance, reduce downtime, and empower technicians with
                modern tools.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">Our implementation playbook</h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-600">
                <li>
                  <strong className="text-brand">1. Discover:</strong> Assess maintenance maturity,
                  data inputs, and KPIs to align objectives.
                </li>
                <li>
                  <strong className="text-brand">2. Configure:</strong> Import asset registers,
                  build preventive plans, and tailor workflows in the CMMS.
                </li>
                <li>
                  <strong className="text-brand">3. Adopt:</strong> Train technicians, planners, and
                  managers with bilingual classroom and on-site coaching.
                </li>
                <li>
                  <strong className="text-brand">4. Optimize:</strong> Review KPIs, integrate with
                  ERP/SCADA, and unlock predictive maintenance insights.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container-12">
            <h2 className="text-3xl font-semibold text-brand">Our milestones</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-4">
              {milestones.map((item) => (
                <div
                  key={item.year}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {item.year}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-brand">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-brand">What we stand for</h2>
              <p className="mt-3 text-slate-600">
                Maintafox is built on collaboration between engineers, developers, and maintenance
                professionals. Our values guide how we deliver software, services, and support.
              </p>
            </div>
            <div className="grid gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-brand">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{value.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container-12">
            <h2 className="text-3xl font-semibold text-brand">Leadership</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Our leadership team blends maintenance expertise, software craftsmanship, and customer
              success experience to deliver a CMMS platform rooted in Algerian industry needs.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {leadership.map((leader) => (
                <div
                  key={leader.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-sm font-semibold text-brand">{leader.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {leader.role}
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-12 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h2 className="text-3xl font-semibold text-brand">Join the Maintafox journey</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              We are always exploring new partnerships with maintenance teams, integrators, and
              technology providers who share our vision for reliable, sustainable operations in
              Algeria and beyond.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-brand">
              <a href="mailto:contact@maintafox.systems" className="btn-primary">
                Partner with us
              </a>
              <Link href="/contact" className="btn-outline">
                Contact Maintafox
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
