import { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './sections/HeroSection/HeroSection'
import ProblemSection from './sections/ProblemSection/ProblemSection'
import ModelSection from './sections/ModelSection/ModelSection'
import FarmersSection from './sections/FarmersSection/FarmersSection'
import BuyersSection from './sections/BuyersSection/BuyersSection'
import ContactSection from './sections/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
import { useLang } from './context/LanguageContext'
import { t } from './i18n/translations'

const LegalPage = lazy(() => import('./components/LegalPage/LegalPage'))

const getCurrentRoute = () => {
  const path = window.location.pathname.toLowerCase()

  if (path === '/privacy-policy') return 'privacy'
  if (path === '/terms-of-service') return 'terms'

  return 'home'
}

export default function App() {
  const [route, setRoute] = useState(getCurrentRoute)
  const { lang } = useLang()

  useEffect(() => {
    const handleRouteChange = () => setRoute(getCurrentRoute())
    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  // Handle initial hash scrolling when on home
  useEffect(() => {
    if (route === 'home' && window.location.hash) {
      const id = window.location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [route])

  const handleNavigate = (path) => {
    if (path === '/' || path === '#home') {
      if (route === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        window.history.pushState({}, '', '/')
        setRoute('home')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    // Hash navigation (e.g. '#about', '#model', '#farmers', '#contact', or '/#about')
    if (path.startsWith('#') || path.startsWith('/#')) {
      const id = path.includes('#') ? path.split('#')[1] : ''
      if (route === 'home') {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        // Navigating from a legal page to a home section
        window.history.pushState({}, '', `/#${id}`)
        setRoute('home')
        setTimeout(() => {
          const el = document.getElementById(id)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
      return
    }

    // Direct page route (e.g. '/privacy-policy', '/terms-of-service')
    if (path.startsWith('/')) {
      window.history.pushState({}, '', path)
      setRoute(getCurrentRoute())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <Navbar onNavigate={handleNavigate} />
      {route === 'privacy' && (
        <Suspense fallback={<div className="container" style={{ padding: '80px 0' }} />}>
          <LegalPage type="privacy" onNavigate={handleNavigate} />
        </Suspense>
      )}
      {route === 'terms' && (
        <Suspense fallback={<div className="container" style={{ padding: '80px 0' }} />}>
          <LegalPage type="terms" onNavigate={handleNavigate} />
        </Suspense>
      )}
      {route === 'home' && (
        <main id="main-content" aria-label={t('main.aria', lang)}>
          <HeroSection />
          <ProblemSection />
          <ModelSection />
          <FarmersSection />
          <BuyersSection />
          <ContactSection />
        </main>
      )}
      <Footer onNavigate={handleNavigate} />
    </>
  )
}
