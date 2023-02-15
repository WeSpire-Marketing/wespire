import Link from 'next/link'
import {motion} from 'framer-motion'
import {PortableText} from '@portabletext/react'

import Img from '../../Img'
import Icon from '../../icons/AnimatedIcon'

import {injectIconToSpanStr} from '../../../utils'
import {HubspotForm} from '../../forms'
import {portableHyperlinkLight} from '../../../utils/portableHyperlink'

export default function HeroCTASection({title, text, textHyperlink, link, image, formId}) {
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
            <div
              className="herocta__left-wrap max-w-[464px] px-2 text-center
              md:max-w-[580px]
              lg:px-0 lg:text-left"
            >
              <h1 className="herocta__title heading-1 lg:heading-2 mb-4">
                {injectIconToSpanStr(title, Icon)}
              </h1>

              <div
                className={`herocta__text body-m text-secondary 
              ${formId?.trim() ? 'mb-[16px] lg:mb-[24px]' : 'mb-[40px] lg:mb-[48px]'}`}
              >
                <PortableText
                  value={textHyperlink}
                  components={portableHyperlinkLight}
                  onMissingComponent={false}
                />
              </div>

              {formId?.trim() && (
                <div className="flex flex-col items-center md:items-start mx-auto lg:m-0 gap-4 relative mb-[40px] lg:flex-row lg:gap-[8px] md:max-w-[475px] lg:max-w-[475px] lg:mb-[48px]">
                  <HubspotForm formId={formId} page="hero-and-form-page" />

                  {/* {link?.internal ? (
                  <Link href={link.url} passHref>
                    <a
                      className={`w-full primary-btn bg-smart shrink-0 text-center py-[11px] lg:w-auto`}
                    >
                      {link.text}
                    </a>
                  </Link>
                ) : (
                  <a
                    className={`w-full primary-btn bg-smart shrink-0 text-center py-[11px] lg:w-auto`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                )} */}
                </div>
              )}
            </div>
          </div>

          <motion.div
            className="herocta__right w-full max-w-[580px] lg:w-1/2"
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
