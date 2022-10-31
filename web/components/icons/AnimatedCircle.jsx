import { useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const variants = {
  hidden: { pathLength: 0, rotateZ: 90, rotateX: 180, scale: 1 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { ease: 'linear', duration: 5 },
    },
  },
}

export default function AnimatedCircle({ className = '', isActive, isFatBorder }) {
  const controls = useAnimationControls()

  useEffect(() => {
    if (isActive) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, isActive])

  return (
    <svg
      className={className}
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="45"
        cy="45"
        r={isFatBorder ? '38' : '42.8614'}
        stroke="white"
        strokeWidth={isFatBorder ? '4' : '2.27723'}
      />
      {isActive && (
        <motion.circle
          cx="45"
          cy="45"
          r="42.8614"
          stroke="#1771DC"
          strokeWidth="2.27723"
          variants={variants}
          initial="hidden"
          animate={controls}
          custom={2}
        />
      )}
    </svg>
  )
}
