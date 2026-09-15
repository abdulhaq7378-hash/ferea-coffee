import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { menu } from '../data/content'
import { formatINR, useStore } from '../store'
import Button from './ui/Button'
import { Icon, Pill } from './ui/Graphics'
import Img from './ui/Img'
import { ease, LineReveal, Reveal } from './ui/Motion'

export default function Menu() {
  const { open, addItem, notify } = useStore()
  const [catKey, setCatKey] = useState(menu[0].key)
  const [active, setActive] = useState(0)
  const listRef = useRef(null)
  const category = menu.find((c) => c.key === catKey)
  // the homepage shows dishes with photography; the full menu lists everything
  const items = category.items.filter((i) => i.photo)
  const current = items[active] ?? items[0]

  const selectCategory = (key) => {
    setCatKey(key)
    setActive(0)
    // on phones, bring the top of the list back under the sticky tabs
    const top = listRef.current?.getBoundingClientRect().top
    if (top !== undefined && top < 120 && window.innerWidth < 1024) {
      window.scrollBy({ top: top - 140, behavior: 'smooth' })
    }
  }

  const add = (item) => {
    addItem(item, { open: false })
    notify(`${item.name} added to your order`)
  }

  return (
    <section id="menu" className="relative py-20 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <div>
            <Reveal><Pill>Our menu</Pill></Reveal>
            <LineReveal className="display ink mt-5 text-[clamp(3.8rem,17vw,5.5rem)] md:text-[clamp(5.5rem,9vw,8.5rem)]" lines={['Drinks for', 'everyday.']} />
          </div>
          <Reveal delay={0.15} className="flex flex-col items-start gap-5 md:max-w-xs md:items-end md:text-right">
            <p className="leading-relaxed text-roast/85">Espresso classics, cold coffee, thickshakes, bites and desserts — all made to order.</p>
            <div className="hidden md:block">
              <Button tone="outline" onClick={() => open('menu')}>View full menu</Button>
            </div>
          </Reveal>
        </div>

        {/* Category tabs — sticky under the navbar on phones */}
        <div className="sticky top-[3.9rem] z-30 -mx-4 mt-8 bg-ivory/95 px-4 py-2.5 md:static md:mx-0 md:mt-16 md:bg-transparent md:p-0">
          <div className="overflow-x-auto no-scrollbar">
            <div role="tablist" aria-label="Menu categories" className="flex w-full gap-0.5 rounded-full border-[1.5px] border-roast/15 bg-paper p-1 md:w-max md:gap-1 md:p-1.5">
              {menu.map((c) => (
                <button
                  key={c.key}
                  role="tab"
                  type="button"
                  aria-selected={c.key === catKey}
                  onClick={() => selectCategory(c.key)}
                  className={`label relative flex-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[1rem] transition-colors duration-300 md:flex-none md:px-7 md:py-2.5 md:text-xl ${c.key === catKey ? 'text-ivory' : 'text-roast hover:text-caramel'}`}
                >
                  {c.key === catKey && (
                    <motion.span layoutId="menu-tab" className="absolute inset-0 rounded-full bg-roast" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                  )}
                  <span className="relative md:hidden">{c.short ?? c.label}</span>
                  <span className="relative hidden md:inline">{c.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: photo stage + typographic list */}
        <div className="mt-12 hidden gap-12 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-beige">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease }}
                    className="absolute inset-0"
                  >
                    <Img src={current.photo} alt={current.name} sizes="40vw" className="size-full object-cover" />
                  </motion.div>
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="label absolute left-5 top-5 rounded-full bg-ivory px-3.5 py-1.5 text-sm text-roast">{current.tag}</span>
                <motion.div
                  key={`p-${current.id}`}
                  initial={{ scale: 0.6, rotate: -30, opacity: 0 }}
                  animate={{ scale: 1, rotate: -12, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                  className="absolute right-6 top-6 grid size-24 place-items-center rounded-full bg-caramel text-ivory shadow-xl"
                >
                  <span className="display text-3xl">{formatINR(current.price)}</span>
                </motion.div>
                <p className="display absolute bottom-6 left-6 right-6 text-5xl text-ivory">{current.name}</p>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-roast/80">{category.note}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.ul
                key={catKey}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                variants={{ show: { transition: { staggerChildren: 0.05 } } }}
              >
                {items.map((item, i) => (
                  <motion.li
                    key={item.id}
                    variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
                    className="relative border-b border-dashed border-roast/30"
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => add(item)}
                      aria-label={`Add ${item.name}, ${formatINR(item.price)}, to your order`}
                      className="group relative grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 px-4 py-5 text-left xl:py-6"
                    >
                      {active === i && (
                        <motion.span layoutId="menu-row" className="absolute inset-0 rounded-[1.5rem] bg-beige" transition={{ type: 'spring', stiffness: 400, damping: 36 }} />
                      )}
                      <span className="label relative text-base text-caramel">{String(i + 1).padStart(2, '0')}</span>
                      <span className="relative">
                        <span className={`display block text-[clamp(2.4rem,3.6vw,3.6rem)] transition-all duration-500 ease-out-expo ${active === i ? 'translate-x-2 text-caramel' : 'text-roast'}`}>
                          {item.name}
                        </span>
                        <span className="mt-1.5 block max-w-md text-sm text-roast/75">{item.desc}</span>
                      </span>
                      <span className="relative flex items-center gap-4">
                        <span className="display text-3xl text-roast xl:text-4xl">{formatINR(item.price)}</span>
                        <span className={`grid size-10 place-items-center rounded-full bg-roast text-ivory transition-all duration-500 ease-out-expo ${active === i ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                          <Icon name="plus" className="size-4" />
                        </span>
                      </span>
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>

        {/* Phones & tablets: quick-scan list with photos */}
        <div ref={listRef} className="lg:hidden">
          <p className="mt-4 text-sm leading-relaxed text-roast/75">{category.note}</p>
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={catKey}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease }}
              className="mt-3 md:grid md:grid-cols-2 md:gap-x-6"
            >
              {items.map((item) => (
                <li key={item.id} className="border-b border-dashed border-roast/25">
                  <button
                    type="button"
                    onClick={() => add(item)}
                    aria-label={`Add ${item.name}, ${formatINR(item.price)}, to your order`}
                    className="flex w-full items-center gap-4 py-4 text-left transition-transform active:scale-[0.98]"
                  >
                    <span className="relative size-[5.75rem] shrink-0 overflow-hidden rounded-[1.4rem] bg-beige">
                      <Img src={item.photo} alt="" sizes="120px" className="size-full object-cover" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-start justify-between gap-3">
                        <span className="display text-[1.6rem] leading-[0.95] text-roast">{item.name}</span>
                        <span className="display shrink-0 text-[1.45rem] leading-none text-caramel">{formatINR(item.price)}</span>
                      </span>
                      <span className="mt-1.5 block text-[0.88rem] leading-snug text-roast/75">{item.desc}</span>
                      <span className="mt-2.5 flex items-center justify-between gap-3">
                        <span className="label text-[0.72rem] tracking-[0.14em] text-roast/55">{item.tag}</span>
                        <span className="label inline-flex h-8 items-center gap-1.5 rounded-full bg-roast pl-2.5 pr-3.5 text-[0.85rem] text-ivory">
                          <Icon name="plus" className="size-3" />
                          Add
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
          <Button tone="outline" onClick={() => open('menu')} className="mt-7 w-full justify-between">View full menu</Button>
        </div>
      </div>
    </section>
  )
}
