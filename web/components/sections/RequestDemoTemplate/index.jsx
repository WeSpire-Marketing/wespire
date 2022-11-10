import Link from 'next/link'
import {useEffect} from 'react'
import {motion} from 'framer-motion'

import Img from '../../Img'
import Logo from '../../icons/Logo'
import Icon from '../../icons/AnimatedIcon'
import DemoForm from '../../forms/DemoForm'
import ArrowIcon from '../../icons/ArrowIcon'

import {injectIconToSpanStr} from '../../../utils'
import pageTransitionVariants from '../../../utils/transitions'
import useCustomScrollBehavior from '../../../utils/hooks/useCustomScrollBehavior'

export default function RequestDemoTemplate({link, title, subtitle, image, formId}) {
  useCustomScrollBehavior()

  useEffect(() => {
    if (document) {
      document.body.style.height = '100vh'
      document.body.style.backgroundColor = '#f9fbff'
    }
  }, [])

  return (
    <div className="demopage bg-gallery">
      <header
        className="demo-header absolute top-[35px] left-0 right-0 z-10
        lg:top-[20px]"
      >
        <div
          className="header-inner mx-auto flex w-full max-w-[1354px]
          items-center justify-between px-4 lg:px-8"
        >
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <Logo />
            </a>
          </Link>

          {link.internal ? (
            <Link href={link.url} passHref>
              <a
                className="group flex items-center gap-2 font-poppins text-base
                font-semibold text-black"
              >
                {link.text}
                <span
                  className="inline-block transition-all duration-200
                  ease-in-out group-hover:translate-x-1"
                >
                  <ArrowIcon className="max-w-[14px]" />
                </span>
              </a>
            </Link>
          ) : (
            <a
              className="group flex items-center gap-2 font-poppins text-base
              font-semibold text-black"
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.text}
              <span
                className="inline-block transition-all duration-200
                  ease-in-out group-hover:translate-x-1"
              >
                <ArrowIcon className="max-w-[14px]" />
              </span>
            </a>
          )}
        </div>
      </header>

      <motion.section
        className="body pt-[170px] pb-[90px] lg:pt-[205px] lg:pb-[200px]"
        variants={pageTransitionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="container">
          <div
            className="body-inner flex flex-col items-start gap-[48px]
            sm:flex-row
            lg:gap-[98px]"
          >
            <div className="body-left w-full">
              <h1
                className="body-left__title heading-2 mb-4 text-[34px] lg:mb-[19px]
                lg:pl-[10px] lg:text-[46px]"
              >
                {injectIconToSpanStr(title, Icon)}
              </h1>

              <p
                className="body-left__title body-m mb-8 max-w-[500px] text-secondary
                lg:mb-[56px] lg:pl-[10px]"
              >
                {subtitle}
              </p>

              <div className="body-left__image">
                <Img
                  className="lg:w-[120%] lg:translate-x-[-60px] lg:translate-y-[-25px]"
                  value={image}
                />
              </div>
            </div>

            <div className="body-right w-full max-w-[568px]">
              <DemoForm formId={formId} className="mb-[32px]" />

              <p className="body-s mx-auto max-w-[438px] text-center text-secondary">
                By submitting this form I agree to receive marketing communications from WeSpire.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
