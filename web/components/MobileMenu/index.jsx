import Link from 'next/link'
import {useState} from 'react'
import {motion, useCycle} from 'framer-motion'

import Burger from '../Burger'
import Content from './components/Content'
import MenuItem from './components/MenuItem'
import HeaderLink from './components/HeaderLink'
import ArrowIcon from '../icons/ArrowIcon'
import LogoStatic from '../icons/LogoStatic'

const variants = {
  open: {
    height: 'auto',
    backgroundColor: 'rgba(249, 251, 255, 1)',
    boxShadow: '0px 10px 40px rgba(81, 81, 81, 0.14)',
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
  closed: {
    height: '117px',
    backgroundColor: 'rgba(249, 251, 255, 0)',
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

const slideHorizontalAnimation = {
  left: {
    x: '0%',
    transition: {
      duration: 0.3,
    },
  },
  right: {
    x: 'calc(-100% - 1rem)',
    transition: {
      duration: 0.3,
    },
  },
}

export default function MobileMenu({nav, link, navColor}) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isLeftMenu, toggleMenu] = useCycle(true, false)
  const [currentIndex, setCurrentIndex] = useState(null)

  const handleClick = (index) => {
    setCurrentIndex(index)
    toggleMenu()
  }

  return (
    <motion.div
      className="mobile-menu absolute top-0 left-0 right-0 z-30 mx-auto max-w-[936px] overflow-hidden px-4
      lg:hidden"
      animate={isMenuOpen ? 'open' : 'closed'}
      variants={variants}
      initial="closed"
    >
      <div className="overflow-hidden pb-[40px]">
        <motion.div
          className="mobile-menu__inner flex gap-4"
          animate={isLeftMenu ? 'left' : 'right'}
          variants={slideHorizontalAnimation}
          initial="left"
        >
          {/* 1-st Level */}
          <div className="mobile-menu__left w-full shrink-0">
            <div
              className="mobile-menu-header flex h-[120px] items-center
              justify-between border-b-[1px] border-[rgba(202,205,212,0.8)] py-[40px]"
            >
              <Link href="/" passHref>
                <a>
                  <LogoStatic
                    className="h-[40px] w-[125px]"
                    isMenuOpen={isMenuOpen}
                    color={navColor}
                  />
                </a>
              </Link>

              <Burger
                toggleMenu={() => setMenuOpen((prev) => !prev)}
                isMenuOpen={isMenuOpen}
                color={navColor}
              />
            </div>

            <ul className="my-[80px] flex flex-col gap-[40px]">
              {nav.map(({_key, text, _type, ...props}, idx) => {
                return (
                  <MenuItem
                    isLink={_type === 'navLink'}
                    isMenuOpen={isMenuOpen}
                    onClick={handleClick}
                    index={idx}
                    key={_key}
                    {...props}
                  >
                    {text}
                  </MenuItem>
                )
              })}
            </ul>

            <HeaderLink isMenuOpen={isMenuOpen} {...link} />
          </div>
          {/* End of 1-st Level */}

          {/* 2-nd Level */}
          <div className="mobile-menu__right w-full shrink-0">
            <div
              className="mobile-menu-header border-b-[1px] border-[rgba(202,205,212,0.8)]
              pt-[56px] pb-[16px]"
            >
              <button
                className="flex items-center gap-4"
                onClick={() => {
                  toggleMenu()
                  setTimeout(() => setCurrentIndex(null), 250)
                }}
              >
                <ArrowIcon className="w-[17px] rotate-180" />

                <span className="mob-heading-2 inline-block">
                  {nav[currentIndex]?.text ?? 'Back'}
                </span>
              </button>
            </div>

            <div className="flex flex-col">
              <Content currentColumns={nav[currentIndex]?.cols} />
            </div>
          </div>
          {/* End of 2-nd Level */}
        </motion.div>
      </div>
    </motion.div>
  )
}
