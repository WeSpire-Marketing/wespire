import Aside from '../../Aside'
import Content from '../../Content'

import useCustomScrollBehavior from '../../../utils/hooks/useCustomScrollBehavior'

export default function PrivacyPolicyTemplate({headings, ...props}) {
  useCustomScrollBehavior()

  return (
    <div className="privacypage bg-gallery">
      <div className="outer pt-[170px] pb-[100px] lg:pt-[192px] lg:pb-[140px]">
        <div className="container px-2 lg:px-4">
          <div
            className="inner flex grid-cols-[1fr_280px] flex-col-reverse gap-[80px]
            lg:grid lg:gap-[128px]"
          >
            <div className="content prose min-w-[100%]">
              <Content {...props} />
            </div>

            <Aside items={headings} />
          </div>
        </div>
      </div>
    </div>
  )
}
