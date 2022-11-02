import BlogCardHoriz from '../../BlogCardHoriz'

import Icon from '../../icons/AnimatedPluses'

import {injectIconToSpanStr} from '../../../utils'

export default function SessionSection({title = '', cards = []}) {
  return (
    <section className="sessions overflow-hidden pb-[100px] lg:pb-[140px]">
      <div className="container">
        <div className="inner">
          <h2
            className="heading-2 mb-[40px] w-full max-w-[359px]
            lg:max-w-[480px]"
          >
            {injectIconToSpanStr(title, () => (
              <Icon
                className="absolute right-[-50px] bottom-[-10px] w-[40px]
                lg:top-[5px] lg:right-[-55px] lg:w-[50px]"
              />
            ))}
          </h2>

          <ul className="cards flex flex-col gap-4 lg:gap-[40px]">
            {cards?.length > 0 &&
              cards.map((cardData, idx) => {
                return (
                  <li key={cardData.slug.current + idx}>
                    <BlogCardHoriz {...cardData} reversed={(idx + 1) % 2 === 0} />
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </section>
  )
}
