import Img from '../../Img'
import Icon from '../../icons/AnimatedIcon'
import SponsorsBlock from '../../SponsorsBlock'

import {injectIconToSpanStr} from '../../../utils'

export default function HeroSection({title = '', subtitle = '', image, sponsors}) {
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
            className="hero__subtitle body-m mx-auto mb-[45px] max-w-[450px] text-center
            sm:max-w-[550px]
            md:max-w-[625px]
            lg:mb-[56px]"
          >
            {subtitle}
          </p>
        </div>
      </div>

      <Img
        className="hero__image relative z-20 mx-auto w-full max-w-[1288px] px-[7px] lg:static"
        value={image}
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
