import Link from 'next/link'
import Image from 'next/image'

import { urlForImage } from '../../../client'
import useSanityBlurDataUrl from '../../../utils/hooks/useSanityBlurDataUrl'


export default function ImgItemHoriz({image, title, text}) {
  const blurDataUrl = useSanityBlurDataUrl(image)
  return (
    <div className="menu-item max-w-[306px] flex flex-col items-start gap-6 lg:gap-4">
      <div
        className="menu-item__icon relative aspect-[5/1.7] w-full max-w-[306px]
        overflow-hidden rounded-[16px]"
      >
        <Image
          src={urlForImage(image).width(306).height(106).quality(100).url()}
          blurDataURL={blurDataUrl}
          layout="responsive"
          placeholder="blur"
          objectFit="cover"
          alt={image.alt}
          height={106}
          width={306}
        />
      </div>

      <div className="menu-item__text">
        {title?.internal ? (
          <Link href={title.url} passHref>
            <a
              className="menu-item__text__title mb-2 font-poppins
              text-[16px] font-medium leading-[100%] text-black"
            >
              {title.text}
            </a>
          </Link>
        ) : (
          <a
            className="menu-item__text__title mb-2 font-poppins
            text-[16px] font-medium leading-[100%] text-black"
            href={title.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {title.text}
          </a>
        )}

        <p className="menu-item__text__subtitle text-[14px] leading-[155%] text-secondary">
          {text}
        </p>
      </div>
    </div>
  )
}
