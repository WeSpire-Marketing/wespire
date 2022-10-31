import { useEffect, useRef } from 'react'
import { motion, useAnimationControls, useInView } from 'framer-motion'

export default function Icon({ className = '', color = 'white' }) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimationControls()

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, pathLength: 1 })
    }
  }, [controls, isInView])

  return (
    <svg
      className={className}
      width="85"
      height="85"
      viewBox="0 0 85 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.4311 65.3983C44.6278 57.9656 41.6023 50.5534 34.9684 46.0799C32.3995 44.3477 29.3564 43.717 26.3594 43.1928C38.5348 42.7751 42.7618 30.0319 44.4558 20.167C43.8676 29.0146 48.4932 38.5713 57.9464 39.4531C48.536 44.9892 45.3063 55.1481 44.4311 65.3983Z"
        stroke={color}
        strokeWidth="6"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={controls}
        transition={{ duration: 1.5, yo: 'spring', delay: 0.25 }}
      />
    </svg>
  )
}
