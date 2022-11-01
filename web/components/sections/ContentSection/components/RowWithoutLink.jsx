import Row from '../../../Row'
import ImageCard from '../../../ImageCard'

export default function RowWithoutLink({
  text,
  title,
  imageData,
  reversed = false,
  cardColor = '#FFCC7B',
}) {
  return (
    <Row
      className={`${
        reversed ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'
      } mb-[56px] flex items-center gap-6
      sm:mb-[65px]
      md:mb-[74px]
      lg:mb-[83px]`}
    >
      <div className="contection__col flex w-full">
        <ImageCard color={cardColor} image={imageData} />
      </div>

      <div className="contection__col w-full px-2 lg:px-0">
        <div className="md:mx-auto md:max-w-[328px] lg:max-w-[448px]">
          <h2 className="contection__heading heading-2 mb-4 md:text-[32px] lg:text-[46px]">
            {title}
          </h2>

          <p className="contection__text body-m text-secondary lg:mb-6">{text}</p>
        </div>
      </div>
    </Row>
  )
}
