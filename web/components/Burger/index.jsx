import {useMemo} from 'react'
import {motion} from 'framer-motion'
import {useRouter} from 'next/router'

export default function Burger({isMenuOpen, toggleMenu, color = '#121212'}) {
  // const router = useRouter()

  const variants = useMemo(
    () => ({
      open: {
        duration: 0.3,
      },
      closed: {
        delay: 0.5,
        duration: 0.5,
      },
    }),
    []
  )

  // const color = useMemo(() => {
  //   // always return blue color when menu is open
  //   if (isMenuOpen) return '#121212'

  //   switch (router.pathname) {
  //     case '/blog/[slug]':
  //       return isMenuOpen ? '#121212' : '#fff'
  //     default:
  //       // black
  //       return '#121212'
  //   }
  // }, [isMenuOpen, router.pathname])

  return (
    <button className="flex flex-col gap-[6px]" onClick={toggleMenu}>
      <motion.span
        className="h-[3px] w-[38px] rounded-[2px]"
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          backgroundColor: isMenuOpen ? '#121212' : color,
          y: isMenuOpen ? '9px' : '0px',
          rotate: isMenuOpen ? '45deg' : '0deg',
          transition: isMenuOpen ? variants.open : variants.closed,
        }}
      />
      <motion.span
        className="h-[3px] w-[38px] rounded-[2px]"
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          backgroundColor: isMenuOpen ? '#121212' : color,
          y: isMenuOpen ? '0px' : '0px',
          rotate: isMenuOpen ? '-45deg' : '0deg',
          transition: isMenuOpen ? variants.open : variants.closed,
        }}
      />
      <motion.span
        className="h-[3px] w-[38px] rounded-[2px]"
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          backgroundColor: isMenuOpen ? '#121212' : color,
          y: isMenuOpen ? '-9px' : '0px',
          rotate: isMenuOpen ? '-45deg' : '0deg',
          transition: isMenuOpen ? variants.open : variants.closed,
        }}
      />
    </button>
  )
}
