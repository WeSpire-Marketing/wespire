import {useRef} from 'react'
import Image from 'next/image'
import {motion, useScroll, useTransform} from 'framer-motion'

import CardBase from '../CardBase'
import {urlForImage} from '../../client'
import useSanityBlurDataUrl from '../../utils/hooks/useSanityBlurDataUrl'

import localDataURL from '../../assets/images/blur-placeholder.jpg'

export default function ImageCard({color = '#FFCC7B', className = '', image, ...props}) {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
  })
  const blurDataUrl = useSanityBlurDataUrl(image.image)
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <div className="w-full" ref={ref}>
      <CardBase
        className={`contection__image flex w-full items-center justify-center
        rounded-[1rem] py-[40px] sm:py-[48px] md:py-[56px] lg:py-[64px] ${className}`}
        style={{backgroundColor: color}}
        {...props}
      >
        <motion.div className="relative aspect-[4/2.5] w-full" style={{y}}>
          <Image
            src={urlForImage(image.image).fit('max').url()}
            blurDataURL={blurDataUrl ?? localDataURL.blurDataURL}
            layout="responsive"
            placeholder='blur'
            alt={image.alt}
            quality={100}
            height={375}
            width={600}
          />
        </motion.div>
      </CardBase>
    </div>
  )
}
