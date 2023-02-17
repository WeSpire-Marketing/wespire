import JobCard from './components/JobCard'
import NewsCard from './components/NewsCard'
import NoJobCard from './components/NoJobCard'
import Slider from './components/Slider'

import Icon1 from '../../icons/AnimatedUnderline'
import Icon2 from '../../icons/AnimatedTwoMarks'

import {injectIconToSpanStr} from '../../../utils'
import useWindowSize from '../../../utils/hooks/useWindowSize'

export default function OpeningsPressSection({title = '', title2 = '', openings, news}) {
  const {width} = useWindowSize()

  return (
    <section className="opressection bg-gallery py-[100px] lg:py-[140px]">
      <div className="container-no-p">
        <div className="opressection__inner px-4 lg:px-8">
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
            {openings && openings?.length > 0 ? (
              openings.map(({_key, ...props}) => {
                return <JobCard key={_key} {...props} />
              })
            ) : (
              <NoJobCard />
            )}
          </ul>

          <h2 className="opressection__title heading-2 mb-4 lg:mb-[46px]">
            {injectIconToSpanStr(title2, () => (
              <Icon2
                className="absolute top-[-10px] left-[-15px] w-full max-w-[25px]
                lg:top-[-20px] lg:left-[-30px] lg:max-w-[43px]"
              />
            ))}
          </h2>

          {width > 992 && (
            <ul
              className="articlespressection__cards grid grid-cols-1 gap-4
              md:grid-cols-2
              lg:gap-6"
            >
              {(news ?? []).map(({_key, ...props}) => (
                <NewsCard key={_key} {...props} />
              ))}
            </ul>
          )}
        </div>

        {width <= 992 && (
          <div>
            <Slider cards={news ?? []} />
          </div>
        )}
      </div>
    </section>
  )
}
