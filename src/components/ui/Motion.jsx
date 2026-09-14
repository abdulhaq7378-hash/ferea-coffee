import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const ease = [0.16, 1, 0.3, 1]

/** Fade + lift once when scrolled into view. */
export function Reveal({ children, delay = 0, y = 36, className = '', as = 'div', ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Masked line-by-line headline reveal. Pass an array of lines (strings or nodes). */
export function LineReveal({ lines, className = '', lineClassName = '', delay = 0, stagger = 0.09, as = 'h2', animateOnMount = false }) {
  const Tag = motion[as]
  const trigger = animateOnMount
    ? { initial: 'hidden', animate: 'show' }
    : { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '0px 0px -10% 0px' } }
  return (
    <Tag className={className} {...trigger} transition={{ staggerChildren: stagger, delayChildren: delay }}>
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden pb-[0.06em] -mb-[0.06em] ${lineClassName}`}>
          <motion.span
            className="block"
            variants={{ hidden: { y: '105%' }, show: { y: '0%', transition: { duration: 1, ease } } }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

/** Rounded photo frame that unmasks on scroll and drifts with a gentle parallax. */
export function ParallaxFrame({ children, className = '', strength = 60, reveal = true }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength])
  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={reveal ? { clipPath: 'inset(12% 8% 12% 8% round 2rem)' } : false}
      whileInView={reveal ? { clipPath: 'inset(0% 0% 0% 0% round 0rem)' } : undefined}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1.3, ease }}
    >
      <motion.div
        style={{ y, top: -strength, bottom: -strength }}
        className="absolute inset-x-0 [&>img]:size-full [&>img]:object-cover"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
