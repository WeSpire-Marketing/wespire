import Link from 'next/link'
import {useMemo} from 'react'
import {debounce} from 'debounce'
import {useRouter} from 'next/router'

import Underline from './Underline'
import ChevronIcon from '../../icons/ChevronIcon'

export default function NavItem({
  url,
  internal,
  isActive,
  isMenuOpen,
  link = false,
  children = 'Text',
  onMouseEnter: openMenu,
  onMouseLeave: closeMenu,
}) {
  const router = useRouter()
  /** delay for opening and closing menu must be the same to prevent
   * "flashing" of menu when user accidentally swipes the mouse
   * over menu items
   * */
  const delayMS = 100
  const debouncedHandleMouseEnter = debounce(openMenu, delayMS)
  const debouncedHandleMouseLeave = debounce(closeMenu, delayMS)

  const handleMouseEnter = (e) => {
    !isActive && !e?.relatedTarget?.classList?.contains('header-menu')
      ? debouncedHandleMouseEnter()
      : openMenu()
  }

  const handleMouseLeave = (e) => {
    debouncedHandleMouseEnter.clear()
    if (!e?.relatedTarget?.classList?.contains('header-menu')) {
      debouncedHandleMouseLeave()
    }
  }

  const linkColor = useMemo(() => {
    if (router.pathname === '/blog/[slug]' || router.asPath === '/blog/[slug]') return 'text-white'
    if (router.pathname === '/our-expertise' || router.asPath === '/our-expertise')
      return 'text-white'
    return 'text-black'
  }, [router.asPath])

  const chevronColor = useMemo(() => {
    if (router.pathname === '/blog/[slug]' || router.asPath === '/blog/[slug]') return '#fff'
    if (router.pathname === '/our-expertise' || router.asPath === '/our-expertise') return '#fff'
    return '#121212'
  }, [router.asPath])

  const underlineColor = useMemo(() => {
    if (router.pathname === '/blog/[slug]' || router.asPath === '/blog/[slug]') return '#fff'
    if (router.pathname === '/our-expertise' || router.asPath === '/our-expertise') return '#fff'
    return '#ea7f49'
  }, [router.asPath])

  return (
    <li
      className="nav__item relative flex items-center gap-1
      overflow-hidden px-[16px] py-[20px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {link ? (
        internal ? (
          <Link href={url} passHref>
            <a
              className={`subtitle-s ${
                isMenuOpen ? 'text-black' : linkColor
              } z-20 flex items-center gap-2`}
            >
              {children}
            </a>
          </Link>
        ) : (
          <a
            className={`subtitle-s ${
              isMenuOpen ? 'text-black' : linkColor
            } z-20 flex items-center gap-2`}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      ) : (
        <a
          className={`subtitle-s ${
            isMenuOpen ? 'text-black' : linkColor
          } z-20 flex items-center gap-2`}
          href="#"
          target="_blank"
          rel="noreferrer noopener"
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          {children}
          <ChevronIcon
            className={`h-[6px] w-[10px] ${isActive ? 'rotate-180' : ''}`}
            color={isMenuOpen ? '#121212' : chevronColor}
          />
        </a>
      )}

      <Underline
        className="absolute bottom-[3px] w-[calc(100%-32px)]"
        color={isMenuOpen ? '#ea7f49' : underlineColor}
        isVisible={isActive}
      />
    </li>
  )
}
