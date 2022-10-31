import {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

import Img from '../Img'
import CardBase from '../CardBase'

export default function ImageCard({color = '#FFCC7B', className = '', image, ...props}) {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
  })
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
          <Img className="h-full w-full" value={{...image.image, alt: image.imageAlt}} />
        </motion.div>
      </CardBase>
    </div>
  )
}
