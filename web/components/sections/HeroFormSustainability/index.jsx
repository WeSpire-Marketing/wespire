import Link from 'next/link'
import {motion} from 'framer-motion'
import dynamic from 'next/dynamic'

// import Img from '../../Img'
import Icon from '../../icons/AnimatedIcon'
import LogoStatic from '../../icons/LogoStatic'
import SponsorsBlock from '../../SponsorsBlock'

const SignMeUpWithNamesForm = dynamic(() => import('../../forms/SignMeUpWithNamesForm'), {
  ssr: false,
})

import {injectIconToSpanStr} from '../../../utils'
import {getRGBAndOpacity} from '../../../utils/colors'
import Head from 'next/head'
import {createSeoScript} from '../../../utils/seo'
import {Suspense} from 'react'
import {useWindowWidth} from '@react-hook/window-size'

const DynamicImage = dynamic(() => import('../../Img'))

export default function HeroFormSustainability({
  link,
  titleSmall,
  title,
  subtitle,
  formId,
  image,
  sponsors,
  listFAQ,
  type = '',
}) {
  const colorTextCss = getRGBAndOpacity('h1SmallTitleLanding-colorText', titleSmall?.colorText)

  const onlyWidth = useWindowWidth()
  return (
    <>
      <Head>
        <style>:root {`{${colorTextCss}}`}</style>
        {Boolean(listFAQ?.length) && createSeoScript(listFAQ)}
      </Head>

      <section
        className="hero-form relative bg-pampas pb-[105px]
      sm:pb-[115px]
      md:pb-[125px]
      lg:pb-[90px] lg:pt-6"
      >
        <div
          className="hero-form__head px-8 mx-auto mb-[90px] hidden max-h-[65px]
        w-full max-w-[calc(1288px+2rem)] items-center justify-between lg:flex"
        >
          <div className="hero-form__head-logo cursor-pointer">
            <Link href="/" passHref>
              <a className="flex">
                <LogoStatic color="#1771DC" />
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

        <div className="container relative mb-8 lg:mb-[95px]">
          <div className="hero-form__body pb-36 pt-[170px]   lg:pt-0 ">
            <div
              className="hero-form__body-left w-full mx-auto lg:mx-0 max-w-[456px]
            sm:max-w-[540px]
            md:max-w-[600px]
            lg:w-1/2"
            >
              {titleSmall?.title ? (
                <>
                  <h1 className="hero-form__body__subtitle body-m mb-2 font-bold text-center lg:text-left text-skin-h1SmallTitleLanding-colorText">
                    {titleSmall?.title}
                  </h1>
                  <h2
                    className="hero-form__body__title heading-1 mb-4 text-center
              lg:mb-6 lg:text-left"
                  >
                    {injectIconToSpanStr(title, () => (
                      <Icon color="#DF6F30" />
                    ))}
                  </h2>
                </>
              ) : (
                <h1
                  className="hero-form__body__title heading-1 mb-4 text-center
              lg:mb-6 lg:text-left"
                >
                  {injectIconToSpanStr(title, () => (
                    <Icon color="#DF6F30" />
                  ))}
                </h1>
              )}

              <p
                className="hero-form__body__subtitle px-4 md:px-0 body-m mb-8
              text-center  lg:mb-[40px] lg:text-left"
              >
                {subtitle}
              </p>
              <Suspense fallback={() => <p>Loading ...</p>}>
                <div className="px-4 md:px-0">
                  <SignMeUpWithNamesForm formId={formId} />
                </div>
              </Suspense>
            </div>
          </div>
          {onlyWidth > 1025 && (
            <motion.div
              className={`hero-form__body-right w-1/2
           absolute inset-y-0 right-0`}
              initial={{opacity: 0, y: -100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 1, delay: 0.5}}
            >
              <DynamicImage
                className="absolute inset-y-0 right-0 w-full ml-auto"
                value={image}
                priority={true}
              />
            </motion.div>
          )}
        </div>
        <div className="absolute bottom-0 z-10 w-full">
          <div
            className="sponsors overflow-hidden rounded-t-[30px] border-t bg-gallery py-10
          sm:py-14
          md:py-16
          lg:rounded-t-[48px] lg:py-20"
          >
            <SponsorsBlock sponsors={sponsors} />
          </div>

          <div className="absolute bottom-0 w-full px-4">
            <span className="mx-auto block h-[1px] w-full max-w-[1224px] bg-grey2 underline" />
          </div>
        </div>
      </section>
    </>
  )
}
