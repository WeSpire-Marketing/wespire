import Icon from '../../icons/AnimatedUnderline'
import JobCard from '../OpeningsPressSection/components/JobCard'
import NoJobCard from '../OpeningsPressSection/components/NoJobCard'

import {injectIconToSpanStr} from '../../../utils'

export default function OpeningsSection({title, openings}) {
  return (
    <section className="openings-section bg-neverPreachy">
      <div
        className="outer rounded-t-[30px] bg-gallery pt-[48px] pb-[110px]
        lg:rounded-t-[60px] lg:py-[140px]"
      >
        <div className="container">
          <div className="inner bg-">
            <h2 className="openings-section__title heading-2 mb-6 lg:mb-[56px]">
              {injectIconToSpanStr(title, () => (
                <Icon
                  className="absolute bottom-[-2px] w-full
                  lg:bottom-[-6px]"
                />
              ))}
            </h2>

            <ul
              className="openings-section__cards grid grid-cols-1 gap-6
              sm:grid-cols-2"
            >
              {openings && openings?.length > 0 ? (
                openings.map(({_key, ...props}) => <JobCard key={_key} {...props} />)
              ) : (
                <NoJobCard />
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
