import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="mt-20 border-t">
      <div className="container-12 grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        <div>
          <div className="text-xl font-semibold text-brand">Maintafox</div>
          <p className="mt-2 text-sm text-slate-600">
            Computerized maintenance management software engineered in Algeria to boost uptime,
            safety, and cost control.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            © {new Date().getFullYear()} Maintafox. All rights reserved.
          </p>
        </div>
        <div>
          <div className="font-medium mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/features" className="hover:text-brand">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#benefits" className="hover:text-brand">
                Benefits
              </Link>
            </li>
            <li>
              <Link href="/#how-it-works" className="hover:text-brand">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="hover:text-brand">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brand">
                About us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-brand">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/demo" className="hover:text-brand">
                Request Demo
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Legal</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-brand">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-brand">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Contact Us (Algeria)</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:contact@maintafox.systems" className="hover:text-brand">
                contact@maintafox.systems
              </a>
            </li>
            <li>
              <a href="tel:+213540537886" className="hover:text-brand">
                +213 (540) 537-886
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/1CGCAFfz8y/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/maintafox-systems/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
