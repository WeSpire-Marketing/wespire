import ArrowIcon from '../../../icons/ArrowIcon'
import RoundedButton from '../../../RoundedButton'

export default function SliderNav({className = '', swiper, isEnd, isBeginning}) {
  return (
    <div className={className}>
      <RoundedButton
        className="helpful-btn rotate-180"
        onClick={() => swiper.slidePrev(300)}
        disabled={isBeginning}
      >
        <ArrowIcon className="max-w-[17px] lg:max-w-none" fillColor="white" />
      </RoundedButton>

      <RoundedButton className="helpful-btn" onClick={() => swiper.slideNext(300)} disabled={isEnd}>
        <ArrowIcon className="max-w-[17px] lg:max-w-none" fillColor="white" />
      </RoundedButton>
    </div>
  )
}
