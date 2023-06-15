import Image from 'next/image'
import {useNextSanityImage} from 'next-sanity-image'

import client from '../../client'

export default function Img({
  className = '',
  value,
  quality = 75,
  layoutImg = 'responsive',
  objectFitImg = 'cover',
  sizes = undefined,
  priority = false,
  loading = undefined,
  ...props
}) {
  const imageProps = useNextSanityImage(client, value)

  return (
    <div className={className} {...props}>
      <Image
        {...imageProps}
        alt={value.alt}
        width={layoutImg === 'fill' ? null : imageProps.width}
        height={layoutImg === 'fill' ? null : imageProps.height}
        layout={layoutImg}
        objectFit={objectFitImg}
        quality={quality}
        sizes={sizes}
        priority={priority}
        loading={loading}
      />
    </div>
  )
}
