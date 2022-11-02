import {useLayoutEffect} from 'react'

import Img from '../../Img'
import {ContactForm} from '../../forms'
import Icon from '../../icons/AnimatedTwoMarksBlue'

import {injectIconToSpanStr} from '../../../utils'

export default function ContactusSection({image, title, cols, formId}) {
  useLayoutEffect(() => {
    if (document) {
      const main = document.querySelector('.main-layout')
      main.style.backgroundColor = '#DEEBFD'
    }
  }, [])

  return (
    <div className="contact-us-page bg-pampas [&_.footer]:rounded-t-[30px] [&_.footer]:lg:rounded-t-[60px]">
      <section className="bg-pampas pt-[160px] pb-[100px] lg:pt-[185px] lg:pb-[140px]">
        <div className="container px-2 lg:px-4">
          <div className="inner flex flex-col justify-between gap-[100px] lg:flex-row">
            <div className="inner__left w-full lg:w-[51%]">
              <div className="inner__left-image mb-[40px] overflow-hidden rounded-[16px]">
                <Img value={image} />
              </div>

              {cols?.length > 0 && (
                <ul className="flex flex-col gap-6 px-2 lg:flex-row lg:gap-[72px] lg:px-0">
                  {cols.map((col, idx) => {
                    return (
                      <li className="flex-1" key={col.title + idx}>
                        <p className="subtitle-m mb-2 lg:mb-4">{col.title}</p>
                        <p className="body-m text-secondary">{col.text}</p>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>

            <div className="inner__right w-full lg:w-[calc(49%-100px)]">
              <h1 className="heading-1 lg:heading-2 mb-8 lg:mb-6">
                {injectIconToSpanStr(title, () => (
                  <Icon
                    className="absolute top-[-25px] right-[-35px] max-w-[35px]
                      lg:top-[-25px] lg:right-[-45px] lg:max-w-[45px]"
                  />
                ))}
              </h1>

              <ContactForm formId={formId} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
