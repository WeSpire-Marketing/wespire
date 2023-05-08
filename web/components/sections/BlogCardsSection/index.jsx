import BlogCard from '../../BlogCard'
import Icon2 from '../../icons/AnimatedMarks'

import {injectIconToSpanStr} from '../../../utils'

const BlogCardsSection = ({blogs, blogsTitle = ''}) => {
  return (
    <section
      className="carection overflow-hidden bg-gallery py-[100px]
      sm:py-[115px]
      md:py-[130px]
      lg:py-[140px]"
    >
      <div className="container px-0 lg:px-8">
        <div className="carection__inner">
          <h2
            className="carection__title heading-2 mx-auto mb-6
            max-w-[65%] text-center text-black lg:mb-12"
          >
            {injectIconToSpanStr(blogsTitle, () => (
              <Icon2
                className="absolute left-[-30px] top-[-40px] max-w-[37px] lg:top-[-45px]
                lg:left-[-60px] lg:max-w-none"
              />
            ))}
          </h2>

          <ul
            className="carection__blogs grid grid-cols-1 gap-6 px-4
            sm:grid-cols-2
            lg:grid-cols-3 lg:px-0"
          >
            {blogs?.length > 0 &&
              blogs.map((blogData, idx) => {
                return (
                  <li className="flex" key={blogData.slug.current + idx}>
                    <BlogCard {...blogData} />
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BlogCardsSection
