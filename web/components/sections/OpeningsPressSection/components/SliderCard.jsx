import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'

import ArrowIcon from '../../../icons/ArrowIcon'

import {urlForImage} from '../../../../client'

export default function SliderCard({className = '', image, text, link}) {
  const [isLinkHovered, setLinkHovered] = useState(false)

  return (
    <div
      className={`opressection__card flex flex-col rounded-2xl border border-[#cacdd4cc] bg-white
      p-8 lg:p-[56px] ${className}`}
    >
      <div
        className="opressection__card__image relative mb-8 inline-flex h-[52px]
        w-full max-w-[292px] lg:mb-[46px]"
      >
        <Image src={urlForImage(image).url()} alt="alt" objectFit="contain" layout="fill" />
      </div>

      <p
        className="opressection__card__text mb-6 text-lg font-normal
        leading-160 text-secondary lg:mb-8"
      >
        {text}
      </p>

      {link.internal ? (
        <Link href={link.url} passHref>
          <a
            className="opressection__card__link group inline-flex mt-auto w-fit items-center
            gap-2 font-poppins text-base font-semibold leading-[150%] text-smart hover:text-[#121212]"
            onMouseEnter={() => setLinkHovered(true)}
            onMouseLeave={() => setLinkHovered(false)}
          >
            {link.text}
            <ArrowIcon
              className="w-[16px] transition-all duration-200 ease-in-out
              group-hover:translate-x-2"
              fillColor={isLinkHovered ? '#121212' : '#1771DC'}
            />
          </a>
        </Link>
      ) : (
        <a
          className="opressection__card__link group inline-flex mt-auto w-fit items-center
          gap-[8px] font-poppins text-base font-semibold leading-[150%] text-smart hover:text-[#121212]"
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.text}
          <ArrowIcon
            className="w-[16px] transition-all duration-200 ease-in-out
            group-hover:translate-x-2"
            fillColor={isLinkHovered ? '#121212' : '#1771DC'}
          />
        </a>
      )}
    </div>
  )
}
