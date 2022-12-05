import Link from 'next/link'
import Image from 'next/image'

import { urlForImage } from '../../../client'
import useSanityBlurDataUrl from '../../../utils/hooks/useSanityBlurDataUrl'

export default function ImgItem({image, title, text}) {
  const blurDataUrl = useSanityBlurDataUrl(image)
  return (
    <div className="menu-item flex items-start gap-4">
      <div
        className="menu-item__icon relative h-[64px] w-[64px] shrink-0
        overflow-hidden rounded-[16px]"
      >
        <Image
          src={urlForImage(image).width(64).height(64).quality(100).fit('crop').url()}
          blurDataURL={blurDataUrl}
          objectFit="contain"
          placeholder="blur"
          alt={image.alt}
          layout="fill"
        />
      </div>

      <div className="menu-item__text">
        {title?.internal ? (
          <Link href={title.url} passHref>
            <a className="menu-item__text__title subtitle-m mb-2 text-[16px]">{title.text}</a>
          </Link>
        ) : (
          <a
            className="menu-item__text__title subtitle-m mb-2 text-[16px]"
            href={title.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {title.text}
          </a>
        )}

        <p
          className="menu-item__text__subtitle text-[14px] leading-[155%]
          text-secondary"
        >
          {text}
        </p>
      </div>
    </div>
  )
}
