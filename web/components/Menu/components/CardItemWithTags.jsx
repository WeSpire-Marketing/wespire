import Link from 'next/link'
import Image from 'next/image'

import { urlForImage } from '../../../client'
import useSanityBlurDataUrl from '../../../utils/hooks/useSanityBlurDataUrl'

export default function CardItemWithTags({image, text, title, tags}) {
  const blurDataUrl = useSanityBlurDataUrl(image)
  return (
    <div className="menu-item max-w-[326px]">
      <div
        className="menu-item__icon relative mb-2 aspect-[4/2] w-full max-w-[376px]
        shrink-0 overflow-hidden rounded-[16px]"
      >
        <Image
          src={urlForImage(image).width(326).height(106).url()}
          blurDataURL={blurDataUrl}
          layout="responsive"
          placeholder="blur"
          objectFit="cover"
          alt={image.alt}
          height={176}
          width={326}
        />
      </div>

      <ul className="menu-item__tags mb-4 inline-flex items-start gap-4">
        {tags?.length > 0 &&
          tags.map((tag) => {
            return (
              <li key={tag._key}>
                <span
                  className="tag inline-block text-[14px]"
                  style={{border: `1px solid ${tag.color}`, color: tag.color}}
                >
                  {tag.value}
                </span>
              </li>
            )
          })}
      </ul>

      <div className="menu-item__text">
        {title?.internal ? (
          <Link href={title.url}>
            <a
              className="menu-item__text__title mb-1 font-poppins
              text-[16px] font-medium leading-[140%] text-black"
            >
              {title.text}
            </a>
          </Link>
        ) : (
          <a
            className="menu-item__text__title mb-1 font-poppins
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
