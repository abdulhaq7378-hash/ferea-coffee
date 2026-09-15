import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { brand } from '../data/content'
import { useStore } from '../store'
import { Icon } from './ui/Graphics'
import { ease } from './ui/Motion'

/** Thumb-reach action bar for phones: call, directions, menu, order. Appears after the hero. */
export default function MobileBar() {
  const { open, count, overlay } = useStore()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const nearFooter = y + window.innerHeight > document.body.scrollHeight - 900
      setShow(y > window.innerHeight * 0.7 && !nearFooter)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const round = 'grid size-12 shrink-0 place-items-center rounded-full bg-ivory/10 active:bg-ivory/25'

  return (
    <AnimatePresence>
      {show && !overlay && (
        <motion.nav
          aria-label="Quick actions"
          initial={{ y: '140%' }}
          animate={{ y: 0 }}
          exit={{ y: '140%' }}
          transition={{ duration: 0.5, ease }}
          className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 flex items-center gap-1.5 rounded-full bg-espresso p-1.5 text-ivory shadow-[0_18px_40px_-12px_rgba(43,24,16,.65)] md:hidden"
        >
          <a href={brand.phoneHref} aria-label={`Call ${brand.phone}`} className={round}>
            <Icon name="phone" className="size-5" />
          </a>
          <a href={brand.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Get directions" className={round}>
            <Icon name="pin" className="size-5" />
          </a>
          <a href="#menu" className="label flex h-12 flex-1 items-center justify-center rounded-full bg-ivory/10 text-lg active:bg-ivory/25">
            Menu
          </a>
          <button
            type="button"
            onClick={() => open('order')}
            className="label flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-full bg-caramel text-lg active:bg-caramel-dark"
          >
            <Icon name="bag" className="size-5" />
            Order
            {count > 0 && <span className="grid size-6 place-items-center rounded-full bg-ivory text-sm text-caramel">{count}</span>}
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
