import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone, CheckCircle2, AlertCircle } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'
import './ContactSection.css'

const FADE_UP = {
  hidden:  { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }
  }),
}

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  role: '',
  message: '',
}

export default function ContactSection() {
  const { lang } = useLang()
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  const [form, setForm]     = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState(false)

  // Formspree React hook connected to endpoint mwlllvlp
  const [formspreeState, handleFormspreeSubmit, resetFormspree] = useForm('mwlllvlp', {
    data: {
      language: () => (lang === 'hi' ? 'Hindi (हिन्दी)' : 'English'),
    },
  })

  const ROLES = [
    { value: 'Farmer',             label: t('contact.roleFarmer',  lang) },
    { value: 'Buyer',              label: t('contact.roleBuyer',   lang) },
    { value: 'Partner / Investor', label: t('contact.rolePartner', lang) },
    { value: 'Other',              label: t('contact.roleOther',   lang) },
  ]

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = t('contact.errName', lang)
    if (!form.email.trim())   e.email   = t('contact.errEmail', lang)
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t('contact.errEmailInvalid', lang)
    if (!form.message.trim()) e.message = t('contact.errMessage', lang)
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (submitError) setSubmitError(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formspreeState.submitting) return
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitError(false)
    try {
      await handleFormspreeSubmit(e)
    } catch {
      setSubmitError(true)
    }
  }

  const handleReset = () => {
    resetFormspree()
    setSubmitError(false)
    setForm(INITIAL_FORM)
    setErrors({})
  }

  return (
    <section
      id="contact"
      className="contact"
      aria-label={t('contact.sectionAria', lang)}
      ref={ref}
    >
      {/* ── Background image layer (blurred separately) ── */}
      <div className="contact__bg" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            media="(max-width: 768px)"
            srcSet="/assets/photography/Contact-section-Bg-Image-mobile.webp"
          />
          <source
            type="image/webp"
            srcSet="/assets/photography/Contact-section-Bg-Image.webp"
          />
          <img
            src="/assets/photography/Contact-section-Bg-Image.png"
            alt=""
            className="contact__bg-img"
            width="2488"
            height="1401"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="contact__bg-overlay" />
      </div>

      {/* ── Decorative foliage ── */}
      <picture className="contact__leaf contact__leaf--tl" aria-hidden="true">
        <source type="image/webp" srcSet="/assets/decorative/Contact-section-leaf-top-left.webp" />
        <img
          src="/assets/decorative/Contact-section-leaf-top-left.png"
          alt=""
          width="179"
          height="410"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <picture className="contact__leaf contact__leaf--br" aria-hidden="true">
        <source type="image/webp" srcSet="/assets/decorative/Contact-section-bottom-right-Leave.webp" />
        <img
          src="/assets/decorative/Contact-section-bottom-right-Leave.png"
          alt=""
          width="653"
          height="380"
          loading="lazy"
          decoding="async"
        />
      </picture>

      <div className="container contact__inner">

        {/* ── Left: heading ── */}
        <div className="contact__lead">
          <motion.span
            className="eyebrow contact__eyebrow"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0}
          >
            {t('contact.eyebrow', lang)}
          </motion.span>

          <motion.h2
            className="section-heading contact__heading"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0.1}
          >
            {t('contact.h2a', lang)}<br />
            <span className="contact__accent">{t('contact.h2b', lang)}</span>
          </motion.h2>

          <motion.p
            className="supporting-copy contact__sub"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={FADE_UP}
            custom={0.2}
          >
            {t('contact.sub', lang)}
          </motion.p>

          <motion.div
            className="contact__rule"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* ── Right: Glass form panel ── */}
        <motion.div
          className="contact__panel"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          role="region"
          aria-label={t('contact.panelAria', lang)}
        >
          {formspreeState.succeeded ? (
            <div className="contact__status-msg" role="status" aria-live="polite">
              <div className="contact__status-icon" aria-hidden="true">
                <CheckCircle2 size={36} strokeWidth={2.4} />
              </div>
              <p className="contact__status-title">{t('contact.successTitle', lang)}</p>
              <p className="contact__status-body">
                {t('contact.successBody', lang)}{' '}
                <a href="tel:+918409992659" className="contact__tel-link">+91 84099 92659</a>{' '}
                {t('contact.successBodyOr', lang)}{' '}
                <a href="mailto:contact@falgus.com" className="contact__tel-link">contact@falgus.com</a>.
              </p>
              <button className="btn-primary contact__reset-btn" onClick={handleReset}>
                {t('contact.sendAnother', lang)}
                <span className="btn-arrow" aria-hidden="true"><ArrowRight size={15} /></span>
              </button>
            </div>
          ) : (
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
              aria-label={t('contact.formAria', lang)}
            >
              {/* Formspree configuration & spam honeypot */}
              <input
                type="hidden"
                name="_subject"
                value={lang === 'hi' ? `फ़ाल्गु वेबसाइट संदेश: ${form.name || 'नया संपर्क'}` : `Falgu Website Inquiry: ${form.name || 'New Contact'}`}
              />
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              {/* Server-level submission error banner */}
              {(formspreeState.errors || submitError) && (
                <div className="contact__form-alert" role="alert">
                  <AlertCircle size={18} aria-hidden="true" style={{ flexShrink: 0 }} />
                  <span>{t('contact.submitError', lang)}</span>
                </div>
              )}

              {/* Row 1: Name + Email */}
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="contact-name" className="contact__label">{t('contact.name', lang)}</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={`contact__input${errors.name ? ' contact__input--error' : ''}`}
                    placeholder={t('contact.namePh', lang)}
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? 'err-name' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <span id="err-name" className="contact__error" role="alert">{errors.name}</span>
                  )}
                  <ValidationError prefix="Name" field="name" errors={formspreeState.errors} className="contact__error" />
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-email" className="contact__label">{t('contact.email', lang)}</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={`contact__input${errors.email ? ' contact__input--error' : ''}`}
                    placeholder={t('contact.emailPh', lang)}
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? 'err-email' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span id="err-email" className="contact__error" role="alert">{errors.email}</span>
                  )}
                  <ValidationError prefix="Email" field="email" errors={formspreeState.errors} className="contact__error" />
                </div>
              </div>

              {/* Row 2: Phone + I am a */}
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="contact-phone" className="contact__label">{t('contact.phone', lang)}</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="contact__input"
                    placeholder={t('contact.phonePh', lang)}
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    aria-describedby={errors.phone ? 'err-phone' : undefined}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <span id="err-phone" className="contact__error" role="alert">{errors.phone}</span>
                  )}
                  <ValidationError prefix="Phone" field="phone" errors={formspreeState.errors} className="contact__error" />
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-role" className="contact__label">{t('contact.role', lang)}</label>
                  <select
                    id="contact-role"
                    name="role"
                    className="contact__input contact__select"
                    value={form.role}
                    onChange={handleChange}
                  >
                    <option value="" disabled>{t('contact.rolePh', lang)}</option>
                    {ROLES.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="contact__field contact__field--full">
                <label htmlFor="contact-message" className="contact__label">{t('contact.message', lang)}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className={`contact__input contact__textarea${errors.message ? ' contact__input--error' : ''}`}
                  placeholder={t('contact.messagePh', lang)}
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  aria-required="true"
                  aria-describedby={errors.message ? 'err-message' : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <span id="err-message" className="contact__error" role="alert">{errors.message}</span>
                )}
                <ValidationError prefix="Message" field="message" errors={formspreeState.errors} className="contact__error" />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary contact__submit"
                disabled={formspreeState.submitting}
                aria-label={t('contact.submitAria', lang)}
              >
                {formspreeState.submitting ? t('contact.submitting', lang) : t('contact.submit', lang)}
                {!formspreeState.submitting && (
                  <span className="btn-arrow" aria-hidden="true"><ArrowRight size={16} strokeWidth={2.5} /></span>
                )}
              </button>

              {/* Phone fallback */}
              <p className="contact__tel">
                <Phone size={14} aria-hidden="true" />
                {t('contact.orCall', lang)}{' '}
                <a href="tel:+918409992659" className="contact__tel-link">+91 84099 92659</a>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
