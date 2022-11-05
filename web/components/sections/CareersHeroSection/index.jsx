import {motion} from 'framer-motion'

import Img from '../../Img'
import Icon from '../../icons/AnimatedStreamline'

import {injectIconToSpanStr} from '../../../utils'

export default function CareersHeroSection({title, subtitle, image}) {
  return (
    <section className="hero-form bg-neverPreachy pt-[170px] pb-[100px]">
      <div className="container">
        <div
          className="hero-form__body flex flex-col items-center justify-between gap-[48px]
          lg:flex-row lg:gap-[65px]"
        >
          <div className="hero-form__body-left w-full max-w-[535px] lg:w-1/2">
            <h1
              className="hero-form__body__title heading-1 lg:heading-2 relative z-[1] mb-4 text-center
              text-black lg:text-left [&>span]:!z-[-1]"
            >
              {injectIconToSpanStr(title, () => (
                <Icon
                  className="absolute top-[-33px] left-[-5px] z-[-1] max-w-[160px]
                  lg:top-[-27px] lg:left-[-10px] lg:right-0 lg:bottom-0 lg:max-w-[240px]"
                />
              ))}
            </h1>

            <p
              className="hero-form__body__subtitle body-m mx-auto max-w-[465px] text-center text-secondary
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
            <Img className="hero-form__body-right" priority="true" value={image} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
