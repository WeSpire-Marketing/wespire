import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

import Menu from '../Menu'
import Logo from '../icons/Logo'
import NavItem from './components/NavItem'

export default function Header({
  nav,
  link,
  logo,
  template,
  logoColor = '#1771DC',
  btnType = 'primary-btn',
}) {
  const {asPath} = useRouter()
  const [menu, setMenu] = useState(null)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    setMenuOpen(false)
  }, [asPath])

  const closeMenu = (e) => {
    setMenuOpen(false)
    setActiveIndex(null)
  }

  const openMenu = (menuData) => {
    setMenu(menuData)
    setMenuOpen(true)
  }

  return (
    <header className="header hidden z-50 lg:block">
      <div className="inner relative">
        <div className="mx-auto w-[100%] max-w-[1354px] px-8">
          <div className="relative z-20 flex max-h-[65px] w-[100%] items-center justify-between">
            <Link href="/" passHref>
              <a className="logo__link flex translate-y-[-6px]">
                <Logo color={isMenuOpen ? '#1771DC' : logoColor} />
              </a>
            </Link>

            <nav className="nav z-20">
              <ul className="nav__list flex items-center">
                {nav?.length > 0 &&
                  nav.map(({_key, text, _type, ...props}, idx) => {
                    return (
                      <NavItem
                        {...props}
                        key={_key}
                        link={_type === 'navLink' ? true : false}
                        onMouseEnter={() => {
                          setActiveIndex(idx)
                          if (_type !== 'navLink') openMenu(props.cols)
                        }}
                        onMouseLeave={closeMenu}
                        isActive={
                          _type !== 'navLink'
                            ? idx === activeIndex && isMenuOpen
                            : idx === activeIndex
                        }
                        isMenuOpen={isMenuOpen}
                        template={template}
                      >
                        {text}
                      </NavItem>
                    )
                  })}
              </ul>
            </nav>

            {link?.internal ? (
              <Link href={link.url} passHref>
                <a className={`${isMenuOpen ? 'primary-btn' : btnType} z-20`}>{link.text}</a>
              </Link>
            ) : (
              <a
                className={`${isMenuOpen ? 'primary-btn' : btnType} z-20`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            )}
          </div>
        </div>

        <Menu isActive={isMenuOpen} items={menu} onClose={closeMenu} />
      </div>
    </header>
  )
}
