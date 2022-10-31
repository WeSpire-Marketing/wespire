import { motion } from 'framer-motion'

export default function AnimatedTwoMarks({ className = '' }) {
  return (
    <motion.svg
      className={className}
      // width="43"
      // height="44"
      viewBox="0 0 43 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, yo: 'spring', delay: 0.25 }}
      // style={{
      //   width: '35px',
      //   position: 'absolute',
      //   top: '-25px',
      //   left: '-25px',
      // }}
    >
      <path
        d="M4.46132 22.2283C3.83884 26.453 4.42669 26.9505 16.0081 32.4074C26.8224 37.5341 27.6441 37.7456 28.1568 35.6028C29.1294 31.7262 27.9399 30.688 15.6876 24.7662C5.68219 19.9533 4.81859 19.7581 4.46132 22.2283Z"
        fill="#EA7F49"
      />
      <path
        d="M29.333 1.48756C26.5418 5.26629 26.6827 5.26033 31.827 17.8367C35.6346 27.1174 37.1731 29.1601 38.809 27.3484C40.5703 25.3409 40.5103 24.8751 36.1176 12.8377C31.9835 1.43334 31.0355 -0.839429 29.333 1.48756Z"
        fill="#EA7F49"
      />
    </motion.svg>
  )
}
