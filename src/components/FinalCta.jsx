import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { brand, photos } from '../data/content'
import { useStore } from '../store'
import Button from './ui/Button'
import { Pill } from './ui/Graphics'
import Img from './ui/Img'
import { ease } from './ui/Motion'

export default function FinalCta() {
  const { open } = useStore()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const frame = useTransform(scrollYProgress, [0, 0.45], [0.92, 1])

  return (
    <section ref={ref} className="px-2 sm:px-4 md:px-6" aria-labelledby="final-cta-title">
      <motion.div style={{ scale: frame }} className="relative isolate grid min-h-[85svh] place-items-center overflow-hidden rounded-[2.25rem] px-5 py-24 text-center text-ivory md:min-h-[88vh] md:rounded-[4rem]">
        <motion.div style={{ y: imgY }} className="absolute -inset-y-[14%] inset-x-0 -z-20">
          <Img src={photos.finalCta} alt="" sizes="100vw" className="size-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(43,24,16,.45),rgba(43,24,16,.82))]" />

        <div>
          <Pill tone="ivory">Visit us</Pill>
          <motion.h2 id="final-cta-title" initial="hidden" whileInView="show" viewport={{ once: true, margin: '-15%' }} className="mt-6">
            <span className="block overflow-hidden">
              <motion.span variants={{ hidden: { y: '105%' }, show: { y: 0, transition: { duration: 1, ease } } }} className="display block text-[clamp(3rem,13vw,4.6rem)] md:text-[clamp(4.6rem,8.4vw,8.4rem)]">
                Come find your new
              </motion.span>
            </span>
            <motion.span
              variants={{ hidden: { clipPath: 'inset(0 100% 0 0)' }, show: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1, ease, delay: 0.3 } } }}
              className="display mt-1 inline-block -rotate-3 bg-ivory px-[0.18em] pb-[0.02em] pt-[0.1em] text-roast text-[clamp(3rem,13vw,4.6rem)] md:text-[clamp(4.6rem,8.4vw,8.4rem)]"
            >
              Favourite coffee
            </motion.span>
          </motion.h2>
          <p className="mx-auto mt-8 max-w-md text-ivory/85">
            {brand.addressLine}. Open every day from {brand.hours[0].time.slice(0, 5)}.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" tone="ivory" onClick={() => open('order')}>Order now</Button>
            <Button size="lg" tone="ghost" href={brand.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
