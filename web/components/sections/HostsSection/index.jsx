import HostCard from './components/HostCard'
import Icon from '../../icons/AnimatedHighlight'

import {injectIconToSpanStr} from '../../../utils'

export default function HostsSection({title, cards}) {
  return (
    <section className="hostsection pb-[115px]">
      <div className="container px-2 lg:px-8">
        <h2
          className="hostsection__title heading-2 mx-auto mb-6 w-full max-w-[292px] text-center
          lg:mb-[48px] lg:max-w-[720px]"
        >
          {injectIconToSpanStr(title, () => (
            <Icon
              className="absolute top-[-20px] left-[-35px] max-w-[40px]
              lg:top-[-30px] lg:left-[-45px] lg:max-w-[60px]"
            />
          ))}
        </h2>

        {cards?.length > 0 && (
          <ul className="hosts-cards grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {cards.map(({_key, ...props}) => (
              <HostCard key={_key} {...props} />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
