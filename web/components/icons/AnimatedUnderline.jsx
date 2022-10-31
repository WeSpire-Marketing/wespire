import { useEffect, useRef } from 'react'
import { motion, useAnimationControls, useInView } from 'framer-motion'

export default function AnimatedUnderline({ className = '' }) {
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
      width="163"
      height="10"
      viewBox="0 0 163 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.73339 9.24155C3.79521 9.91192 29.4466 9.86404 71.9563 9.05002C87.9658 8.76271 114.042 8.5233 129.93 8.57118C172.076 8.71483 174.987 -1.23978e-05 132.295 -1.23978e-05C67.772 -1.23978e-05 3.24943 2.48994 0.823761 5.12355C-0.571 6.65582 -0.146508 8.61906 1.73339 9.24155Z"
        fill="#3C8F73"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={controls}
        viewport={{ once: true }}
        transition={{ duration: 1.5, yo: 'spring', delay: 0.25 }}
      />
    </svg>
  )
}
