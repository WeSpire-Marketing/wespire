import Link from 'next/link'
import {useState} from 'react'
import {motion} from 'framer-motion'

import Burger from '../../Burger'
import HeaderLink from '../../MobileMenu/components/HeaderLink'
import LogoStatic from '../../icons/LogoStatic'
import ImgItem from './ImgItem'

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

export default function MobileMenuReport({menuItems, link}) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const toogleMenu = () => {
    setMenuOpen((prev) => !prev)
  }
  return (
    <motion.div
      className="mobile-menu absolute top-0 left-0 right-0 z-30 mx-auto
      max-w-[1024px] overflow-hidden px-4
      lg:hidden"
      animate={isMenuOpen ? 'open' : 'closed'}
      variants={variants}
      initial="closed"
    >
      <div className="overflow-hidden pb-[40px]">
        <motion.div
          className="mobile-menu__inner flex gap-4"
          animate={'left'}
          variants={slideHorizontalAnimation}
          initial="left"
        >
          <div className="mobile-menu__left w-full shrink-0">
            <div
              className="mobile-menu-header flex h-[120px] items-center py-[40px]
              justify-between border-b-[1px] border-[rgba(202,205,212,0.8)]"
            >
              <Link href="/" passHref>
                <a>
                  <LogoStatic
                    className="h-[40px] w-[125px]"
                    isMenuOpen={isMenuOpen}
                    color={'#1771DC'}
                  />
                </a>
              </Link>

              <Burger
                toggleMenu={() => setMenuOpen((prev) => !prev)}
                isMenuOpen={isMenuOpen}
                color={'#1771DC'}
              />
            </div>
            <div className="flex flex-col gap-8 py-8 mb-8 border-b-[1px] border-[rgba(202,205,212,0.8)]">
              {menuItems.map(({_key, image, heading, text, id}) => {
                return (
                  <div key={`${_key}-${id}`}>
                    <ImgItem
                      image={image}
                      title={heading}
                      text={text}
                      id={id}
                      toogleMenu={toogleMenu}
                    />
                  </div>
                )
              })}
            </div>

            <HeaderLink isMenuOpen={isMenuOpen} {...link} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
