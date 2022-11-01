import BlogCard from '../BlogCard'
import Icon from '../icons/AnimatedLines'

import {injectIconToSpanStr} from '../../utils'

export default function RelatedBlock({items = []}) {
  const title = 'Related <span>content</span>'

  return (
    <div>
      <h2 className="heading-2 mb-6 text-black lg:mb-[48px]">
        {injectIconToSpanStr(title, () => (
          <Icon
            className="absolute top-[-20px] right-[-25px] max-w-[30px]
            lg:top-[-20px] lg:right-[-40px] lg:max-w-[50px]"
            color="#EA7F49"
          />
        ))}
      </h2>

      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {items?.length > 0 &&
          items.map((blogData, idx) => {
            return (
              <li className="flex" key={blogData.slug.current + idx}>
                <BlogCard {...blogData} />
              </li>
            )
          })}
      </ul>
    </div>
  )
}
