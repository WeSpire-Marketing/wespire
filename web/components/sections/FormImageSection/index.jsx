import {motion} from 'framer-motion'
import dynamic from 'next/dynamic'

import Icon from '../../icons/AnimatedIcon'

const SignMeUpWithNamesForm = dynamic(() => import('../../forms/SignMeUpWithNamesForm'), {
  ssr: false,
})

import {injectIconToSpanStr} from '../../../utils'
import {Suspense} from 'react'
const DynamicImage = dynamic(() => import('../../Img'))

export default function FormImageSection({title, subtitle, formId, image}) {
  return (
    <section className="hero-form bg-pampas pt-[80px] pb-[52px] lg:pt-6 lg:pb-[30px]">
      <div className="container mb-8 px-2 lg:mb-[45px] lg:mt-[130px] lg:px-8">
        <div
          className="hero-form__body flex flex-col items-center justify-between gap-[46px]
          lg:flex-row lg:gap-8"
        >
          <div
            className="hero-form__body-left w-full max-w-[456px]
            sm:max-w-[540px]
            md:max-w-[600px]
            lg:max-w-[539px]"
          >
            <h1
              className="hero-form__body__title heading-1 mb-4 text-center
              lg:mb-6 lg:text-left"
            >
              {injectIconToSpanStr(title, () => (
                <Icon color="#FFCC7B" />
              ))}
            </h1>

            <p
              className="hero-form__body__subtitle px-4 md:px-0 body-m mb-8
              text-center lg:mb-[40px] lg:text-left"
            >
              {subtitle}
            </p>
            <Suspense fallback={() => <p>Loading ...</p>}>
              <div className="px-4 md:px-0">
                <SignMeUpWithNamesForm formId={formId} />
              </div>
            </Suspense>
          </div>

          <motion.div
            className={`hero-form__body-right w-full
            lg:w-1/2
            lg:bg-heroForm lg:bg-no-repeat lg:bg-contain lg:bg-right-top`}
            initial={{opacity: 0, y: -100}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 1, delay: 0.5}}
          >
            <DynamicImage
              className="hero-form__body-right max-w-[456px] mx-auto
              sm:max-w-[540px]
              md:max-w-[580px]
              lg:ml-auto lg:mr-0"
              value={image}
              priority={true}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
