import { useEffect, useRef } from 'react'
import { motion, useAnimationControls, useInView } from 'framer-motion'

export default function Icon({ className = '' }) {
  const controls = useAnimationControls()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, pathLength: 1 })
    }
  }, [controls, isInView])

  return (
    <svg
      className={className}
      width="68"
      height="66"
      viewBox="0 0 68 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <motion.path
        d="M33.3873 6.73776C26.8558 5.70115 26.0752 6.60291 17.4258 24.4436C9.30078 41.1019 8.95902 42.3708 12.2685 43.2015C18.2549 44.7744 19.8831 42.9502 29.2641 24.0787C36.8893 8.66749 37.2064 7.33351 33.3873 6.73776Z"
        fill="#EA7F49"
        initial={{ pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.5, yo: 'spring', delay: 1 }}
        animate={controls}
      />
      <motion.path
        d="M65.0782 45.6089C59.2746 41.2216 59.2815 41.4398 39.7178 49.1897C25.2805 54.9263 22.0908 57.2736 24.8683 59.8381C27.9466 62.6001 28.669 62.5153 47.3852 55.9199C65.1166 49.7142 68.6524 48.2853 65.0782 45.6089Z"
        fill="#EA7F49"
        initial={{ pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.5, yo: 'spring', delay: 1 }}
        animate={controls}
      />
    </svg>
  )
}
