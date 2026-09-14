import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { brand, faqs } from '../data/content'
import Button from './ui/Button'
import { Icon, Pill } from './ui/Graphics'
import { ease, LineReveal, Reveal } from './ui/Motion'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="pb-24 md:pb-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal><Pill>FAQ</Pill></Reveal>
            <LineReveal className="display ink mt-5 text-[clamp(3.2rem,14vw,4.6rem)] md:text-[clamp(4.6rem,6.6vw,6.4rem)]" lines={['Frequently', 'asked questions']} />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-sm leading-relaxed text-roast/80">
                Everything you need to know about Feréa — from our coffee and menu to takeaway, food and finding us.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button href="#contact">Contact us</Button>
                <a href={brand.phoneHref} className="label flex items-center gap-2 text-lg text-roast hover:text-caramel">
                  <Icon name="phone" className="size-4" /> {brand.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <ul className="space-y-3 lg:col-span-7">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal as="li" key={f.q} delay={i * 0.06}>
                <div className={`rounded-[1.75rem] transition-colors duration-500 ${isOpen ? 'bg-beige' : 'bg-paper hover:bg-beige/70'}`}>
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-7 md:py-6"
                    >
                      <span className="text-[1.05rem] font-semibold text-espresso md:text-lg">{f.q}</span>
                      <span className={`grid size-9 shrink-0 place-items-center rounded-full transition-all duration-500 ease-out-expo ${isOpen ? 'rotate-[135deg] bg-roast text-ivory' : 'bg-caramel text-ivory'}`}>
                        <Icon name="plus" className="size-4" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-a-${i}`}
                        role="region"
                        aria-labelledby={`faq-q-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl px-5 pb-6 leading-relaxed text-roast/85 md:px-7 md:pb-7">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
