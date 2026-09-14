import { posts } from '../data/content'
import { useStore } from '../store'
import Button, { ArrowIcon } from './ui/Button'
import { Pill } from './ui/Graphics'
import Img from './ui/Img'
import { LineReveal, Reveal } from './ui/Motion'

function Meta({ post, light = false }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className={`label rounded-full px-3 pb-[3px] pt-[5px] text-xs leading-none ${light ? 'bg-ivory text-roast' : 'bg-caramel text-ivory'}`}>{post.category}</span>
      <span className="label rounded-full border border-roast/25 px-3 pb-[3px] pt-[5px] text-xs leading-none text-roast">{post.date}</span>
      <span className="hidden text-xs text-roast/60 sm:inline">· {post.readTime}</span>
    </div>
  )
}

function ReadMore() {
  return (
    <span className="label mt-4 inline-flex items-center gap-2 text-[0.95rem] text-caramel">
      Read article
      <ArrowIcon className="size-3 transition-transform duration-300 group-hover:translate-x-1.5" />
    </span>
  )
}

export default function Blog() {
  const { open } = useStore()
  const [featured, ...rest] = posts

  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <Reveal><Pill>Blog</Pill></Reveal>
          <LineReveal className="display ink mt-5 !leading-[0.95] text-[clamp(3.3rem,14vw,5rem)] md:text-[clamp(5rem,8vw,7.5rem)]" lines={['Coffee, stories', '& more']} />
          <Reveal delay={0.15} className="mt-7">
            <Button tone="caramel" onClick={() => open('journal')}>View all</Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <article>
              <button type="button" onClick={() => open('article', featured.slug)} className="group block w-full text-left">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2.25rem] bg-beige md:rounded-[2.75rem]">
                  <Img src={featured.photo} alt={featured.alt} sizes="(min-width: 1024px) 55vw, 100vw" className="size-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105" />
                  <span className="label absolute left-5 top-5 rounded-full bg-ivory px-3.5 py-1.5 text-sm text-roast">Featured story</span>
                </div>
                <div className="mt-6 md:px-2">
                  <Meta post={featured} />
                  <h3 className="display mt-4 text-[2.6rem] text-roast transition-colors group-hover:text-caramel md:text-6xl">{featured.title}</h3>
                  <p className="mt-3 max-w-xl text-lg leading-relaxed text-roast/80">{featured.excerpt}</p>
                  <ReadMore />
                </div>
              </button>
            </article>
          </Reveal>

          <ul className="lg:col-span-5">
            {rest.map((post, i) => (
              <Reveal as="li" key={post.slug} delay={i * 0.1} className="border-b border-dashed border-roast/30 first:pt-0 last:border-b-0 lg:first:border-t-0">
                <article>
                  <button type="button" onClick={() => open('article', post.slug)} className="group grid w-full grid-cols-[6.5rem_1fr] items-start gap-5 py-6 text-left sm:grid-cols-[9rem_1fr] sm:gap-6 lg:py-7">
                    <div className="aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-beige">
                      <Img src={post.photo} alt={post.alt} sizes="160px" className="size-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110" />
                    </div>
                    <div>
                      <Meta post={post} />
                      <h3 className="display mt-3 text-[1.7rem] text-roast transition-colors group-hover:text-caramel sm:text-3xl">{post.title}</h3>
                      <p className="mt-2 hidden text-sm leading-relaxed text-roast/75 sm:block">{post.excerpt}</p>
                      <ReadMore />
                    </div>
                  </button>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
