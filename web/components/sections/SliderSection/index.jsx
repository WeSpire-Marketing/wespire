import {useMemo, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import Icon from '../../icons/AnimatedRound'
import SliderNav from './components/SliderNav'
import TransparentCard from '../../TransparentCard'

import {injectIconToSpanStr} from '../../../utils'

const swiperBreakpoints = {
  // when window width is >= 200px
  200: {
    slidesPerView: 1,
    spaceBetween: -16,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 1.2,
    spaceBetween: -16,
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 1.8,
    spaceBetween: -16,
  },
  // when window width is >= 1025px
  1025: {
    slidesPerView: 2.5,
    spaceBetween: 24,
  },
}

const SliderSection = ({title = '', cards = []}) => {
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
    <section className="slection bg-gallery">
      <div
        className="outer rounded-t-[30px] bg-pampas py-[48px]
        sm:py-[60px]
        md:py-[72px]
        lg:rounded-t-[60px] lg:py-[82px]"
      >
        <div className="container">
          <div
            className="slection__top mb-[24px] flex items-end justify-between
            sm:mb-[32px]
            md:mb-[40px]
            lg:mb-[48px]"
          >
            <h2
              className="slection__title heading-2 max-w-[285px]
              sm:max-w-[364px]
              md:max-w-[416px]
              lg:max-w-[550px]"
            >
              {memoizedTitle}
            </h2>

            <SliderNav
              className="slection__nav hidden items-center gap-6 lg:inline-flex"
              swiper={swiper}
              isEnd={isEnd}
              isBeginning={isBeginning}
            />
          </div>
        </div>

        <div className="slection__slider relative w-full">
          <div className="px-0">
            <Swiper
              id="HomeSlider"
              className="pl-[calc((100vw_-_var(--container-max-w))_/_2_+_2rem)]
              screen2:pl-[2rem] screen3:pl-[calc((100vw_-_var(--container-max-w))_/_2_+_2rem)]"
              spaceBetween={24}
              slidesPerView={2.5}
              onSwiper={setSwiper}
              onSlideChange={(swiper) => {
                swiper.isBeginning ? setBeginning(true) : setBeginning(false)
                swiper.isEnd ? setEnd(true) : setEnd(false)
              }}
              // Responsive breakpoints
              breakpoints={swiperBreakpoints}
            >
              {cards.map(({_key, ...restProps}, i) => {
                return (
                  <SwiperSlide key={_key}>
                    <TransparentCard {...restProps} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>

          <SliderNav
            className="slection__nav mt-6 mr-4 flex items-center justify-end gap-4 lg:hidden"
            swiper={swiper}
            isEnd={isEnd}
            isBeginning={isBeginning}
          />
        </div>
      </div>
    </section>
  )
}

export default SliderSection
