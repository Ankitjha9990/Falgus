import { useState, useEffect, useCallback } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'
import LanguageToggle from '../LanguageToggle/LanguageToggle'
import './Navbar.css'

export default function Navbar({ onNavigate = null }) {
  const { lang } = useLang()
  const [scrolled, setScrolled]           = useState(false)
  const [menuOpen, setMenuOpen]           = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const NAV_LINKS = [
    { key: 'nav.home',    href: '#home'    },
    { key: 'nav.model',   href: '#model'   },
    { key: 'nav.farmers', href: '#farmers' },
    { key: 'nav.buyers',  href: '#buyers'  },
    { key: 'nav.contact', href: '#contact' },
  ]

  /* ── Scroll state: slightly enhance glass opacity on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Active section tracking ── */
  useEffect(() => {
    const ids = ['home', 'about', 'model', 'farmers', 'buyers', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* ── Close menu on Escape ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && menuOpen) setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  /* ── Close mobile menu on resize to desktop ── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false)

    if (href.startsWith('/')) {
      if (onNavigate) {
        onNavigate(href)
        return
      }
      window.location.href = href
      return
    }

    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    if (onNavigate) {
      onNavigate(`/#${id}`)
      return
    }

    window.location.href = `/#${id}`
  }, [onNavigate])

  return (
    <header
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--open' : ''}`}
      role="banner"
    >
      <div className="navbar__inner container">

        {/* ── Brand logo ── */}
        <a
          href="#home"
          className="navbar__logo"
          aria-label={t('nav.logoAriaLabel', lang)}
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
        >
          <picture>
            <source type="image/webp" srcSet="/assets/logo/Falgus-Logo.webp" />
            <img
              src="/assets/logo/Falgus-Logo.png"
              alt={t('nav.logoAlt', lang)}
              className="navbar__logo-img"
              width="40"
              height="40"
              decoding="async"
            />
          </picture>
          <picture>
            <source type="image/webp" srcSet="/assets/logo/Falgu's-logo-text-Only.webp" />
            <img
              src="/assets/logo/Falgu's-logo-text-Only.png"
              alt="falgus"
              className="navbar__logo-text"
              width="77"
              height="26"
              decoding="async"
            />
          </picture>
        </a>

        {/* ── Desktop nav pill ── */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ key, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`navbar__link${activeSection === href.slice(1) ? ' navbar__link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                >
                  {t(key, lang)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Language Toggle (desktop) ── */}
        <div className="navbar__toggle-wrap">
          <LanguageToggle />
        </div>

        {/* ── Mobile menu toggle ── */}
        <button
          className="navbar__hamburger"
          aria-label={menuOpen ? t('nav.closeMenu', lang) : t('nav.openMenu', lang)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile menu overlay ── */}
      <div
        id="mobile-menu"
        className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="navbar__mobile-links" role="list">
            {NAV_LINKS.map(({ key, href }) => {
              const isActive = activeSection === href.slice(1) || (!activeSection && href === '#home')
              const isContact = href === '#contact'
              return (
                <li key={href} className="navbar__mobile-item">
                  <a
                    href={href}
                    className={`navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`}
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                  >
                    <span>{t(key, lang)}</span>
                    {!isContact && (
                      <ChevronRight
                        className="navbar__mobile-chevron"
                        size={18}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Language toggle in mobile menu */}
        <div className="navbar__mobile-toggle">
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
