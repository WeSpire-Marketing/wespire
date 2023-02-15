import Video from '../../Video'
import Icon from '../../icons/AnimatedIcon'
import SignMeUpForm from '../../forms/SignMeUpForm'

import {injectIconToSpanStr} from '../../../utils'

export default function HeroVideo({title = '', subtitle, formId, video}) {
  return (
    <section
      className="herocta overflow-hidden bg-gallery pt-[170px] pb-[70px]
      lg:pt-[149px] lg:pb-[140px]"
    >
      <div className="container px-2 lg:px-8">
        <div
          className="herocta__inner flex flex-col items-center justify-between gap-[56px]
          lg:flex-row lg:gap-[64px]"
        >
          <div className="herocta__left w-full px-2 lg:px-0">
            <div className="herocta__left-wrap max-w-[464px] mx-auto lg:mx-0">
              <h1 className="herocta__title heading-1 mb-4 text-center lg:text-left lg:heading-2">
                {injectIconToSpanStr(title, () => (
                  <Icon className="z-[-1]" />
                ))}
              </h1>

              <p
                className="herocta__text body-m mx-auto mb-[16px] max-w-[380px] text-center text-secondary
                sm:max-w-[410px]
                lg:mb-[24px] lg:max-w-none lg:text-left"
              >
                {subtitle}
              </p>

              <SignMeUpForm
                formClasses="flex flex-col gap-4 items-center mx-auto relative max-w-[350px]
                lg:flex-row lg:gap-2 lg:max-w-[475px]"
                buttonClasses="w-full primary-btn bg-smart shrink-0 py-[11px]
                lg:w-auto"
                errorClasses="absolute top-[-21px] h-fit lg:top-[unset]"
                placeholder="Enter your business email"
                buttonText="Get a Demo"
                formId={formId}
              />
            </div>
          </div>

          <div
            className="herocta__right w-full mx-auto max-w-[420px]
            md:max-w-[535px]
            lg:max-w-[580px] lg:ml-auto"
          >
            <Video video={video} />
          </div>
        </div>
      </div>
    </section>
  )
}
