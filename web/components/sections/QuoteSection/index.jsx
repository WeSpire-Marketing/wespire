import Image from 'next/image'

import Quotes from '../../icons/AnimatedQuotes'

import {urlForImage} from '../../../client'

export default function QuoteSection({quote, image, name, job}) {
  return (
    <section
      className="qection bg-gallery py-[100px]
      lg:py-[140px]"
    >
      <div className="container">
        <div className="qection__inner mx-auto max-w-[920px] text-center">
          <div
            className="quection__img mb-[35px] inline-block
            lg:mb-[48px]"
          >
            <Quotes />
          </div>

          <p
            className="qection__quote heading-3 mx-auto mb-[32px] max-w-[528px]
            sm:max-w-[600px]
            md:max-w-[675px]
            lg:mb-[56px] lg:max-w-none"
          >
            {quote}
          </p>

          <div className="qection__author inline-block">
            <div className="qection__author__avatar relative mx-auto mb-[16px] h-[64px] w-[64px]">
              <Image
                src={urlForImage(image).width(64).height(64).fit('crop').url()}
                alt={name}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div
              className="qection__author__name font-poppins text-lg font-semibold leading-[150%]
              text-[#2E2E2E]"
            >
              {name}
            </div>

            <div className="qection__author__job text-lg font-normal leading-160 text-[#2E2E2E]">
              {job}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
