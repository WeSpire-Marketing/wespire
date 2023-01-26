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
      className="rounded-[40px] bg-pampas pb-[48px] px-4 sm:px-8 lg:pb-[80px] lg:px-0 max-[600px]"
      initial={{y: 50}}
      whileInView={{y: 0}}
      viewport={{once: true}}
      transition={{duration: 1}}
    >
      <blockquote
        className="pt-[112px] lg:pt-[80px]
      bg-quotes bg-no-repeat bg-[left_0px_top_56px] min-[786px]:bg-[left_calc(50vw-390px)_top_56px] min-[1024px]:bg-[left_calc(50vw-450px)_top_64px] min-[1300px]:bg-[left_190px_top_64px]"
      >
        <motion.p
          className="heading-4 mx-auto mb-[40px] h-[190px] max-w-[685px] overflow-hidden
          line-clamp-6
          sm:h-[185px]
          lg:mb-[48px] lg:h-[220px]"
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
