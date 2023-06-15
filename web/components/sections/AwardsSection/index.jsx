import {motion} from 'framer-motion'
import dynamic from 'next/dynamic'

const Img = dynamic(() => import('../../Img'), {
  ssr: false,
})

export default function AwardsSection({image, title, text, awards, type = ''}) {
  return (
    <section
      className={`awection bg-gallery ${
        Boolean(type?.length) ? 'py-[100px] lg:py-[140px]' : 'pb-[100px] lg:pb-[140px]'
      }`}
    >
      <div className="container px-2 lg:px-8">
        <div
          className="awection__inner flex flex-col items-center gap-8
          md:flex-row
          lg:gap-6"
        >
          <motion.div
            className="awection__left w-full lg:w-1/2"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 1, delay: 0.15}}
          >
            <Img className="awection__left__img max-w-[580px] lg:mr-[115px]" value={image} />
          </motion.div>

          <div className="awection__right w-full px-2 lg:w-1/2 lg:px-0">
            <h2 className="awection__title heading-2 mb-4 max-w-[452px]">{title}</h2>

            <p
              className="awection__text body-m mb-8 max-w-[452px] text-secondary
              lg:mb-[56px]"
            >
              {text}
            </p>

            {Boolean(type.length) ? (
              <ul className="awection__images flex flex-wrap items-center gap-7">
                {(awards ?? []).map((award, idx) => (
                  <motion.li
                    className="awection__images-item relative h-[90px] w-[164px] lg:h-[126px] lg:w-[232px]"
                    key={award._key}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, delay: 0.25 * (idx + 1)}}
                  >
                    <Img
                      className="awection__images__img"
                      value={award}
                      layoutImg="fill"
                      loading={'lazy'}
                    />
                  </motion.li>
                ))}
              </ul>
            ) : (
              <ul className="awection__images flex items-center gap-6">
                {(awards ?? []).map((award, idx) => (
                  <motion.li
                    className="awection__images-item relative h-[64px] w-[64px]
                  lg:h-[80px] lg:w-[80px]"
                    key={award._key}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, delay: 0.25 * (idx + 1)}}
                  >
                    <Img
                      className="awection__images__img"
                      value={award}
                      layoutImg="fill"
                      loading={'lazy'}
                    />
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
