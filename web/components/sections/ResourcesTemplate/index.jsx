import {useRouter} from 'next/router'
import {useCallback, useEffect, useRef, useState} from 'react'

import LinkCard from '../../LinkCard'
import BlogCard from '../../BlogCard'
import Pagination from '../../Pagination'
import SearchPanel from '../../SearchPanel'
import Icon from '../../icons/AnimatedHighlight'
import CategoriesList from '../../CategoriesList'
import SessionsSection from '../SessionSection'

import {GetForm} from '../../../utils//forms'
import {injectIconToSpanStr} from '../../../utils/'

export default function ResourcesTemplate({
  categories,
  title,
  subtitle,
  cards,
  form,
  blogs,
  totalBlogs,
  sessionSection,
  defaultCategory,
}) {
  const router = useRouter()
  const scrollToRef = useRef(null)
  const getInitialQuery = useCallback(() => {
    if (!router.query.query || typeof router.query.query !== 'string') {
      return ''
    }
    return router.query.query
  }, [router.query.query])
  const [searchingQuery, setSearchingQuery] = useState(getInitialQuery())
  const getInitialPage = useCallback(() => {
    if (
      !router.query.page ||
      (!isNaN(router.query.page) && router.query.page > Math.ceil(totalBlogs / 9))
    ) {
      return 1
    }
    return router.query.page
  }, [router.query.page, totalBlogs])
  const [currentPage, setCurrentPage] = useState(getInitialPage())
  const [isSearchPanelVisible, setSearchPanelVisible] = useState(false)
  const getInitialFilters = useCallback(() => {
    const filters = router.query.filters
    if (!filters && !defaultCategory?.slug) {
      return []
    }
    if (!filters && defaultCategory?.slug) {
      return [defaultCategory.slug]
    }
    if (Array.isArray(filters) && filters.length > 0 && !defaultCategory?.slug) {
      return [...filters]
    }
    if (Array.isArray(filters) && filters.length > 0 && defaultCategory?.slug) {
      return [...new Set([defaultCategory.slug, ...filters])]
    }
    if (typeof filters === 'string' && !defaultCategory?.slug) {
      return [filters]
    }
    return [...new Set([defaultCategory.slug, filters])]
  }, [router.query.filters, defaultCategory])
  const [filterCategories, setFilterCategories] = useState(getInitialFilters())

  useEffect(() => {
    /** In this effect we update ?filters, ?page and ?query params in browser URL field
     *  when user change categories, searching query or current page number.
     */
    router.replace(
      {
        query: {
          ...router.query,
          page: currentPage,
          filters: filterCategories,
          query: searchingQuery,
        },
      },
      undefined,
      {scroll: false}
    )
  }, [filterCategories, currentPage, searchingQuery])

  const callSetPageAndScroll = (callback) => {
    // scroll to the categories after user interact with pagination
    if (scrollToRef.current && window) {
      const scrollDistance = scrollToRef.current.offsetTop
      const offset = 30
      setTimeout(() => {
        window.scrollTo(0, scrollDistance - offset)
      }, 200)
    }
    callback()
  }

  const handleQueryChange = (e) => {
    if (e?.target) {
      setSearchingQuery(e.target.value)
    }
    if (currentPage !== 1) setCurrentPage(1)
  }

  const handleCategoryClick = (categorySlug) => {
    setFilterCategories((prev) => {
      /** if category slug already exist in filtering array - remove it,
       *  else add it to the filtering array
       **/
      return prev.includes(categorySlug)
        ? prev.filter((prevSlug) => prevSlug !== categorySlug)
        : [...prev, categorySlug]
    })
    if (currentPage !== 1) setCurrentPage(1)
  }

  const handleSeeAllClick = () => {
    setFilterCategories(typeof defaultCategory?.slug !== 'undefined' ? [defaultCategory.slug] : [])
    if (currentPage !== 1) setCurrentPage(1)
  }

  const handleSetCurrentPage = (pageIndex) => {
    callSetPageAndScroll(() => setCurrentPage(pageIndex + 1))
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
                sm:grid-cols-2
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
                  categories={categories}
                  defaultSlug={defaultCategory?.slug ?? ''}
                  filterCategories={filterCategories}
                  isSearchVisible={isSearchPanelVisible}
                  toggleSearch={() => setSearchPanelVisible(!isSearchPanelVisible)}
                  onCategoryClick={handleCategoryClick}
                  onSeeAllClick={handleSeeAllClick}
                />
              </div>
              <SearchPanel
                isVisible={isSearchPanelVisible}
                query={searchingQuery}
                onQueryChange={handleQueryChange}
                onClearSearch={() => setSearchingQuery('')}
              />
            </div>

            {blogs?.length > 0 ? (
              <ul
                className="blog__list mb-[40px] grid grid-cols-1 gap-4 px-4
                sm:grid-cols-2
                lg:mb-[72px] lg:grid-cols-3 lg:gap-6 lg:px-0"
              >
                {blogs.map((blogData, idx) => {
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
                  currentPage={currentPage - 1}
                  setCurrentPage={handleSetCurrentPage}
                  totalPages={Math.ceil(totalBlogs / 9)}
                />
              </div>
            </div>

            {form.isForm && <GetForm className="mt-[100px] lg:mt-[152px]" {...form.form[0]} />}
          </div>
        </div>
      </section>

      <SessionsSection {...sessionSection} />
    </div>
  )
}
