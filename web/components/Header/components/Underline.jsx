import { motion } from 'framer-motion'

export default function Underline({ className = '', color = '#ea7f49', isVisible, ...props }) {
  const variants = {
    mouseEnter: {
      opacity: 1,
      pathLength: [0, 1],
      transition: {
        duration: 0.5,
        ease: 'linear',
      },
    },
    mouseLeave: { opacity: 0, pathLength: 1 },
  }

  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 800"
      opacity="1"
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <defs>
        <linearGradient
          gradientTransform="rotate(270)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="sssquiggly-grad"
        >
          <stop stopColor="hsl(30, 100%, 50%)" stopOpacity="1" offset="0%"></stop>
          <stop stopColor="hsl(30, 100%, 70%)" stopOpacity="1" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        strokeWidth="21"
        stroke={color}
        fill="none"
        strokeLinecap="round"
        transform="matrix(1,0,0,1,-5,-58.539146423339844)"
      >
        <motion.path
          key="line"
          d="M10,10C28.75,12.083333333333334,60.416666666666664,25.416666666666664,100,20C139.58333333333334,14.583333333333334,158.33333333333331,-17.458333333333332,200,-16C241.66666666666669,-14.541666666666666,258.3333333333333,25.75,300,27C341.6666666666667,28.25,358.3333333333333,-8.75,400,-10C441.6666666666667,-11.25,458.3333333333333,19.958333333333332,500,21C541.6666666666666,22.041666666666668,558.3333333333334,-7.5,600,-5C641.6666666666666,-2.5,658.3333333333334,30.916666666666668,700,33C741.6666666666666,35.083333333333336,779.1666666666666,10.833333333333334,800,5"
          transform="matrix(1,0,0,1,0,750)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? 'mouseEnter' : 'mouseLeave'}
          variants={variants}
        />
      </g>
    </svg>
  )
}
