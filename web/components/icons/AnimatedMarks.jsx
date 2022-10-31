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
      width="67"
      height="70"
      fill="none"
      viewBox="0 0 67 70"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      // style={{
      //   top: '-45px',
      //   left: '-60px',
      //   position: 'absolute',
      // }}
    >
      <motion.path
        d="M7.36199 36.7726C6.66503 43.349 7.606 44.0819 25.8707 51.7957C42.9274 
        59.0471 44.2123 59.3227 44.8705 55.9746C46.1313 49.9147 44.2252 48.3833 
        24.8932 39.9922C9.10775 33.1754 7.75914 32.9278 7.36199 36.7726Z"
        fill="#3C8F73"
        initial={{ pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.5, yo: 'spring', delay: 0.25 }}
        animate={controls}
      />
      <motion.path
        d="M44.8804 3.46835C40.7995 9.49137 41.0171 9.47326 49.7697 28.6093C56.2464
         42.7301 58.7557 45.794 61.1729 42.8874C63.7718 39.6702 63.6497 38.9531 56.0939
          20.6036C48.9782 3.21743 47.368 -0.239645 44.8804 3.46835Z"
        fill="#3C8F73"
        initial={{ pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.5, yo: 'spring', delay: 0.25 }}
        animate={controls}
      />
    </svg>
  )
}
