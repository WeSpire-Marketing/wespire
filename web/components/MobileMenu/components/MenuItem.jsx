import Link from 'next/link'
import {motion} from 'framer-motion'

import ChevronIcon from '../../icons/ChevronIcon'

export default function MenuItem({
  children = '',
  index,
  isLink,
  internal = false,
  url = '/',
  onClick,
  isMenuOpen,
}) {
  return isLink ? (
    <motion.li
      className="mob-heading-4 flex items-center justify-between"
      initial={{x: -50, opacity: 0}}
      animate={
        isMenuOpen
          ? {x: 0, opacity: 1, transition: {delay: index * 0.15}}
          : {
              x: -50,
              opacity: 0,
              transition: {delay: index * 0.1},
            }
      }
    >
      {internal ? (
        <Link href={url} passHref>
          <a>{children}</a>
        </Link>
      ) : (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )}
    </motion.li>
  ) : (
    <motion.li
      className="mob-heading-4 flex items-center justify-between"
      onClick={() => onClick(index)}
      initial={{x: -50, opacity: 0}}
      animate={
        isMenuOpen
          ? {x: 0, opacity: 1, transition: {delay: index * 0.15}}
          : {
              x: -50,
              opacity: 0,
              transition: {delay: index * 0.1},
            }
      }
    >
      <span>{children}</span>
      <ChevronIcon className="w-[10px] rotate-[-90deg]" color="#121212" />
    </motion.li>
  )
}
