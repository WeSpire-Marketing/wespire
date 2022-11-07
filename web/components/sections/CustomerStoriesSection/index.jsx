import {useRef, useState} from 'react'

import Pagination from '../../Pagination'
import Icon from '../../icons/AnimatedPluses'
import CustomerCard from '../../CustomerCard'

import {injectIconToSpanStr} from '../../../utils'
import usePaginate from '../../../utils/hooks/usePaginate'

export default function CustomerStoriesSection({title, stories: items = []}) {
  const scrollToRef = useRef(null)
  const paginatedItems = usePaginate(items, 4)
  const [currentPage, setCurrentPage] = useState(0)

  const callSetPageAndScroll = (callback) => {
    // scroll to the categories after user interact with pagination
    if (scrollToRef.current && window) {
      const scrollDistance = scrollToRef.current.offsetTop
      const offset = 30
      window.scrollTo(0, scrollDistance - offset)
    }
    callback()
  }

  return (
    <section className="pb-[100px] lg:pb-[140px]">
      <div className="container">
        <div className="inner">
          <h2 className="heading-2 mb-6 lg:mb-[48px]" ref={scrollToRef}>
            {injectIconToSpanStr(title, () => (
              <Icon
                className="absolute top-[-15px] right-[-40px] w-[40px]
                lg:top-[-15px] lg:right-[-55px] lg:w-[60px]"
              />
            ))}
          </h2>

          {paginatedItems?.length > 0 ? (
            <div
              className="mb-10 grid grid-cols-1 gap-4
              sm:grid-cols-2
              lg:mb-[72px] lg:gap-8"
            >
              {paginatedItems[currentPage].map(({storyCard}, idx) => {
                return <CustomerCard key={storyCard.slug + idx} {...storyCard} />
              })}
            </div>
          ) : (
            <div className="flex min-h-[556px] items-center justify-center">
              <p className="subtitle-s text-secondary">More stories coming soon</p>
            </div>
          )}

          {paginatedItems?.length > 1 && (
            <Pagination
              totalPages={paginatedItems.length}
              currentPage={currentPage}
              onClick={(page) => callSetPageAndScroll(() => setCurrentPage(page))}
              onPrevClick={() => callSetPageAndScroll(() => setCurrentPage((prev) => prev - 1))}
              onNextClick={() => callSetPageAndScroll(() => setCurrentPage((prev) => prev + 1))}
            />
          )}
        </div>
      </div>
    </section>
  )
}
