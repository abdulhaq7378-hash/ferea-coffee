import { motion } from 'framer-motion'
import { useState } from 'react'
import { testimonials } from '../data/content'
import { ArrowIcon } from './ui/Button'
import { CupDoodle, MokaDoodle, Pill, Stars } from './ui/Graphics'
import Img from './ui/Img'
import { LineReveal, Reveal } from './ui/Motion'

const tones = {
  espresso: 'bg-espresso text-ivory',
  ivory: 'bg-ivory text-espresso',
  honey: 'bg-honey text-espresso',
}
const nameTones = {
  espresso: 'bg-ivory text-espresso',
  ivory: 'bg-roast text-ivory',
  honey: 'bg-ivory text-espresso',
}

// resting pose for cards behind the front one; cards deeper than the third wait out of sight
const poses = [
  { rotate: -3, x: 0, y: 0, scale: 1, opacity: 1 },
  { rotate: 7, x: '9%', y: 18, scale: 0.94, opacity: 1 },
  { rotate: -9, x: '-9%', y: 30, scale: 0.9, opacity: 0.9 },
]
const hiddenPose = { rotate: 0, x: 0, y: 40, scale: 0.85, opacity: 0 }

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const n = testimonials.length
  const go = (dir) => setIndex((i) => (i + dir + n) % n)

  return (
    <section id="reviews" className="px-2 sm:px-4 md:px-6">
      <div className="relative overflow-hidden rounded-[2.25rem] bg-caramel py-20 text-ivory md:rounded-[4rem] md:py-28">
        <div className="container-x">
          <div className="relative mx-auto max-w-4xl text-center">
            <Reveal><Pill tone="ivory">Testimonials</Pill></Reveal>
            <LineReveal className="display mt-5 text-[clamp(3.3rem,14vw,5rem)] md:text-[clamp(5rem,8.4vw,8rem)]" lines={['Hear from', 'coffee lovers']} />
            <MokaDoodle className="absolute -left-2 top-[30%] w-14 -rotate-12 md:left-0 md:w-24" />
            <CupDoodle className="absolute -right-2 top-[42%] w-16 rotate-12 md:right-0 md:w-28" />
          </div>

          <div className="mt-14 grid items-center gap-14 md:mt-20 lg:grid-cols-12 lg:gap-8">
            <Reveal className="order-2 text-center lg:order-1 lg:col-span-4 lg:text-left">
              <p className="display hidden leading-none text-espresso/30 md:block md:text-[8rem]">“</p>
              <p className="text-lg leading-relaxed text-ivory/90 md:-mt-6 md:text-xl">
                From the first morning coffee to slow afternoons, see why our guests keep coming back for another cup.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
                <button type="button" onClick={() => go(-1)} aria-label="Previous review" className="grid size-12 place-items-center rounded-full border-[1.5px] border-ivory/60 transition-colors hover:bg-ivory hover:text-caramel">
                  <ArrowIcon direction="left" className="size-4" />
                </button>
                <span className="label w-16 text-center text-lg tabular-nums">{String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
                <button type="button" onClick={() => go(1)} aria-label="Next review" className="grid size-12 place-items-center rounded-full bg-ivory text-caramel transition-transform hover:scale-105">
                  <ArrowIcon className="size-4" />
                </button>
              </div>
            </Reveal>

            {/* Card deck */}
            <div className="order-1 mx-auto grid w-full max-w-[26rem] lg:order-2 lg:col-span-4 lg:col-start-6" aria-live="polite">
              {testimonials.map((t, i) => {
                const depth = (i - index + n) % n
                const pose = poses[depth] ?? hiddenPose
                const front = depth === 0
                return (
                  <motion.figure
                    key={t.name}
                    className={`[grid-area:1/1] rounded-[2rem] p-4 shadow-[0_30px_60px_-30px_rgba(43,24,16,.7)] md:p-5 ${tones[t.tone]} ${front ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'}`}
                    style={{ zIndex: n - depth }}
                    animate={pose}
                    transition={{ type: 'spring', stiffness: 170, damping: 22 }}
                    drag={front ? 'x' : false}
                    dragSnapToOrigin
                    dragElastic={0.6}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -70) go(1)
                      else if (info.offset.x > 70) go(-1)
                    }}
                    aria-hidden={!front}
                  >
                    <div className="aspect-[16/10] overflow-hidden rounded-[1.4rem]">
                      <Img src={t.photo} alt={t.alt} sizes="420px" className="size-full object-cover" />
                    </div>
                    <div className="px-2 pb-2 pt-5">
                      <Stars />
                      <blockquote className="mt-4 text-[1.05rem] font-medium leading-relaxed md:text-lg">“{t.quote}”</blockquote>
                      <figcaption className={`mt-6 inline-flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-5 ${nameTones[t.tone]}`}>
                        <span className="display grid size-9 place-items-center rounded-full bg-caramel text-lg text-ivory">{t.name[0]}</span>
                        <span>
                          <span className="label block text-base leading-none">{t.name}</span>
                          <span className="block text-xs opacity-75">{t.place}</span>
                        </span>
                      </figcaption>
                    </div>
                  </motion.figure>
                )
              })}
            </div>

            <Reveal delay={0.1} className="order-3 hidden lg:col-span-2 lg:col-start-11 lg:block">
              <div className="flex flex-col items-end gap-3">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show review from ${t.name}`}
                    className={`label flex items-center gap-3 text-right text-lg transition-opacity ${i === index ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
                  >
                    {t.name}
                    <span className={`h-[2px] rounded bg-ivory transition-all duration-500 ${i === index ? 'w-10' : 'w-4'}`} />
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <p className="mt-16 text-center text-xs text-ivory/60">Guest reviews shown are illustrative, written for this café concept.</p>
        </div>
      </div>
    </section>
  )
}
