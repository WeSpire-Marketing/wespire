import Link from 'next/link'
import Image from 'next/image'

import {urlForImage} from '../../../client'
import useSanityBlurDataUrl from '../../../utils/hooks/useSanityBlurDataUrl'

export default function CardItem({image, text, title}) {
  const blurDataUrl = useSanityBlurDataUrl(image)
  return (
    <div className="menu-item flex flex-col items-center gap-[24px]">
      <div
        className="menu-item__icon relative aspect-[16/8.5] w-full max-w-[326px] shrink-0
        overflow-hidden rounded-[16px] mr-auto"
      >
        {title?.internal ? (
          <Link href={title.url} passHref>
            <a className="w-full h-full">
              <Image
                src={urlForImage(image).width(326).height(176).quality(100).url()}
                blurDataURL={blurDataUrl}
                layout="responsive"
                placeholder="blur"
                objectFit="cover"
                alt={image.alt}
                height={176}
                width={326}
              />
            </a>
          </Link>
        ) : (
          <a href={title.url} target="_blank" rel="noreferrer noopener">
            <Image
              src={urlForImage(image).width(326).height(176).quality(100).url()}
              blurDataURL={blurDataUrl}
              layout="responsive"
              placeholder="blur"
              objectFit="cover"
              alt={image.alt}
              height={176}
              width={326}
            />
          </a>
        )}
      </div>

      <div className="menu-item__text">
        {title?.internal ? (
          <Link href={title.url}>
            <a
              className="menu-item__text__title mb-2 font-poppins
              text-[16px] font-medium leading-[140%] text-black"
            >
              {title.text}
            </a>
          </Link>
        ) : (
          <a
            className="menu-item__text__title mb-2 font-poppins
            text-[16px] font-medium leading-[140%] text-black"
            href={title.url}
            target="_blank"
            rel="noopener noreferrer"
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
