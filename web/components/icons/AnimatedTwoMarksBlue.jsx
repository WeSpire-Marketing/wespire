import { useEffect, useRef } from 'react'
import { motion, useAnimationControls, useInView } from 'framer-motion'

export default function AnimatedTwoMarksBlue({ className = '', color = '#1771DC' }) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimationControls()

  useEffect(() => {
    if (isInView) {
      controls.start({ pathLength: 1, opacity: 1 })
    }
  }, [controls, isInView])

  return (
    <svg
      className={className}
      width="48"
      height="57"
      viewBox="0 0 48 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <motion.path
        d="M25.8519 4.49886C21.0283 3.11615 20.3586 3.86788 12.2245 19.2148C4.59276 33.5412 4.2201 34.6519 6.6364 35.6256C11.0009 37.4498 12.3926 35.9325 21.1712 19.7149C28.3132 6.46861 28.6733 5.29809 25.8519 4.49886Z"
        fill={color}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1.5, yo: 'spring', delay: 1 }}
      />
      <motion.path
        d="M45.8947 42.2786C41.9512 38.0058 41.9368 38.1987 26.6285 43.6721C15.33 47.7267 12.7372 49.5748 14.583 52.0295C16.6358 54.6794 17.183 54.6549 31.755 50.1407C45.5564 45.9016 48.3257 44.8874 45.8947 42.2786Z"
        fill={color}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1.5, yo: 'spring', delay: 1 }}
      />
    </svg>
  )
}
