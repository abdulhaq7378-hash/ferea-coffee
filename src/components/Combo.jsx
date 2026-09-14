import { motion } from 'framer-motion'
import { combo, photos } from '../data/content'
import { formatINR, useStore } from '../store'
import Button from './ui/Button'
import { Icon, Pill } from './ui/Graphics'
import Img from './ui/Img'
import { ease, Reveal } from './ui/Motion'

function Starburst({ className = '' }) {
  const points = Array.from({ length: 32 }, (_, i) => {
    const r = i % 2 ? 84 : 100
    const a = (i / 32) * Math.PI * 2
    return `${100 + r * Math.cos(a)},${100 + r * Math.sin(a)}`
  }).join(' ')
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <polygon points={points} fill="currentColor" />
    </svg>
  )
}

export default function Combo() {
  const { addItem } = useStore()
  const saving = combo.original - combo.price

  return (
    <section id="offer" className="relative py-20 md:py-28">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        {/* Collage */}
        <div className="relative mx-auto aspect-square w-full max-w-[36rem] lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, rotate: 0, y: 60 }}
            whileInView={{ opacity: 1, rotate: -4, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1.1, ease }}
            className="absolute left-0 top-0 aspect-[4/5] w-[66%] overflow-hidden rounded-[2.25rem] shadow-[0_40px_70px_-40px_rgba(43,24,16,.8)]"
          >
            <Img src={photos.comboLatte} alt="A latte with heart latte art" sizes="(min-width: 1024px) 26vw, 64vw" className="size-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 0, y: 80 }}
            whileInView={{ opacity: 1, rotate: 5, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1.1, ease, delay: 0.15 }}
            className="absolute bottom-0 right-0 aspect-square w-[58%] overflow-hidden rounded-[2.25rem] border-[6px] border-ivory shadow-[0_40px_70px_-40px_rgba(43,24,16,.8)] md:border-8"
          >
            <Img src={photos.comboCroissant} alt="Golden butter croissants fresh from the oven" sizes="(min-width: 1024px) 22vw, 56vw" className="size-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: -60 }}
            whileInView={{ scale: 1, rotate: 12 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 180, damping: 13, delay: 0.5 }}
            className="absolute right-[6%] top-[8%] grid size-28 place-items-center md:size-36"
          >
            <Starburst className="absolute inset-0 size-full animate-spin-slow text-caramel" />
            <span className="relative text-center text-ivory">
              <span className="label block text-sm leading-none md:text-base">Save</span>
              <span className="display block text-4xl md:text-5xl">{formatINR(saving)}</span>
            </span>
          </motion.div>

          <p className="absolute bottom-[8%] left-[2%] -rotate-6 font-hand text-2xl leading-tight text-roast md:text-3xl">
            best enjoyed<br />before 11:30 ☺
          </p>
        </div>

        {/* Ticket */}
        <Reveal className="lg:col-span-6">
          <div className="relative rounded-[2.25rem] bg-paper p-6 sm:p-10 md:rounded-[3rem] md:p-12">
            {/* ticket notches */}
            <span className="absolute -left-4 top-[58%] size-8 rounded-full bg-ivory" aria-hidden="true" />
            <span className="absolute -right-4 top-[58%] size-8 rounded-full bg-ivory" aria-hidden="true" />

            <Pill>Special offer</Pill>
            <h2 className="display ink mt-5 text-[clamp(3.6rem,17vw,5rem)] md:text-[clamp(5rem,7vw,6.6rem)]">Breakfast<br />combo</h2>
            <p className="mt-4 max-w-sm text-lg leading-relaxed text-roast/85">Start your morning with something worth slowing down for.</p>

            <ol className="mt-8 space-y-4">
              {combo.items.map((it, i) => (
                <li key={it.name} className="flex items-center gap-4">
                  <span className="label grid size-10 shrink-0 place-items-center rounded-full bg-roast text-base text-ivory">{i + 1}</span>
                  <span className="display text-2xl text-roast md:text-3xl">{it.name}</span>
                  <span className="dashed-rule mt-3 flex-1 text-roast/40" />
                  <span className="display text-2xl text-roast md:text-3xl">{formatINR(it.price)}</span>
                </li>
              ))}
            </ol>

            <div className="dashed-rule my-8 text-roast/40" />

            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="label text-sm text-roast/60">Combo price</p>
                <p className="mt-1 flex items-baseline gap-3">
                  <span className="display text-3xl text-roast/45 line-through decoration-2">{formatINR(combo.original)}</span>
                  <span className="display text-7xl text-caramel md:text-8xl">{formatINR(combo.price)}</span>
                </p>
              </div>
              <Button size="lg" tone="espresso" onClick={() => addItem(combo)}>Get the deal</Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-roast/70">
              <Icon name="clock" className="size-4 text-caramel" /> Served daily until 11:30 · dine-in or takeaway
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
