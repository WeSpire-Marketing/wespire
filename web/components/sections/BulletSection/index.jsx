import dynamic from 'next/dynamic'
import {injectIconToSpanStr} from '../../../utils'
import Icon1 from '../../icons/AnimatedHighlights'
import CardBase from '../../CardBase'

const Img = dynamic(() => import('../../Img'), {
  ssr: false,
})

const DOTS_COLORS = [
  'text-[#3C8F73]',
  'text-[#1771DC]',
  'text-[#DF6F30]',
  'text-[#FFCC7B]',
  'text-[#3C8F73]',
  'text-[#1771DC]',
  'text-[#FFCC7B]',
  'text-[#DF6F30]',
]
const BulletSection = ({title, cardTitle, image, listItem}) => {
  return (
    <section
      className={`bulletSection bg-gallery py-[100px] lg:py-[140px] bg-snakeLine bg-no-repeat bg-[5rem_top]`}
    >
      <div className="container px-2 lg:px-8 ">
        <h2 className="carection__title heading-2 mb-6 text-center lg:mb-14">
          {injectIconToSpanStr(title, () => (
            <Icon1
              className="hidden md:block absolute top-[-20px] right-[-35px] h-[50px] w-[50px]
                  lg:top-[-35px] lg:right-[-50px] lg:h-[60px] lg:w-1/2 rotate-[80deg]"
            />
          ))}
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <CardBase className="rounded-[40px] bg-white p-6 lg:px-12 lg:py-[55px] border border-[#CACDD4CC] h-fit mx-auto lg:mx-0 my-auto w-full max-w-[478px]">
            <div className="carection__icon mb-6 h-[70px] w-[65px] lg:mb-6">
              <Img value={image} layout="responsive" objectFit="cover" height={70} width={65} />
            </div>
            <div className="heading-3 max-w-[458px]">{cardTitle}</div>
          </CardBase>
          <CardBase className="rounded-[40px] bg-white p-6 lg:p-12 border border-[#CACDD4CC] h-fit max-w-[1000px] my-auto">
            <div className="w-full h-full grid md:grid-cols-2 gap-y-6 gap-x-12">
              {Boolean(listItem?.length) &&
                listItem.map((item, idx) => {
                  let color = DOTS_COLORS[idx % DOTS_COLORS.length]
                  return (
                    <div key={`${item}`} className="flex justify-center items-center gap-3">
                      <div className={`${color} text-4xl`}>•</div>
                      <p className="body-m">{item}</p>
                    </div>
                  )
                })}
            </div>
          </CardBase>
        </div>
      </div>
    </section>
  )
}

export default BulletSection
