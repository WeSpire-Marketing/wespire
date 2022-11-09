import {motion} from 'framer-motion'

import Img from '../../Img'
import Icon from '../../icons/AnimatedStreamline'

import {injectIconToSpanStr} from '../../../utils'

export default function CareersHeroSection({title, subtitle, image}) {
  return (
    <section className="hero-form bg-neverPreachy pt-[170px] pb-[100px]">
      <div className="container px-2 lg:px-8">
        <div
          className="hero-form__body flex flex-col items-center justify-between gap-[48px]
          lg:flex-row lg:gap-[65px]"
        >
          <div className="hero-form__body-left w-full max-w-[535px] px-2 lg:px-0 lg:w-1/2">
            <h1
              className="hero-form__body__title heading-1 relative z-[1] mb-4 text-center
              text-black [&>span]:!z-[-1] max-w-[420px] mx-auto
              sm:max-w-[430px]
              md:max-w-none
              lg:heading-2 lg:text-left"
            >
              {injectIconToSpanStr(title, () => (
                <Icon
                  className="absolute top-[-33px] left-[-5px] z-[-1] max-w-[160px]
                  sm:max-w-[200px] sm:top-[-30px]
                  md:max-w-[220px] md:top-[-27px]
                  lg:top-[-27px] lg:left-[-10px] lg:right-0 lg:bottom-0 lg:max-w-[240px]"
                />
              ))}
            </h1>

            <p
              className="hero-form__body__subtitle body-m mx-auto max-w-[403px] text-center text-secondary
              md:max-w-none
              lg:mx-0 lg:text-left"
            >
              {subtitle}
            </p>
          </div>

          <motion.div
            className="hero-form__body-right w-full lg:w-1/2"
            initial={{opacity: 0, y: -100}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 1, delay: 0.5}}
          >
            <Img
              className="max-w-[420px] md:max-w-[535px] lg:max-w-[580px] mx-auto lg:ml-auto"
              priority="true"
              value={image}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
