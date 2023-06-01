import Head from 'next/head'
import React, {useEffect, useRef} from 'react'
import {createSeoScript} from '../../../utils/seo'
import Link from 'next/link'
import LogoStatic from '../../icons/LogoStatic'
import {injectIconToSpanStr, injectStarsToStr} from '../../../utils'
import {motion} from 'framer-motion'
import Icon from '../../icons/AnimatedHighlights'
import Img from '../../Img'
import IconStars from '../../icons/AnimatedStars1'
import {MenuReport} from '../../MenuReport'
import MobileMenuReport from '../../MenuReport/components/MobileMenu'
import {useInView} from 'framer-motion'

const backToTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
const HeroReport = (props) => {
  const {listFAQ, link, title, text, imageList, menuItems} = props
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    history.replaceState({}, document.title, window.location.pathname)
  }, [])

  return (
    <>
      <Head>{Boolean(listFAQ?.length) && createSeoScript(listFAQ)}</Head>

      <section className="hero-form bg-white pt-[170px] pb-[70px] lg:pt-6">
        <div
          className="hero-form__head px-8 mx-auto mb-[106px] hidden max-h-[65px]
        w-full max-w-[calc(1288px+2rem)] items-center justify-between lg:flex"
        >
          <div className="hero-form__head-logo cursor-pointer">
            <Link href="/" passHref>
              <a className="flex">
                <LogoStatic color="#1771DC" />
              </a>
            </Link>
          </div>

          <MenuReport menuItems={menuItems} />
          <div className="flex flex-nowrap">
            {Boolean(link?.text?.length) &&
              (link.internal ? (
                <Link href={link.url} passHref>
                  <a className="hero-form__head__link cta-btn-black whitespace-nowrap">
                    {link.text}
                  </a>
                </Link>
              ) : (
                <a
                  className="hero-form__head__link cta-btn-black whitespace-nowrap"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              ))}
          </div>
        </div>
        <MobileMenuReport menuItems={menuItems} link={link} />

        <div className="container px-2 lg:px-8 w-full">
          <div
            className="hero-form__body  flex flex-col items-center justify-between gap-[46px]
          lg:flex-row lg:gap-8 w-full"
          >
            <div className="w-full ">
              <div className="w-full md:w-[500px] lg:w-[797px] mx-auto text-centre">
                <h1
                  className="hero-form__body__title heading-1 mb-4 text-center
              lg:mb-6"
                >
                  {injectIconToSpanStr(title, () => (
                    <Icon
                      color="#DF6F30"
                      className="absolute w-[57px] h-[56px] top-[-40px] left-[-40px] md:w-full md:h-full md:left-[-90px]"
                    />
                  ))}
                </h1>
                {Boolean(text?.length) && (
                  <p
                    className="hero-form__body__subtitle body-m w-full mx-auto max-w-[616px]
              text-center [&>span>svg]:right-10"
                  >
                    {injectStarsToStr(`${text}$`, () => (
                      <IconStars color="#DF6F30" />
                    ))}
                  </p>
                )}
              </div>
              <div className="" ref={ref}></div>
              {Boolean(imageList?.length) && (
                <div className="flex flex-col gap-4 lg:flex-row mt-[69px] lg:gap-6 lg:mt-[77px]">
                  {imageList.map((image, idx) => (
                    <motion.div
                      key={`${image._type}-${idx}`}
                      className={`hero-form__body-right w-full
            lg:w-1/2 self-start ${
              Boolean(image._type?.length) &&
              'lg:bg-heroForm lg:bg-no-repeat lg:bg-contain lg:bg-right-top'
            }`}
                      initial={{opacity: 0, y: -100}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{once: true}}
                      transition={{duration: 1, delay: 0.5}}
                    >
                      <Img
                        className="hero-form__body-right max-w-[456px] mx-auto
              sm:max-w-[540px]
              md:max-w-[580px]
              lg:ml-auto lg:mr-0"
                        priority="true"
                        value={image}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {!isInView && (
          <button
            onClick={backToTop}
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            class="z-50 fixed inline-block p-3 bg-[#1771DC] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#DF6F30] hover:shadow-lg focus:bg-[#DF6F30] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
            id="btn-back-to-top"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-4 h-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              ></path>
            </svg>
          </button>
        )}
      </section>
    </>
  )
}

export default HeroReport