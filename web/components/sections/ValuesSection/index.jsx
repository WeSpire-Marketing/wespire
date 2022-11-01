import Card from './components/Card'
import Slider from './components/Slider'
import Icon from '../../icons/AnimatedLines'

import useWindowSize from '../../../utils/hooks/useWindowSize'

export default function ValuesSection({title = '', cards}) {
  const {width} = useWindowSize()

  return (
    <section className="valection overflow-hidden bg-gallery">
      <div
        className="valection__wrap rounded-t-[30px] bg-neverPreachy py-[48px]
        lg:rounded-t-[60px] lg:py-[80px]"
      >
        <div className="container px-0">
          <div className="valection__inner">
            <h2
              className="valection__title heading-2 relative mx-auto mb-6 max-w-[398px] px-4
              text-center
              sm:max-w-[480px]
              lg:mb-[48px] lg:max-w-[648px] lg:px-8"
            >
              {title}
              <Icon
                className="absolute top-[-20px] right-0 max-w-[25px]
                sm:max-w-[30px]
                md:max-w-[40px]
                lg:top-[-25px] lg:right-[-10px] lg:max-w-none"
              />
            </h2>

            {width && width > 768 ? <Grid cards={cards} /> : <Slider cards={cards} />}
          </div>
        </div>
      </div>
    </section>
  )
}

function Grid({cards}) {
  return (
    <ul className="grid grid-cols-3 gap-6 px-4 lg:px-8">
      {cards.map(({_key, ...props}, idx) => {
        return <Card key={_key} {...props} index={idx} />
      })}
    </ul>
  )
}
