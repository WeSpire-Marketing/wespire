import Link from 'next/link'
import Image from 'next/image'

import {urlForImage} from '../../client'
import useSanityBlurDataUrl from '../../utils/hooks/useSanityBlurDataUrl'

export default function TransparentCard({
  title,
  text,
  imageData: {image, alt},
  link: {internal = false, text: linkText = '', url = '/'},
}) {
  const blurDataUrl = useSanityBlurDataUrl(image)

  return (
    <div className="card mx-auto max-w-[calc(100%-2rem)] lg:mx-0 screen:max-w-none">
      <div className="card__preview w-full mb-6 rounded-2xl overflow-hidden">
        <Image
          src={urlForImage(image).width(608).height(497).url()}
          blurDataURL={blurDataUrl}
          layout="responsive"
          placeholder="blur"
          objectFit="cover"
          quality={100}
          height={497}
          width={608}
          alt={alt}
        />
      </div>

      <div className="card__content pb-[2px]">
        <h3 className="card__content__title heading-3 mb-4">{title}</h3>

        <p className="card__content__text body-m mb-6 text-secondary">{text}</p>

        {internal ? (
          <Link href={url} passHref>
            <a className="card__content__link stroke-btn">{linkText}</a>
          </Link>
        ) : (
          <a
            className="card__content__link stroke-btn"
            rel="noreferrer noopener"
            target="_blank"
            href={url}
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  )
}
