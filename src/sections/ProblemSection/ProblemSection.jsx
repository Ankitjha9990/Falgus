import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'
import './ProblemSection.css'

const FADE_UP = {
  hidden:  { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }
  }),
}

export default function ProblemSection() {
  const { lang } = useLang()
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -120px 0px' })

  return (
    <section id="about" className="problem" aria-label={t('problem.sectionAria', lang)} ref={ref}>

      {/* Decorative foliage */}
      <picture className="problem__leaf problem__leaf--bl" aria-hidden="true">
        <source type="image/webp" srcSet="/assets/decorative/Problem-section-bottom-left-corner-leaf.webp" />
        <img
          src="/assets/decorative/Problem-section-bottom-left-corner-leaf.png"
          alt=""
          width="345"
          height="197"
          loading="lazy"
          decoding="async"
        />
      </picture>

      <div className="container problem__inner">

        {/* ── Left: Copy ── */}
        <div className="problem__text">
          <motion.span
            className="eyebrow"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0}
          >
            {t('problem.eyebrow', lang)}
          </motion.span>

          <motion.h2
            className="section-heading problem__heading"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0.1}
          >
            {t('problem.h2a', lang)}<br />
            {lang === 'en' ? <>is <span className="accent">{t('problem.h2b', lang)}</span></> : <span className="accent">{t('problem.h2b', lang)}</span>}
            <br /><br />
            {t('problem.h2c', lang)}{' '}
            <span className="accent">{t('problem.h2d', lang)}</span>
          </motion.h2>

          <motion.p
            className="supporting-copy problem__body"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0.2}
          >
            {t('problem.body1', lang)}<br />
            {t('problem.body2', lang)}<br />
            {t('problem.body3', lang)}
          </motion.p>
        </div>

        {/* ── Right: Farmer image ── */}
        <motion.div
          className="problem__image-wrap"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <picture>
            <source
              type="image/webp"
              media="(max-width: 768px)"
              srcSet="/assets/photography/Problem-section-Main-image-mobile.webp"
            />
            <source
              type="image/webp"
              srcSet="/assets/photography/Problem-section-Main-image.webp"
            />
            <img
              src="/assets/photography/Problem-section-Main-image.png"
              alt={t('problem.farmerImgAlt', lang)}
              className="problem__img"
              width="1490"
              height="758"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </motion.div>
      </div>

      {/* ── Seasonal Production Timeline ── */}
      <motion.div
        className="problem__timeline-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container">
          <div className="problem__timeline-block">
            <div className="problem__seasonal-img-wrap">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/assets/photography/Seosonal-Production-window-Problem-section.webp"
                />
                <img
                  src="/assets/photography/Seosonal-Production-window-Problem-section.png"
                  alt={t('problem.chartAlt', lang)}
                  className="problem__seasonal-img"
                  width="1544"
                  height="305"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
