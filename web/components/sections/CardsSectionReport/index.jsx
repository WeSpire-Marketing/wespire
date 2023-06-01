import Link from 'next/link'
import Image from 'next/image'

import CardBase from '../../CardBase'
import Icon1 from '../../icons/AnimatedSparkle'

import {urlForImage} from '../../../client'
import {injectIconToSpanStr} from '../../../utils'
import Img from '../../Img'

const CardsSectionReport = ({panelTitle, cards1, cards2, cards3}) => {
  console.log(cards3)
  return (
    <section
      className="carection overflow-hidden bg-gallery py-[100px]
      sm:py-[115px]
      md:py-[130px]
      lg:py-[140px]"
    >
      <div className="container px-0 lg:px-8">
        <div className="carection__inner">
          <CardBase
            className="rounded-[30px] bg-smart px-4 py-[48px] sm:py-[50px]
            md:py-[62px] lg:rounded-[40px] lg:py-[84px] lg:px-[40px]"
          >
            <h2 className="carection__title heading-2 mb-2 text-center text-white lg:mb-10">
              {injectIconToSpanStr(panelTitle, () => (
                <Icon1
                  className="absolute top-[-20px] right-[-35px] h-[50px] w-[50px]
                  lg:top-[-35px] lg:right-[-75px] lg:h-[75px] lg:w-full"
                />
              ))}
            </h2>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[30px] bg-white p-10">
                  <div className="carection__icon mb-6 h-[70px] w-[65px] lg:mb-8">
                    <Image
                      src={urlForImage(cards1.image).width(65).height(70).fit('crop').url()}
                      layout="responsive"
                      objectFit="cover"
                      height={70}
                      width={65}
                      alt="icon"
                    />
                  </div>
                  <div className="heading-4 mb-4 lg:mb-8 max-w-[458px]">{cards1.text}</div>
                </div>
                <div className="rounded-[30px] bg-white p-10">
                  <h3 className="mb-4 font-poppins text-base font-semibold text-black lg:mb-6 max-w-[354px]">
                    {cards2.title}
                  </h3>
                  <ol>
                    {cards2.listOptions.map((item, index) => (
                      <li key={index} className="flex gap-1 slection__text body-m text-secondary">
                        <div>{index + 1}.</div>
                        <div>{item}</div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="rounded-[30px] bg-white grid grid-cols-1 md:grid-cols-2 gap-10  p-10 lg:p-[70px]">
                {cards3.map(({_key, image, title, text, link}) => {
                  return (
                    <div
                      key={_key}
                      className="grid  grid-cols-1 grid-rows-[60px_1fr] md:grid-rows-1 md:grid-cols-[0.2fr_1fr] gap-6"
                    >
                      <div className="carection__icon mb-6 lg:mb-8">
                        <Img value={image} />
                      </div>
                      <div>
                        <h3 className="card__title heading-3 mb-4">{title}</h3>

                        <p
                          className="card__text body-m mb-[16px] text-secondary

                      lg:mb-[24px]"
                        >
                          {text}
                        </p>

                        {link.internal ? (
                          <Link href={link.url} passHref>
                            <a className="mx-auto inline-flex w-fit items-center gap-2 font-poppins text-[14px] font-semibold leading-[150%] text-smart lg:mx-0">
                              {link.text}
                            </a>
                          </Link>
                        ) : (
                          <a
                            className="mx-auto inline-flex w-fit items-center gap-2 font-poppins text-[14px] font-semibold leading-[150%] text-smart lg:mx-0"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.text}
                          </a>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </CardBase>
        </div>
      </div>
    </section>
  )
}

export default CardsSectionReport
