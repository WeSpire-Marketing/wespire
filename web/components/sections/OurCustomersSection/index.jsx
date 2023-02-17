import CustomerCard from './components/CustomerCard'
import CustomerQuote from './components/CustomerQuote'
import Icon from '../../icons/AnimatedHighlights'

import {injectIconToSpanStr} from '../../../utils'

export default function OurCustomersSection({page = '', title, quote, cards}) {
  if (page === 'landingTemplateSocialProof') {
    return (
      <section
        className="ourcusection bg-thriving"
        style={{
          background:
            'linear-gradient(180deg, rgba(60,143,115,1) 0%, rgba(60,143,115,1) 81%, rgba(60,143,115,0) 92%)',
        }}
      >
        <div className="bg-gallery pt-[80px] pb-[100px] lg:py-[140px] rounded-t-[30px] lg:rounded-t-[60px]">
          <div className="container px-2 lg:px-8">
            <div className="ourcusection-inner">
              <h2 className="ourcusection__title heading-2 mb-6 text-center lg:mb-[56px] lg:text-left">
                {injectIconToSpanStr(title, () => (
                  <Icon
                    className="absolute top-[-10px] left-[-15px] h-auto w-[30px]
                  lg:top-[-20px] lg:left-[-25px] lg:w-[50px]"
                    color="#1771DC"
                  />
                ))}
              </h2>

              <CustomerQuote className="mb-[64px] lg:mb-[80px]" {...quote} />

              <div className="ourcusection-cards flex flex-col gap-6 lg:flex-row">
                {(cards ?? []).map((card) => (
                  <CustomerCard key={card._key} {...card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="ourcusection pt-[80px] pb-[100px] lg:py-[140px] bg-gallery">
      <div className="container px-2 lg:px-8">
        <div className="ourcusection-inner">
          <h2 className="ourcusection__title heading-2 mb-6 text-center lg:mb-[56px] lg:text-left">
            {injectIconToSpanStr(title, () => (
              <Icon
                className="absolute top-[-10px] left-[-15px] h-auto w-[30px]
                lg:top-[-20px] lg:left-[-25px] lg:w-[50px]"
                color="#1771DC"
              />
            ))}
          </h2>

          <CustomerQuote className="mb-[64px] lg:mb-[80px]" {...quote} />

          <div className="ourcusection-cards flex flex-col gap-6 lg:flex-row">
            {(cards ?? []).map((card) => (
              <CustomerCard key={card._key} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
