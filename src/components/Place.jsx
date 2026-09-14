import { Fragment } from 'react'
import { brand, places } from '../data/content'
import { TextLink } from './ui/Button'
import { Bean, Icon, Pill } from './ui/Graphics'
import Img from './ui/Img'
import { LineReveal, Reveal } from './ui/Motion'

const words = ['Specialty', 'Beans', 'Warm', 'Moments']

function Track({ outline = false }) {
  const run = (key) => (
    <div key={key} className="flex shrink-0 items-center gap-6 pr-6 md:gap-10 md:pr-10" aria-hidden={key > 0}>
      {words.map((w) => (
        <Fragment key={w}>
          <span className={`display whitespace-nowrap ${outline ? 'text-transparent [-webkit-text-stroke:1.5px_var(--color-ivory)]' : ''}`}>{w}</span>
          <Bean className="w-[0.55em] shrink-0 rotate-[30deg]" />
        </Fragment>
      ))}
    </div>
  )
  return <>{[0, 1, 2, 3].map(run)}</>
}

export default function Place() {
  return (
    <section id="place" className="relative overflow-hidden pb-24 md:pb-32">
      {/* Crossed tape banners */}
      <div className="relative py-14 md:py-20" role="img" aria-label="Specialty beans, warm moments">
        <div className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-[3deg] overflow-hidden bg-caramel py-2.5 text-[2.2rem] text-ivory md:py-3 md:text-[3.2rem]">
          <div className="flex w-max animate-marquee-rev">
            <Track outline />
          </div>
        </div>
        <div className="relative mx-[-5%] -rotate-[2.5deg] overflow-hidden bg-roast py-3 text-[3.2rem] text-ivory shadow-[0_24px_40px_-24px_rgba(43,24,16,.7)] md:py-4 md:text-[5.5rem]">
          <div className="flex w-max animate-marquee">
            <Track />
          </div>
        </div>
      </div>

      <div className="container-x mt-10 md:mt-16">
        <div className="text-center">
          <Reveal><Pill>Our place</Pill></Reveal>
          <LineReveal className="display ink mt-5 text-[clamp(3.2rem,14vw,5rem)] md:text-[clamp(5rem,8vw,7.5rem)]" lines={['Where good', 'moments begin']} />
        </div>

        <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 no-scrollbar md:mx-0 md:mt-20 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 lg:gap-8">
          {places.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12} className={`w-[72vw] max-w-[22rem] shrink-0 snap-center md:w-auto md:max-w-none ${i === 1 ? 'md:-translate-y-12' : ''}`}>
              <figure className="group">
                <div className="relative aspect-[3/4.3] overflow-hidden rounded-[2.25rem] bg-beige md:rounded-[2.75rem]">
                  <Img src={p.photo} alt={p.alt} sizes="(min-width: 768px) 32vw, 72vw" className="size-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.07]" />
                  <span className="label absolute left-4 top-4 grid size-11 place-items-center rounded-full bg-ivory text-base text-roast">0{i + 1}</span>
                </div>
                <figcaption className="mt-4 flex flex-col gap-1 px-1 xl:flex-row xl:items-baseline xl:justify-between xl:gap-3">
                  <span className="display whitespace-nowrap text-3xl text-roast md:text-4xl">{p.title}</span>
                  <span className="text-sm text-roast/70 xl:text-right">{p.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 text-center text-roast sm:flex-row sm:gap-6 md:mt-6">
          <p className="flex items-center gap-2"><Icon name="pin" className="size-4 text-caramel" />{brand.addressLine}</p>
          <TextLink href={brand.mapsUrl} className="text-caramel" target="_blank" rel="noopener noreferrer">Get directions</TextLink>
        </Reveal>
      </div>
    </section>
  )
}
