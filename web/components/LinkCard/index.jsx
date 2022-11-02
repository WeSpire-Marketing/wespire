import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'

import {urlForImage} from '../../client'

const Card = ({icon, title, text, cardColor}) => {
  return (
    <div
      className="linkcard flex cursor-pointer
      flex-col items-start gap-4 rounded-[16px] p-6
      lg:p-8 lg:pb-[48px]"
      style={{backgroundColor: cardColor}}
    >
      <motion.div
        className="linkcard__image relative h-[64px] w-[64px]"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 1, delay: 0.25}}
      >
        <Image src={urlForImage(icon).url()} alt="icon" layout="fill" objectFit="cover" />
      </motion.div>

      <motion.h2
        className="linkcard__title heading-3 text-left text-white"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 1, delay: 0.5}}
      >
        {title}
      </motion.h2>

      <motion.p
        className="linkcard__text body-m text-left text-white"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 1, delay: 0.75}}
      >
        {text}
      </motion.p>
    </div>
  )
}

export default function LinkCard({link, ...props}) {
  return link.internal ? (
    <Link href={link.url} scroll={false} passHref>
      <a>
        <Card {...props} />
      </a>
    </Link>
  ) : (
    <a href={link.url} target="_blank" rel="noopener noreferrer">
      <Card {...props} />
    </a>
  )
}
