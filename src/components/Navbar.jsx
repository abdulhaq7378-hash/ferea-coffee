import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { allPages, brand, navLinks } from '../data/content'
import { useStore } from '../store'
import Button from './ui/Button'
import { Icon, Logo } from './ui/Graphics'
import { ease } from './ui/Motion'

export default function Navbar({ ready = true }) {
  const { open, count } = useStore()
  const [scrolled, setScrolled] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!pagesOpen) return
    const onDown = (e) => !dropdownRef.current?.contains(e.target) && setPagesOpen(false)
    const onKey = (e) => e.key === 'Escape' && setPagesOpen(false)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [pagesOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  const linkClass = 'label relative text-[1.35rem] text-roast transition-colors hover:text-caramel after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100'

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: 0.9, ease, delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ${
          scrolled ? 'bg-ivory/95 shadow-[0_10px_30px_-18px_rgba(58,33,23,0.35)]' : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className={`container-x grid grid-cols-[1fr_auto] items-center transition-[padding] duration-500 ease-out-expo lg:grid-cols-[1fr_auto_1fr] ${
            scrolled ? 'py-2.5' : 'py-4 md:py-6'
          }`}
        >
          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>{l.label}</a>
              </li>
            ))}
            <li className="relative" ref={dropdownRef}>
              <button
                type="button"
                aria-expanded={pagesOpen}
                aria-haspopup="true"
                onClick={() => setPagesOpen((v) => !v)}
                className="label flex items-center gap-1.5 text-[1.35rem] text-roast transition-colors hover:text-caramel"
              >
                All pages
                <svg viewBox="0 0 16 16" className={`size-4 transition-transform duration-300 ${pagesOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                  <path d="m3.5 6 4.5 4.5L12.5 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <AnimatePresence>
                {pagesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.3, ease }}
                    className="absolute left-0 top-full mt-4 w-[26rem] origin-top-left rounded-[1.75rem] bg-espresso p-3 text-ivory shadow-2xl"
                  >
                    <ul className="grid grid-cols-2 gap-1">
                      {allPages.map((p) => (
                        <li key={p.href}>
                          <a
                            href={p.href}
                            onClick={() => setPagesOpen(false)}
                            className="label group flex items-center justify-between rounded-2xl px-4 py-2.5 text-lg transition-colors hover:bg-caramel"
                          >
                            {p.label}
                            <span className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">→</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          <a href="#top" aria-label={`${brand.fullName} — home`} className="justify-self-start text-roast lg:justify-self-center">
            <Logo markClass={`${scrolled ? 'size-7' : 'size-8 md:size-9'} text-caramel transition-all duration-500`} textClass={`${scrolled ? 'text-[1.7rem]' : 'text-[1.9rem] md:text-[2.2rem]'} transition-all duration-500`} />
          </a>

          <div className="flex items-center justify-end gap-2">
            <div className="hidden lg:block">
              <Button tone="outline" onClick={() => open('order')} size={scrolled ? 'sm' : 'md'}>
                Order now{count > 0 && <span className="ml-2 rounded-full bg-caramel px-2 py-0.5 text-sm text-ivory">{count}</span>}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => open('order')}
              aria-label={`Open order bag${count ? `, ${count} items` : ''}`}
              className="relative grid size-11 place-items-center rounded-full border-[1.5px] border-roast text-roast lg:hidden"
            >
              <Icon name="bag" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-caramel text-[0.7rem] font-bold text-ivory">{count}</span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="grid size-11 place-items-center rounded-full bg-roast text-ivory lg:hidden"
            >
              <span className="flex w-5 flex-col items-end gap-[5px]">
                <span className="h-[2px] w-5 rounded bg-current" />
                <span className="h-[2px] w-3.5 rounded bg-current" />
                <span className="h-[2px] w-5 rounded bg-current" />
              </span>
            </button>
          </div>
        </nav>
        <div className={`container-x transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
          <div className="dashed-rule text-roast/40" />
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} onOrder={() => { setMobileOpen(false); open('order') }} />}
      </AnimatePresence>
    </>
  )
}

function MobileMenu({ onClose, onOrder }) {
  const items = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Our place', href: '#place' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      initial={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
      animate={{ clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
      exit={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
      transition={{ duration: 0.7, ease }}
      className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-caramel px-5 pb-8 pt-4 text-ivory lg:hidden"
    >
      <div className="flex items-center justify-between">
        <Logo markClass="size-8 text-ivory [--logo-cut:var(--color-caramel)]" textClass="text-[1.9rem]" />
        <button type="button" onClick={onClose} aria-label="Close menu" className="grid size-11 place-items-center rounded-full bg-ivory text-caramel">
          <Icon name="close" />
        </button>
      </div>
      <ul className="mt-10 flex flex-1 flex-col gap-1">
        {items.map((it, i) => (
          <li key={it.href} className="overflow-hidden">
            <motion.a
              href={it.href}
              onClick={onClose}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.05 }}
              className="display flex items-baseline justify-between border-b border-ivory/25 py-2 text-[clamp(2.8rem,13vw,4.5rem)]"
            >
              {it.label}
              <span className="label text-base tracking-widest opacity-70">0{i + 1}</span>
            </motion.a>
          </li>
        ))}
      </ul>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6, ease }} className="mt-8 space-y-5">
        <Button tone="espresso" size="lg" onClick={onOrder} className="w-full justify-between">Order now</Button>
        <div className="flex items-end justify-between text-sm leading-relaxed text-ivory/85">
          <p>{brand.address[0]},<br />{brand.address[2]}</p>
          <a href={brand.phoneHref} className="label text-base underline underline-offset-4">Call us</a>
        </div>
      </motion.div>
    </motion.div>
  )
}
