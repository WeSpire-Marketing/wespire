import Link from 'next/link'
import Image from 'next/image'

import {urlForImage} from '../../../client'
import useSanityBlurDataUrl from '../../../utils/hooks/useSanityBlurDataUrl'

export default function ImgItem({image, title, text, ...props}) {
  const blurDataUrl = useSanityBlurDataUrl(image)
  return (
    <div className="menu-item flex items-start gap-4">
      <div
        className="menu-item__icon relative h-[64px] w-[64px] shrink-0
        overflow-hidden rounded-[16px]"
      >
        {title?.internal ? (
          <Link href={title.url} passHref>
            <a className="w-full h-full" aria-disabled={title.url?.trim() ? 'false' : 'true'}>
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
          </Link>
        ) : (
          <a
            href={title.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-disabled={title.url?.trim() ? 'false' : 'true'}
          >
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
        )}
      </div>

      <div className="menu-item__text">
        {title?.internal ? (
          <Link href={title.url} passHref>
            <a
              className="menu-item__text__title subtitle-m mb-2 text-[16px]"
              aria-disabled={title.url?.trim() ? 'false' : 'true'}
            >
              {title.text}
            </a>
          </Link>
        ) : (
          <a
            className="menu-item__text__title subtitle-m mb-2 text-[16px]"
            href={title.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-disabled={title.url?.trim() ? 'false' : 'true'}
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
