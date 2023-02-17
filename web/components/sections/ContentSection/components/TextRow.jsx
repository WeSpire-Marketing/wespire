import {PortableText} from '@portabletext/react'

import Row from '../../../Row'
import Icon1 from '../../../icons/AnimatedStars1'
import Icon2 from '../../../icons/AnimatedStars2'
import Icon3 from '../../../icons/AnimatedStars3'

import {portableHyperlinkLight} from '../../../../utils/portableHyperlink'
import {injectStarsToStr} from '../../../../utils'

const detectAndInjectIconInStr = (string, color) => {
  if (string.includes('stars-')) {
    switch (string.split('stars-')[1].charAt(0)) {
      case '1':
        return injectStarsToStr(string, () => <Icon1 color={color} />)
      case '2':
        return injectStarsToStr(string, () => <Icon2 color={color} />)
      case '3':
        return injectStarsToStr(string, () => <Icon3 color={color} />)
      default:
        return string
    }
  }
  return string
}

export default function TextRow({col1, col2, col3}) {
  return (
    <Row
      className="mb-[100px] grid grid-cols-1 gap-8 px-2
      md:mb-[74px] md:grid-cols-2
      lg:mb-[140px] lg:grid-cols-3 lg:gap-[100px] lg:px-0"
    >
      <div className="contection__row-col">
        <h3
          className="contection__row__title heading-4 mb-4 [&>span>svg]:invisible
          lg:mb-6 lg:[&>span>svg]:visible"
        >
          {detectAndInjectIconInStr(col1.title, col1.starsColor)}
        </h3>

        <div className="contection__row__text body-m text-secondary">
          <PortableText
            value={col1.textHyperlink}
            components={portableHyperlinkLight}
            onMissingComponent={false}
          />
        </div>
      </div>

      <div className="contection__row-col">
        <h3
          className="contection__row__title heading-4 mb-4 [&>span>svg]:invisible
          lg:mb-6 lg:[&>span>svg]:visible"
        >
          {detectAndInjectIconInStr(col2.title, col2.starsColor)}
        </h3>

        <div className="contection__row__text text-lg font-normal leading-160 text-secondary">
          <PortableText
            value={col2.textHyperlink}
            components={portableHyperlinkLight}
            onMissingComponent={false}
          />
        </div>
      </div>

      <div className="contection__row-col">
        <h3
          className="contection__row__title heading-4 mb-4 [&>span>svg]:invisible
          lg:mb-6 lg:[&>span>svg]:visible"
        >
          {detectAndInjectIconInStr(col3.title, col3.starsColor)}
        </h3>

        <div className="contection__row__text text-lg font-normal leading-160 text-secondary">
          <PortableText
            value={col3.textHyperlink}
            components={portableHyperlinkLight}
            onMissingComponent={false}
          />
        </div>
      </div>
    </Row>
  )
}
