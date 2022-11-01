import Item from './components/Item'
import Icon from '../../icons/AnimatedIcon'

import {injectIconToSpanStr} from '../../../utils'

export default function CapabilitiesSection({title, capabilities}) {
  return (
    <section className="capabilities py-[100px] lg:py-[140px]">
      <div className="container">
        <div className="inner">
          <h2
            className="title heading-2 mx-auto mb-8 w-full max-w-[600px] text-center lg:mb-[80px]
            [&>span]:pb-[10px]"
          >
            {injectIconToSpanStr(title, () => (
              <Icon color="#6F879A" />
            ))}
          </h2>

          <ul
            className="capabilities__list flex flex-col items-start justify-between gap-[56px]
            lg:flex-row lg:gap-[24px]"
          >
            {capabilities.map(({_key, ...props}) => {
              return <Item key={_key} {...props} />
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
