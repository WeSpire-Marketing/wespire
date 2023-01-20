import Link from 'next/link'

import Icon from '../../icons/AnimatedMarksEnd'

import {injectIconToSpanStr} from '../../../utils'

import Video from '../../Video'

export default function HeroVideoAndForm({className = '', title, text, link, video}) {
  return (
    <section
      className={
        className +
        ' herocta overflow-hidden bg-pampas pt-[170px] pb-[75px] lg:pt-[150px] lg:pb-[140px]'
      }
    >
      <div className="container px-2 lg:px-8">
        <div
          className="herocta__inner flex flex-col items-center justify-between gap-[56px]
          lg:flex-row lg:gap-[64px]"
        >
          <div className="herocta__left w-full">
            <div className="herocta__left-wrap mx-auto max-w-[464px] px-2 lg:mx-0 lg:px-0">
              <h1 className="herocta__title heading-1 lg:heading-2 mb-4 text-center lg:text-left">
                {injectIconToSpanStr(title, () => (
                  <Icon
                    className="absolute top-[-30px] right-[-25px] max-w-[30px]
                    sm:right-[-32px] sm:max-w-[40px]
                    md:right-[-36px] md:max-w-[45px]
                    lg:right-[-66px] lg:top-[-45px] lg:max-w-full"
                  />
                ))}
              </h1>

              <p
                className="herocta__text body-m mx-auto mb-[35px] max-w-[375px] text-center text-secondary
                sm:max-w-[410px]
                lg:mb-[46px] lg:max-w-none lg:text-left"
              >
                {text}
              </p>

              {link?.internal ? (
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
              )}
            </div>
          </div>

          <div
            className="w-full mx-auto max-w-[420px]
              md:max-w-[520px]
              lg:max-w-[580px] lg:ml-auto"
          >
            <Video video={video} aspect="1/1" />
          </div>
        </div>
      </div>
    </section>
  )
}
