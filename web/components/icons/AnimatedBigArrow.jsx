import { motion } from 'framer-motion'

export default function AnimatedBigArrow({ className = '' }) {
  return (
    <svg
      className={className}
      width="114"
      height="219"
      viewBox="0 0 114 219"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6497 0.656811C26.0182 -1.80741 109.921 47.1548 
        113.095 100.978C114.339 121.8 87.2393 154.445 44.266 
        184.077C37.1791 188.962 32.2747 192.265 26.137 197.975C25.7335 
        198.324 29.6465 197.573 34.8881 196.237C47.2984 193.073 53.8398 
        193.293 56.7994 197.012C58.2066 198.829 57.3512 199.499 52.8683 
        200.108C40.0076 201.827 27.7108 206.563 11.5585 216.14C5.20917 219.893 
        -4.61211 219.688 4.89258 203.679C12.9328 190.136 16.7216 181.33 20.628 
        166.707C23.1789 157.232 29.1399 155.014 30.8935 162.858C31.5042 165.576 
        28.9851 175.659 25.1737 185.825L23.2106 191.004C40.6535 178.923 41.7885 
        178.223 55.1386 167.636C86.8458 142.436 103.792 119.07 102.988 101.585C100.911 
        57.3737 44.664 22.8689 11.2502 2.57348C10.3312 2.0279 11.1171 0.924391 12.6497 
        0.656811Z"
        fill="#DF6F30"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, yo: 'spring', delay: 0.5 }}
      />
    </svg>
  )
}
