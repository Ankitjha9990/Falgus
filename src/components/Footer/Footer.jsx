import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'
import './Footer.css'

export default function Footer({ onNavigate = null }) {
  const { lang } = useLang()

  const NAV_LINKS = [
    { key: 'footer.home',     href: '#home'    },
    { key: 'footer.about',    href: '#about'   },
    { key: 'footer.ourModel', href: '#model'   },
    { key: 'footer.farmers',  href: '#farmers' },
    { key: 'footer.buyers',   href: '#buyers'  },
  ]

  const handleScroll = (href) => (e) => {
    e.preventDefault()
    if (!href) return

    if (onNavigate) {
      onNavigate(href)
      return
    }

    if (href.startsWith('/')) {
      window.location.href = href
      return
    }

    const id = href.slice(1)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = `/${href}`
    }
  }

  const handleLegalClick = (href) => (e) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate(href)
    }
  }

  const statementLines = t('footer.statement', lang).split('\n')

  return (
    <footer id="footer" className="footer" role="contentinfo">
      {/* ── Supplied decorative elements for visual depth ── */}
      <picture className="footer__deco-img footer__deco-img--tl" aria-hidden="true">
        <source type="image/webp" srcSet="/assets/footer-elements/top-left corner.webp" />
        <img
          src="/assets/footer-elements/top-left corner.png"
          alt=""
          width="434"
          height="133"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <picture className="footer__deco-img footer__deco-img--left" aria-hidden="true">
        <source type="image/webp" srcSet="/assets/footer-elements/Left-Middle-element.webp" />
        <img
          src="/assets/footer-elements/Left-Middle-element.png"
          alt=""
          width="599"
          height="765"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <picture className="footer__deco-img footer__deco-img--br" aria-hidden="true">
        <source type="image/webp" srcSet="/assets/footer-elements/right bottom corner.webp" />
        <img
          src="/assets/footer-elements/right bottom corner.png"
          alt=""
          width="764"
          height="565"
          loading="lazy"
          decoding="async"
        />
      </picture>

      <div className="container footer__body">
        {/* ── Column 1: Location & Contact ── */}
        <div className="footer__col">
          <h2 className="footer__col-heading">{t('footer.location', lang)}</h2>
          <ul className="footer__contact-list" role="list">
            <li className="footer__contact-item">
              <span className="footer__icon-wrap" aria-hidden="true">
                <MapPin size={15} strokeWidth={2} />
              </span>
              <span>{t('footer.address', lang)}</span>
            </li>
            <li className="footer__contact-item">
              <span className="footer__icon-wrap" aria-hidden="true">
                <Phone size={15} strokeWidth={2} />
              </span>
              <a href="tel:+918409992659" className="footer__link">
                +91 8409992659
              </a>
            </li>
            <li className="footer__contact-item">
              <span className="footer__icon-wrap" aria-hidden="true">
                <Mail size={15} strokeWidth={2} />
              </span>
              <a href="mailto:contact@falgus.com" className="footer__link">
                contact@falgus.com
              </a>
            </li>
          </ul>
        </div>

        {/* ── Column 2: Links ── */}
        <div className="footer__col">
          <h2 className="footer__col-heading">{t('footer.quickLinks', lang)}</h2>
          <ul className="footer__nav-list" role="list">
            {NAV_LINKS.map(({ key, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="footer__nav-link"
                  onClick={handleScroll(href)}
                >
                  <ChevronRight size={13} strokeWidth={2.5} aria-hidden="true" />
                  {t(key, lang)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3: Brand Statement & Logo ── */}
        <div className="footer__brand">
          <div className="footer__brand-logo">
            <picture>
              <source type="image/webp" srcSet="/assets/logo/Falgus-Logo.webp" />
              <img
                src="/assets/logo/Falgus-Logo.png"
                alt={t('footer.logoAlt', lang)}
                className="footer__logo-img"
                width="64"
                height="64"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <span className="footer__logo-text" aria-label="Falgu's">falgus</span>
          </div>
          <p className="footer__brand-statement">
            {statementLines[0]}<br />
            {statementLines[1]}
          </p>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="footer__divider" aria-hidden="true" />

      {/* ── Legal baseline ── */}
      <div className="footer__baseline">
        <div className="container footer__baseline-inner">
          <p className="footer__copyright">{t('footer.copyright', lang)}</p>
          <div className="footer__legal-links">
            <a
              href="/privacy-policy"
              className="footer__legal-link"
              aria-label={t('footer.privacy', lang)}
              onClick={handleLegalClick('/privacy-policy')}
            >
              {t('footer.privacy', lang)}
            </a>
            <span className="footer__legal-sep" aria-hidden="true">|</span>
            <a
              href="/terms-of-service"
              className="footer__legal-link"
              aria-label={t('footer.terms', lang)}
              onClick={handleLegalClick('/terms-of-service')}
            >
              {t('footer.terms', lang)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
