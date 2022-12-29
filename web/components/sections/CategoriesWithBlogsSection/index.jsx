import {useRouter} from 'next/router'
import {useEffect, useRef, useState} from 'react'

import BlogCard from '../../BlogCard'
import Pagination from '../../Pagination'
import SearchPanel from '../../SearchPanel'
import CategoriesList from '../../CategoriesList'

export default function CategoriesWithBlogsSection({
  categories = [],
  blogs = [],
  totalBlogs,
  defaultCategory,
}) {
  const router = useRouter()
  const scrollToRef = useRef(null)
  const getQueryParamFromURLField = () => {
    const query = decodeURIComponent(router.query.query)

    if (query === 'undefined') {
      return ''
    }

    return query
  }
  const getPageParamFromURLField = () => {
    const totalPages = Math.ceil(totalBlogs / 9)
    const page = Number(decodeURIComponent(router.query.page))

    if (!page || isNaN(page) || page > totalPages) {
      return 1
    }

    return page
  }
  const getFiltersParamFromURLField = () => {
    const filters = decodeURIComponent(router.query.filters)

    if (!filters || filters === 'undefined') {
      // if no filters in browser URL field - set default cat as filter
      return [defaultCategory.slug]
    }

    return decodeURIComponent(router.query.filters).split(',')
  }
  const [isSearchPanelVisible, setSearchPanelVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(getPageParamFromURLField())
  const [searchingQuery, setSearchingQuery] = useState(getQueryParamFromURLField())
  const [filterCategories, setFilterCategories] = useState(getFiltersParamFromURLField())

  useEffect(() => {
    /** In this effect we update ?filters, ?page and ?query params in browser URL field
     *  when user change categories, searching query or current page number. If page number and filter
     *  dont exist we rewrite query params with default category and page number eq to 1.
     */
    router.replace(
      {
        query: {
          ...router.query,
          page: encodeURIComponent(currentPage),
          filters: encodeURIComponent(filterCategories),
          query: encodeURIComponent(searchingQuery),
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
    setFilterCategories(prev => {
      // add category slug to the filter array if it is not there
      if (prev.includes(categorySlug)) {
        // if category slug is already in category array - remove it
        return prev.filter(slug => slug !== categorySlug)
      }
      return [defaultCategory.slug, categorySlug]
    })
    if (currentPage !== 1) setCurrentPage(1)
  }

  const handleSeeAllClick = () => {
    setFilterCategories([defaultCategory.slug])
    if (currentPage !== 1) setCurrentPage(1)
  }

  const handleSetCurrentPage = (pageIndex) => {
    callSetPageAndScroll(() => setCurrentPage(pageIndex + 1))
  }

  return (
    <section className="overflow-hidden pb-[100px] lg:pb-[140px]">
      <div className="container px-0 lg:px-8">
        <div className="relative mb-6 lg:mb-[56px]" ref={scrollToRef}>
          <div className="flex overflow-x-auto px-4 lg:px-0">
            <CategoriesList
              categories={categories}
              defaultSlug={defaultCategory.slug}
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
            className="blog__list grid grid-cols-1 gap-4 px-4 mb-[72px]
            sm:grid-cols-2
            lg:grid-cols-3 lg:gap-6 lg:px-0"
          >
            {blogs.map((blogData, idx) => (
              <li className="flex" key={blogData.slug.current + idx}>
                <BlogCard {...blogData} />
              </li>
            ))}
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
      </div>
    </section>
  )
}
