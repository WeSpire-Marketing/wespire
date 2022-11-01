import JobCard from './components/JobCard'
import NewsCard from './components/NewsCard'

import Icon1 from '../../icons/AnimatedUnderline'
import Icon2 from '../../icons/AnimatedTwoMarks'

import {injectIconToSpanStr} from '../../../utils'

export default function OpeningsPressSection({title = '', title2 = '', openings, news}) {
  return (
    <section className="opressection bg-gallery py-[100px] lg:py-[140px]">
      <div className="container">
        <div className="opressection__inner">
          <h2 className="opressection__title heading-2 mb-6 lg:mb-[56px]">
            {injectIconToSpanStr(title, () => (
              <Icon1
                className="absolute bottom-[-2px] w-full
                lg:bottom-[-6px]"
              />
            ))}
          </h2>

          <ul
            className="opressection__cards mb-[100px] grid grid-cols-1 gap-4
            md:grid-cols-2
            lg:mb-[140px] lg:grid-cols-2 lg:gap-6"
          >
            {openings.map(({_key, ...props}) => {
              return <JobCard key={_key} {...props} />
            })}
          </ul>

          <h2 className="opressection__title heading-2 mb-4 lg:mb-[46px]">
            {injectIconToSpanStr(title2, () => (
              <Icon2
                className="absolute top-[-10px] left-[-15px] w-full max-w-[25px]
                lg:top-[-20px] lg:left-[-30px] lg:max-w-[43px]"
              />
            ))}
          </h2>

          <ul
            className="opressection__cards grid grid-cols-1 gap-6
            lg:grid-cols-2"
          >
            {news.map(({_key, ...props}) => {
              return <NewsCard key={_key} {...props} />
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
