import {useEffect, useState} from 'react'
import {motion, useAnimationControls} from 'framer-motion'

import AuthorsBox from '../AuthorsQuoteForm/AuthorsBox'

export default function AuthorsQuoteForm({authors}) {
  const controls = useAnimationControls()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    // change opacity keyframes on activeIndex change
    controls.start({opacity: [0, 1]})

    // change activeIndex every 5s
    const intervalId = setInterval(() => {
      if (activeIndex === authors.length - 1) {
        setActiveIndex(0)
      } else if (authors.length > 1) {
        setActiveIndex((prev) => prev + 1)
      }
    }, 5000)

    // cleanup interval
    return () => clearInterval(intervalId)
  }, [activeIndex, authors.length, controls])

  return (
    <motion.figure
      className="rounded-[40px] bg-pampas py-[48px] px-4
      sm:px-8
      lg:py-[80px] lg:px-0"
      initial={{y: 50}}
      whileInView={{y: 0}}
      viewport={{once: true}}
      transition={{duration: 1}}
    >
      <blockquote>
        <motion.p
          className="heading-4 mx-auto mb-[40px] h-[279px] max-w-[685px] overflow-hidden
          sm:h-[209px]
          md:h-[245px]
          lg:mb-[48px] lg:h-[182px] lg:line-clamp-5"
          initial={{opacity: 0}}
          animate={controls}
          transition={{duration: 0.3, ease: 'easeIn'}}
        >
          {authors[activeIndex].quote}
        </motion.p>
      </blockquote>

      <figcaption
        className="subtitle-m mx-auto flex gap-[19px]
        sm:max-w-[685px]"
      >
        <AuthorsBox
          authors={authors}
          onAuthorClick={setActiveIndex}
          activeAuthorIndex={activeIndex}
          isAuthorSingle={authors.length === 1}
        />
      </figcaption>
    </motion.figure>
  )
}
