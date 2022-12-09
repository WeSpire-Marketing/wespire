import {useRef, useState} from 'react'

import BlogCard from '../../BlogCard'
import Pagination from '../../Pagination'
import Icon from '../../icons/AnimatedStroke'
import Icon2 from '../../icons/AnimatedTwoMarks'
import NewsCard from '../OpeningsPressSection/components/NewsCard'

import {injectIconToSpanStr} from '../../../utils'
import usePaginate from '../../../utils/hooks/usePaginate'

export default function ArticlesPressSection({title, blogs, title2, news}) {
  const scrollToRef = useRef(null)
  const paginatedBlogs = usePaginate(blogs, 9)
  const [currentPage, setCurrentPage] = useState(0)

  const callSetPageAndScroll = (callback) => {
    // scroll to the ref after user interact with pagination
    if (scrollToRef.current && window) {
      const scrollDistance = scrollToRef.current.offsetTop
      const offset = 30
      setTimeout(function () {
        window.scrollTo(0, scrollDistance - offset)
      }, 100)
    }
    callback()
  }

  return (
    <section className="articlespressection bg-pampas">
      <div
        className="articlespressection-outer rounded-t-[30px] bg-gallery pt-[48px] pb-[100px]
        lg:rounded-t-[60px] lg:pt-[100px] lg:pb-[140px]"
      >
        <div className="container">
          <div className="articlespressection-inner">
            <h2
              className="articlespressection__title heading-2 mb-[64px] w-full max-w-[500px]
              lg:mb-[48px]"
              ref={scrollToRef}
            >
              {injectIconToSpanStr(title, () => (
                <Icon className="absolute bottom-[-55px] w-full" color="#3C8F73" />
              ))}
            </h2>

            {paginatedBlogs?.length > 0 ? (
              <ul
                className="blog__list mb-[40px] grid grid-cols-1 gap-4
                sm:grid-cols-2
                lg:mb-[72px] lg:grid-cols-3 lg:gap-6"
              >
                {paginatedBlogs[currentPage].map((blogData, idx) => {
                  return (
                    <li className="flex" key={blogData.slug.current + idx}>
                      <BlogCard {...blogData} />
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className="flex min-h-[556px] items-center justify-center">
                <p className="subtitle-s text-secondary">More blogs coming soon</p>
              </div>
            )}

            <div className="overflow-x-auto">
              <div className="flex justify-center px-4 py-2 shrink-0 min-w-fit">
                <Pagination
                  currentPage={currentPage}
                  totalPages={paginatedBlogs?.length ?? 0}
                  setCurrentPage={(pageIndex) =>
                    callSetPageAndScroll(() => setCurrentPage(pageIndex))
                  }
                />
              </div>
            </div>

            <h2
              className="articlespressection__title  heading-2 mt-[100px] mb-6
              w-full max-w-[500px]
              lg:mt-[120px] lg:mb-[46px]"
            >
              {injectIconToSpanStr(title2, () => (
                <Icon2
                  className="absolute top-[-7px] left-[-15px] max-w-[20px]
                  lg:top-[-20px] lg:left-[-30px] lg:max-w-[40px]"
                />
              ))}
            </h2>

            <ul
              className="articlespressection__cards grid grid-cols-1 gap-4
              md:grid-cols-2
              lg:gap-6"
            >
              {(news ?? []).map(({_key, ...props}) => (
                <NewsCard key={_key} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
