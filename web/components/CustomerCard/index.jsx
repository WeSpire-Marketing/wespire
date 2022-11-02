import Link from 'next/link'
import Image from 'next/image'

import ArrowIcon from '../icons/ArrowIcon'

import {urlForImage} from '../../client'

export default function CustomerCard({
  cardColor,
  image,
  stat1,
  val1,
  stat2,
  val2,
  title,
  excerpt,
  slug,
}) {
  return (
    <div
      className="cuscard flex flex-col overflow-hidden
      rounded-[16px] border-[1px] border-[#D4D7DC]"
    >
      <div
        className={`cuscard__head flex items-center gap-6 py-6 px-8
        lg:gap-[48px] lg:p-[49px]`}
        style={{backgroundColor: cardColor}}
      >
        <div
          className="cuscard__image relative flex aspect-square w-[245px]
          flex-1 justify-center overflow-hidden rounded-[16px]"
        >
          <Image src={urlForImage(image).url()} alt={image.alt} layout="fill" objectFit="cover" />
        </div>

        <div className="cuscard__stats flex-1">
          <div className="cuscard__stats-item mb-6 lg:mb-10">
            <p
              className="cuscard__stats-item__value font-poppins text-[18px]
              font-semibold leading-130 text-white lg:text-[32px]"
            >
              {val1}
            </p>

            <p
              className="cuscard__stats-item__name lg:body-m text-[11px] leading-160
              text-gallery opacity-80 lg:text-[18px]"
            >
              {stat1}
            </p>
          </div>

          <div className="cuscard__stats-item">
            <p
              className="cuscard__stats-item__value font-poppins text-[18px]
              font-semibold leading-130 text-white lg:text-[32px]"
            >
              {val2}
            </p>

            <p
              className="cuscard__stats-item__name lg:body-m text-[11px] leading-160
              text-gallery opacity-80 lg:text-[18px]"
            >
              {stat2}
            </p>
          </div>
        </div>
      </div>

      <div
        className="cuscard__body h-full bg-white px-8 pt-6 pb-10
        lg:px-[48px] lg:pt-[32px] lg:pb-[56px]"
      >
        <h3 className="heading-4 mb-4 flex-1 text-[#000] line-clamp-2 lg:mb-6">{title}</h3>

        <p className="body-m mb-8 flex-1 text-secondary line-clamp-3 lg:mb-10">{excerpt}</p>

        <Link href={`/our-customers/story/${slug.current}`} passHref>
          <a
            className="group inline-flex w-fit items-center gap-[10px]
          font-poppins text-[16px] font-semibold leading-[150%] text-smart"
          >
            Read story
            <ArrowIcon
              className="w-[16px] transition-all duration-200 ease-in-out
            group-hover:translate-x-2"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}
