import Icon from '../../icons/AnimatedHighlights'

import {injectIconToSpanStr} from '../../../utils'

export default function HeroInfo({title = '', text}) {
  return (
    <section
      className="herfection bg-thriving pt-[170px] pb-[48px]
      sm:pb-[65px]
      md:pb-[82px]
      lg:pb-[100px] lg:pt-[205px]"
    >
      <div className="container max-w-[428px] sm:max-w-[564px] md:max-w-[648px] lg:max-w-none">
        <h1 className="herfection__title heading-2 mx-auto mb-4 max-w-[854px] text-center text-white ">
          {injectIconToSpanStr(title, () => (
            <Icon
              className="absolute top-[-35px] left-[-25px] max-w-[35px]
              sm:top-[-32px]
              md:max-w-[40px]
              lg:top-[-40px] lg:left-[-50px] lg:max-w-none"
            />
          ))}
        </h1>

        <p className="herfection__text body-m mx-auto max-w-[535px] text-center text-gallery">
          {text}
        </p>
      </div>
    </section>
  )
}
