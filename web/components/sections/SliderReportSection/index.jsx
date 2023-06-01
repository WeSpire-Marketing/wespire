import {useMemo, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import Icon from '../../icons/AnimatedRound'
import SliderNav from './components/SliderNav'
import {injectIconToSpanStr} from '../../../utils'
import {urlForImage} from '../../../client'
import useSanityBlurDataUrl from '../../../utils/hooks/useSanityBlurDataUrl'
import Img from '../../Img'

const swiperBreakpoints = {
  // when window width is >= 200px
  200: {
    slidesPerView: 1,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 1,
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 1,
  },
  // when window width is >= 1025px
  1025: {
    slidesPerView: 1,
  },
}

const SliderReportSection = ({title = '', cards = [], textList = [], titleCardsText = '', id}) => {
  const [isEnd, setEnd] = useState(false)
  const [swiper, setSwiper] = useState(null)
  const [isBeginning, setBeginning] = useState(true)

  const memoizedTitle = useMemo(
    () =>
      injectIconToSpanStr(title, () => (
        <Icon
          className="absolute top-[50%] left-[calc(50%+5px)] z-[-1] h-[120%]
          translate-x-[-50%] translate-y-[-50%] lg:left-[calc(50%+10px)]"
        />
      )),
    [title]
  )

  return (
    <section className="slection bg-gallery" id={id}>
      <div
        className="py-[48px]
        sm:py-[60px]
        md:py-[72px]
         lg:py-[82px]"
      >
        <div className="container px-2 sm:px-6 lg:px-8">
          <div className="container">
            <div
              className="slection__top mb-[24px] flex items-center justify-center
            sm:mb-[32px]
            md:mb-[40px]
            lg:mb-[48px]"
            >
              <h2
                className="slection__title heading-2 max-w-[285px]
              sm:max-w-[364px]
              md:max-w-[600px]
              lg:max-w-[790px]"
              >
                {memoizedTitle}
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center mb-10 lg:mb-16">
            <p className="heading-4 mx-auto mb-4 lg:mb-10">{titleCardsText}</p>
            <div className={`grid grid-cols-1 lg:grid-cols-${textList.length} gap-4 lg:gap-10`}>
              {textList.map((text, i) => {
                return (
                  <div className="slection__text  body-m text-secondary" key={i}>
                    {text}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="slection__slider relative w-full">
            <div className="px-0 mb-10">
              <Swiper
                id="HomeSlider"
                spaceBetween={24}
                slidesPerView={1}
                autoHeight
                onSwiper={setSwiper}
                onSlideChange={(swiper) => {
                  swiper.isBeginning ? setBeginning(true) : setBeginning(false)
                  swiper.isEnd ? setEnd(true) : setEnd(false)
                }}
                // Responsive breakpoints
                breakpoints={swiperBreakpoints}
              >
                {cards.map(({_key, listImage}, i) => {
                  return (
                    <SwiperSlide key={_key}>
                      <div className="w-full max-w-[1224px] flex">
                        <div
                          className={`card__preview w-full grid grid-cols-1 ${
                            listImage.length > 1 ? 'lg:grid-cols-2' : 'lg:grid-cols-1'
                          } gap-16 overflow-hidden`}
                        >
                          {listImage.map(({image, alt}, i) => {
                            const blurDataUrl = useSanityBlurDataUrl(image)

                            return (
                              <div className="flex flex-col w-full">
                                <div className="relative w-full shadow-[0px_12px_35px_rgba(111,111,111,0.1)] rounded-[1rem] overflow-hidden">
                                  <Img
                                    className="rounded-[1rem] overflow-hidden"
                                    value={image}
                                    blurDataUrl={blurDataUrl}
                                    alt={alt}
                                    priority={true}
                                  />
                                </div>

                                <div className="flex justify-center mt-4">
                                  <p className="body-m text-secondary text-[#6F879A]">{alt}</p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
          <div className="flex justify-center">
            <SliderNav
              className="slection__nav items-center gap-6 inline-flex"
              swiper={swiper}
              isEnd={isEnd}
              isBeginning={isBeginning}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SliderReportSection
