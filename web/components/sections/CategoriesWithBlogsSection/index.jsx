import { useRouter } from 'next/router'
import {useCallback, useEffect, useRef, useState} from 'react'

import BlogCard from '../../BlogCard'
import Pagination from '../../Pagination'
import SearchPanel from '../../SearchPanel'
import CategoriesList from '../../CategoriesList'

export default function CategoriesWithBlogsSection({categories = [], defaultCategory, blogs = [], totalBlogs}) {
  const router = useRouter()
  const scrollToRef = useRef(null)
  const getInitialQuery = useCallback(
    () => {
      if (!router.query.query || typeof router.query.query !== 'string') {
        return ''
      }
      return router.query.query
    },
    [router.query.query],
  )
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
    if (!filters) {
      // if no filters in browser URL field - set default filter
      return [defaultCategory.slug]
    }
    if (Array.isArray(filters) && filters.length > 1) {
      // if there are few filters in browser URL field selected - return unique cats
      return [...new Set([defaultCategory.slug, ...router.query.filters])]
    }
    // if there is 1 category filter in browser URL excluding default cat
    return [...new Set([defaultCategory.slug, router.query.filters])]
  }, [router.query.filters, defaultCategory])
  const [filterCategories, setFilterCategories] = useState(getInitialFilters())

  useEffect(() => {
    /** In this effect we update ?filters, ?page and ?query params in browser URL field
     *  when user change categories, searching query or current page number. If page number and filter
     *  dont exist we rewrite query params with default category and page number eq to 1.
     */
    if (!router.query.filters) {
      router.replace(
        {
          query: {...router.query, page: 1, filters: defaultCategory.slug, query: searchingQuery},
        },
        undefined,
        {scroll: false}
      )
    } else {
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
    }
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
