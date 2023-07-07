import Img from '../../Img'
import Icon from '../../icons/AnimatedIcon'
import {injectIconToSpanStr} from '../../../utils'

import dynamic from 'next/dynamic'
import {Suspense, memo} from 'react'
const SponsorsBlock = dynamic(() => import('../../SponsorsBlock'), {ssr: false})
const HubspotForm = dynamic(() => import('../../forms/HubspotForm'), {ssr: false})

const HeroSection = ({title = '', subtitle = '', image, sponsors, formId = ''}) => {
  return (
    <section
      className="hero relative bg-pampas pt-[170px] pb-[105px]
      sm:pb-[115px]
      md:pb-[125px]
      lg:pb-[90px] lg:pt-[192px]"
    >
      <div className="container">
        <div className="hero__inner">
          <h1
            className="hero__title heading-1 mx-auto mb-4 max-w-[475px] text-center
            sm:max-w-[580px]
            md:max-w-[650px]
            lg:mb-6 lg:max-w-[800px]"
          >
            {injectIconToSpanStr(title, Icon)}
          </h1>

          <p
            className={`hero__subtitle body-m mx-auto max-w-[450px] px-4 md:px-0 text-center sm:max-w-[550px] md:max-w-[625px]
            ${formId?.trim() ? 'mb-[16px] lg:mb-[24px]' : 'mb-[45px] lg:mb-[56px]'}`}
          >
            {subtitle}
          </p>

          <Suspense>
            {formId?.trim() && (
              <div className="flex flex-col items-center mx-auto gap-4 px-4 md:px-0 relative mb-[45px] lg:flex-row lg:gap-[8px] md:max-w-[475px] lg:max-w-[475px] lg:mb-[56px]">
                <HubspotForm formId={formId} page="home-page" />
              </div>
            )}
          </Suspense>
        </div>
      </div>

      <Img
        className="hero__image relative z-20 mx-auto w-full max-w-[1288px] px-[7px] lg:static"
        value={image}
        priority
      />

      <div className="absolute bottom-0 z-10 w-full">
        <div
          className="sponsors overflow-hidden rounded-t-[30px] border-t bg-gallery py-10
          sm:py-14
          md:py-16
          lg:rounded-t-[48px] lg:py-20"
        >
          <SponsorsBlock sponsors={sponsors} />
        </div>

        <div className="absolute bottom-0 w-full px-4">
          <span className="mx-auto block h-[1px] w-full max-w-[1224px] bg-grey2 underline" />
        </div>
      </div>
    </section>
  )
}
export default memo(HeroSection)
