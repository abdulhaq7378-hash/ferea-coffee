import { motion } from 'framer-motion'

const tones = {
  caramel: 'bg-caramel text-ivory hover:bg-caramel-dark',
  espresso: 'bg-espresso text-ivory hover:bg-ink',
  outline: 'border-[1.5px] border-roast text-roast hover:bg-roast hover:text-ivory',
  ivory: 'bg-ivory text-espresso hover:bg-white',
  ghost: 'border-[1.5px] border-ivory/70 text-ivory hover:bg-ivory hover:text-espresso',
}

const dotTones = {
  caramel: 'bg-ivory text-caramel',
  espresso: 'bg-ivory text-espresso',
  outline: 'bg-caramel text-ivory',
  ivory: 'bg-espresso text-ivory',
  ghost: 'bg-ivory text-espresso',
}

export function ArrowIcon({ className = 'size-3.5', direction = 'right' }) {
  const rotate = { right: 0, down: 90, up: -90, left: 180 }[direction]
  return (
    <svg viewBox="0 0 16 16" className={className} style={{ transform: `rotate(${rotate}deg)` }} aria-hidden="true">
      <path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Pill button with the circular arrow "puck" used across the site.
 * Renders an <a> when `href` is set, otherwise a <button>.
 */
export default function Button({ children, href, tone = 'caramel', size = 'md', className = '', arrow = 'right', ...rest }) {
  const Tag = href ? motion.a : motion.button
  const sizing = size === 'lg' ? 'h-14 pl-7 pr-2 text-xl gap-5' : size === 'sm' ? 'h-10 pl-4 pr-1.5 text-[0.95rem] gap-3' : 'h-12 pl-5 pr-1.5 text-lg gap-4'
  const dot = size === 'lg' ? 'size-10' : size === 'sm' ? 'size-7' : 'size-9'
  return (
    <Tag
      href={href}
      whileTap={{ scale: 0.96 }}
      className={`group label inline-flex shrink-0 items-center rounded-full leading-none transition-colors duration-300 ${sizing} ${tones[tone]} ${className}`}
      {...(href ? {} : { type: rest.type || 'button' })}
      {...rest}
    >
      <span className="pt-px">{children}</span>
      {arrow && (
        <span className={`grid place-items-center overflow-hidden rounded-full ${dot} ${dotTones[tone]}`}>
          <span className="relative grid place-items-center">
            <ArrowIcon direction={arrow} className="size-3.5 transition-transform duration-500 ease-out-expo group-hover:translate-x-6" />
            <ArrowIcon direction={arrow} className="absolute size-3.5 -translate-x-6 transition-transform duration-500 ease-out-expo group-hover:translate-x-0" />
          </span>
        </span>
      )}
    </Tag>
  )
}

export function TextLink({ children, href, onClick, className = '' }) {
  const Tag = href ? 'a' : 'button'
  return (
    <Tag
      href={href}
      onClick={onClick}
      {...(href ? {} : { type: 'button' })}
      className={`group label relative inline-flex items-center gap-2 pb-1 text-[0.95rem] ${className}`}
    >
      {children}
      <ArrowIcon className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
      <span className="absolute inset-x-0 bottom-0 h-[1.5px] origin-left bg-current transition-transform duration-500 ease-out-expo group-hover:scale-x-50" />
    </Tag>
  )
}
