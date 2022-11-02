import {useRef, useState} from 'react'

import LinkCard from '../../LinkCard'
import PageMeta from '../../PageMeta'
import BlogCard from '../../BlogCard'
import Pagination from '../../Pagination'
import SearchPanel from '../../SearchPanel'
import Icon from '../../icons/AnimatedHighlight'
import MainLayout from '../../layouts/MainLayout'
import CategoriesList from '../../CategoriesList'
import SessionsSection from '../SessionSection'

import {GetForm} from '../../../utils//forms'
import usePaginate from '../../../utils//hooks/usePaginate'
import {filterBlogsByQuery, injectIconToSpanStr} from '../../../utils/'
import useCustomScrollBehavior from '../../../utils/hooks/useCustomScrollBehavior'

export default function ResourcesTemplate({
  categories,
  title,
  subtitle,
  cards,
  form,
  blogs,
  sessionSection,
}) {
  useCustomScrollBehavior()

  const scrollToRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchingQuery, setSearchingQuery] = useState('')
  const [isSearchPanelVisible, setSearchPanelVisible] = useState(false)
  const filteredBlogs = filterBlogsByQuery(blogs, searchingQuery)
  const paginatedBlogs = usePaginate(filteredBlogs, 9)

  const callSetPageAndScroll = (callback) => {
    // scroll to the categories after user interact with pagination
    if (scrollToRef.current && window) {
      const scrollDistance = scrollToRef.current.offsetTop
      const offset = 30
      window.scrollTo(0, scrollDistance - offset)
    }
    callback()
  }

  const handleQueryChange = (e) => {
    if (e?.target) setSearchingQuery(e.target.value)
  }

  const handleCategoryClick = (category) => {
    setSearchingQuery(category)
  }

  return (
    <div className="resoursespage bg-gallery">
      <section className="overflow-hidden pt-[170px] pb-[100px] lg:pt-[184px] lg:pb-[140px]">
        <div className="container px-0 lg:px-8">
          <div className="inner">
            <div className="hero__text mb-[100px] text-center lg:mb-[140px]">
              <h1
                className="heading-1 lg:heading-2 mx-auto mb-4 w-full max-w-[696px] px-4
                text-black lg:px-0"
              >
                {injectIconToSpanStr(title, () => (
                  <Icon
                    className="absolute top-[-40px] right-[-15px] w-[40px]
                    lg:top-[-30px] lg:right-[-60px] lg:w-[50px]"
                  />
                ))}
              </h1>

              <p
                className="body-m mx-auto mb-[48px] w-full max-w-[460px] px-4 text-[#2E2E2E]
                lg:mb-[64px] lg:px-0"
              >
                {subtitle}
              </p>

              <div
                className="resoursecards mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-4 px-2
                lg:grid-cols-2 lg:gap-6 lg:px-4"
              >
                {cards?.length > 0 &&
                  cards.map((cardData) => {
                    return <LinkCard {...cardData} key={cardData._key} />
                  })}
              </div>
            </div>

            <div className="relative mb-6 lg:mb-[56px]" ref={scrollToRef}>
              <div className="flex overflow-x-auto px-4 lg:px-0">
                <CategoriesList
                  query={searchingQuery}
                  categories={categories}
                  isSearchVisible={isSearchPanelVisible}
                  toggleSearch={() => setSearchPanelVisible(!isSearchPanelVisible)}
                  onCategoryClick={handleCategoryClick}
                />
              </div>
              <SearchPanel
                isVisible={isSearchPanelVisible}
                query={searchingQuery}
                onQueryChange={handleQueryChange}
                onClearSearch={() => setSearchingQuery('')}
              />
            </div>

            {paginatedBlogs?.length > 0 ? (
              <ul
                className="blog__list mb-[40px] grid grid-cols-1 gap-4 px-4
                lg:mb-[72px] lg:grid-cols-3 lg:gap-6 lg:px-0"
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

            {paginatedBlogs?.length > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={paginatedBlogs.length}
                onClick={(page) => callSetPageAndScroll(() => setCurrentPage(page))}
                onPrevClick={() => callSetPageAndScroll(() => setCurrentPage((prev) => prev - 1))}
                onNextClick={() => callSetPageAndScroll(() => setCurrentPage((prev) => prev + 1))}
              />
            )}

            {form.isForm && <GetForm className="mt-[100px] lg:mt-[152px]" {...form.form[0]} />}
          </div>
        </div>
      </section>

      <SessionsSection {...sessionSection} />
    </div>
  )
}
