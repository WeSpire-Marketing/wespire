import React from 'react'
import {motion} from 'framer-motion'
export default function AccordionArrow({className = '', color = '#121212'}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.71484 20.5713L15.211 10.5165C15.3294 10.3912 15.5288 10.3912 15.6472 10.5165L25.1434 20.5713"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{pathLength: 0, opacity: 0}}
        animate={{pathLength: 1, opacity: 1}}
        transition={{duration: 0.5, yo: 'spring', delay: 0.2}}
      />
    </svg>
  )
}
