import VanillaTilt from 'vanilla-tilt'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'
import {useEffect, useRef, useState} from 'react'
import {motion, useAnimationControls} from 'framer-motion'

import Img from '../Img'

import {urlForImage} from '../../client'
import useWindowSize from '../../utils/hooks/useWindowSize'
import myPortableTextComponents from '../../utils/myPortableComponents'

const cardVariants = {
  selected: {
    rotateY: 180,
    transition: {duration: 0.35},
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  },
  notSelected: {
    rotateY: 0,
    transition: {duration: 0.35},
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px -1px, rgba(0, 0, 0, 0.05) 0px 1px 3px -1px',
  },
}

export default function LeaderCard({bgColor, image, name, job, title, text, socials}) {
  const tiltRef = useRef(null)
  const {width} = useWindowSize()
  const controls = useAnimationControls()
  const [selectedCard, setSelectedCard] = useState(false)

  // init Tilt
  useEffect(() => {
    if (tiltRef?.current && width && width >= 1024) {
      VanillaTilt.init(tiltRef.current, {
        max: 3,
        speed: 10,
        gyroscope: false,
      })
    }
  }, [tiltRef, width])

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      rotateY: selectedCard ? 180 : 0,
    })
  }, [controls, selectedCard])

  const handleClick = () => setSelectedCard(!selectedCard)

  return (
    <li ref={tiltRef}>
      <motion.div
        className="leader-card relative mx-auto flex w-full cursor-pointer
        items-center justify-center overflow-hidden rounded-[16px] aspect-[3/3.35]
        lg:mb-6"
        animate={selectedCard ? 'selected' : 'notSelected'}
        style={{backgroundColor: bgColor}}
        variants={cardVariants}
        onClick={handleClick}
      >
        <motion.div
          className="rotate-content-onflip flex h-full w-full items-end"
          transition={{duration: 0.35}}
          initial={{opacity: 0}}
          animate={controls}
        >
          {selectedCard ? (
            <BackCardContent title={title} text={text} socials={socials?.items} />
          ) : (
            <FrontCardContent image={image} />
          )}
        </motion.div>
      </motion.div>

      <div>
        <h3 className="heading-4 mb-1 text-center lg:mb-2">{name}</h3>

        <div className="prose text-center [&_p]:mb-0">
          <PortableText value={job} components={myPortableTextComponents} />
        </div>
      </div>
    </li>
  )
}

function BackCardContent({title, text, socials}) {
  return (
    <motion.div
      className="h-full px-6 flex flex-col justify-center min-[1100px]:px-[40px]
      lg:justify-center lg:px-[30px]"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.2}}
    >
      <p className="subtitle-m mb-2">{title}</p>

      <p className="body-m mb-8 text-secondary lg:mb-[48px]">{text}</p>

      <ul className="socials flex gap-4">
        {(socials ?? []).map(({_key, icon, url}) => (
          <li className="socials-item" key={_key}>
            <a
              className="socials-item__link h-[46px] w-[46px]
              lg:h-[46px] lg:w-[46px]"
              href={url}
            >
              <Img className="socials-item__img lg:max-w-[50px]" value={icon} quality={100} />
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function FrontCardContent({image}) {
  return (
    <motion.div
      className="h-full w-full"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
    >
      <Image
        src={urlForImage(image).width(387).height(458).url()}
        layout="responsive"
        objectFit="cover"
        alt={image.alt}
        height={458}
        width={387}
      />
    </motion.div>
  )
}
