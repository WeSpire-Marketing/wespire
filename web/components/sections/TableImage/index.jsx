import React from 'react'
import {urlForImage} from '../../../client'
import useSanityBlurDataUrl from '../../../utils/hooks/useSanityBlurDataUrl'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Img from '../../Img'

const TableImage = ({imageTable, imageData, text, title, imageTableMobile}) => {
  const blurDataUrl = useSanityBlurDataUrl(imageData.image)

  return (
    <section
      className="contection overflow-hidden rounded-t-[30px] bg-gallery pt-[48px] pb-[100px]
      lg:rounded-t-[48px] lg:pt-[100px] lg:pb-[140px]"
    >
      <div className="container px-2 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 mb-12">
          <motion.div className="relative aspect-[4/2.5] w-full rounded-2xl overflow-hidden">
            <Image
              src={urlForImage(imageData.image).fit('max').url()}
              blurDataURL={blurDataUrl}
              layout="responsive"
              placeholder="blur"
              alt={imageData.alt}
              quality={100}
              height={375}
              width={600}
              objectFit="cover"
            />
          </motion.div>
          <div className="max-w-[475px]">
            <h2 className="heading-4 mb-4 lg:mb-8 max-w-[435px]">{title}</h2>
            <p className="slection__text body-m text-secondary">{text}</p>
          </div>
        </div>
        <div className="hidden md:block">
          <Img value={imageTable.image} />
        </div>
        <div className="md:hidden">
          <Img value={imageTableMobile.image} />
        </div>
      </div>
    </section>
  )
}
export default TableImage
