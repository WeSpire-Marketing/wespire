import {useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import Card from './Card'
import ArrowIcon from '../../../icons/ArrowIcon'

const swiperBreakpoints = {
  // when window width is >= 200px
  200: {
    slidesPerView: 1,
    spaceBetween: 16,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 1.2,
    spaceBetween: 16,
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 1.8,
    spaceBetween: 16,
  },
  // when window width is >= 1025px
  1025: {
    slidesPerView: 2.4,
    spaceBetween: 24,
  },
}

const Slider = ({cards}) => {
  const [isEnd, setEnd] = useState(false)
  const [swiper, setSwiper] = useState(null)
  const [isBeginning, setBeginning] = useState(true)

  return (
    <>
      <Swiper
        id="ValuesSlider"
        className="px-4"
        spaceBetween={24}
        slidesPerView={1}
        wrapperTag="ul"
        centeredSlides
        onInit={setSwiper}
        onSlideChange={(swiper) => {
          swiper.isBeginning ? setBeginning(true) : setBeginning(false)
          swiper.isEnd ? setEnd(true) : setEnd(false)
        }}
        // Responsive breakpoints
        breakpoints={swiperBreakpoints}
      >
        {cards.map(({_key, ...props}) => {
          return (
            <SwiperSlide key={_key} tag="li" className='h-[unset]'>
              <Card className='h-full' {...props} />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className="mt-6 flex items-center justify-end gap-4 px-4">
        <button
          className="white-btn rotate-180"
          onClick={() => swiper.slidePrev(300)}
          disabled={isBeginning}
        >
          <ArrowIcon className="max-w-[17px] lg:max-w-none" fillColor="#121212" />
        </button>

        <button className="white-btn" onClick={() => swiper.slideNext(300)} disabled={isEnd}>
          <ArrowIcon className="max-w-[17px] lg:max-w-none" fillColor="#121212" />
        </button>
      </div>
    </>
  )
}

export default Slider
