import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {urlForImage} from '../../../client'
import useSanityBlurDataUrl from '../../../utils/hooks/useSanityBlurDataUrl'
import localDataURL from '../../../assets/images/blur-placeholder.jpg'

export default function UpcomingEventSection(props) {
  const {
    contentData: {description, label, place, title},
    imageData,
    link,
    showSection,
  } = props
  const blurDataUrl = useSanityBlurDataUrl(imageData.image)

  return (
    Boolean(showSection) && (
      <section className="upcomingeventsection relative overflow-hidden bg-gallery pt-[70px]">
        <div
          className="container px-2
        sm:px-6
        lg:px-8"
        >
          <div
            className="flex md:grid md:grid-cols-1 lg:grid-cols-[0.8fr_1fr] lg:gap-6 bg-smart shadow-[0px_12px_40px_rgba(169,169,169,0.15)]
      rounded-[16px] lg:shadow-none py-16 px-6 lg:py-[92px] lg:px-[79px]"
          >
            <div className="flex-1 text-white">
              <span
                className="mb-4 inline-block font-poppins text-lg font-medium uppercase
              leading-[100%] tracking-[-0.01em] text-white opacity-70 lg:opacity-80"
              >
                {label}
              </span>
              <motion.h3
                className="text-white heading-3 mb-4"
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1}}
                viewport={{once: true}}
              >
                {title}
              </motion.h3>
              <motion.p
                className="body-s text-white"
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 0.7, x: 0}}
                transition={{duration: 1}}
                viewport={{once: true}}
              >
                {place}
              </motion.p>
              <motion.p
                className="body-m mb-10 mt-6 text-white text-ellipsis overflow-hidden w-full lg:max-w-[450px]"
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1, delay: 0.2}}
                viewport={{once: true}}
              >
                {description}
              </motion.p>
              {link.internal ? (
                <Link href={link.url} passHref>
                  <a className="card__link cta-btn-black py-[15px] px-10">{link.text}</a>
                </Link>
              ) : (
                <a
                  className="card__link cta-btn-black md:py-[15px] md:px-10"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              )}
            </div>
            <div className="hidden md:flex items-center w-full pt-6 md:px-6 lg:px-0">
              <div className="relative w-full overflow-hidden rounded-[16px] mb-auto">
                <Image
                  src={urlForImage(imageData.image).fit('max').url()}
                  blurDataURL={blurDataUrl ?? localDataURL.blurDataURL}
                  layout="responsive"
                  placeholder="blur"
                  alt={imageData.alt}
                  width={530}
                  height={276}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  )
}
