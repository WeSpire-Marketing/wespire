import Link from 'next/link'
import {motion} from 'framer-motion'
import dynamic from 'next/dynamic'

import Icon from '../../icons/AnimatedIcon'

import pageTransitionVariants from '../../../utils/transitions'
import {injectIconToSpanStr} from '../../../utils'

import DemoForm from '../../forms/DemoForm'
import Logo from '../../icons/Logo'
import {Fragment} from 'react'
import {getRGBAndOpacity} from '../../../utils/colors'
import Head from 'next/head'
const Img = dynamic(() => import('../../Img'))

export default function HeroEventRegistrationSection({
  link,
  title,
  titleForm,
  text,
  formId,
  image,
  titleSmall,
}) {
  const colorTextCss = getRGBAndOpacity(
    'h1SmallTitleLanding-colorText',
    titleSmall?.colorText ? titleSmall.colorText : {hex: '#000'}
  )
  return (
    <Fragment>
      <Head>
        <style>:root {`{${colorTextCss}}`}</style>
      </Head>
      <div className="demopage bg-pampas">
        <header
          className="demo-header hidden lg:flex absolute top-[35px] left-0 right-0 z-10
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
        </header>

        <motion.section
          className="relative body pt-[170px] pb-[30px] lg:pt-[205px] lg:pb-[200px] lg:overflow-hidden"
          variants={pageTransitionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="absolute w-full h-full bg-snakeLineDark bg-no-repeat bg-[-4rem_top] lg:bg-[-12rem_top] " />
          <div className="container  ">
            <div
              className="body-inner flex flex-col items-start gap-[48px]
            sm:flex-row
            lg:gap-[98px]"
            >
              <div className="body-left w-full mb-[24px] lg:mb-0">
                {titleSmall?.title ? (
                  <Fragment>
                    <h1 className="body-m mb-2 text-[22px] font-bold text-center lg:text-left text-skin-h1SmallTitleLanding-colorText">
                      {titleSmall?.title}
                    </h1>
                    <h2
                      className="body-left__title text-center lg:text-left heading-1 mb-4 text-[34px] lg:mb-[19px]
                lg:pl-[10px] lg:text-[40px]"
                    >
                      {injectIconToSpanStr(title, Icon)}
                    </h2>
                  </Fragment>
                ) : (
                  <h1
                    className="body-left__title text-center lg:text-left heading-1 mb-4 text-[34px] lg:mb-[19px]
                lg:pl-[10px] lg:text-[40px]"
                  >
                    {injectIconToSpanStr(title, Icon)}
                  </h1>
                )}
                {text && (
                  <p
                    className="body-left__title text-center lg:text-left body-m mb-[55px] max-w-[500px] text-secondary
                lg:mb-[56px] lg:pl-[10px]"
                  >
                    {text}
                  </p>
                )}

                <div className="body-left__image">
                  <Img
                    // layoutImg="fill"
                    className="lg:w-full"
                    value={image.image}
                  />
                </div>
              </div>

              <div className="body-right w-full max-w-[568px] lg:p-10">
                {titleForm && (
                  <h3 className="heading-2 lg:heading-3 text-center lg:text-left mb-8">
                    {titleForm}
                  </h3>
                )}
                <DemoForm formId={formId} className="mb-[32px]" />
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </Fragment>
  )
}
