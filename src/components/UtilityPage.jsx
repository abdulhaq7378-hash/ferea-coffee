import Button from './ui/Button'
import { Bean, CupDoodle, Pill } from './ui/Graphics'
import { LineReveal, Reveal } from './ui/Motion'

const changelog = [
  { v: '1.0.0', date: 'Sep 2026', notes: ['Launched the full homepage: story, menu, signature, offers, reviews, journal and FAQ.', 'Order-ahead demo drawer with pickup slots.', 'Full menu and journal reader overlays.'] },
  { v: '0.9.0', date: 'Aug 2026', notes: ['Mobile layouts refined for 390–430px screens.', 'Scroll-driven parallax and reveal animations.'] },
  { v: '0.5.0', date: 'Jul 2026', notes: ['Brand identity: logo mark, palette, type system and doodle set.'] },
]

export default function UtilityPage({ route }) {
  if (route === 'license') {
    return (
      <Shell label="License" title={['License']}>
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-roast/85">
          <p>Feréa Coffee House is a fictional café created as a web design portfolio concept by Abdul Haq. It is not a real business, and no products are sold through this site.</p>
          <p>Photography is sourced from <a className="text-caramel underline underline-offset-4" href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">Unsplash</a> and used under the Unsplash License. Fonts — Anton, Barlow Condensed, DM Sans and Caveat Brush — are used under the SIL Open Font License.</p>
          <p>The Feréa name, logo mark, illustrations, copy and layout were designed for this concept. Guest reviews and articles are illustrative.</p>
        </div>
      </Shell>
    )
  }
  if (route === 'changelog') {
    return (
      <Shell label="Changelog" title={['Changelog']}>
        <ol className="max-w-3xl">
          {changelog.map((c) => (
            <li key={c.v} className="grid gap-3 border-t border-dashed border-roast/30 py-8 md:grid-cols-[12rem_1fr]">
              <div>
                <p className="display text-5xl text-caramel">v{c.v}</p>
                <p className="label text-roast/60">{c.date}</p>
              </div>
              <ul className="list-disc space-y-2 pl-5 text-roast/85 marker:text-caramel">
                {c.notes.map((n) => <li key={n}>{n}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </Shell>
    )
  }
  return (
    <Shell label="Error 404" title={['Spilled', 'the beans.']} doodle>
      <p className="max-w-md text-lg leading-relaxed text-roast/85">The page you’re looking for has gone cold. Let’s get you back to a fresh cup.</p>
    </Shell>
  )
}

function Shell({ label, title, children, doodle = false }) {
  return (
    <main className="relative min-h-[80vh] overflow-hidden pb-24 pt-32 md:pt-44">
      <div className="container-x">
        <Reveal><Pill>{label}</Pill></Reveal>
        <LineReveal as="h1" animateOnMount className="display ink mt-5 mb-10 text-[clamp(4.5rem,18vw,13rem)]" lines={title} />
        {children}
        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="#top">Back to home</Button>
          <Button tone="outline" href="#menu">See the menu</Button>
        </div>
      </div>
      {doodle && (
        <div className="pointer-events-none absolute -right-8 top-40 hidden w-[28rem] md:block">
          <CupDoodle className="w-full rotate-[150deg] opacity-90" />
          <Bean className="absolute left-10 top-64 w-16 rotate-45" />
          <Bean className="absolute left-40 top-80 w-10 -rotate-12" />
        </div>
      )}
    </main>
  )
}
