const clauses = [
  {
    heading: '1. Agreement overview',
    body: `These Terms of Service (“Terms”) govern access to and use of the Maintafox Systems (“Maintafox”, “we”, “our”) computerized maintenance management system (CMMS), websites, and related services (the “Services”). By creating an account, signing a proposal, or using the Services, you agree to be bound by these Terms on behalf of the organization you represent (“Customer”). If you do not agree, you may not use the Services.`,
  },
  {
    heading: '2. Access and accounts',
    body: `Maintafox grants Customer a non-exclusive, non-transferable right to access the Services during the subscription term, subject to timely payment and compliance with these Terms. Customer is responsible for maintaining the confidentiality of login credentials and for all activities under its accounts. Customer must promptly notify Maintafox of any unauthorized access.`,
  },
  {
    heading: '3. Acceptable use',
    body: `Customer agrees not to use the Services to transmit malicious code, violate applicable laws, infringe third-party rights, or conduct penetration tests without prior written consent. Customer will not reverse engineer, decompile, or attempt to circumvent security controls. Maintafox may suspend access if Customer’s use poses a security risk, violates the law, or impacts service integrity.`,
  },
  {
    heading: '4. Customer data',
    body: `Customer retains ownership of all data, documents, and content uploaded to the Services (“Customer Data”). Maintafox processes Customer Data solely to provide, secure, and improve the Services according to the Privacy Policy and applicable contracts. Customer is responsible for the accuracy and legality of Customer Data and obtaining necessary permissions for its use. Upon termination, Maintafox will delete or return Customer Data in accordance with Section 11.`,
  },
  {
    heading: '5. Service availability',
    body: `Maintafox will use commercially reasonable efforts to provide 24/7 availability of the cloud-hosted Services, excluding planned maintenance windows and circumstances beyond Maintafox’s reasonable control (force majeure). Service level commitments, if any, are defined in the applicable subscription agreement or service-level addendum.`,
  },
  {
    heading: '6. Professional services',
    body: `Implementation, training, integration, or consulting services are delivered according to mutually agreed statements of work. Customer will provide timely access to facilities, systems, and personnel required for successful delivery.`,
  },
  {
    heading: '7. Fees and payment',
    body: `Subscription and professional service fees are invoiced as stated in the order form or contract. Unless otherwise agreed, invoices are due within 30 days. Late payments may incur interest at 1.5% per month (or the maximum allowed by law) and may result in suspension of the Services. Fees are exclusive of taxes and duties, which are the Customer’s responsibility.`,
  },
  {
    heading: '8. Intellectual property',
    body: `Maintafox owns all intellectual property rights in the Services, documentation, logos, and underlying technology. No rights are granted except as expressly provided in these Terms. Customer feedback may be used to enhance the Services, and Maintafox will own all derivatives without identifying Customer as the source.`,
  },
  {
    heading: '9. Confidentiality',
    body: `Each party will protect the other party’s confidential information with the same care it uses to protect its own confidential information (and at least reasonable care). Confidential information may be used solely to perform obligations under these Terms and must not be disclosed to third parties except to employees, contractors, or advisors bound by confidentiality obligations.`,
  },
  {
    heading: '10. Warranties and disclaimers',
    body: `Maintafox warrants that the Services will materially conform to the documentation and that professional services will be performed with reasonable skill and care. Except as expressly stated, the Services are provided “as is” and Maintafox disclaims all other warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
  },
  {
    heading: '11. Term and termination',
    body: `Unless otherwise specified, subscriptions renew automatically for successive terms equal to the initial term. Either party may terminate for material breach if the breach is not cured within 30 days of written notice. Upon termination, Customer must stop using the Services and pay all outstanding fees. Upon written request within 30 days, Maintafox will make Customer Data available for export. Thereafter, Maintafox will delete Customer Data, subject to legal retention obligations.`,
  },
  {
    heading: '12. Limitation of liability',
    body: `To the maximum extent permitted by law, neither party is liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits, revenue, or data. Maintafox’s aggregate liability arising under these Terms will not exceed the amounts paid by Customer to Maintafox in the 12 months preceding the event giving rise to the claim.`,
  },
  {
    heading: '13. Indemnification',
    body: `Maintafox will defend Customer against third-party claims alleging that the Services infringe a valid intellectual property right and will pay resulting damages or settlements, provided Customer promptly notifies Maintafox and allows Maintafox to control the defense. Customer will indemnify Maintafox against claims arising from Customer Data or use of the Services in breach of these Terms or applicable law.`,
  },
  {
    heading: '14. Governing law and disputes',
    body: `These Terms are governed by the laws of Algeria. Any dispute will be subject to the exclusive jurisdiction of courts located in Algiers, Algeria, unless the parties agree to arbitration or another resolution mechanism in writing.`,
  },
  {
    heading: '15. General provisions',
    body: `These Terms, together with any signed order forms or statements of work, constitute the entire agreement between the parties regarding the Services. If a provision is held invalid, the remaining provisions remain in effect. Neither party may assign the agreement without the other’s consent, except Maintafox may assign to an affiliate or in connection with a merger or sale of assets. Notices must be in writing and delivered by email or registered mail to the contacts specified in the contract.`,
  },
  {
    heading: '16. Contact information',
    body: `For questions about these Terms, please contact Maintafox Systems, Technoparc Sidi Abdellah, Dar El Beida, Algiers, Algeria, or email legal@maintafox.systems.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <main className="section">
        <div className="container-12 prose max-w-4xl">
          <h1 className="text-brand">Terms of Service</h1>
          <p className="text-sm text-slate-500">Last updated: 5 January 2025</p>
          {clauses.map((clause) => (
            <section key={clause.heading}>
              <h2>{clause.heading}</h2>
              <p>{clause.body}</p>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
