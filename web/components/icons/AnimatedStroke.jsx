import { useEffect, useRef } from 'react'
import { motion, useAnimationControls, useInView } from 'framer-motion'

export default function Icon({ className = '', color = '#1771DC' }) {
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
      width="168"
      height="116"
      viewBox="0 0 168 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <motion.path
        d="M4.10545 59.3787C3.14175 59.9003 6.71695 58.4984 7.00729 58.4161C9.3089 
        57.7621 11.5612 57.0612 13.8215 56.3583C20.1681 54.3838 28.6059 51.2291 
        37.1561 55.3664C41.4732 57.4549 44.4155 60.1474 46.7346 63.485C48.8408 66.5167 
        50.862 70.7814 55.236 72.6881C60.024 74.7756 64.7725 70.5627 67.1551 68.9332C74.6021 
        63.8399 81.5506 57.5368 93.7389 57.701C98.6755 57.7674 103.6 59.4656 108.107 
        62.3004C110.602 63.8696 114.341 67.411 117.436 67.1231C120.744 66.8154 122.933 
        63.9044 125.234 62.5402C132.527 58.2172 140.826 53.4882 152.021 54.1377C155.01 
        54.311 160.523 54.9782 163.399 56.9245"
        stroke={color}
        strokeWidth="8"
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
