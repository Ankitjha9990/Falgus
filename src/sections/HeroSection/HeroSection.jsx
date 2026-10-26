import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight, Play, ChevronDown, X } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'
import './HeroSection.css'

function StoryVideoModal({ onClose }) {
  const { lang } = useLang()
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const iframeRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const closeModal = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.src = 'about:blank'
    }
    onClose()
  }, [onClose])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const previousFocus = document.activeElement
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    const bodyPaddingRight = Number.parseFloat(window.getComputedStyle(document.body).paddingRight) || 0

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${bodyPaddingRight + scrollbarWidth}px`
    }
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeModal()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = dialogRef.current?.querySelectorAll(
        'button:not([disabled]), iframe',
      )
      const firstElement = focusableElements?.[0]
      const lastElement = focusableElements?.[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus()
      }
    }
  }, [closeModal])

  const animationDuration = prefersReducedMotion ? 0 : 0.25

  return createPortal(
    <motion.div
      className="story-modal__backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: animationDuration }}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeModal()
      }}
    >
      <motion.div
        ref={dialogRef}
        className="story-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="story-modal-title"
        initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
        transition={{ duration: animationDuration }}
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="story-modal-title" className="story-modal__title">
          {t('hero.watchOurStory', lang)}
        </h2>
        <button
          ref={closeButtonRef}
          className="story-modal__close"
          type="button"
          aria-label={t('hero.closeVideoAria', lang)}
          onClick={closeModal}
        >
          <X size={22} strokeWidth={2} aria-hidden="true" />
        </button>
        <div className="story-modal__player">
          <iframe
            ref={iframeRef}
            src="https://www.youtube.com/embed/4mK5bg-oN1U?autoplay=1&playsinline=1&rel=0&modestbranding=1"
            title={t('hero.iframeTitle', lang)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onBlur={(event) => {
              if (!dialogRef.current?.contains(event.relatedTarget)) {
                closeButtonRef.current?.focus()
              }
            }}
          />
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  )
}

const FADE_UP = {
  hidden:  { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
  }),
}

const FADE_IN = {
  hidden:  { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
  }),
}

export default function HeroSection() {
  const { lang } = useLang()
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })
  const [isStoryOpen, setIsStoryOpen] = useState(false)
  const openStory = useCallback(() => setIsStoryOpen(true), [])
  const closeStory = useCallback(() => setIsStoryOpen(false), [])

  const handleExplore = (e) => {
    e.preventDefault()
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollCue = (e) => {
    e.preventDefault()
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollLines = t('hero.scroll', lang).split('\n')

  return (
    <section id="home" className="hero" aria-label={t('hero.sectionAria', lang)} ref={ref}>

      {/* ── Decorative foliage ── */}
      <picture className="hero__leaf hero__leaf--left" aria-hidden="true">
        <source type="image/webp" srcSet="/assets/decorative/Hero-section-Left-corner-leaf.webp" />
        <img
          src="/assets/decorative/Hero-section-Left-corner-leaf.png"
          alt=""
          width="395"
          height="348"
          loading="eager"
          decoding="async"
        />
      </picture>
      <picture className="hero__leaf hero__leaf--right" aria-hidden="true">
        <source type="image/webp" srcSet="/assets/decorative/Hero-section-leaf-right.webp" />
        <img
          src="/assets/decorative/Hero-section-leaf-right.png"
          alt=""
          width="152"
          height="293"
          loading="eager"
          decoding="async"
        />
      </picture>

      <div className="container hero__inner">

        {/* ── Left: Text content ── */}
        <div className="hero__text">

          <motion.h1
            className="hero-heading"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0.1}
          >
            {t('hero.heading1', lang)}<br />
            <span className="accent">{t('hero.heading2', lang)}</span>
          </motion.h1>

          <motion.p
            className="supporting-copy hero__subheading"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0.25}
          >
            {t('hero.sub1', lang)}<br className="hero__break" />
            {t('hero.sub2', lang)}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0.4}
          >
            <a
              href="#about"
              className="btn-primary hero__cta"
              onClick={handleExplore}
              aria-label={t('hero.ctaAria', lang)}
            >
              {t('hero.cta', lang)}
              <span className="btn-arrow" aria-hidden="true"><ArrowRight size={16} strokeWidth={2.5} /></span>
            </a>

            <button
              className="btn-secondary hero__video-btn"
              onClick={openStory}
              type="button"
            >
              <span className="hero__play-icon" aria-hidden="true">
                <Play size={18} strokeWidth={2} />
              </span>
              <span className="hero__video-label">
                <span className="hero__video-title">{t('hero.watchBtn', lang)}</span>
                <span className="hero__video-sub">{t('hero.videoSub', lang)}</span>
              </span>
            </button>
          </motion.div>
        </div>

        {/* ── Right: Mushroom composite image ── */}
        <motion.div
          className="hero__image-wrap"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={FADE_IN}
          custom={0.15}
        >
          <picture className="hero__mushroom-picture">
            <source
              type="image/webp"
              media="(max-width: 768px)"
              srcSet="/assets/photography/Hero-Section-Big-Mushrooms-mobile.webp"
            />
            <source
              type="image/webp"
              srcSet="/assets/photography/Hero-Section-Big-Mushrooms.webp"
            />
            <img
              src="/assets/photography/Hero-Section-Big Musrooms.png"
              alt={t('hero.imgAlt', lang)}
              className="hero__mushroom-img"
              width="680"
              height="680"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </motion.div>
      </div>

      {/* ── Trust strip ── */}
      <motion.div
        className="hero__trust"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={FADE_UP}
        custom={0.55}
      >
        <div className="container">
          <div className="hero__trust-inner">
            <div className="hero__trust-logos">
              <picture>
                <source type="image/webp" srcSet="/assets/logos/Tusted-by-companies.webp" />
                <img
                  src="/assets/logos/Tusted-by-companies.png"
                  alt={t('hero.trustAlt', lang)}
                  className="hero__trust-img"
                  width="680"
                  height="52"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.a
        href="#about"
        className="hero__scroll-cue"
        onClick={handleScrollCue}
        aria-label={t('hero.scrollAria', lang)}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <ChevronDown size={20} strokeWidth={2} aria-hidden="true" />
        <span className="hero__scroll-label">
          {scrollLines[0]}<br />{scrollLines[1]}
        </span>
      </motion.a>

      <AnimatePresence>
        {isStoryOpen && <StoryVideoModal onClose={closeStory} />}
      </AnimatePresence>
    </section>
  )
}
