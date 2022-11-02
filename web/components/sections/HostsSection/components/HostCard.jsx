import Img from '../../../Img'
import CardLink from './CardLink'

const HostCard = ({
  image,
  name,
  job,
  field1,
  field2,
  field3,
  field4,
  field5,
  field6,
  color,
  link,
}) => {
  return (
    <li className="hosts-card w-full rounded-[16px] p-6 lg:p-8" style={{backgroundColor: color}}>
      <div className="hosts-card__top mb-8 flex items-center gap-4 lg:gap-6">
        <div
          className="hosts-card__image w-full max-w-[42%] overflow-hidden
          rounded-[16px]"
        >
          <Img value={image} />
        </div>

        <div className="w-full translate-y-[-15%] lg:translate-y-0">
          <h3 className="heading-4 mb-1 text-white">{name}</h3>
          <p className="body-m text-[16px] text-white lg:mb-[40px] lg:text-[18px]">{job}</p>

          <div className="hidden max-w-[75%] gap-6 lg:flex">
            <div className="flex-1">
              <p className="heading-4 text-white">{field1}</p>
              <p className="body-m text-[16px] text-white lg:text-[18px]">{field2}</p>
            </div>

            <div className="flex-1">
              <p className="heading-4 text-white">{field3}</p>
              <p className="body-m text-[16px] text-white lg:text-[18px]">{field4}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 flex gap-4 lg:hidden">
        <div className="max-w-[42%] flex-1">
          <p className="heading-4 text-white">{field1}</p>
          <p className="body-m text-[16px] text-white lg:text-[18px]">{field2}</p>
        </div>

        <div className="flex-1">
          <p className="heading-4 text-white">{field3}</p>
          <p className="body-m text-[16px] text-white lg:text-[18px]">{field4}</p>
        </div>
      </div>

      <div
        className="hosts-card__bottom flex w-full items-center justify-between gap-8 rounded-[16px]
        bg-white p-4 lg:gap-[80px] lg:py-6 lg:px-8"
      >
        <div>
          <p
            className="mb-4 font-poppins text-[14px] font-semibold uppercase
            leading-[100%] tracking-[-0.01em] text-grey1 lg:text-[16px]"
          >
            {field5}
          </p>

          <p className="subtitle-m text-[16px] lg:text-[18px]">{field6}</p>
        </div>

        <CardLink {...link} color={color} />
      </div>
    </li>
  )
}

export default HostCard
