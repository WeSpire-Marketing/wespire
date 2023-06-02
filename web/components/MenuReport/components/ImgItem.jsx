import Image from 'next/image'

import {urlForImage} from '../../../client'
import useSanityBlurDataUrl from '../../../utils/hooks/useSanityBlurDataUrl'

export default function ImgItem({image, title, text, id, toogleMenu}) {
  const blurDataUrl = useSanityBlurDataUrl(image)

  return (
    <div className="menu-item flex items-start gap-4">
      <div
        className="menu-item__icon relative h-[64px] w-[64px] shrink-0
        overflow-hidden rounded-[16px]"
      >
        <a href={`#${id}`} onClick={toogleMenu}>
          <Image
            src={urlForImage(image).width(64).height(64).quality(100).url()}
            blurDataURL={blurDataUrl}
            objectFit="contain"
            placeholder="blur"
            alt={image.alt}
            layout="fixed"
            height={64}
            width={64}
          />
        </a>
      </div>

      <div className="menu-item__text">
        <a
          onClick={toogleMenu}
          className="menu-item__text__title subtitle-m mb-2 text-[16px] hover:text-[#1771DC]"
          href={`#${id}`}
        >
          {title}
        </a>

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
