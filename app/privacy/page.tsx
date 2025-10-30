const sections = [
  {
    heading: '1. Introduction',
    body: `Maintafox Systems (“Maintafox”, “we”, “our”, or “us”) provides computerized maintenance management system (CMMS) software and related services headquartered in Algeria. This Privacy Policy explains how we collect, use, disclose, and safeguard personal data when you visit our websites, request a demo, sign up for communications, or use the Maintafox platform. By interacting with Maintafox, you consent to the practices described here.`,
  },
  {
    heading: '2. Data we collect',
    body: `We collect personal data directly from you, automatically through digital services, and from third parties when permitted. This includes: contact details (name, email, phone, organization, job title); account credentials and authentication data; usage information such as IP address, browser type, pages viewed, and timestamps; maintenance data uploaded by customers to the platform (e.g., asset records, work orders, technician information); billing details for subscriptions; and communication preferences.`,
  },
  {
    heading: '3. Purpose and legal basis',
    body: `We process personal data to provide and improve the Maintafox services, including creating and administering accounts, delivering support, processing demo requests, and communicating product updates. We rely on contractual necessity, legitimate interest, and consent (where required) as legal bases. We may also process data to meet legal obligations, enforce agreements, or respond to lawful requests from authorities.`,
  },
  {
    heading: '4. How we use platform data',
    body: `Customer maintenance data uploaded to the Maintafox CMMS is processed strictly in accordance with customer instructions. We use this data to deliver functionality such as asset management, preventive maintenance scheduling, analytics, and integrations. We do not sell or share platform data with advertisers. Aggregated or anonymized information may be used for benchmarking and product improvement.`,
  },
  {
    heading: '5. Sharing and disclosures',
    body: `We share personal data with trusted service providers who perform services on our behalf (such as hosting, email delivery, analytics, and customer support). These providers are bound by confidentiality and data protection obligations. We may disclose information if required by law, to protect Maintafox rights, or during a corporate transaction (merger, acquisition, or asset sale).`,
  },
  {
    heading: '6. International transfers',
    body: `Maintafox primarily stores data in Algeria and the European Union. When we transfer data outside of these regions, we implement appropriate safeguards such as standard contractual clauses or equivalent legal mechanisms, and ensure recipients maintain adequate levels of data protection.`,
  },
  {
    heading: '7. Data retention',
    body: `We retain personal data for as long as necessary to provide the services, comply with legal obligations, resolve disputes, and enforce agreements. Customer platform data is retained according to the applicable contract and deleted or returned upon written request or termination, subject to statutory retention requirements.`,
  },
  {
    heading: '8. Your rights',
    body: `Depending on your jurisdiction, you may have the right to access, correct, update, restrict, object to, or delete your personal data. You may also withdraw consent or request a copy of your data. To exercise these rights, contact us at privacy@maintafox.systems. We will respond within applicable legal timeframes.`,
  },
  {
    heading: '9. Security measures',
    body: `Maintafox employs organizational, technical, and administrative safeguards to protect personal data, including encryption in transit, role-based access control, audit logging, and regular security assessments. While we strive to protect your information, no method of transmission or storage is completely secure; please notify us immediately of any suspected unauthorized access.`,
  },
  {
    heading: '10. Cookies and tracking technologies',
    body: `We use cookies, local storage, and similar technologies to remember preferences, track site usage, and support analytics. You can control cookie preferences through browser settings. Some features may become unavailable if certain cookies are disabled.`,
  },
  {
    heading: '11. Third-party services',
    body: `Our website may include links to third-party sites or integrations. Maintafox is not responsible for the privacy practices of these third parties. We recommend reviewing the privacy policies of each service you access.`,
  },
  {
    heading: '12. Children’s privacy',
    body: `Maintafox services are intended for business users and are not directed at children under 16. We do not knowingly collect personal data from children. If you believe we have received information about a child, contact us to request deletion.`,
  },
  {
    heading: '13. Updates to this policy',
    body: `We may update this Privacy Policy to reflect new services, legal requirements, or security practices. Any material changes will be communicated through our website or direct notification. The “Last updated” date indicates the latest revision.`,
  },
  {
    heading: '14. Contact',
    body: `For questions or concerns regarding this Privacy Policy or our data practices, please contact Maintafox Systems at privacy@maintafox.systems or Technoparc Sidi Abdellah, Dar El Beida, Algiers, Algeria.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <main className="section">
        <div className="container-12 prose max-w-4xl">
          <h1 className="text-brand">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last updated: 5 January 2025</p>
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
