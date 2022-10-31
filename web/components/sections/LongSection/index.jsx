import Link from 'next/link'
import {motion} from 'framer-motion'

import Row from '../../Row'
import ImageCard from '../../ImageCard'
import Icon from '../../icons/AnimatedStroke'

import {injectIconToSpanStr} from '../../../utils'

export default function LongSection({title = '', rows}) {
  return (
    <section
      className="longsection relative overflow-hidden bg-gallery pt-[70px] pb-[100px]
      sm:pt-[85px] sm:pb-[115px]
      md:pt-[100px] md:pb-[130px]
      lg:pt-[115px] lg:pb-[140px]"
    >
      <div
        className="container px-2
        sm:px-6
        lg:px-8"
      >
        <h2
          className="longsection__title heading-2 mx-auto mb-[24px] max-w-[758px] text-center
          sm:mb-[38px]
          md:mb-[52px]
          lg:mb-[66px]"
        >
          {injectIconToSpanStr(title, () => (
            <Icon className="absolute bottom-[-54px] left-[50%] w-[75%] translate-x-[-50%]" />
          ))}
        </h2>

        <div className="flex flex-col gap-[72px] sm:gap-[81px] md:gap-[90px] lg:gap-[99px]">
          {rows.map(({_key, title, text, imageData, link, cardColor}, idx) => {
            return (
              <Row
                className={`${
                  idx % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'
                } flex items-center gap-6`}
                key={_key}
              >
                <div className="longsection__col flex w-full">
                  <ImageCard image={imageData} color={cardColor} />
                </div>

                <div className="longsection__col w-full px-2 sm:px-0">
                  <div className="md:mx-auto md:max-w-[286px] lg:max-w-[416px]">
                    <motion.h3
                      className="longsection__heading heading-3 mb-4"
                      initial={{opacity: 0, x: idx % 2 == 0 ? 100 : -100}}
                      whileInView={{opacity: 1, x: 0}}
                      viewport={{once: true}}
                      transition={{duration: 1}}
                    >
                      {title}
                    </motion.h3>

                    <motion.p
                      className="longsection__text body-m mb-6 text-secondary"
                      initial={{opacity: 0, x: idx % 2 == 0 ? 100 : -100}}
                      whileInView={{opacity: 1, x: 0}}
                      transition={{duration: 1, delay: 0.2}}
                      viewport={{once: true}}
                    >
                      {text}
                    </motion.p>

                    {link.internal ? (
                      <Link href={link.url} passHref>
                        <a className="longsection__link stroke-btn">{link.text}</a>
                      </Link>
                    ) : (
                      <a
                        className="longsection__link stroke-btn"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {link.text}
                      </a>
                    )}
                  </div>
                </div>
              </Row>
            )
          })}
        </div>
      </div>
    </section>
  )
}
