import Link from 'next/link'
import Img from '../../Img'

import {motion} from 'framer-motion'

export default function MeasureSection({image, title, subtitle, link, cols}) {
  return (
    <section className="measurection bg-thriving">
      <div
        className="measurection-outer rounded-t-[30px] bg-gallery pt-8 pb-[80px]
        lg:rounded-t-[60px] lg:pt-[85px] lg:pb-[110px]"
      >
        <div className="container px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="measurection-inner">
            <div
              className="measurection-row mb-[72px] flex flex-col items-center
              lg:mb-[140px] lg:flex-row"
            >
              <motion.div
                className="measurection-left mb-[48px] w-full max-w-[580px]
                lg:mb-0 lg:w-1/2 lg:max-w-none"
                initial={{opacity: 0}}
                viewport={{once: true}}
                whileInView={{opacity: 1}}
                transition={{duration: 1, delay: 0.5}}
              >
                <Img value={image} />
              </motion.div>

              <div className="measurection-right w-full lg:w-1/2">
                <div
                  className="measurection-right-wrap mx-auto w-full px-2 max-w-[580px]
                  md:px-0
                  lg:max-w-[452px]"
                >
                  <h2 className="measurection-right__title heading-2 mb-4">{title}</h2>

                  <p className="measurection-right__text body-m mb-8 text-secondary">{subtitle}</p>

                  {link?.visibility &&
                    (link.internal ? (
                      <Link href={link.url} passHref>
                        <a className="measurection-right__link primary-btn">{link.text}</a>
                      </Link>
                    ) : (
                      <a
                        className="measurection-right__link primary-btn"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                    ))}
                </div>
              </div>
            </div>

            <div
              className="measurection-row grid grid-cols-1 gap-[40px] px-2
              max-w-[580px] mx-auto
              md:px-0
              lg:max-w-none lg:grid-cols-4 lg:gap-[60px]"
            >
              {cols?.length > 0 &&
                cols.map(({_key, title, text}) => {
                  return (
                    <div className="measurection-col" key={_key}>
                      <div className="measurection-item">
                        <h3
                          className="measurection-item__title mb-4 font-poppins text-[24px]
                          font-semibold leading-[140%] text-black lg:mb-6"
                        >
                          {title}
                        </h3>

                        <p className="measurection-item__text body-m text-secondary">{text}</p>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
