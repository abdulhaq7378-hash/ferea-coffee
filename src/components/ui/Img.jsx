const WIDTHS = [480, 800, 1200, 1800]

function isUrl(src) {
  return /^(https?:)?\/\//.test(src) || src.startsWith('/')
}

export function photoUrl(src, w = 1200) {
  if (isUrl(src)) return src
  return `https://images.unsplash.com/photo-${src}?auto=format&fit=crop&w=${w}&q=78`
}

/**
 * Responsive photo. `src` can be an Unsplash photo id or any URL/local path.
 */
export default function Img({ src, alt, sizes = '100vw', className = '', priority = false, ...rest }) {
  const srcSet = isUrl(src) ? undefined : WIDTHS.map((w) => `${photoUrl(src, w)} ${w}w`).join(', ')
  return (
    <img
      src={photoUrl(src, 1200)}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      draggable="false"
      className={className}
      {...rest}
    />
  )
}
