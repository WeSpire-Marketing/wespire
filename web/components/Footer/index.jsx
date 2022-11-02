import Image from 'next/image'
import {useRouter} from 'next/router'

import ListLink from './components/ListLink'
import FooterLink from './components/FooterLink'

import {urlForImage} from '../../client'

export default function Footer({logo, address, socials, menuItems, year, policy, privacy}) {
  const router = useRouter()

  return (
    <footer
      className={
        router?.asPath === '/contact-us' ? 'footer rounded-t-[30px] lg:rounded-t-[60px]' : 'footer'
      }
    >
      <div className="container">
        <div className="footer__body">
          <div className="footer__left flex w-[100%] max-w-[204px] flex-col gap-8 lg:gap-10">
            <div className="footer__logo relative block h-[45px] w-[125px] lg:h-[60px] lg:w-[162px]">
              <Image
                // width={162}
                // height={60}
                src={urlForImage(logo).url()}
                alt="logo"
                objectFit="contain"
                layout="fill"
              />
            </div>

            <address
              className="footer__address text-lg font-normal not-italic leading-160
              text-black"
            >
              {address}
            </address>

            <div className="footer__socials flex gap-6">
              {socials.map(({_key, link, image}) => {
                return (
                  <a
                    className="relative flex h-[40px] w-[40px] items-center justify-center rounded-full
                    bg-smart hover:bg-[#1866C2] lg:h-[46px] lg:w-[46px] [&_.footer__socials__icon]:w-[20px]"
                    href={link}
                    key={_key}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="footer__socials__icon relative h-[20px] w-[20px] lg:h-[25px] lg:w-[25px]">
                      <Image
                        src={urlForImage(image).url()}
                        alt="social icon"
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="footer__right">
            {menuItems.map(({_key, heading, links}) => {
              return (
                <div className="footer__col" key={_key}>
                  <p
                    className="footer__col__title mb-4 font-poppins text-base font-semibold
                    text-black lg:mb-[26px] lg:text-lg"
                  >
                    {heading}
                  </p>

                  <ul className="footer__list flex flex-col gap-[14px] lg:gap-[20px]">
                    {links.map(({_key, text, url, ...props}) => {
                      return (
                        <ListLink key={_key} href={url} {...props}>
                          {text}
                        </ListLink>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <div className="footer__copyright">
          <p
            className="footer__copyright__brand text-sm font-normal leading-130
            text-secondary opacity-70"
          >
            {year}
          </p>

          <FooterLink
            className="footer__copyright__link text-sm font-normal leading-130
            text-secondary opacity-70"
            href={privacy.url}
            internal={privacy.internal}
          >
            {privacy.text}
          </FooterLink>

          <FooterLink
            className="footer__copyright__link w-full text-sm font-normal leading-130
            text-secondary opacity-70"
            href={policy.url}
            internal={policy.internal}
          >
            {policy.text}
          </FooterLink>
        </div>
      </div>
    </footer>
  )
}
