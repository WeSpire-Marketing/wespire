import Link from 'next/link'
import Image from 'next/image'

import {urlForImage} from '../../../client'
import useSanityBlurDataUrl from '../../../utils/hooks/useSanityBlurDataUrl'

export default function TwoColItem({image, title, text}) {
  const blurDataUrl = useSanityBlurDataUrl(image)

  return (
    <div className="menu-item flex items-start gap-4 lg:items-center">
      <div
        className="menu-item__icon relative h-[110px] w-full max-w-[145px] shrink-0
        overflow-hidden rounded-[16px]"
      >
        <Image
          src={urlForImage(image).width(145).height(110).url()}
          blurDataURL={blurDataUrl}
          layout="responsive"
          placeholder="blur"
          objectFit="cover"
          alt={image.alt}
          height={110}
          width={145}
        />
      </div>

      <div className="menu-item__text">
        {title?.internal ? (
          <Link href={title.url}>
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
