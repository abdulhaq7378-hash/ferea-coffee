import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { signature } from '../data/content'
import { formatINR, useStore } from '../store'
import Button from './ui/Button'
import { Bean, Pill, RotatingBadge, ScribbleArrow } from './ui/Graphics'
import Img from './ui/Img'
import { ease, Reveal } from './ui/Motion'

export default function Signature() {
  const { addItem } = useStore()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [-18, 18])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.02, 1.1])
  const beanY = useTransform(scrollYProgress, [0, 1], [140, -140])

  const band = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    show: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1, ease, delay: 0.25 } },
  }

  return (
    <section id="signature" ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
        {/* Editorial headline */}
        <div className="relative z-10 lg:col-span-6">
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10%' }} className="relative">
            <span className="block overflow-hidden">
              <motion.span variants={{ hidden: { y: '105%' }, show: { y: 0, transition: { duration: 1, ease } } }} className="display ink block text-[clamp(4.4rem,20vw,7rem)] md:text-[clamp(7rem,11vw,10.5rem)]">
                Every cup
              </motion.span>
            </span>
            <motion.span variants={band} className="display -mt-[0.12em] ml-[-0.05em] inline-block -rotate-3 whitespace-nowrap bg-caramel px-[0.16em] pb-[0.02em] pt-[0.1em] text-ivory text-[clamp(3rem,13.5vw,5rem)] md:text-[clamp(5rem,8vw,7rem)] lg:text-[clamp(4rem,6.2vw,6.2rem)]">
              Tells a story.
            </motion.span>
            <span className="mt-4 block overflow-hidden md:mt-6">
              <motion.span variants={{ hidden: { y: '105%' }, show: { y: 0, transition: { duration: 1, ease, delay: 0.4 } } }} className="display block text-[clamp(2.2rem,9.4vw,3.2rem)] text-roast md:text-[clamp(3rem,4.6vw,4.4rem)]">
                Of care, craft,<br />and good coffee.
              </motion.span>
            </span>
          </motion.h2>

          <Reveal delay={0.2} className="mt-10 max-w-md border-t border-dashed border-roast/35 pt-8 md:mt-14">
            <div className="flex items-center gap-3">
              <Pill tone="caramel">Signature</Pill>
              <span className="label text-sm text-roast/60">House favourite since day one</span>
            </div>
            <h3 className="display mt-4 text-5xl text-roast md:text-6xl">{signature.name}</h3>
            <p className="mt-3 text-lg leading-relaxed text-roast/85">{signature.desc}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {['Iced espresso', 'Hazelnut', 'Chocolate drizzle', 'Bestseller'].map((t) => (
                <li key={t} className="label rounded-full border border-roast/25 px-3 py-1 text-sm text-roast">{t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <span className="display text-5xl text-caramel">{formatINR(signature.price)}</span>
              <Button onClick={() => addItem(signature)}>Add to order</Button>
            </div>
          </Reveal>
        </div>

        {/* Hero drink */}
        <div className="relative mx-auto w-full max-w-[34rem] lg:col-span-6 lg:max-w-[38rem]">
          <svg viewBox="0 0 200 200" className="absolute -inset-[8%] -z-0 size-[116%] text-beige" aria-hidden="true">
            <path fill="currentColor" d="M44 22c28-22 86-24 118 4s44 78 26 114-66 64-110 56S4 148 2 104 16 44 44 22Z" />
          </svg>
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.4, ease }}
            className="relative aspect-square overflow-hidden rounded-full shadow-[0_50px_90px_-50px_rgba(43,24,16,.9)]"
          >
            <motion.div style={{ rotate, scale }} className="size-full">
              <Img src={signature.photo} alt="The Feréa Frappe — a tall iced hazelnut coffee on a wooden table" sizes="(min-width: 1024px) 45vw, 90vw" className="size-full object-cover" />
            </motion.div>
          </motion.div>

          <div className="absolute -right-2 -top-4 md:-right-6 md:top-2">
            <RotatingBadge text="HAZELNUT FRAPPE • SIGNATURE • " className="size-28 rounded-full bg-caramel shadow-xl md:size-36">
              <span className="display text-2xl text-ivory md:text-3xl">{formatINR(signature.price)}</span>
            </RotatingBadge>
          </div>

          <div className="absolute -left-2 top-[6%] text-roast md:-left-10">
            <p className="-rotate-6 font-hand text-2xl leading-none md:text-3xl">hazelnut + cream</p>
            <ScribbleArrow className="ml-10 mt-1 w-14 rotate-[40deg] text-caramel md:w-20" />
          </div>
          <div className="absolute -bottom-6 right-[4%] text-right text-roast md:-bottom-4 md:right-0">
            <ScribbleArrow className="mb-1 ml-auto mr-10 w-14 -rotate-[140deg] text-caramel md:w-20" />
            <p className="rotate-3 font-hand text-2xl leading-none md:text-3xl">iced espresso</p>
          </div>

          <motion.div style={{ y: beanY }} className="pointer-events-none absolute -left-6 bottom-[20%] w-12 md:-left-14 md:w-16">
            <Bean className="w-full rotate-[-30deg] drop-shadow-[0_18px_16px_rgba(43,24,16,.4)]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
