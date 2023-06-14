import TabsWithNav from './components/TabsWithNav'
import Icon from '../../icons/AnimatedSparkle'

import {injectIconToSpanStr} from '../../../utils'

export default function TabsSection({title, tabs, id = ''}) {
  return (
    <section className="tabsection bg-gallery" id={id}>
      <div
        className="tabsection__outer rounded-t-[30px] bg-pampas pt-[48px] pb-[64px]
        lg:rounded-t-[60px] lg:pt-[120px] lg:pb-[140px]"
      >
        <div className="container px-0 lg:px-8">
          <div className="tabsection__inner">
            <h2
              className="tabsection__title heading-2 mx-auto mb-[42px] max-w-[310px] text-center
              md:max-w-[448px]
              lg:mb-[80px] lg:max-w-[660px]"
            >
              {injectIconToSpanStr(title, () => (
                <Icon
                  className="absolute top-[-12px] right-[-50px] h-auto w-[50px]"
                  color="#EA7F49"
                />
              ))}
            </h2>

            <TabsWithNav tabs={tabs} />
          </div>
        </div>
      </div>
    </section>
  )
}
