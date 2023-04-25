import React from 'react'

import Icon from '../../icons/AnimatedReverseStars2'
import {injectIconToSpanStr} from '../../../utils'
import CardBase from '../../CardBase'
import {urlForImage} from '../../../client'
import Image from 'next/image'

function LandingCardsSection({panelTitle, panelSubtitle, cards}) {
  return (
    <section className="measurection bg-thriving">
      <div
        className="measurection-outer rounded-t-[30px] bg-gallery pt-8 pb-[40px]
        lg:rounded-t-[60px] lg:pt-[138px]"
      >
        <div className="container px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="measurection-inner">
            <div
              className="measurection-row mb-[72px] flex flex-col items-center
              lg:mb-[40px] lg:flex-row"
            >
              <div className="w-full">
                <h2 className="carection__title heading-2 mb-2 text-center lg:mb-6">
                  {injectIconToSpanStr(panelTitle, () => (
                    <Icon
                      color="#3C8F73"
                      className="absolute top-[-20px] right-[-35px] h-[50px] w-[50px]
                  lg:top-[-35px] lg:right-[-75px] lg:h-[75px] lg:w-full"
                    />
                  ))}
                </h2>
                <p className="body-m mx-auto mb-8 px-4 md:px-0 w-full max-w-[600px] text-[#2E2E2E] lg:mb-[40px] text-center">
                  {panelSubtitle}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:gap-6 max-w-[1150px] mx-auto">
              {[...(cards ?? [])].map(({_key, image, title, text, link}) => {
                return (
                  <CardBase
                    className="rounded-[30px] bg-white px-6 pt-[48px] pb-[48px]
                    lg:rounded-[40px] lg:px-[48px] lg:pb-[64px] lg:pt-[56px] flex-1"
                    key={_key}
                  >
                    <div className="carection__icon mb-6 h-[70px] w-[65px] lg:mb-8">
                      <Image
                        src={urlForImage(image).width(65).height(70).fit('crop').url()}
                        layout="responsive"
                        objectFit="cover"
                        height={70}
                        width={65}
                        alt="icon"
                      />
                    </div>

                    <h3 className="card__title heading-3 mb-4">{title}</h3>

                    <p
                      className="card__text body-m mb-[30px] text-secondary
                      sm:mb-[34px]
                      md:mb-[38px]
                      lg:mb-[40px]"
                    >
                      {text}
                    </p>

                    {link.internal ? (
                      <Link href={link.url} passHref>
                        <a className="card__link stroke-btn">{link.text}</a>
                      </Link>
                    ) : (
                      <a
                        className="card__link stroke-btn"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                    )}
                  </CardBase>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingCardsSection
