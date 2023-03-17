import LeaderCard from '../../LeaderCard'
import Icon from '../../icons/AnimatedHighlight'

import {injectIconToSpanStr} from '../../../utils'

export default function LeadershipSection({title, subtitle, cards, index}) {
  return (
    <section className="leader-section mb-[100px] lg:mb-[140px]">
      <div className="container">
        <div className="leader-section__inner">
          <div
            className="leader-section__text mx-auto mb-[56px] max-w-[470px] text-center
            lg:mb-[72px]"
          >
            {index === 0 ? (
              <h1 className="leader-section__text__title heading-1 lg:heading-2 mb-4">
                {injectIconToSpanStr(title, () => (
                  <Icon
                    className="absolute top-[-23px] right-[-35px] max-w-[45px] rotate-[-90deg]
                  lg:top-[-25px] lg:right-[-45px] lg:max-w-[65px]"
                    color="#3C8F73"
                  />
                ))}
              </h1>
            ) : (
              <h2 className="leader-section__text__title heading-2 lg:heading-3 mb-4">
                {injectIconToSpanStr(title, () => (
                  <Icon
                    className="absolute top-[-23px] right-[-35px] max-w-[45px] rotate-[-90deg]
                  lg:top-[-25px] lg:right-[-45px] lg:max-w-[65px]"
                    color="#3C8F73"
                  />
                ))}
              </h2>
            )}

            <p className="leader-section__text__subtitle body-m text-secondary">{subtitle}</p>
          </div>

          <ul
            className="leader-section__cards grid grid-cols-1 gap-8 gap-y-[48px] max-w-[386px] mx-auto
            md:grid-cols-2 md:max-w-none
            lg:grid-cols-3 lg:gap-y-[64px]"
          >
            {(cards ?? []).map(({_key, ...props}) => (
              <LeaderCard key={_key} {...props} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
