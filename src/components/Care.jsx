import { careBlocks } from '../data/content'
import { StampDoodle } from './ui/Graphics'
import Img from './ui/Img'
import { LineReveal, ParallaxFrame, Reveal } from './ui/Motion'

const stickerTitle = 'display text-caramel [-webkit-text-stroke:7px_var(--color-ivory)] [paint-order:stroke_fill] drop-shadow-[0_6px_10px_rgba(58,33,23,.18)]'

export default function Care() {
  const [fresh, specialty, hospitality] = careBlocks
  return (
    <section id="care" className="px-2 sm:px-4 md:px-6">
      <div className="relative rounded-[2.25rem] bg-beige pb-20 pt-24 [--stamp-bg:var(--color-beige)] md:rounded-[4rem] md:pb-28 md:pt-28">
        <Reveal className="absolute left-1/2 top-0 w-24 -translate-x-1/2 -translate-y-1/2 md:w-32">
          <StampDoodle className="w-full animate-float [--r:0deg]" />
        </Reveal>

        <div className="container-x">
          <div className="mx-auto max-w-5xl text-center">
            <LineReveal className="display ink text-[clamp(3rem,13vw,4.6rem)] md:text-[clamp(4.6rem,7.4vw,7rem)]" lines={['Made with care,', 'served with heart.']} />
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-roast/85">
                From carefully sourced coffee to freshly baked treats, everything we serve is prepared with the same attention to detail.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-14 md:mt-24 md:gap-16 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10">
            {/* 01 — tall portrait with overlapping note */}
            <article className="relative lg:col-span-5 lg:row-span-2">
              <Reveal className="relative">
                <h3 className={`${stickerTitle} absolute -top-7 left-5 z-10 -rotate-3 text-[2.6rem] md:text-5xl`}>{fresh.title}</h3>
                <ParallaxFrame className="aspect-[4/5] rounded-[2.25rem] lg:aspect-[4/5.6]" strength={40}>
                  <Img src={fresh.photo} alt={fresh.alt} sizes="(min-width: 1024px) 40vw, 100vw" />
                </ParallaxFrame>
                <div className="absolute inset-x-3 bottom-3 rounded-[1.75rem] bg-ivory p-5 shadow-[0_20px_40px_-24px_rgba(43,24,16,.6)] md:inset-x-5 md:bottom-5 md:p-7">
                  <p className="label text-sm text-caramel">{fresh.no} —</p>
                  <p className="display mt-1 text-3xl text-roast md:text-4xl">{fresh.heading}</p>
                  <p className="mt-2 text-sm leading-relaxed text-roast/80 md:text-base">{fresh.body}</p>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="mt-20 hidden pr-8 lg:block">
                <p className="display text-[5rem] leading-none text-caramel/40">“</p>
                <blockquote className="display -mt-8 text-5xl leading-[0.95] text-roast">We bake before<br />we brew. Every<br />single morning.</blockquote>
                <p className="mt-4 -rotate-2 font-hand text-2xl text-caramel">— head baker, 5:30am</p>
              </Reveal>
            </article>

            {/* 02 — wide landscape, caption beside */}
            <article className="lg:col-span-7">
              <Reveal className="relative">
                <h3 className={`${stickerTitle} absolute -top-7 right-6 z-10 rotate-2 text-[2.6rem] md:text-5xl`}>{specialty.title}</h3>
                <ParallaxFrame className="aspect-[4/3] rounded-[2.25rem] md:aspect-[16/10]" strength={40}>
                  <Img src={specialty.photo} alt={specialty.alt} sizes="(min-width: 1024px) 55vw, 100vw" />
                </ParallaxFrame>
              </Reveal>
              <Reveal delay={0.1} className="mt-6 grid gap-3 md:grid-cols-[auto_1fr] md:gap-8">
                <p className="display text-6xl text-caramel md:text-8xl">{specialty.no}</p>
                <div className="md:pt-3">
                  <p className="display text-3xl text-roast md:text-4xl">{specialty.heading}</p>
                  <p className="mt-2 max-w-lg leading-relaxed text-roast/80">{specialty.body}</p>
                </div>
              </Reveal>
            </article>

            {/* 03 — text first, arched photo */}
            <article className="grid items-end gap-8 md:grid-cols-[1fr_1.15fr] lg:col-span-7 lg:mt-4">
              <Reveal delay={0.1} className="order-2 md:order-1 md:pb-8">
                <p className="label text-sm text-caramel">{hospitality.no} —</p>
                <p className="display mt-1 text-3xl text-roast md:text-4xl">{hospitality.heading}</p>
                <p className="mt-3 leading-relaxed text-roast/80">{hospitality.body}</p>
                <p className="mt-5 hidden -rotate-2 font-hand text-2xl text-caramel sm:block">see you soon, neighbour.</p>
              </Reveal>
              <Reveal className="relative order-1 md:order-2">
                <h3 className={`${stickerTitle} absolute -top-6 left-1/2 z-10 -translate-x-1/2 -rotate-2 whitespace-nowrap text-[2.4rem] md:text-[2.75rem]`}>{hospitality.title}</h3>
                <ParallaxFrame className="aspect-[4/5] rounded-b-[2.25rem] rounded-t-[999px]" strength={30}>
                  <Img src={hospitality.photo} alt={hospitality.alt} sizes="(min-width: 1024px) 30vw, 100vw" />
                </ParallaxFrame>
              </Reveal>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
