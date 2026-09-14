import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { brand } from '../data/content'
import { useStore } from '../store'
import { ArrowIcon } from './ui/Button'
import { Icon, LogoMark } from './ui/Graphics'
import { ease } from './ui/Motion'

const socials = [
  { name: 'instagram', label: 'Instagram' },
  { name: 'facebook', label: 'Facebook' },
  { name: 'x', label: 'X' },
]

function Col({ title, children, className = '' }) {
  return (
    <div className={className}>
      <p className="label text-sm tracking-[0.14em] text-ivory/55">{title}</p>
      <div className="mt-4">{children}</div>
    </div>
  )
}

const linkCls = 'label block w-fit py-1 text-xl text-ivory transition-colors hover:text-honey'

export default function Footer() {
  const { notify } = useStore()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | error | done

  const subscribe = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return setStatus('error')
    setStatus('done')
    setEmail('')
  }

  return (
    <footer id="contact" className="mt-6 bg-espresso text-ivory md:mt-8">
      <div className="container-x pb-8 pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 md:gap-5">
              <LogoMark className="w-[16vw] max-w-[9.5rem] text-ivory [--logo-cut:var(--color-espresso)]" />
              <span className="display text-[clamp(5rem,26vw,15rem)] leading-[0.8]">Feréa</span>
            </p>
            <p className="display mt-6 text-3xl text-honey md:text-4xl">Specialty coffee.<br />Thoughtfully made.</p>
          </div>

          <div className="lg:col-span-5">
            <p className="label text-xl">Subscribe to our newsletter</p>
            <p className="mt-1 text-sm text-ivory/65">New seasonal drinks, bake-sale Sundays and the occasional free cup.</p>
            <AnimatePresence mode="wait">
              {status === 'done' ? (
                <motion.p key="done" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 flex items-center gap-3 rounded-full bg-ivory/10 px-5 py-4">
                  <span className="grid size-8 place-items-center rounded-full bg-honey text-espresso"><Icon name="check" className="size-4" /></span>
                  You’re on the list — see you over coffee.
                </motion.p>
              ) : (
                <motion.form key="form" exit={{ opacity: 0 }} onSubmit={subscribe} noValidate className="mt-5">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <div className={`flex items-center rounded-full bg-ivory p-1.5 pl-5 ring-2 transition ${status === 'error' ? 'ring-honey' : 'ring-transparent'}`}>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
                      placeholder="YOUR EMAIL ADDRESS"
                      autoComplete="email"
                      className="label min-w-0 flex-1 bg-transparent text-lg text-espresso placeholder:text-roast/50 focus:outline-none"
                    />
                    <button type="submit" aria-label="Subscribe" className="group grid size-11 shrink-0 place-items-center rounded-full bg-caramel text-ivory transition-colors hover:bg-roast">
                      <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                  {status === 'error' && <p className="mt-2 pl-5 text-sm text-honey">Please enter a valid email address.</p>}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="dashed-rule my-12 text-ivory/30 md:my-16" />

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:grid-cols-12">
          <Col title="Socials" className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <button
                  key={s.name}
                  type="button"
                  aria-label={`${s.label} — ${brand.instagram}`}
                  onClick={() => notify(`${s.label} ${brand.instagram} — social profiles are part of this demo concept`)}
                  className="grid size-11 place-items-center rounded-full bg-ivory text-espresso transition-all duration-300 hover:-translate-y-1 hover:bg-honey"
                >
                  <Icon name={s.name} className="size-[1.15rem]" />
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-ivory/65">{brand.instagram}</p>
          </Col>

          <Col title="Pages" className="lg:col-span-2">
            <a href="#menu" className={linkCls}>Menu</a>
            <a href="#blog" className={linkCls}>Blog</a>
            <a href="#contact" className={linkCls}>Contact</a>
          </Col>

          <Col title="Utility" className="lg:col-span-2">
            <a href="#/404" className={linkCls}>404</a>
            <a href="#/license" className={linkCls}>License</a>
            <a href="#/changelog" className={linkCls}>Changelog</a>
          </Col>

          <Col title="Address" className="lg:col-span-3">
            <p className="label text-xl">Feréa Coffee House</p>
            <address className="mt-1 not-italic leading-relaxed text-ivory/80">
              {brand.address.map((l) => <span key={l} className="block">{l}</span>)}
            </address>
            <div className="mt-4 space-y-1.5 text-ivory/85">
              <a href={brand.phoneHref} className="flex items-center gap-2 hover:text-honey"><Icon name="phone" className="size-4" />{brand.phone}</a>
              <a href={`mailto:${brand.email}`} className="flex items-center gap-2 hover:text-honey"><Icon name="mail" className="size-4" />{brand.email}</a>
            </div>
          </Col>

          <Col title="Opening hours" className="col-span-2 md:col-span-4 lg:col-span-3">
            <dl className="space-y-3">
              {brand.hours.map((h) => (
                <div key={h.days}>
                  <dt className="label text-xl">{h.days}</dt>
                  <dd className="text-ivory/80">{h.time}</dd>
                </div>
              ))}
            </dl>
          </Col>
        </div>

        <div className="dashed-rule mb-6 mt-14 text-ivory/30" />

        <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <p className="label tracking-[0.1em]">© 2026 Feréa Coffee House. All rights reserved.</p>
          <p className="text-xs text-ivory/45">Portfolio concept by Abdul Haq · Feréa is a fictional café</p>
          <motion.a href="#top" whileHover={{ y: -2 }} transition={{ ease, duration: 0.3 }} className="label flex w-fit items-center gap-3 tracking-[0.1em]">
            Back to top
            <span className="grid size-8 place-items-center rounded-full bg-ivory text-espresso"><ArrowIcon direction="up" className="size-3.5" /></span>
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
