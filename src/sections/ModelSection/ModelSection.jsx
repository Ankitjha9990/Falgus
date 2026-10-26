import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'
import './ModelSection.css'

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function ModelSection() {
  const { lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  const STAGES = [
    {
      num: 1,
      titleKey: 'model.stage1.title',
      descKey:  'model.stage1.desc',
      altKey:   'model.stage1.alt',
      image: '/assets/Business-model/responsive/Step1.png',
      webpImage: '/assets/Business-model/responsive/Step1.webp',
    },
    {
      num: 2,
      titleKey: 'model.stage2.title',
      descKey:  'model.stage2.desc',
      altKey:   'model.stage2.alt',
      image: '/assets/Business-model/responsive/Step2.png',
      webpImage: '/assets/Business-model/responsive/Step2.webp',
    },
    {
      num: 3,
      titleKey: 'model.stage3.title',
      descKey:  'model.stage3.desc',
      altKey:   'model.stage3.alt',
      image: '/assets/Business-model/responsive/Step3.png',
      webpImage: '/assets/Business-model/responsive/Step3.webp',
    },
  ]

  return (
    <section id="model" className="model" aria-label={t('model.sectionAria', lang)} ref={ref}>
      {/* ── Decorative Background Elements ── */}
      <picture className="model__deco model__deco--leaf" aria-hidden="true">
        <source type="image/webp" srcSet="/assets/decorative/Business-Model-bottom-left-leaf.webp" />
        <img
          src="/assets/decorative/Business-Model-bottom-left-leaf.png"
          alt=""
          width="395"
          height="348"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <picture className="model__deco model__deco--mushrooms" aria-hidden="true">
        <source type="image/webp" srcSet="/assets/decorative/Business-Model-Bottom-right-Mushrooms.webp" />
        <img
          src="/assets/decorative/Business-Model-Bottom-right-Mushrooms.png"
          alt=""
          width="959"
          height="659"
          loading="lazy"
          decoding="async"
        />
      </picture>

      <div className="container model__container">
        <motion.span
          className="eyebrow"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={FADE_UP}
        >
          {t('model.eyebrow', lang)}
        </motion.span>
        <motion.h2
          className="section-heading model__heading"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={FADE_UP}
          custom={0.1}
        >
          {t('model.h2a', lang)}<br />
          <span className="accent">{t('model.h2b', lang)}</span>
        </motion.h2>
        <motion.p
          className="supporting-copy model__sub"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={FADE_UP}
          custom={0.2}
        >
          {t('model.sub', lang)}
        </motion.p>

        {/* ── Interactive 3-Stage Model ── */}
        <div className="model__flow" role="list" aria-label={t('model.flowAria', lang)}>
          {STAGES.map((stage, index) => (
            <div key={stage.num} className="model__step-wrapper">
              <motion.div
                className="model__stage"
                role="listitem"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={FADE_UP}
                custom={0.25 + index * 0.15}
              >
                <div className="model__stage-media">
                  <picture>
                    <source type="image/webp" srcSet={stage.webpImage} />
                    <img
                      src={stage.image}
                      alt={t(stage.altKey, lang)}
                      className="model__stage-img"
                      loading="lazy"
                      decoding="async"
                      width="518"
                      height="506"
                    />
                  </picture>
                </div>

                <div className="model__stage-info">
                  <span className="model__num" aria-hidden="true">
                    {stage.num}
                  </span>
                  <div className="model__stage-text">
                    <h3 className="model__stage-title">{t(stage.titleKey, lang)}</h3>
                    <p className="model__stage-sub">{t(stage.descKey, lang)}</p>
                  </div>
                </div>
              </motion.div>

              {/* Connecting Arrow between consecutive stages */}
              {index < STAGES.length - 1 && (
                <div className="model__connector" aria-hidden="true">
                  <picture>
                    <source type="image/webp" srcSet="/assets/Business-model/arrow-right.webp" />
                    <img
                      src="/assets/Business-model/arrow-right.png"
                      alt=""
                      className="model__arrow model__arrow--desktop"
                      loading="lazy"
                      decoding="async"
                      width="188"
                      height="112"
                    />
                  </picture>
                  <picture>
                    <source type="image/webp" srcSet="/assets/Business-model/arrow-down.webp" />
                    <img
                      src="/assets/Business-model/arrow-down.png"
                      alt=""
                      className="model__arrow model__arrow--mobile"
                      loading="lazy"
                      decoding="async"
                      width="112"
                      height="188"
                    />
                  </picture>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
