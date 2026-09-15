import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Blog from './components/Blog'
import Care from './components/Care'
import Combo from './components/Combo'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Menu from './components/Menu'
import MobileBar from './components/MobileBar'
import Navbar from './components/Navbar'
import Overlays from './components/Overlays'
import Place from './components/Place'
import Signature from './components/Signature'
import Story from './components/Story'
import Testimonials from './components/Testimonials'
import UtilityPage from './components/UtilityPage'
import { brand } from './data/content'
import { StoreProvider } from './store'
import { Logo } from './components/ui/Graphics'
import { ease } from './components/ui/Motion'

const routeFromHash = () => {
  const h = window.location.hash
  return h.startsWith('#/') ? h.slice(2) || '404' : null
}

// The intro curtain plays once per visit, then gets out of the way.
const INTRO_KEY = 'ferea-intro-seen'
const introSeen = () => {
  try {
    return sessionStorage.getItem(INTRO_KEY) === '1'
  } catch {
    return false
  }
}

function Intro({ onDone }) {
  useEffect(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, '1')
    } catch {
      /* storage unavailable — intro simply plays again next time */
    }
    const t = setTimeout(onDone, 900)
    return () => clearTimeout(t)
  }, [onDone])
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-caramel text-ivory"
      exit={{ y: '-100%', borderBottomLeftRadius: '50% 12%', borderBottomRightRadius: '50% 12%' }}
      transition={{ duration: 0.95, ease }}
      aria-hidden="true"
    >
      <div className="text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          <Logo markClass="size-12 text-ivory [--logo-cut:var(--color-caramel)]" textClass="text-6xl" />
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.6 }} className="label mt-3 text-sm tracking-[0.25em] text-ivory/85">
          {brand.tagline}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [route, setRoute] = useState(routeFromHash)
  const [intro, setIntro] = useState(() => !routeFromHash() && !introSeen())
  const [ready, setReady] = useState(() => !!routeFromHash() || introSeen())
  const prevRoute = useRef(route)

  useEffect(() => {
    const onHash = () => setRoute(routeFromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Moving between a utility page and the homepage: land at the right spot.
  useEffect(() => {
    if (prevRoute.current === route) return
    prevRoute.current = route
    setReady(true)
    if (route) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    const id = window.location.hash.slice(1)
    // wait one tick so the homepage sections are mounted before jumping
    setTimeout(() => {
      const el = id && id !== 'top' ? document.getElementById(id) : null
      if (el) el.scrollIntoView({ behavior: 'instant' })
      else window.scrollTo({ top: 0, behavior: 'instant' })
    }, 30)
  }, [route])

  useEffect(() => {
    document.title = route
      ? `${route === 'license' ? 'License' : route === 'changelog' ? 'Changelog' : 'Page not found'} — Feréa Coffee House`
      : 'Feréa Coffee House — Specialty Coffee in Manipal'
  }, [route])

  return (
    <MotionConfig reducedMotion="user">
      <StoreProvider>
        <div className="grain">
          <a href="#menu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-espresso focus:px-4 focus:py-2 focus:text-ivory">
            Skip to menu
          </a>
          <Navbar ready={ready} />
          {route ? (
            <UtilityPage route={route} />
          ) : (
            <main>
              <Hero ready={ready} />
              <Story />
              <Menu />
              <Care />
              <Place />
              <Signature />
              <Combo />
              <Testimonials />
              <Blog />
              <Faq />
              <FinalCta />
            </main>
          )}
          <Footer />
          <MobileBar />
          <Overlays />
        </div>
        <AnimatePresence>
          {intro && (
            <Intro
              onDone={() => {
                setIntro(false)
                setReady(true)
              }}
            />
          )}
        </AnimatePresence>
      </StoreProvider>
    </MotionConfig>
  )
}
