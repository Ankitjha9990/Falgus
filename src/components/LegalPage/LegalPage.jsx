import { ArrowLeft, Mail, Phone, ShieldCheck } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'
import './LegalPage.css'

const PRIVACY_SECTIONS = [
  {
    heading: 'Introduction and scope',
    body: 'This Privacy Policy describes how Falgu’s (“Falgu”, “we”, “our”, or “us”) handles personal information collected through the website and in the course of communicating with farmers, buyers, partners, and other website visitors. This policy applies to information submitted through the website contact form, email correspondence, and other direct business enquiries made in connection with Falgu’s work.',
  },
  {
    heading: 'Information collected',
    body: 'When you contact us through the website, we may collect the information you provide, including your name, email address, phone number, role, organisation or farm name, and the details of your message or enquiry. We may also keep records of communications and any information you choose to share in support of a request, partnership, or purchase enquiry.',
  },
  {
    heading: 'Technical information',
    body: 'Like many websites, our hosting and technical services may record limited technical information such as IP addresses, browser type, device information, pages visited, and referral information to maintain security, diagnose technical issues, and understand general website usage. This information is not used for advertising or profiling purposes unless required for security or operational support.',
  },
  {
    heading: 'Purpose of processing',
    body: 'We process personal information to respond to enquiries, assess business opportunities, communicate with farmers and buyers, coordinate collaborations, manage partnership requests, and fulfil administrative or legal obligations related to our website and business activities. Where appropriate, we may use your information to contact you about your enquiry or to progress a business conversation.',
  },
  {
    heading: 'Sharing and disclosure',
    body: 'We do not sell personal information. We may share information with trusted service providers who support our website, email operations, hosting, or business administration, where this is reasonably necessary to provide our services. We may also disclose information where required by law, court order, or to protect our legal rights, safety, or the rights of others.',
  },
  {
    heading: 'Data retention',
    body: 'We retain personal information only for as long as reasonably necessary for the purposes described in this policy, to comply with applicable legal or regulatory obligations, or to resolve disputes. When information is no longer needed, we will securely delete or anonymise it where feasible.',
  },
  {
    heading: 'Security',
    body: 'We use reasonable administrative, technical, and organisational measures to protect submitted information from unauthorised access, alteration, disclosure, or loss. However, no system can be guaranteed to be fully secure, and we encourage users not to share sensitive personal information beyond what is necessary for the relevant enquiry.',
  },
  {
    heading: 'User rights and requests',
    body: 'Depending on applicable law, you may have the right to request access to, correction of, or deletion of personal information that we hold about you, subject to lawful limitations and our need to fulfil contractual or legal obligations. If you would like to make a request or ask questions about your personal information, please contact us using the details below.',
  },
  {
    heading: 'Third-party services',
    body: 'The website may contain links to third-party websites or services. Falgu is not responsible for the privacy practices, content, or security of those external services. We encourage visitors to review the privacy policies of any third-party site they access from our website.',
  },
  {
    heading: 'Policy updates',
    body: 'We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the services we provide. Any material changes will be communicated on this page or through other reasonable means, and the revised policy will be effective when posted.',
  },
  {
    heading: 'Contact information',
    body: 'For any privacy-related enquiries, requests, or concerns, please contact Falgu using the details below:',
    contact: [
      'Email: contact@falgus.com',
      'Phone: +91 8409992659',
      'Location: Gaya, Bihar',
    ],
  },
]

const TERMS_SECTIONS = [
  {
    heading: 'Acceptance of the terms',
    body: 'By using the Falgu website, you agree to be bound by these Terms of Service and any policies incorporated by reference. If you do not agree with these terms, please do not use the website.',
  },
  {
    heading: 'Website purpose and permitted use',
    body: 'The website is intended to provide information about Falgu’s mushroom ecosystem, agricultural model, farmer support, buyer engagement, and business enquiries. You may use the website for lawful informational purposes only and must not use it in a way that is unlawful, harmful, disruptive, or abusive to Falgu or other users.',
  },
  {
    heading: 'Accuracy and availability of website information',
    body: 'While we aim to keep information on the website accurate and current, content may change over time. We do not guarantee that all information is complete, error-free, or always available. Some information may be illustrative, operational, or time-sensitive, and may not represent current commercial terms or future outcomes.',
  },
  {
    heading: 'Contact-form submissions and acceptable conduct',
    body: 'Any message submitted through the website contact form should be accurate, relevant, and sent for legitimate business, partnership, or information purposes. You agree not to submit false, misleading, abusive, or unlawful information. We may decline or ignore communications that are irrelevant, inappropriate, or not reasonably connected to our business activities.',
  },
  {
    heading: 'Nature of enquiries and business communications',
    body: 'The website may be used to make enquiries about farming opportunities, buyer relationships, partnerships, or support. Any such communication is a business enquiry and does not create any contractual or exclusive relationship unless separately agreed in writing.',
  },
  {
    heading: 'No guarantee of commercial outcome',
    body: 'Visiting the website or submitting an enquiry does not guarantee a partnership, purchase agreement, financing arrangement, subsidy, supply relationship, or any particular commercial outcome. Any such outcome depends on specific circumstances, due diligence, and separate agreement between the parties.',
  },
  {
    heading: 'Intellectual property and permitted use',
    body: 'All text, branding, images, logos, layouts, and other materials on the website are owned by Falgu or used with permission. You may view and browse the website for personal or informational use, but you may not reproduce, distribute, modify, or commercially exploit the content without prior written consent.',
  },
  {
    heading: 'Third-party links and services',
    body: 'The website may include links to external websites or services for convenience. Falgu does not control or endorse those third-party resources and is not responsible for their content, availability, or privacy or security practices.',
  },
  {
    heading: 'Limitations of liability',
    body: 'To the maximum extent permitted by applicable law, Falgu shall not be liable for any indirect, incidental, consequential, or special damages arising from the use of the website or reliance on information contained therein, except where liability cannot be excluded under applicable law. The website is provided on an “as is” basis.',
  },
  {
    heading: 'Changes to the website and terms',
    body: 'Falgu may modify, suspend, or discontinue all or part of the website at any time without notice. We may also update these Terms of Service from time to time. Continued use of the website after such changes constitutes acceptance of the revised terms.',
  },
  {
    heading: 'Governing law and jurisdiction',
    body: 'These Terms of Service are governed by the laws of India, without regard to conflict of law principles. Any dispute arising out of or in relation to the website or these terms shall be subject to the jurisdiction of the courts in Bihar, India, unless otherwise required by applicable law.',
  },
  {
    heading: 'Contact information',
    body: 'For questions regarding these Terms of Service or any website-related matter, please contact Falgu using the details below:',
    contact: [
      'Email: contact@falgus.com',
      'Phone: +91 8409992659',
      'Location: Gaya, Bihar',
    ],
  },
]

export default function LegalPage({ type = 'privacy', onNavigate }) {
  const { lang } = useLang()
  const isPrivacy = type === 'privacy'
  const sections = isPrivacy ? PRIVACY_SECTIONS : TERMS_SECTIONS
  const title = isPrivacy ? t('legal.privacyTitle', lang) : t('legal.termsTitle', lang)
  const intro = isPrivacy ? t('legal.privacyIntro', lang) : t('legal.termsIntro', lang)

  return (
    <main className="legal-page" aria-label={title}>
      <div className="container legal-page__shell">
        <div className="legal-page__topbar">
          <button
            type="button"
            className="legal-page__back"
            onClick={() => onNavigate('/')}
          >
            <ArrowLeft size={16} strokeWidth={2.2} aria-hidden="true" />
            {t('legal.back', lang)}
          </button>
        </div>

        <header className="legal-page__header">
          <div className="legal-page__eyebrow-wrap">
            <span className="eyebrow legal-page__eyebrow">{t('legal.eyebrow', lang)}</span>
          </div>
          <h1 className="legal-page__title">{title}</h1>
          <p className="legal-page__intro">{intro}</p>
        </header>

        <div className="legal-page__content">
          {sections.map(({ heading, body, contact }) => (
            <section key={heading} className="legal-page__section">
              <h2>{heading}</h2>
              <p>{body}</p>
              {contact && (
                <ul className="legal-page__contact-list" role="list">
                  {contact.map((item) => (
                    <li key={item}>
                      {item.startsWith('Email:') ? <Mail size={16} strokeWidth={2} aria-hidden="true" /> : item.startsWith('Phone:') ? <Phone size={16} strokeWidth={2} aria-hidden="true" /> : <ShieldCheck size={16} strokeWidth={2} aria-hidden="true" />}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

