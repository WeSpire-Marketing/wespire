import Link from 'next/link'
import {motion} from 'framer-motion'

import Img from '../../Img'
import Icon from '../../icons/AnimatedIcon'

import {injectIconToSpanStr} from '../../../utils'

export default function HeroCTASection({title, text, link, image}) {
  return (
    <section
      className="herocta overflow-hidden bg-pampas pt-[170px] pb-[100px]
      lg:pt-[150px] lg:pb-[140px]"
    >
      <div className="container px-2 lg:px-8">
        <div
          className="herocta__inner flex flex-col items-center justify-between gap-[56px]
          lg:flex-row lg:gap-[64px]"
        >
          <div className="herocta__left">
            <div className="herocta__left-wrap max-w-[464px] px-2 text-center lg:px-0 lg:text-left">
              <h1 className="herocta__title heading-1 lg:heading-2 mb-4">
                {injectIconToSpanStr(title, Icon)}
              </h1>

              <p className="herocta__text body-m mb-[40px] text-secondary lg:mb-[48px]">{text}</p>

              {link.internal ? (
                <Link href={link.url} passHref>
                  <a className="herocta__link primary-btn">{link.text}</a>
                </Link>
              ) : (
                <a
                  className="herocta__link primary-btn"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              )}
            </div>
          </div>

          <motion.div
            className="herocta__right w-full lg:w-1/2"
            viewport={{once: true}}
            initial={{opacity: 0, y: -100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.5}}
          >
            <Img value={{...image.image, alt: image.alt}} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
