import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { combo, menu, posts, signature } from '../data/content'
import { formatINR, useStore } from '../store'
import Button, { ArrowIcon } from './ui/Button'
import { Icon, Logo, Pill } from './ui/Graphics'
import Img from './ui/Img'
import { ease } from './ui/Motion'

/* ————— shared dialog shell ————— */

function useDialog(onClose) {
  const closeRef = useRef(null)
  useEffect(() => {
    const prev = document.activeElement
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbar}px`
    closeRef.current?.focus({ preventScroll: true })
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      document.removeEventListener('keydown', onKey)
      prev?.focus?.({ preventScroll: true })
    }
  }, [onClose])
  return closeRef
}

function Backdrop({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] bg-ink/55"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClose}
      aria-hidden="true"
    />
  )
}

function CloseButton({ onClose, closeRef, className = '' }) {
  return (
    <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className={`grid size-11 shrink-0 place-items-center rounded-full bg-roast text-ivory transition-transform hover:rotate-90 ${className}`}>
      <Icon name="close" />
    </button>
  )
}

/* ————— Order drawer (demo checkout) ————— */

const quickPicks = [signature, combo, menu[0].items[5], menu[3].items[0]]
const pickup = ['In 15 min', 'In 30 min', 'Dine-in']

function OrderDrawer({ onClose }) {
  const { cart, total, count, addItem, setQty, clearCart } = useStore()
  const closeRef = useDialog(onClose)
  const [slot, setSlot] = useState(pickup[0])
  const [done, setDone] = useState(null)

  const place = () => setDone({ no: `FR-${Math.floor(1000 + Math.random() * 9000)}`, total, slot })
  const finish = () => { clearCart(); onClose() }

  return (
    <>
      <Backdrop onClose={onClose} />
      <motion.aside
        role="dialog"
        aria-modal="true"
        aria-label="Your order"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.6, ease }}
        className="fixed inset-y-0 right-0 z-[71] flex w-full max-w-[30rem] flex-col bg-ivory text-espresso sm:rounded-l-[2.5rem]"
      >
        <header className="flex items-center justify-between px-6 pb-4 pt-6 sm:px-8">
          <div>
            <p className="label text-sm text-caramel">Order ahead · pickup at the counter</p>
            <h2 className="display mt-1 text-5xl text-roast">Your order</h2>
          </div>
          <CloseButton onClose={onClose} closeRef={closeRef} />
        </header>

        <>
          {done ? (
            <motion.div key="done" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-1 flex-col items-center justify-center px-8 text-center">
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.1 }} className="grid size-24 place-items-center rounded-full bg-caramel text-ivory">
                <Icon name="check" className="size-10" />
              </motion.span>
              <p className="display mt-8 text-5xl text-roast">Order received</p>
              <p className="label mt-2 text-xl text-caramel">#{done.no} · {done.slot}</p>
              <p className="mt-4 max-w-xs leading-relaxed text-roast/80">
                We’ll have it ready for you. Total {formatINR(done.total)}, payable at the counter.
              </p>
              <p className="mt-6 rounded-full bg-beige px-4 py-2 text-xs text-roast/80">Demo checkout — no order is sent and no payment is taken.</p>
              <Button className="mt-8" tone="espresso" onClick={finish}>Back to the café</Button>
            </motion.div>
          ) : (
            <motion.div key="bag" exit={{ opacity: 0 }} className="flex min-h-0 flex-1 flex-col">
              <div className="flex-1 overflow-y-auto px-6 sm:px-8">
                {cart.length === 0 ? (
                  <div className="py-4">
                    <p className="font-hand text-3xl text-roast">your bag is empty…</p>
                    <p className="mt-1 text-sm text-roast/70">Start with a guest favourite:</p>
                  </div>
                ) : (
                  <ul className="divide-y divide-dashed divide-roast/25">
                    <AnimatePresence initial={false}>
                      {cart.map((l) => (
                        <motion.li key={l.id} layout initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30, height: 0 }} className="flex items-center gap-4 py-4">
                          {l.photo ? (
                            <Img src={l.photo} alt="" sizes="64px" className="size-16 rounded-2xl object-cover" />
                          ) : (
                            <span className="grid size-16 place-items-center rounded-2xl bg-caramel text-ivory"><Icon name="bag" className="size-6" /></span>
                          )}
                          <div className="min-w-0 flex-1">
                            <p className="display truncate text-2xl text-roast">{l.name}</p>
                            <p className="text-sm text-roast/70">{formatINR(l.price)}</p>
                          </div>
                          <div className="flex items-center gap-1 rounded-full bg-paper p-1">
                            <button type="button" onClick={() => setQty(l.id, l.qty - 1)} aria-label={`Remove one ${l.name}`} className="grid size-8 place-items-center rounded-full hover:bg-beige"><Icon name="minus" className="size-3.5" /></button>
                            <span className="label w-5 text-center text-lg tabular-nums">{l.qty}</span>
                            <button type="button" onClick={() => setQty(l.id, l.qty + 1)} aria-label={`Add one ${l.name}`} className="grid size-8 place-items-center rounded-full hover:bg-beige"><Icon name="plus" className="size-3.5" /></button>
                          </div>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                )}

                <p className="label mt-6 text-sm text-roast/60">{cart.length ? 'Add something else' : 'Guest favourites'}</p>
                <div className="mt-3 grid grid-cols-2 gap-3 pb-6">
                  {quickPicks.map((item) => (
                    <button key={item.id} type="button" onClick={() => addItem(item, { open: false })} className="group rounded-[1.5rem] bg-paper p-3 text-left transition-colors hover:bg-beige">
                      {item.photo ? (
                        <Img src={item.photo} alt="" sizes="200px" className="aspect-[4/3] w-full rounded-2xl object-cover" />
                      ) : (
                        <span className="grid aspect-[4/3] w-full place-items-center rounded-2xl bg-caramel text-center text-ivory">
                          <span className="display text-2xl leading-none">Latte +<br />croissant</span>
                        </span>
                      )}
                      <span className="mt-2 flex items-center justify-between gap-2">
                        <span className="display truncate text-xl text-roast">{item.name}</span>
                        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-roast text-ivory transition-transform group-hover:rotate-90"><Icon name="plus" className="size-3" /></span>
                      </span>
                      <span className="text-sm text-roast/70">{formatINR(item.price)}</span>
                    </button>
                  ))}
                </div>
              </div>

              <footer className="border-t border-dashed border-roast/30 bg-paper px-6 pb-6 pt-5 sm:rounded-bl-[2.5rem] sm:px-8">
                <fieldset>
                  <legend className="label text-sm text-roast/60">When?</legend>
                  <div className="mt-2 flex gap-2">
                    {pickup.map((p) => (
                      <label key={p} className={`label flex-1 cursor-pointer rounded-full border-[1.5px] py-2 text-center text-base transition-colors ${slot === p ? 'border-roast bg-roast text-ivory' : 'border-roast/25 text-roast hover:border-roast'}`}>
                        <input type="radio" name="slot" value={p} checked={slot === p} onChange={() => setSlot(p)} className="sr-only" />
                        {p}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="mt-5 flex items-end justify-between">
                  <span className="label text-lg text-roast">Total · {count} {count === 1 ? 'item' : 'items'}</span>
                  <span className="display text-4xl text-roast">{formatINR(total)}</span>
                </div>
                <Button size="lg" tone="caramel" onClick={place} disabled={!count} className="mt-4 w-full justify-between disabled:cursor-not-allowed disabled:opacity-40">
                  Place order
                </Button>
              </footer>
            </motion.div>
          )}
        </>
      </motion.aside>
    </>
  )
}

/* ————— Full menu ————— */

function FullMenu({ onClose }) {
  const { addItem, notify } = useStore()
  const closeRef = useDialog(onClose)
  return (
    <>
      <Backdrop onClose={onClose} />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Full menu"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.7, ease }}
        className="fixed inset-x-0 bottom-0 top-3 z-[71] overflow-y-auto rounded-t-[2.5rem] bg-ivory text-espresso md:inset-x-6 md:top-6 md:rounded-t-[3.5rem]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between bg-ivory/95 px-5 py-4 md:px-12 md:py-6">
          <Logo markClass="size-7 text-caramel" textClass="text-2xl text-roast" />
          <CloseButton onClose={onClose} closeRef={closeRef} />
        </div>
        <div className="px-5 pb-16 md:px-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="display ink text-[clamp(4.5rem,20vw,12rem)]">The menu</h2>
            <p className="max-w-xs text-roast/75 md:pb-4 md:text-right">All prices in Indian Rupees, inclusive of taxes. Oat & almond milk at no extra charge.</p>
          </div>
          <div className="mt-10 grid gap-x-16 gap-y-14 md:grid-cols-2">
            {menu.map((cat) => (
              <section key={cat.key} aria-labelledby={`fm-${cat.key}`}>
                <div className="flex items-center gap-4">
                  <h3 id={`fm-${cat.key}`} className="display text-5xl text-caramel">{cat.label}</h3>
                  <span className="dashed-rule mt-4 flex-1 text-roast/35" />
                </div>
                <p className="mt-2 text-sm text-roast/70">{cat.note}</p>
                <ul className="mt-5">
                  {cat.items.map((it) => (
                    <li key={it.id} className="group flex items-start gap-4 border-b border-dashed border-roast/20 py-4">
                      <div className="min-w-0 flex-1">
                        <p className="flex items-baseline gap-3">
                          <span className="display text-[1.7rem] text-roast">{it.name}</span>
                          <span className="label text-xs text-roast/50">{it.tag}</span>
                        </p>
                        <p className="text-sm text-roast/70">{it.desc}</p>
                      </div>
                      <span className="display pt-1 text-2xl text-roast">{formatINR(it.price)}</span>
                      <button type="button" onClick={() => { addItem(it, { open: false }); notify(`${it.name} added to your order`) }} aria-label={`Add ${it.name}`} className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border-[1.5px] border-roast text-roast transition-colors hover:bg-roast hover:text-ivory">
                        <Icon name="plus" className="size-3.5" />
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

/* ————— Journal & article reader ————— */

function Journal({ onClose }) {
  const { open } = useStore()
  const closeRef = useDialog(onClose)
  return (
    <>
      <Backdrop onClose={onClose} />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Journal"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.7, ease }}
        className="fixed inset-x-0 bottom-0 top-3 z-[71] overflow-y-auto rounded-t-[2.5rem] bg-ivory md:inset-x-6 md:top-6 md:rounded-t-[3.5rem]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between bg-ivory/95 px-5 py-4 md:px-12 md:py-6">
          <Pill>The Feréa journal</Pill>
          <CloseButton onClose={onClose} closeRef={closeRef} />
        </div>
        <div className="px-5 pb-16 md:px-12">
          <h2 className="display ink text-[clamp(4rem,16vw,10rem)]">All stories</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {posts.map((p) => (
              <button key={p.slug} type="button" onClick={() => open('article', p.slug)} className="group text-left">
                <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
                  <Img src={p.photo} alt={p.alt} sizes="(min-width: 1024px) 25vw, 50vw" className="size-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105" />
                </div>
                <p className="label mt-4 text-sm text-caramel">{p.category} · {p.date}</p>
                <h3 className="display mt-1 text-3xl text-roast group-hover:text-caramel">{p.title}</h3>
                <p className="mt-2 text-sm text-roast/75">{p.excerpt}</p>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

function Article({ slug, onClose }) {
  const { open } = useStore()
  const closeRef = useDialog(onClose)
  const scroller = useRef(null)
  const i = posts.findIndex((p) => p.slug === slug)
  const post = posts[i] ?? posts[0]
  const next = posts[(i + 1) % posts.length]

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 })
  }, [slug])

  return (
    <>
      <Backdrop onClose={onClose} />
      <motion.article
        ref={scroller}
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-title"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.7, ease }}
        className="fixed inset-x-0 bottom-0 top-3 z-[71] overflow-y-auto rounded-t-[2.5rem] bg-ivory md:inset-x-6 md:top-6 md:rounded-t-[3.5rem]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between bg-ivory/95 px-5 py-4 md:px-12 md:py-6">
          <Logo markClass="size-7 text-caramel" textClass="text-2xl text-roast" />
          <CloseButton onClose={onClose} closeRef={closeRef} />
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease }} className="mx-auto max-w-3xl px-5 pb-20">
            <p className="label text-sm text-caramel">{post.category} · {post.date} · {post.readTime}</p>
            <h2 id="article-title" className="display ink mt-3 text-[clamp(3rem,10vw,5.8rem)]">{post.title}</h2>
            <div className="mt-8 aspect-[16/10] overflow-hidden rounded-[2rem]">
              <Img src={post.photo} alt={post.alt} sizes="(min-width: 768px) 768px, 100vw" className="size-full object-cover" />
            </div>
            <div className="mt-10 space-y-5 text-lg leading-[1.8] text-roast/90">
              <p className="text-xl font-medium text-espresso first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-caramel">{post.body[0]}</p>
              {post.body.slice(1).map((para) => <p key={para}>{para}</p>)}
            </div>
            <button type="button" onClick={() => open('article', next.slug)} className="group mt-14 flex w-full items-center justify-between gap-6 rounded-[2rem] bg-beige p-5 text-left md:p-7">
              <span>
                <span className="label text-sm text-caramel">Next story</span>
                <span className="display mt-1 block text-3xl text-roast md:text-4xl">{next.title}</span>
              </span>
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-roast text-ivory transition-transform group-hover:translate-x-1"><ArrowIcon className="size-4" /></span>
            </button>
          </motion.div>
        </AnimatePresence>
      </motion.article>
    </>
  )
}

/* ————— Toast ————— */

function Toast() {
  const { toast, open } = useStore()
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-[90] flex justify-center px-4" aria-live="polite">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.key}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.45, ease }}
            className="pointer-events-auto flex items-center gap-3 rounded-full bg-espresso py-2 pl-2 pr-2 text-sm text-ivory shadow-2xl"
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-caramel"><Icon name="check" className="size-4" /></span>
            <span className="pr-1">{toast.message}</span>
            {toast.message.includes('added') && (
              <button type="button" onClick={() => open('order')} className="label rounded-full bg-ivory px-3.5 py-1.5 text-sm text-espresso">View</button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Overlays() {
  const { overlay, close } = useStore()
  return (
    <>
      <AnimatePresence>
        {overlay?.type === 'order' && <OrderDrawer key="order" onClose={close} />}
        {overlay?.type === 'menu' && <FullMenu key="menu" onClose={close} />}
        {overlay?.type === 'journal' && <Journal key="journal" onClose={close} />}
        {overlay?.type === 'article' && <Article key="article" slug={overlay.payload} onClose={close} />}
      </AnimatePresence>
      <Toast />
    </>
  )
}
