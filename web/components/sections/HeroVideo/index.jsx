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
      <div className="container px-2 lg:px-4">
        <div
          className="herocta__inner flex flex-col items-center justify-between gap-[56px]
          lg:flex-row lg:gap-[64px]"
        >
          <div className="herocta__left w-full px-2 lg:px-0">
            <div className="herocta__left-wrap max-w-[464px]">
              <h1 className="herocta__title heading-2 mb-4">{injectIconToSpanStr(title, Icon)}</h1>

              <p className="herocta__text body-m mb-[40px] text-secondary">{subtitle}</p>

              <SignMeUpForm
                formClasses="flex flex-col gap-4 items-center mx-auto max-w-[475px] relative
                lg:flex-row lg:gap-2"
                buttonClasses="w-full primary-btn bg-smart shrink-0 py-[11px]
                lg:w-auto"
                errorClasses="absolute top-[-21px] h-fit lg:top-[unset]"
                placeholder="Enter your business email"
                buttonText="Sign me up"
                formId={formId}
              />
            </div>
          </div>

          <div className="herocta__right w-full">
            <Video video={video} />
          </div>
        </div>
      </div>
    </section>
  )
}
