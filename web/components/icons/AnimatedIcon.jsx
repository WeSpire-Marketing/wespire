import { useEffect, useRef } from 'react'
import { motion, useAnimationControls, useInView } from 'framer-motion'

export default function Icon({ color = '#EA7F49' }) {
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
      width="214"
      height="30"
      viewBox="0 0 214 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '110%',
        position: 'absolute',
        left: '50%',
        bottom: '-15px',
        transform: 'translateX(-50%)',
      }}
      ref={ref}
    >
      <motion.path
        d="M185.509 11.7214C164.5 10.3487 143.511 8.21505 122.44 7.27678C108.953 
        6.6757 95.4769 6.86186 81.9846 7.19679C69.0463 7.51752 56.0796 7.64386 
        43.151 8.19635C39.3882 8.35709 30.5282 10.2202 27.0779 8.07374C26.4911 
        7.7089 28.4461 7.85544 29.1361 7.80535C30.5746 7.70068 32.016 7.54293 
        33.4402 7.30668C38.0328 6.54336 42.5828 6.18227 47.2218 5.83837C61.0445 
        4.81488 74.9405 4.15024 88.7872 3.67924C130.026 2.27671 170.618 1.94178 
        211.765 6.04919C212.541 6.12695 210.206 6.01854 209.426 6.01331C207.649 
        6.00209 205.872 5.93181 204.096 5.87574C199.101 5.71575 194.107 5.51016 
        189.112 5.35615C173.823 4.8844 158.586 3.48037 143.298 3.00339C110.735 
        1.98663 78.0185 2.76491 45.4559 3.43103C33.9074 3.66728 13.5024 7.1609 
        1.96094 3.71662"
        stroke={color}
        strokeWidth="3.75"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={controls}
        initial={{ pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.5, yo: 'spring', delay: 1 }}
        viewport={{ once: true }}
      />
    </svg>
  )
}
