import Icon from '../../icons/AnimatedBigArrow'
import SponsorsBlock from '../../SponsorsBlock'

import {GetForm} from '../../../utils/forms'

export default function HeroQuote({form, title, subtitle, sponsors}) {
  return (
    <section className="pt-[200px] pb-[90px] lg:pb-[135px]">
      <div className="container mb-0 lg:mb-[140px]">
        <div className="inner">
          <h1
            className="heading-1 mx-auto mb-4 w-full max-w-[510px] text-center
            md:max-w-[575px]
            lg:heading-2 lg:max-w-[695px]"
          >
            {title}
          </h1>

          <p
            className="body-m relative mx-auto mb-[85px] w-full max-w-[540px] px-6
            text-center text-secondary
            lg:mb-[100px] lg:px-0 lg:max-w-[695px]"
          >
            {subtitle}
            <Icon
              className="absolute right-[-15px] bottom-[-80px] h-[85px]
              lg:right-[-150px] lg:bottom-[-65px] lg:h-auto"
            />
          </p>

          {form.isForm && <GetForm className="mb-0 lg:mb-[140px]" {...form.form[0]} />}
        </div>
      </div>

      <div className="hidden lg:block">
        <SponsorsBlock sponsors={sponsors} />
      </div>
    </section>
  )
}
