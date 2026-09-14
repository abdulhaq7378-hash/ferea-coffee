import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { photos } from '../data/content'
import { ArrowIcon } from './ui/Button'
import { Bean, Pill, RotatingBadge, ScribbleArrow } from './ui/Graphics'
import Img from './ui/Img'
import { LineReveal, ParallaxFrame, Reveal } from './ui/Motion'

const facts = [
  { value: '07:00', label: 'Doors open, and the first shot is already dialled in.' },
  { value: '14 hrs', label: 'The slow steep behind every glass of cold brew.' },
  { value: '02', label: 'Partner estates in Chikmagalur & Coorg.' },
]

export default function Story() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const b1 = useTransform(scrollYProgress, [0, 1], [120, -160])
  const b2 = useTransform(scrollYProgress, [0, 1], [40, -60])
  const r = useTransform(scrollYProgress, [0, 1], [-30, 60])

  return (
    <section id="story" ref={ref} className="px-2 sm:px-4 md:px-6">
      <div className="relative overflow-hidden rounded-[2.25rem] bg-caramel pb-16 pt-16 text-ivory md:rounded-[4rem] md:pb-24 md:pt-24">
        {/* subtle radial warmth */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(216,153,90,.45),transparent_60%)]" />

        <div className="container-x relative">
          <Reveal className="flex justify-center"><Pill tone="ivory">Our story</Pill></Reveal>
          <LineReveal
            className="display mt-6 text-center text-[clamp(2.6rem,11.6vw,5rem)] md:text-[clamp(5rem,9vw,8.6rem)]"
            lines={['More than coffee.', 'It’s a daily moment.']}
          />

          <div className="relative mt-12 grid items-end gap-12 md:mt-20 lg:grid-cols-12 lg:gap-8">
            <Reveal className="order-2 max-w-md lg:order-1 lg:col-span-3 lg:pb-10">
              <p className="text-lg leading-relaxed text-ivory/95">
                We believe coffee should give you a reason to slow down. Feréa brings together carefully sourced beans, fresh food and a warm space designed for everything from quiet mornings to long conversations.
              </p>
              <p className="mt-4 leading-relaxed text-ivory/80">
                Tucked just off End Point Road, a few minutes from the lake, we’re the neighbourhood table for students, early walkers, weekend families and anyone who needs a good cup and a little quiet.
              </p>
              <p className="mt-6 -rotate-2 font-hand text-3xl text-espresso">— the Feréa team</p>
            </Reveal>

            <div className="relative order-1 mx-auto w-full max-w-[26rem] lg:order-2 lg:col-span-6 lg:max-w-[28rem]">
              <ParallaxFrame className="aspect-[4/5] rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(43,24,16,.8)] md:rounded-[3rem]" strength={50}>
                <Img src={photos.storyIced} alt="An iced coffee with milk swirling through the glass" sizes="(min-width: 1024px) 30vw, 80vw" />
              </ParallaxFrame>

              <motion.div style={{ y: b1, rotate: r }} className="pointer-events-none absolute -left-8 top-[18%] w-16 md:-left-20 md:w-24">
                <Bean className="w-full drop-shadow-[0_20px_20px_rgba(43,24,16,.4)]" />
              </motion.div>
              <motion.div style={{ y: b2 }} className="pointer-events-none absolute -right-6 top-[8%] w-10 blur-[2px] md:-right-14 md:w-14">
                <Bean className="w-full rotate-[120deg]" />
              </motion.div>
              <motion.div style={{ y: b1 }} className="pointer-events-none absolute -right-4 bottom-[6%] w-14 md:-right-16 md:w-20">
                <Bean className="w-full -rotate-[40deg] drop-shadow-[0_20px_20px_rgba(43,24,16,.4)]" />
              </motion.div>

              <div className="absolute -bottom-16 right-0 hidden items-end gap-2 text-espresso md:flex md:-right-10">
                <ScribbleArrow className="mb-4 w-14 -rotate-[100deg]" />
                <p className="-rotate-3 whitespace-nowrap font-hand text-2xl leading-tight">cold brew over hand-cut ice</p>
              </div>
            </div>

            <ul className="order-3 lg:col-span-3 lg:pb-10">
              {facts.map((f, i) => (
                <Reveal as="li" key={f.value} delay={i * 0.08} className="border-t border-dashed border-ivory/40 py-5 first:border-t-0 lg:first:border-t">
                  <p className="display text-5xl text-ivory md:text-6xl">{f.value}</p>
                  <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-ivory/85">{f.label}</p>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal className="mt-16 flex justify-center md:mt-20">
            <a href="#menu" aria-label="Scroll to the menu" className="group">
              <RotatingBadge text="DISCOVER MORE • SEE THE MENU • " className="size-28 md:size-32">
                <span className="grid size-12 place-items-center rounded-full border-[1.5px] border-ivory/60 transition-colors duration-300 group-hover:bg-ivory group-hover:text-caramel">
                  <ArrowIcon direction="down" className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </span>
              </RotatingBadge>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
