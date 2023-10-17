import {useRouter} from 'next/router'
import {useEffect, useRef, useState} from 'react'

import BlogCard from '../../BlogCard'
import CategoriesList from '../../CategoriesList'
import Pagination from '../../Pagination'
import SearchPanel from '../../SearchPanel'
import SignMeUpForm from '../../forms/SignMeUpForm'
import Icon from '../../icons/AnimatedHighlight'

import {GetForm} from '../../../utils/forms'
import Blurb from '../../Blurb'

const BlogTemplate = ({
  categories,
  title,
  subtitle,
  formId,
  form1,
  form2,
  blogs,
  totalBlogs,
  defaultCategory,
  showHeroForm = true,
  showBlurb = false,
}) => {
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
    setFilterCategories((prev) => {
      // add category slug to the filter array if it is not there
      if (prev.includes(categorySlug)) {
        // if category slug is already in category array - remove it
        return prev.filter((slug) => slug !== categorySlug)
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
    <section className="overflow-hidden pt-[170px] pb-[100px] bg-gallery lg:pt-[184px] lg:pb-[128px]">
      <div className="container px-0 lg:px-8">
        <div className="inner">
          <div className="hero__text mb-[100px] px-4 text-center lg:mb-[140px]">
            <h1
              className="heading-1 lg:heading-2 mx-auto mb-4 w-full max-w-[460px]
              text-black lg:max-w-[696px]"
            >
              <span className="relative">
                {title}
                <Icon
                  className="absolute left-[-30px] top-[-30px] max-w-[40px]
                  lg:left-[unset] lg:right-[-60px] lg:top-[-30px] lg:max-w-[60px]"
                />
              </span>
            </h1>

            <p
              className="body-m mx-auto mb-8 px-4 md:px-0 w-full max-w-[460px] text-[#2E2E2E]
              lg:mb-[40px]"
            >
              {subtitle}
            </p>
            {showHeroForm && (
              <div
                className="flex flex-col items-center mx-auto gap-4 px-4 md:px-0 relative
              lg:flex-row lg:gap-[8px] md:max-w-[475px] lg:max-w-[475px]"
              >
                <SignMeUpForm formId={formId} />
              </div>
            )}
            {showBlurb && <Blurb />}
          </div>

          {form1.isForm && <GetForm className="mb-[100px] lg:mb-[140px]" {...form1.form[0]} />}

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
              className="blog__list mb-[40px] grid grid-cols-1 gap-4 px-4
              min-[580px]:grid-cols-2
              lg:grid-cols-3
              lg:mb-[72px] lg:gap-6 lg:px-0"
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

          {form2.isForm && <GetForm className="mt-[100px] lg:mt-[152px]" {...form2.form[0]} />}
        </div>
      </div>
    </section>
  )
}

export default BlogTemplate
