import Link from 'next/link'
import Img from '../../Img'

import {motion} from 'framer-motion'

export default function ImageTextSection({image, title, subtitle, link}) {
  return (
    <section className="measurection">
      <div
        className="measurection-outer  bg-gallery pt-8 pb-[80px]
         lg:pt-[85px] lg:pb-[110px]"
      >
        <div className="container px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="measurection-inner">
            <div
              className="measurection-row  flex flex-col items-center
               lg:flex-row"
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
          </div>
        </div>
      </div>
    </section>
  )
}
