import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'
import './FarmersSection.css'

const FADE_UP = {
  hidden:  { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }
  }),
}

const BENEFIT_ICONS = [
  /* capital */
  () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  /* buyer */
  () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12l2 2 4-4" />
      <path d="M7 3H4a1 1 0 00-1 1v4M17 3h3a1 1 0 011 1v4M3 13v7a1 1 0 001 1h16a1 1 0 001-1v-7M3 9h18" />
    </svg>
  ),
  /* learn */
  () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 014-4h4" />
      <circle cx="17" cy="17" r="4" />
      <path d="M17 14v3l2 1" />
    </svg>
  ),
]

const BENEFIT_KEYS = [
  { id: 'capital', titleKey: 'farmers.b1.title', bodyKey: 'farmers.b1.body' },
  { id: 'buyer',   titleKey: 'farmers.b2.title', bodyKey: 'farmers.b2.body' },
  { id: 'learn',   titleKey: 'farmers.b3.title', bodyKey: 'farmers.b3.body' },
]

export default function FarmersSection() {
  const { lang } = useLang()
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <section id="farmers" className="farmers" aria-label={t('farmers.sectionAria', lang)} ref={ref}>

      <div className="container farmers__inner">

        {/* ── Left: Image + income comparison ── */}
        <motion.div
          className="farmers__visual"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <picture>
            <source
              type="image/webp"
              media="(max-width: 768px)"
              srcSet="/assets/photography/For-farmers-main-image-mobile.webp"
            />
            <source
              type="image/webp"
              srcSet="/assets/photography/For-farmers-main-image.webp"
            />
            <img
              src="/assets/photography/For-farmers-main-image.png"
              alt={t('farmers.imgAlt', lang)}
              className="farmers__img"
              width="1347"
              height="1262"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </motion.div>

        {/* ── Right: Text + benefits ── */}
        <div className="farmers__content">
          <motion.span
            className="eyebrow"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0}
          >
            {t('farmers.eyebrow', lang)}
          </motion.span>

          <motion.h2
            className="section-heading farmers__heading"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0.1}
          >
            {t('farmers.h2a', lang)}<br />
            <span className="accent">{t('farmers.h2b', lang)}</span>
          </motion.h2>

          <motion.p
            className="supporting-copy farmers__body"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0.2}
          >
            {t('farmers.body', lang)}
          </motion.p>

          {/* Benefits list */}
          <ul className="farmers__benefits" role="list">
            {BENEFIT_KEYS.map(({ id, titleKey, bodyKey }, i) => (
              <motion.li
                key={id}
                className="farmers__benefit"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={FADE_UP}
                custom={0.3 + i * 0.12}
              >
                <span className="farmers__benefit-icon" aria-hidden="true">{BENEFIT_ICONS[i]()}</span>
                <div className="farmers__benefit-text">
                  <h3 className="farmers__benefit-title">{t(titleKey, lang)}</h3>
                  <p className="farmers__benefit-body">{t(bodyKey, lang)}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
