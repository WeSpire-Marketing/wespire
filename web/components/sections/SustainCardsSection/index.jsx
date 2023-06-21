import React, {useCallback, useState} from 'react'
import {injectIconToSpanStr} from '../../../utils'
import Icon from '../../icons/AnimatedIcon'
import Image from 'next/image'
import {urlForImage} from '../../../client'
import {useWindowWidth} from '@react-hook/window-size'
import {Swiper, SwiperSlide} from 'swiper/react'
import SliderNav from '../SliderSection/components/SliderNav'

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
const cardItem = (image, title, text, active, cardsUser = []) => (
  <div
    className="border-[rgba(202_205_212_0.8)] flex flex-1 flex-col
          rounded-2xl border bg-white duration-300 ease-in-out"
  >
    <div
      className="blog__image relative block
            h-[195px] lg:h-[221px] w-full shrink-0 overflow-hidden rounded-t-[1rem]"
    >
      <Image
        className="blog__image__img absolute top-0 left-0 right-0 bottom-0"
        src={urlForImage(image).width(392).height(221).fit('max').url()}
        alt={'Cards Image'}
        objectFit="cover"
        layout="fill"
        quality={100}
      />
    </div>
    <div className="grid grid-rows-2 w-full justify-between px-6 pt-6 pb-8 lg:pb-10 h-full">
      <div className="w-full">
        <h3 className="blog__name heading-4 mb-4 line-clamp-2">{title}</h3>
        <p className="body-sm text-secondary line-clamp-2">{text}</p>
      </div>
      <div className="border-t border-[#CCCFD6] pt-6">
        <div className="flex mb-4 -space-x-4">
          {cardsUser.length &&
            cardsUser.map((image) => (
              <div className="relative w-14 h-14 border-1 border-white rounded-full">
                <Image
                  className="absolute w-full h-full"
                  src={urlForImage(image).width(300).height(300).fit('max').url()}
                  alt={'Cards Image Users'}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            ))}
        </div>
        <div>
          <p className="body-m text-smart line-clamp-2">{active}</p>
        </div>
      </div>
    </div>
  </div>
)
const SustainCardsSection = ({title, cards = []}) => {
  const onlyWidth = useWindowWidth()
  const [isEnd, setEnd] = useState(false)
  const [swiper, setSwiper] = useState(null)
  const [isBeginning, setBeginning] = useState(true)

  const renderCardsSection = () =>
    cards.map(({text, title, cardsUser = [], image, active}) => {
      return cardItem(image, title, text, active, cardsUser)
    })

  return (
    <section className="sustainsection bg-gallery">
      <div
        className="container bg-gallery pt-8 pb-[40px]
         lg:pt-[120px] lg:pb-[100px]"
      >
        <div className="mb-6 lg:mb-16">
          <h1
            className="hero__title heading-2 mx-auto max-w-[475px] text-center
            sm:max-w-[580px]
            md:max-w-[650px]
            lg:max-w-[930px]"
          >
            {injectIconToSpanStr(title, Icon)}
          </h1>
        </div>
        {onlyWidth <= 768 ? (
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
                {cards.slice(0, 6).map(({_key, image, title, text, active, cardsUser = []}, i) => {
                  return (
                    <SwiperSlide key={_key}>
                      {cardItem(image, title, text, active, cardsUser)}
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
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.length && renderCardsSection()}
          </div>
        )}
      </div>
    </section>
  )
}

export default React.memo(SustainCardsSection)
