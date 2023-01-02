import Link from 'next/link'
import Image from 'next/image'
import {useEffect, useState} from 'react'

import CardBase from '../CardBase'

import {urlForImage} from '../../client'
import {formatTimestamp} from '../../utils'
import useSanityBlurDataUrl from '../../utils/hooks/useSanityBlurDataUrl'

export default function BlogCard({publishedAt, categories, imageData, excerpt, title, slug}) {
  const [isHovered, setHovered] = useState(false)
  const [formattedDate, setFormattedDate] = useState(null)
  const blurDataUrl = useSanityBlurDataUrl(imageData.image)

  useEffect(() => setFormattedDate(formatTimestamp(publishedAt)), [])

  return (
    <Link href={`/blog/${slug.current}`} scroll={false} passHref>
      <a className="flex">
        <CardBase
          className="blog border-[rgba(202_205_212_0.8)] flex flex-1 cursor-pointer flex-col
          rounded-2xl border bg-white px-6 pb-[40px] pt-6 duration-300 ease-in-out lg:pb-[56px]"
          style={{
            transform: isHovered ? 'translateY(-8px)' : 'translateY(0px)',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className="blog__image relative mb-[1rem] block
            h-[242px] w-full shrink-0 overflow-hidden rounded-[1rem]"
          >
            <Image
              className="blog__image__img absolute top-0 left-0 right-0 bottom-0"
              src={urlForImage(imageData.image).width(342).height(242).fit('max').url()}
              blurDataURL={blurDataUrl}
              alt={imageData.alt}
              placeholder="blur"
              objectFit="cover"
              layout="fill"
              quality={100}
            />
          </div>

          <div className="blog__info mb-6 flex items-center justify-between lg:mb-8">
            {/* If there a few categories - show only first */}
            {categories.slice(0, 1).map(({title, color}, idx) => (
              <span
                className="tags-s inline-flex w-min rounded-[50px] border bg-white px-[12px] py-[8px]
                lg:w-fit"
                style={{color: color, border: `1px solid ${color}`}}
                key={title + idx}
              >
                {title}
              </span>
            ))}

            <p className="date text-[14px] leading-160 text-[#9E9E9E] lg:text-base">
              {formattedDate}
            </p>
          </div>

          <div className="flex h-full flex-col justify-between">
            <h3 className="blog__name heading-4 mb-4 line-clamp-2">{title}</h3>

            <p className="body-m text-secondary line-clamp-2">{excerpt}</p>
          </div>
        </CardBase>
      </a>
    </Link>
  )
}
