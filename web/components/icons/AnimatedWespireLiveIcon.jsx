import {useEffect, useRef} from 'react'
import {motion, useAnimationControls, useInView} from 'framer-motion'

export default function AnimatedWespireLiveIcon({className = ''}) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimationControls()

  useEffect(() => {
    if (isInView) {
      controls.start({opacity: 1, pathLength: 1})
    }
  }, [controls, isInView])

  return (
    <svg
      className={className}
      width="113"
      height="21"
      viewBox="0 0 113 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <motion.path
        d="M4.23593 7.68392C8.74683 6.50665 11.6663 5.03674 15.6275 10.5718C17.3095 12.922 19.1708 16.8107 27.5958 12.6999C35.667 8.7617 43.9017 3.65389 53.2531 5.06514C57.0407 5.63662 60.9685 8.38201 63.1671 11.4679C64.3842 13.1761 65.6684 16.8358 68.1927 16.8895C70.8905 16.9469 73.9049 14.4825 76.3035 13.4594C83.9062 10.2174 92.4705 6.70399 100.834 8.46113C103.066 8.93016 107.027 10.1165 108.368 12.2128"
        stroke="#DF6F30"
        strokeWidth="8"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{opacity: 0, pathLength: 0}}
        animate={controls}
        viewport={{once: true}}
        transition={{duration: 1.5, yo: 'spring', delay: 0.25}}
      />
    </svg>
  )
}
