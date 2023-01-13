import Link from 'next/link'
import {motion} from 'framer-motion'

import Img from '../../Img'
import Icon from '../../icons/AnimatedIcon'
import LogoStatic from '../../icons/LogoStatic'
import SponsorsBlock from '../../SponsorsBlock'
import SignMeUpWithNamesForm from '../../forms/SignMeUpWithNamesForm'

import {injectIconToSpanStr} from '../../../utils'

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

        {link.internal ? (
          <Link href={link.url} passHref>
            <a className="hero-form__head__link cta-btn">{link.text}</a>
          </Link>
        ) : (
          <a
            className="hero-form__head__link cta-btn"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        )}
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
              className="hero-form__body__subtitle  body-m mb-8
              text-center text-white lg:mb-[40px] lg:text-left"
            >
              {subtitle}
            </p>

            <SignMeUpWithNamesForm
              formId={formId}
              buttonText="Subscribe"
              placeholder="Enter your email"
              buttonClasses="hero-form__body-form__btn w-full cta-btn bg-black lg:w-auto"
              formClasses="max-w-[315px] flex flex-col gap-4 items-start relative mx-auto
              lg:max-w-[475px] lg:flex-row lg:gap-2 lg:mx-0"
              errorClasses="absolute top-[-21px] h-fit lg:top-[unset]"
            />
          </div>

          <motion.div
            className="hero-form__body-right w-full
            lg:w-1/2"
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
