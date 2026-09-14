import { useId } from 'react'

/* ————— Brand ————— */

export function LogoMark({ className = 'size-8' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g transform="rotate(-32 24 24)">
        <ellipse cx="24" cy="24" rx="12.5" ry="19" fill="currentColor" />
        <path d="M24 6.5c-5.5 6.5 5.5 11 0 17.5s5.5 11 0 17.5" stroke="var(--logo-cut, var(--color-ivory))" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export function Logo({ className = '', markClass = 'size-8 text-caramel', textClass = 'text-[1.9rem]' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className={markClass} />
      <span className={`font-display uppercase leading-none tracking-wide ${textClass}`}>Feréa</span>
    </span>
  )
}

/* ————— Coffee bean (illustrated, shaded) ————— */

export function Bean({ className = '', style }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 80 110" className={className} style={style} aria-hidden="true">
      <defs>
        <radialGradient id={`b${id}`} cx="35%" cy="30%" r="80%">
          <stop offset="0" stopColor="#9a5b35" />
          <stop offset=".45" stopColor="#5e311c" />
          <stop offset="1" stopColor="#2a140b" />
        </radialGradient>
        <linearGradient id={`c${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#1c0d07" />
          <stop offset="1" stopColor="#3b1e11" />
        </linearGradient>
      </defs>
      <ellipse cx="40" cy="55" rx="34" ry="50" fill={`url(#b${id})`} />
      <path d="M40 7c-14 16 13 28 0 48s14 30 0 48" stroke={`url(#c${id})`} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M40 7c-14 16 13 28 0 48s14 30 0 48" stroke="#b77b4e" strokeOpacity=".35" strokeWidth="1.4" fill="none" transform="translate(3 0)" />
      <ellipse cx="24" cy="32" rx="7" ry="15" fill="#fff" opacity=".12" transform="rotate(-18 24 32)" />
    </svg>
  )
}

/* ————— Stickers & hand-drawn doodles ————— */

export function GoodMoodSticker({ className = '' }) {
  return (
    <svg viewBox="0 0 190 150" className={className} role="img" aria-label="Good mood">
      <path
        d="M22 70c-8-30 22-58 66-62 46-4 88 14 94 46 7 36-24 72-76 82-50 9-78-26-84-66Z"
        fill="#fffaf2"
        stroke="#2b1810"
        strokeWidth="3"
        style={{ filter: 'drop-shadow(0 6px 10px rgba(58,33,23,.18))' }}
      />
      <g fill="#2b1810" fontFamily="Anton, Impact, sans-serif" fontSize="46">
        <text x="40" y="72" transform="rotate(-14 95 60)">GOOD</text>
        <text x="46" y="118" transform="rotate(-14 95 104)">MOOD</text>
      </g>
    </svg>
  )
}

export function CupDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 140 120" className={className} aria-hidden="true" fill="none" stroke="#2b1810" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="70" cy="98" rx="58" ry="14" fill="#fffaf2" />
      <ellipse cx="70" cy="96" rx="30" ry="6" />
      <path d="M32 34h76l-10 56c-1 4-5 7-9 7H51c-4 0-8-3-9-7L32 34Z" fill="#fffaf2" />
      <path d="M32 34c10 7 66 7 76 0" />
      <path d="M36 36c8-6 12 2 18-2s10 3 16-1 10 4 16 0 10 3 20 3" strokeWidth="5" stroke="#2b1810" />
      <path d="M106 48c14-4 20 8 12 18-4 5-10 7-16 7" />
      <path d="M58 48l3 38M70 48v40M82 48l-3 38" strokeWidth="2" />
      <path d="M58 20c-4-6 4-10 0-16M76 22c-4-6 4-10 0-16" strokeWidth="2.4" opacity=".6" />
    </svg>
  )
}

export function StampDoodle({ className = '' }) {
  // postage-stamp outline with a bean inside
  const teeth = Array.from({ length: 28 }, (_, i) => i)
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g transform="rotate(-10 60 60)">
        <rect x="14" y="14" width="92" height="92" rx="4" fill="#fffaf2" stroke="#2b1810" strokeWidth="3" />
        {teeth.map((i) => {
          const side = Math.floor(i / 7)
          const t = 20 + ((i % 7) * 80) / 6
          const [cx, cy] = [[t, 14], [106, t], [t, 106], [14, t]][side]
          return <circle key={i} cx={cx} cy={cy} r="3.4" fill="var(--stamp-bg, var(--color-beige))" />
        })}
        <rect x="26" y="26" width="68" height="68" rx="2" fill="none" stroke="#2b1810" strokeWidth="2" strokeDasharray="3 4" />
        <g transform="rotate(30 60 60)">
          <ellipse cx="60" cy="60" rx="16" ry="23" fill="#2b1810" />
          <path d="M60 38c-7 8 7 14 0 22s7 14 0 22" stroke="#fffaf2" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
        <path d="M84 30l6-4M88 38l7-1M30 86l-6 4" stroke="#2b1810" strokeWidth="2.4" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export function MokaDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 110 130" className={className} aria-hidden="true" fill="#fffaf2" stroke="#2b1810" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
      <path d="M30 20h44l6 42H24l6-42Z" />
      <path d="M22 62h62l-4 8H26l-4-8Z" />
      <path d="M26 70h54l8 48H18l8-48Z" />
      <path d="M74 26c16 0 22 12 18 26-2 6-8 8-12 8" fill="none" />
      <path d="M44 20l8-10 8 10" />
      <path d="M40 34l4 22M52 34v22M64 34l-4 22" strokeWidth="2" fill="none" />
      <path d="M34 86l-4 26M46 86l-2 26M60 86l2 26M72 86l4 26" strokeWidth="2" fill="none" />
    </svg>
  )
}

export function ScribbleArrow({ className = '', flip = false }) {
  return (
    <svg viewBox="0 0 120 70" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
      <path d="M6 12c30-8 64 0 80 22 6 9 9 17 10 26" />
      <path d="M84 50l12 12 10-15" />
    </svg>
  )
}

export function Underline({ className = '' }) {
  return (
    <svg viewBox="0 0 200 16" preserveAspectRatio="none" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
      <path d="M3 11c40-7 90-9 194-4" />
    </svg>
  )
}

/** Circular text badge that slowly rotates, with any icon in the middle. */
export function RotatingBadge({ text, className = '', textClass = 'fill-ivory', children }) {
  const id = useId().replace(/:/g, '')
  return (
    <div className={`relative grid place-items-center ${className}`}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 size-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id={`c${id}`} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className={`${textClass} font-cond`} fontSize="21" fontWeight="700" letterSpacing="4.2">
          <textPath href={`#c${id}`}>{text}</textPath>
        </text>
      </svg>
      <div className="relative">{children}</div>
    </div>
  )
}

export function Stars({ className = 'size-4' }) {
  return (
    <div className="flex gap-1" role="img" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={className} aria-hidden="true">
          <path fill="currentColor" d="m10 1.5 2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9L4.7 18l1.1-6L1.4 7.8l6-.8L10 1.5Z" />
        </svg>
      ))}
    </div>
  )
}

/* ————— Icons ————— */

export function Icon({ name, className = 'size-5' }) {
  const paths = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
      </>
    ),
    facebook: <path fill="currentColor" d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.1v3h2.5V21h2.9Z" />,
    x: <path fill="currentColor" d="M17.8 3h3.1l-6.8 7.7 8 10.3h-6.2l-4.9-6.3L5.4 21H2.3l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />,
    plus: <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />,
    minus: <path d="M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />,
    close: <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />,
    bag: (
      <path d="M5 8h14l-1 12H6L5 8Zm4 0V6.5a3 3 0 0 1 6 0V8" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
    ),
    pin: (
      <>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.9" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </>
    ),
    check: <path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />,
    phone: <path d="M6.6 3.5h3l1.5 4-2 1.3a11 11 0 0 0 6.1 6.1l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

/** Small pill label used above section headings. */
export function Pill({ children, tone = 'roast', className = '' }) {
  const tones = {
    roast: 'bg-roast text-ivory',
    ivory: 'bg-ivory text-roast',
    caramel: 'bg-caramel text-ivory',
  }
  return (
    <span className={`label inline-flex items-center rounded-full px-3.5 pb-[3px] pt-[5px] text-[0.8rem] leading-none tracking-[0.12em] ${tones[tone]} ${className}`}>
      {children}
    </span>
  )
}
