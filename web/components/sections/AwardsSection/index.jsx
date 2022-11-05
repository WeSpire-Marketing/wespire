import {motion} from 'framer-motion'

import Img from '../../Img'

export default function AwardsSection({image, title, text, awards}) {
  return (
    <section className="awection bg-gallery pb-[100px] lg:pb-[140px]">
      <div className="container px-2 lg:px-8">
        <div className="awection__inner flex flex-col items-center gap-8 lg:flex-row lg:gap-6">
          <motion.div
            className="awection__left w-full lg:w-1/2"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 1, delay: 0.15}}
          >
            <Img className="awection__left__img lg:mr-[115px]" value={image} />
          </motion.div>

          <div className="awection__right w-full px-2 lg:w-1/2 lg:px-0">
            <h2 className="awection__title heading-2 mb-4 max-w-[452px]">{title}</h2>

            <p
              className="awection__text body-m mb-8 max-w-[452px] text-secondary
              lg:mb-[56px]"
            >
              {text}
            </p>

            <ul className="awection__images flex items-center gap-6">
              {awards?.length > 0 &&
                awards.map((award, idx) => {
                  return (
                    <motion.li
                      className="awection__images-item relative h-[64px] w-[64px] lg:h-[80px] lg:w-[80px]"
                      key={award._key}
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}
                      viewport={{once: true}}
                      transition={{duration: 1, delay: 0.25 * (idx + 1)}}
                    >
                      <Img className="awection__images__img" value={award} layout="fill" />
                    </motion.li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
