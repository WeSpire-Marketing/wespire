import {useRef, useState} from 'react'

// import PageMeta from '../../PageMeta'
import BlogCard from '../../BlogCard'
import Pagination from '../../Pagination'
import SearchPanel from '../../SearchPanel'
import Icon from '../../icons/AnimatedHighlight'
// import MainLayout from '../../layouts/MainLayout'
import CategoriesList from '../../CategoriesList'
import SignMeUpForm from '../../forms/SignMeUpForm'

import {GetForm} from '../../../utils/forms'
import {filterBlogsByQuery} from '../../../utils'
import usePaginate from '../../../utils/hooks/usePaginate'
import useCustomScrollBehavior from '../../../utils/hooks/useCustomScrollBehavior'

const BlogTemplate = ({
  categories,
  title,
  subtitle,
  formId,
  form1,
  form2,
  blogs,
  defaultCategory,
}) => {
  useCustomScrollBehavior()

  const scrollToRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchingQuery, setSearchingQuery] = useState(defaultCategory?.title ?? '')
  const [isSearchPanelVisible, setSearchPanelVisible] = useState(false)
  const filteredBlogs = filterBlogsByQuery(blogs, searchingQuery)
  const paginatedBlogs = usePaginate(filteredBlogs, 9)

  const callSetPageAndScroll = (callback) => {
    // scroll to the categories after user interact with pagination
    if (scrollToRef.current && window) {
      const scrollDistance = scrollToRef.current.offsetTop
      const offset = 30
      setTimeout(() => {
        window.scrollTo(0, scrollDistance - offset)
      }, 100)
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
              className="body-m mx-auto mb-8 w-full max-w-[460px] text-[#2E2E2E]
              lg:mb-[40px]"
            >
              {subtitle}
            </p>

            <SignMeUpForm
              formId={formId}
              buttonText="Sign me up"
              buttonClasses="primary-btn w-full bg-smart shrink-0 py-[11px] lg:w-auto"
              formClasses="flex flex-col items-center mx-auto gap-4 max-w-[355px] relative
              lg:flex-row lg:gap-[8px] lg:max-w-[475px]"
              errorClasses="absolute top-[-21px] h-fit lg:top-[unset]"
            />
          </div>

          {form1.isForm && <GetForm className="mb-[100px] lg:mb-[140px]" {...form1.form[0]} />}

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
              min-[580px]:grid-cols-2
              lg:grid-cols-3
              lg:mb-[72px] lg:gap-6 lg:px-0"
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

          {form2.isForm && <GetForm className="mt-[100px] lg:mt-[152px]" {...form2.form[0]} />}
        </div>
      </div>
    </section>
  )
}

export default BlogTemplate
