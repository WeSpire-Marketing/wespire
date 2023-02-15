import Link from 'next/link'
import Image from 'next/image'

import CardBase from '../../CardBase'
import BlogCard from '../../BlogCard'
import Icon2 from '../../icons/AnimatedMarks'
import Icon1 from '../../icons/AnimatedSparkle'

import {urlForImage} from '../../../client'
import {injectIconToSpanStr} from '../../../utils'

const CardsSection = ({blogs, cards, panelTitle = '', panelSubtitle = '', blogsTitle = ''}) => {
  return (
    <section
      className="carection overflow-hidden bg-gallery py-[100px]
      sm:py-[115px]
      md:py-[130px]
      lg:py-[140px]"
    >
      <div className="container px-0 lg:px-8">
        <div className="carection__inner">
          <CardBase
            className="mb-[120px] rounded-[30px] bg-smart px-4 py-[48px]
            sm:mb-[128px] sm:py-[50px]
            md:mb-[136px] md:py-[62px]
            lg:mb-[140px] lg:rounded-[40px] lg:py-[84px] lg:px-[40px]"
          >
            <h2 className="carection__title heading-2 mb-2 text-center text-white lg:mb-4">
              {injectIconToSpanStr(panelTitle, () => (
                <Icon1
                  className="absolute top-[-20px] right-[-35px] h-[50px] w-[50px]
                  lg:top-[-35px] lg:right-[-75px] lg:h-[75px] lg:w-full"
                />
              ))}
            </h2>

            <p
              className="carection__subtitle body-m mb-[24px] text-center text-lg text-white
              sm:mb-[36px]
              md:mb-[44px]
              lg:mb-[56px]"
            >
              {panelSubtitle}
            </p>

            <div className="carection__cards flex flex-col gap-4 md:flex-row lg:gap-6">
              {cards.map(({_key, image, title, text, link}) => {
                return (
                  <CardBase
                    className="rounded-[30px] bg-white px-6 pt-[48px] pb-[48px]
                    lg:rounded-[40px] lg:px-[48px] lg:pb-[64px] lg:pt-[56px] flex-1"
                    key={_key}
                  >
                    <div className="carection__icon mb-6 h-[70px] w-[65px] lg:mb-8">
                      <Image
                        src={urlForImage(image).width(65).height(70).fit('crop').url()}
                        layout="responsive"
                        objectFit="cover"
                        height={70}
                        width={65}
                        alt="icon"
                      />
                    </div>

                    <h3 className="card__title heading-3 mb-4">{title}</h3>

                    <p
                      className="card__text body-m mb-[30px] text-secondary
                      sm:mb-[34px]
                      md:mb-[38px]
                      lg:mb-[40px]"
                    >
                      {text}
                    </p>

                    {link.internal ? (
                      <Link href={link.url} passHref>
                        <a className="card__link cta-btn-black">{link.text}</a>
                      </Link>
                    ) : (
                      <a
                        className="card__link cta-btn-black"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                    )}
                  </CardBase>
                )
              })}
            </div>
          </CardBase>

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

export default CardsSection
