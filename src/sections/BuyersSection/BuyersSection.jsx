import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'
import './BuyersSection.css'

const FADE_UP = {
  hidden:  { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }
  }),
}

const BENEFIT_ICONS = [
  /* supply */
  () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 5v3h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  /* grading */
  () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a4 4 0 100 8 4 4 0 000-8z" />
      <path d="M8 10c-3.3 1-5.5 3-5.5 5.5S4.7 20 8 21M16 10c3.3 1 5.5 3 5.5 5.5S19.3 20 16 21" />
      <path d="M12 14v7" />
    </svg>
  ),
  /* procurement */
  () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  ),
]

const BENEFIT_KEYS = [
  { id: 'supply',      titleKey: 'buyers.b1.title', bodyKey: 'buyers.b1.body' },
  { id: 'grading',     titleKey: 'buyers.b2.title', bodyKey: 'buyers.b2.body' },
  { id: 'procurement', titleKey: 'buyers.b3.title', bodyKey: 'buyers.b3.body' },
]

export default function BuyersSection() {
  const { lang } = useLang()
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  const handleContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="buyers" className="buyers" aria-label={t('buyers.sectionAria', lang)} ref={ref}>

      {/* Decorative leaves */}
      <picture className="buyers__leaf buyers__leaf--left" aria-hidden="true">
        <source type="image/webp" srcSet="/assets/decorative/for-Buyers-left-leave.webp" />
        <img
          src="/assets/decorative/for-Buyers-left-leave.png"
          alt=""
          width="363"
          height="264"
          loading="lazy"
          decoding="async"
        />
      </picture>

      <div className="container buyers__inner">

        {/* ── Left: copy ── */}
        <div className="buyers__text">
          <motion.span
            className="eyebrow"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0}
          >
            {t('buyers.eyebrow', lang)}
          </motion.span>

          <motion.h2
            className="section-heading buyers__heading"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0.1}
          >
            {t('buyers.h2a', lang)}<br />
            <span className="accent">{t('buyers.h2b', lang)}</span>
          </motion.h2>

          <motion.p
            className="supporting-copy buyers__body"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0.2}
          >
            {t('buyers.body', lang)}
          </motion.p>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0.3}
          >
            <a
              href="#contact"
              className="btn-primary buyers__cta"
              onClick={handleContact}
              aria-label={t('buyers.ctaAria', lang)}
            >
              {t('buyers.cta', lang)}
              <span className="btn-arrow" aria-hidden="true"><ArrowRight size={16} strokeWidth={2.5} /></span>
            </a>
          </motion.div>
        </div>

        {/* ── Right: Image with pale green blob ── */}
        <motion.div
          className="buyers__image-wrap"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <picture>
            <source
              type="image/webp"
              media="(max-width: 768px)"
              srcSet="/assets/photography/For-Buyers-main-image-mobile.webp"
            />
            <source
              type="image/webp"
              srcSet="/assets/photography/For-Buyers-main-image.webp"
            />
            <img
              src="/assets/photography/For-Buyers-main-image.png"
              alt={t('buyers.imgAlt', lang)}
              className="buyers__img"
              width="1386"
              height="1023"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </motion.div>
      </div>

      {/* ── Benefit strip ── */}
      <motion.div
        className="buyers__strip"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container">
          <ul className="buyers__strip-list" role="list" aria-label={t('buyers.stripAria', lang)}>
            {BENEFIT_KEYS.map(({ id, titleKey, bodyKey }, i) => (
              <li key={id} className="buyers__strip-item">
                <span className="buyers__strip-icon" aria-hidden="true">{BENEFIT_ICONS[i]()}</span>
                <div className="buyers__strip-text">
                  <h3 className="buyers__strip-title">{t(titleKey, lang)}</h3>
                  <p className="buyers__strip-body">{t(bodyKey, lang)}</p>
                </div>
                {i < BENEFIT_KEYS.length - 1 && (
                  <span className="buyers__strip-divider" aria-hidden="true" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
