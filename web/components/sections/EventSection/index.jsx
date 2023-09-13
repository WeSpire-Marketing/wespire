import Link from 'next/link'
import {injectIconToSpanStr} from '../../../utils'
import Icon1 from '../../icons/AnimatedStars2'
import Icon from '../../icons/AnimatedLines'
import Image from 'next/image'
import {urlForImage} from '../../../client'
import ArrowIcon from '../../icons/ArrowIcon'
import {Fragment} from 'react'
import {PortableText} from '@portabletext/react'
import myPortableTextComponents from '../../../utils/myPortableComponents'

export default function EventSection({title, titleSecond, eventList, content}) {
  const showSecondLinkEventList = eventList.some((item) => item.linkSecond.showSecondBtn)

  const scrollTo = (e) => {
    e.preventDefault()

    const anchor = document.querySelector('#hubspotform')
    anchor.scrollIntoView({behavior: 'smooth', block: 'center'})
  }

  return (
    <section className="bg-pampas ">
      <div
        className="rounded-t-[30px] bg-gallery pt-12 pb-[132px]
        lg:rounded-t-[60px] lg:pt-[100px] lg:pb-[148px] "
      >
        <div className="container px-4 sm:px-4 md:px-6 lg:px-8">
          {(content?.length || titleSecond) && (
            <div className="mb-[100px] lg:mb-[120px] ">
              {titleSecond && (
                <h2 className="carection__title heading-2 mb-4 text-center  lg:mb-8">
                  {injectIconToSpanStr(titleSecond, () => (
                    <Icon1
                      className=" h-[38px] w-[40px]
                  lg:h-[50px] lg:w-full rotate-180"
                      style={{top: '-35px', right: '-50px'}}
                    />
                  ))}
                </h2>
              )}
              {Boolean(content.length) && (
                <div className="content prose md:mx-auto text-center w-full max-w-[808px]">
                  <PortableText
                    components={myPortableTextComponents}
                    value={content}
                    onMissingComponent={false}
                  />
                </div>
              )}
            </div>
          )}
          <div>
            <h2 className="carection__title heading-2 mb-16 text-center mx-auto  lg:mb-20 w-full max-w-[690px]">
              {injectIconToSpanStr(title, () => (
                <Icon
                  className="absolute hidden lg:block
                  lg:top-[-20px] lg:right-[-70px] lg:h-[30px] lg:w-full"
                />
              ))}
            </h2>
            {Boolean(eventList?.length) && (
              <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center items-center lg:items-start">
                {eventList.map(({image, title, _key, text, link, linkSecond}) => {
                  return (
                    <li
                      key={`${_key}`}
                      className="flex flex-col gap-4 w-full h-full items-center text-center"
                    >
                      <div className="relative w-20 h-20 mb-2">
                        <Image
                          src={urlForImage(image).width(80).height(80).fit('crop').url()}
                          layout="responsive"
                          objectFit="cover"
                          height={80}
                          width={80}
                          alt="icon"
                        />
                      </div>
                      <h3 className="heading-4 text-[#000] text-center">{title}</h3>
                      <p className="text-base w-full max-w-[200px] text-center">{text}</p>
                      <div
                        className={`flex flex-col mt-auto gap-3 w-full items-center ${
                          showSecondLinkEventList ? 'h-[60px]' : ''
                        }`}
                      >
                        {Boolean(link?.showBtn) && (
                          <Fragment>
                            {link?.isScrollToForm ? (
                              <a
                                className="group inline-flex w-fit items-center gap-[10px]
            font-poppins text-[16px] font-semibold leading-[150%] text-smart"
                                href={''}
                                onClick={scrollTo}
                              >
                                {link.text}
                                <ArrowIcon
                                  className="w-[16px] transition-all duration-200 ease-in-out
              group-hover:translate-x-2"
                                />
                              </a>
                            ) : link.internal ? (
                              <Link href={link.url} passHref scroll={false}>
                                <a
                                  className="group inline-flex w-fit items-center gap-[10px]
            font-poppins text-[16px] font-semibold leading-[150%] text-smart"
                                >
                                  {link.text}
                                  <ArrowIcon
                                    className="w-[16px] transition-all duration-200 ease-in-out
              group-hover:translate-x-2"
                                  />
                                </a>
                              </Link>
                            ) : (
                              <a
                                className="group inline-flex w-fit items-center gap-[10px]
            font-poppins text-[16px] font-semibold leading-[150%] text-smart"
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.text}
                                <ArrowIcon
                                  className="w-[16px] transition-all duration-200 ease-in-out
              group-hover:translate-x-2"
                                />
                              </a>
                            )}
                          </Fragment>
                        )}
                        {Boolean(linkSecond?.showSecondBtn) && (
                          <Fragment>
                            {linkSecond?.isScrollToForm ? (
                              <a
                                className="group inline-flex w-fit items-center gap-[10px]
            font-poppins text-[16px] font-semibold leading-[150%] text-smart"
                                href={''}
                                onClick={scrollTo}
                              >
                                {linkSecond.textSecond}
                                <ArrowIcon
                                  className="w-[16px] transition-all duration-200 ease-in-out
              group-hover:translate-x-2"
                                />
                              </a>
                            ) : linkSecond.internalSecond ? (
                              <Link href={linkSecond.urlSecond} passHref scroll={false}>
                                <a
                                  className="group inline-flex w-fit items-center gap-[10px]
            font-poppins text-[16px] font-semibold leading-[150%] text-smart"
                                >
                                  {linkSecond.textSecond}
                                  <ArrowIcon
                                    className="w-[16px] transition-all duration-200 ease-in-out
              group-hover:translate-x-2"
                                  />
                                </a>
                              </Link>
                            ) : (
                              <a
                                className="group inline-flex w-fit items-center gap-[10px]
            font-poppins text-[16px] font-semibold leading-[150%] text-smart"
                                href={linkSecond.urlSecond}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {linkSecond.textSecond}
                                <ArrowIcon
                                  className="w-[16px] transition-all duration-200 ease-in-out
              group-hover:translate-x-2"
                                />
                              </a>
                            )}
                          </Fragment>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
