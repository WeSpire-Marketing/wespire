import {useEffect, useState} from 'react'
import {PortableText} from '@portabletext/react'
import {motion, useAnimationControls} from 'framer-motion'

import Img from '../Img'

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

export default function LeaderCard({bgColor, image, name, job, title, text, socials: {items}}) {
  const controls = useAnimationControls()
  const [selectedCard, setSelectedCard] = useState(false)

  const handleClick = () => setSelectedCard(!selectedCard)

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      rotateY: selectedCard ? 180 : 0,
    })
  }, [controls, selectedCard])

  return (
    <li>
      <motion.div
        className="relative mx-auto mb-4 flex aspect-[3/3.55]
        w-full cursor-pointer items-center justify-center overflow-hidden rounded-[16px]
        lg:mb-6"
        variants={cardVariants}
        animate={selectedCard ? 'selected' : 'notSelected'}
        onClick={handleClick}
        style={{backgroundColor: bgColor}}
      >
        <motion.div
          className="rotate-content-onflip flex h-full w-full items-end"
          initial={{opacity: 0}}
          animate={controls}
          transition={{duration: 0.35}}
        >
          {selectedCard ? (
            <BackCardContent title={title} text={text} socials={items} />
          ) : (
            <FrontCardContent image={image} />
          )}
        </motion.div>
      </motion.div>

      <h3 className="heading-4 mb-1 text-center lg:mb-2">{name}</h3>

      <div className="prose text-center [&_p]:mb-0">
        <PortableText value={job} components={myPortableTextComponents} />
      </div>
    </li>
  )
}

function BackCardContent({title, text, socials}) {
  return (
    <motion.div
      className="h-full px-6 flex flex-col justify-center lg:justify-end lg:px-[40px]"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.2}}
    >
      <p className="subtitle-m mb-2">{title}</p>

      <p className="body-m mb-8 text-secondary lg:mb-[48px]">{text}</p>

      <ul className="socials flex gap-4 lg:mb-[50px]">
        {(socials ?? []).map(({_key, icon, url}) => (
          <li className="socials-item" key={_key}>
            <a
              className="socials-item__link h-[46px] w-[46px]
              lg:h-[46px] lg:w-[46px]"
              href={url}
            >
              <Img className="socials-item__img lg:max-w-[50px]" value={icon} />
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
      <Img value={image} />
    </motion.div>
  )
}
