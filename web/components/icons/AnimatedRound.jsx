import { memo, useEffect, useRef } from 'react'
import { motion, useAnimationControls, useInView } from 'framer-motion'

const AnimatedRound = ({ className = '' }) => {
  const ref = useRef(null)
  const controls = useAnimationControls()
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, pathLength: 1 })
    }
  }, [controls, isInView])

  return (
    <svg
      className={className}
      width="180"
      height="74"
      viewBox="0 0 180 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // style={{
      //   width: '100%',
      //   top: '50%',
      //   left: 'calc(50% + 10px)',
      //   position: 'absolute',
      //   transform: 'translate(-50%, -50%) scale(1.15)',
      //   zIndex: '-1',
      // }}
      ref={ref}
    >
      <motion.path
        d="M137.985 11.5122C109.916 -2.66193 55.9425 -0.263794 28.2379 12.1392C15.6204 
        17.7881 -7.64577 34.1556 6.51179 49.6084C9.00882 52.3342 12.0441 54.5484 15.1844
        56.4645C49.7453 77.5502 97.9485 75.403 135.04 62.7859C140.572 60.9045 146.015 58.6705 
        151.023 55.6347C154.769 53.3638 158.39 50.5495 161.307 47.2652C169.846 37.6501 167.615 
        27.9738 158.429 19.8223C147.777 10.3713 133.212 7.4424 119.469 5.83833C107.451 4.43573 
        95.4482 4.16637 83.3736 4.7389C60.7289 5.81222 34.6322 7.52019 15.6398 20.4416C7.34439 
        26.0855 -1.56789 38.1454 5.54272 47.9062C13.248 58.483 31.4161 61.9078 43.6363 64.1399C76.6022
        70.1609 128.763 67.1754 158.791 51.3746C162.029 49.6708 165.309 48.0829 168.206 45.8423C170.495
        44.0717 172.686 42.0528 174.588 39.868C188.06 24.3847 157.997 14.6495 147.395 12.9778C114.041
        7.71836 64.6761 0.128704 33.9591 14.1195"
        stroke="#EA7F49"
        strokeWidth="3"
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

export default AnimatedRound
