import { useLang } from '../../context/LanguageContext'
import './LanguageToggle.css'

/**
 * Bilingual Hindi / English toggle switch.
 * - English active: Darkazure (#023E60) track showing "English" on right, white knob with "हिंदी" on left.
 * - Hindi active: GreyGreen (#4B6D35) track showing "हिंदी" on left, white knob with "EN" on right.
 * The active language is always clearly visible on the track and never vanishes.
 */
export default function LanguageToggle() {
  const { lang, toggleLang } = useLang()
  const isHindi = lang === 'hi'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isHindi}
      aria-label={isHindi ? 'Switch to English' : 'हिन्दी में बदलें'}
      className={`lang-toggle${isHindi ? ' lang-toggle--hi' : ''}`}
      onClick={toggleLang}
    >
      {/* Track label for Hindi (visible on left when Hindi is active) */}
      <span className="lang-toggle__label lang-toggle__label--hi" aria-hidden="true">
        हिंदी
      </span>

      {/* Track label for English (visible on right when English is active) */}
      <span className="lang-toggle__label lang-toggle__label--en" aria-hidden="true">
        English
      </span>

      {/* Sliding white knob showing inactive target language */}
      <span className="lang-toggle__knob" aria-hidden="true">
        {isHindi ? 'EN' : 'हिंदी'}
      </span>
    </button>
  )
}
