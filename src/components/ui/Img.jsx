const WIDTHS = [480, 800, 1200, 1800]

function isUrl(src) {
  return /^(https?:)?\/\//.test(src) || src.startsWith('/')
}

// Pexels photos are referenced by numeric id ("31774138", or "33932441.png" for PNG originals);
// Unsplash photos by "1234-abcd" ids.
const PEXELS = /^(\d+)(\.png)?$/

export function photoUrl(src, w = 1200) {
  src = String(src)
  if (isUrl(src)) return src
  const px = src.match(PEXELS)
  if (px) {
    const [, id, png] = px
    return png
      ? `https://images.pexels.com/photos/${id}/pexels-photo-${id}.png?auto=compress&cs=tinysrgb&fm=jpg&w=${w}`
      : `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`
  }
  return `https://images.unsplash.com/photo-${src}?auto=format&fit=crop&w=${w}&q=78`
}

/**
 * Responsive photo. `src` can be an Unsplash id, a Pexels id, or any URL/local path.
 */
export default function Img({ src, alt, sizes = '100vw', className = '', priority = false, ...rest }) {
  const srcSet = isUrl(String(src)) ? undefined : WIDTHS.map((w) => `${photoUrl(src, w)} ${w}w`).join(', ')
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
