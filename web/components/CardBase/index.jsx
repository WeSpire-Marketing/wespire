import { motion } from 'framer-motion'

export default function CardBase({ className = 'bg-white', children, ...props }) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  )
}
