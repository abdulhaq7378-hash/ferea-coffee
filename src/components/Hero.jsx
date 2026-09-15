import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { brand, photos } from '../data/content'
import { useStore } from '../store'
import Button from './ui/Button'
import { Bean, CupDoodle, GoodMoodSticker, Icon, RotatingBadge, ScribbleArrow } from './ui/Graphics'
import Img from './ui/Img'
import { ease, useIsMobile } from './ui/Motion'

export default function Hero({ ready = true }) {
  const { open } = useStore()
  const mobile = useIsMobile()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const beanFast = useTransform(scrollYProgress, [0, 1], [0, -220])
  const beanSlow = useTransform(scrollYProgress, [0, 1], [0, -90])
  const headY = useTransform(scrollYProgress, [0, 1], [0, 80])

  const play = ready ? 'show' : 'hidden'
  const line = {
    hidden: { y: '110%' },
    show: (d) => ({ y: '0%', transition: { duration: 1.1, ease, delay: d } }),
  }
  const fade = {
    hidden: { opacity: 0, y: 24 },
    show: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.9, ease, delay: d } }),
  }
  const pop = {
    hidden: { scale: 0, rotate: -40 },
    show: (d) => ({ scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 220, damping: 14, delay: d } }),
  }

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pb-14 pt-[5.5rem] md:pb-24 md:pt-32 lg:pt-36">
      <div className="container-x grid items-center gap-y-10 md:gap-y-12 lg:grid-cols-12 lg:gap-x-6">
        {/* ——— Headline column ——— */}
        <motion.div style={{ y: mobile ? 0 : headY }} className="relative z-10 lg:col-span-7">
          <motion.p initial="hidden" animate={play} variants={fade} custom={0.15} className="label mb-5 ml-[7.5rem] flex items-center gap-3 text-[0.8rem] text-caramel sm:text-[0.95rem] md:mb-7 md:ml-44 lg:ml-48">
            <span className="h-px w-6 bg-current sm:w-10" />
            <span className="sm:hidden">Coffee house · Manipal</span>
            <span className="hidden sm:inline">Specialty coffee house · Manipal</span>
          </motion.p>

          <h1 className="relative">
            <motion.span
              initial="hidden"
              animate={play}
              variants={pop}
              custom={1}
              className="absolute -left-3 -top-12 z-10 block w-[7.5rem] -rotate-6 md:-top-16 md:w-40 lg:-left-6 lg:w-44"
            >
              <GoodMoodSticker className="w-full animate-float [--r:-6deg]" />
            </motion.span>

            <span className="block overflow-hidden pb-[0.04em]">
              <motion.span initial="hidden" animate={play} variants={line} custom={0.25} className="display ink block text-[clamp(5.4rem,25vw,9rem)] md:text-[clamp(8rem,20vw,12rem)] lg:text-[min(16.4vw,15.5rem)]">
                Freshly
              </motion.span>
            </span>

            <span className="relative -mt-[0.35em] ml-[0.2em] inline-block md:-mt-[0.4em] lg:-mt-[0.42em]">
              <motion.span
                initial={{ clipPath: 'inset(0 100% 0 0)', rotate: -4 }}
                animate={ready ? { clipPath: 'inset(0 0% 0 0)', rotate: -4 } : undefined}
                transition={{ duration: 1, ease, delay: 0.65 }}
                className="display inline-block origin-left bg-caramel px-[0.14em] pb-[0.02em] pt-[0.1em] text-ivory shadow-[0_18px_40px_-20px_rgba(58,33,23,.6)] text-[clamp(3.4rem,15vw,5.6rem)] md:text-[clamp(5rem,12.4vw,7.5rem)] lg:text-[min(10.2vw,9.6rem)]"
              >
                Brewed
              </motion.span>
              <motion.span initial="hidden" animate={play} variants={pop} custom={1.2} className="absolute -right-14 -top-8 block w-20 rotate-6 md:-right-24 md:-top-10 md:w-28 lg:-right-28 lg:w-32">
                <CupDoodle className="w-full" />
              </motion.span>
            </span>
          </h1>

          <motion.div initial="hidden" animate={play} variants={fade} custom={0.9} className="mt-8 grid gap-8 md:mt-14 md:grid-cols-[minmax(0,26rem)_auto] md:items-end md:gap-10">
            <p className="text-[1.05rem] leading-relaxed text-roast sm:text-lg md:text-xl">
              Specialty coffee, freshly baked treats and slow moments in the heart of Manipal.
            </p>
          </motion.div>
          <motion.div initial="hidden" animate={play} variants={fade} custom={1.05} className="mt-6 grid grid-cols-2 gap-2 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
            <Button onClick={() => open('order')} className="w-full justify-between sm:h-14 sm:w-auto sm:gap-5 sm:pl-7 sm:text-xl">Order now</Button>
            <Button tone="outline" href="#menu" className="w-full justify-between sm:h-14 sm:w-auto sm:gap-5 sm:pl-7 sm:text-xl"><span className="sm:hidden">Menu</span><span className="hidden sm:inline">Explore menu</span></Button>
          </motion.div>

          <motion.ul initial="hidden" animate={play} variants={fade} custom={1.2} className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-roast/80 md:mt-10">
            <li className="flex items-center gap-2"><Icon name="pin" className="size-4 text-caramel" />Near Mandavi Emerald, End Point Road</li>
            <li className="flex items-center gap-2"><Icon name="clock" className="size-4 text-caramel" />Open daily from 11am</li>
          </motion.ul>
        </motion.div>

        {/* ——— Collage column ——— */}
        <div className="relative mx-auto w-full max-w-[34rem] lg:col-span-5 lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-[86%] sm:w-[78%] lg:w-full lg:max-w-[30rem]">
            <motion.div
              initial={{ clipPath: 'inset(100% 0% 0% 0% round 999px 999px 40px 40px)' }}
              animate={ready ? { clipPath: 'inset(0% 0% 0% 0% round 999px 999px 40px 40px)' } : undefined}
              transition={{ duration: 1.4, ease, delay: 0.35 }}
              className="absolute inset-0 overflow-hidden rounded-b-[2.5rem] rounded-t-[999px] bg-beige"
            >
              <motion.div style={{ y: mobile ? 0 : imgY }} className="absolute -inset-y-[8%] inset-x-0">
                <motion.div initial={{ scale: 1.25 }} animate={ready ? { scale: 1 } : undefined} transition={{ duration: 2, ease, delay: 0.35 }} className="size-full">
                  <Img src={photos.heroPour} alt="Two frothy South Indian filter coffees in steel tumblers and davaras" priority sizes="(min-width: 1024px) 34vw, 80vw" className="size-full object-cover" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* rotating badge */}
            <motion.div initial="hidden" animate={play} variants={pop} custom={1.35} className="absolute -left-8 top-[14%] sm:-left-12">
              <RotatingBadge text="100% SPECIALTY COFFEE • 100% SPECIALTY COFFEE • " className="size-28 rounded-full bg-espresso md:size-36">
                <Bean className="w-7 rotate-[20deg] md:w-9" />
              </RotatingBadge>
            </motion.div>

            {/* tape label */}
            <motion.span
              initial={{ opacity: 0, x: 30, rotate: 12 }}
              animate={ready ? { opacity: 1, x: 0, rotate: 7 } : undefined}
              transition={{ duration: 0.9, ease, delay: 1.5 }}
              className="label absolute -right-4 top-[46%] rounded-md border-[1.5px] border-dashed border-roast/50 bg-ivory px-4 py-2 text-lg text-roast shadow-lg sm:-right-8"
            >
              Brewed daily ☕︎
            </motion.span>

            {/* polaroid */}
            <motion.figure
              initial={{ opacity: 0, y: 60, rotate: -16 }}
              animate={ready ? { opacity: 1, y: 0, rotate: -8 } : undefined}
              transition={{ duration: 1.1, ease, delay: 1.1 }}
              className="absolute -bottom-8 -left-6 w-[38%] bg-[#fffaf2] p-2 pb-1 shadow-[0_24px_50px_-20px_rgba(43,24,16,.55)] sm:-left-14"
            >
              <Img src={photos.heroEspresso} alt="Hands passing a glass of cutting chai in golden light" sizes="200px" className="aspect-square w-full object-cover" />
              <figcaption className="py-1.5 text-center font-hand text-lg text-roast md:text-xl">the evening chai</figcaption>
            </motion.figure>

            {/* handwritten note */}
            <motion.div initial="hidden" animate={play} variants={fade} custom={1.7} className="absolute -right-2 -top-6 hidden text-roast sm:block lg:-right-6">
              <p className="-rotate-6 font-hand text-2xl leading-none">poured with love</p>
              <ScribbleArrow className="ml-8 mt-1 w-16 rotate-[60deg] text-caramel" />
            </motion.div>

            {/* floating beans */}
            <motion.div style={{ y: beanFast }} className="pointer-events-none absolute -right-6 bottom-[8%] w-14 md:w-20">
              <Bean className="w-full animate-float drop-shadow-[0_18px_18px_rgba(43,24,16,.35)] [--r:35deg]" />
            </motion.div>
            <motion.div style={{ y: beanSlow }} className="pointer-events-none absolute -top-4 left-[18%] w-9 blur-[1.5px] md:w-12">
              <Bean className="w-full animate-float [--r:-50deg] [animation-delay:-2s]" />
            </motion.div>
            <motion.div style={{ y: beanFast }} className="pointer-events-none absolute -bottom-14 right-[28%] w-8 md:w-10">
              <Bean className="w-full animate-float [--r:100deg] [animation-delay:-4s]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* big beans drifting at the edges */}
      <motion.div style={{ y: beanSlow }} className="pointer-events-none absolute -left-10 top-[62%] hidden w-24 opacity-90 blur-[3px] lg:block">
        <Bean className="w-full rotate-[60deg]" />
      </motion.div>
    </section>
  )
}
