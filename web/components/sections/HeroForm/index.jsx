import Link from 'next/link'
import {motion} from 'framer-motion'
import Script from 'next/script'

import Img from '../../Img'
import Icon from '../../icons/AnimatedIcon'
import LogoStatic from '../../icons/LogoStatic'
import SponsorsBlock from '../../SponsorsBlock'
import SignMeUpWithNamesForm from '../../forms/SignMeUpWithNamesForm'

import {injectIconToSpanStr} from '../../../utils'

const injectChiliPiperScripts = () => {
  return (
    <>
      <Script>
        {`function q(a){return function(){ChiliPiper[a].q=(ChiliPiper[a].q||[]).concat([arguments])}}window.ChiliPiper=window.ChiliPiper||"submit scheduling showCalendar submit widget bookMeeting".split(" ").reduce(function(a,b){a[b]=q(b);return a},{});
        ChiliPiper.scheduling("wespire", "adwords-for-erg-management", {title: "Thanks! What time works best for a quick call?"})`}
      </Script>
      <Script src="https://js.na.chilipiper.com/marketing.js" type="text/javascript" async />
    </>
  )
}

export default function HeroForm({link, title, subtitle, formId, image, sponsors}) {
  return (
    <section className="hero-form bg-thriving pt-[170px] pb-[70px] lg:pt-6 lg:pb-[100px]">
      <div
        className="hero-form__head px-8 mx-auto mb-[90px] hidden max-h-[65px]
        w-full max-w-[calc(1288px+2rem)] items-center justify-between lg:flex"
      >
        <div className="hero-form__head-logo cursor-pointer">
          <Link href="/" passHref>
            <a className="flex">
              <LogoStatic color="#fff" />
            </a>
          </Link>
        </div>

        {link?.visibility &&
          (link.internal ? (
            <Link href={link.url} passHref>
              <a className="hero-form__head__link cta-btn-black">{link.text}</a>
            </Link>
          ) : (
            <a
              className="hero-form__head__link cta-btn-black"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          ))}
      </div>

      <div className="container mb-8 px-2 lg:mb-[95px] lg:px-8">
        <div
          className="hero-form__body flex flex-col items-center justify-between gap-[46px]
          lg:flex-row lg:gap-8"
        >
          <div
            className="hero-form__body-left w-full max-w-[456px]
            sm:max-w-[540px]
            md:max-w-[600px]
            lg:w-1/2"
          >
            <h1
              className="hero-form__body__title heading-1 mb-4 text-center text-white
              lg:mb-6 lg:text-left"
            >
              {injectIconToSpanStr(title, () => (
                <Icon color="#FFCC7B" />
              ))}
            </h1>

            <p
              className="hero-form__body__subtitle px-4 md:px-0 body-m mb-8
              text-center text-white lg:mb-[40px] lg:text-left"
            >
              {subtitle}
            </p>

            <div className="px-4 md:px-0">
              <SignMeUpWithNamesForm formId={formId} />
              {injectChiliPiperScripts()}
            </div>
          </div>

          <motion.div
            className="hero-form__body-right w-full
            lg:w-1/2 self-start"
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
        </div>
      </div>

      <div className="hero-form__footer">
        <SponsorsBlock sponsors={sponsors} />
      </div>
    </section>
  )
}
