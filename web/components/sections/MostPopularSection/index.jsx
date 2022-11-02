import Link from 'next/link'

import BlogCard from '../../BlogCard'
import ArrowIcon from '../../icons/ArrowIcon'
import Icon from '../../icons/AnimatedTwoMarksBlue'

import {injectIconToSpanStr} from '../../../utils'

export default function MostPopularSection({title, subtitle, blogs}) {
  return (
    <section className="mopulection pb-[100px] lg:pb-[140px]">
      <div className="container">
        <div className="mopulection-inner relative">
          <h2 className="mopulection__title heading-2 mb-2 lg:mb-[19px] lg:max-w-[485px]">
            {injectIconToSpanStr(title, () => (
              <Icon
                className="absolute top-[-30px] right-[-30px] max-w-[30px]
                lg:top-[-25px] lg:right-[-50px] lg:max-w-[50px]"
              />
            ))}
          </h2>

          <p className="body-m mb-6 lg:mb-[40px] lg:max-w-[335px]">{subtitle}</p>

          {blogs?.length > 0 && (
            <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {blogs.map(({slug, ...props}, idx) => {
                return (
                  <li className="flex" key={slug.current + idx}>
                    <BlogCard slug={slug} {...props} />
                  </li>
                )
              })}
            </ul>
          )}

          <div
            className="mt-8 flex items-center justify-center gap-4
            lg:absolute lg:top-[80px] lg:right-0 lg:mt-0"
          >
            <span className="subtitle-m">See all</span>
            <Link href="/blog">
              <button className="helpful-btn">
                <ArrowIcon fillColor="white" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
