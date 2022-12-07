import Image from 'next/image'
import {useNextSanityImage} from 'next-sanity-image'

import Img from '../../Img'
import Icon from '../../icons/AnimatedMarksEnd'
import SignMeUpForm from '../../forms/SignMeUpForm'

import client, {urlForImage} from '../../../client'
import {injectIconToSpanStr} from '../../../utils'

import localDataURL from '../../../assets/images/blur-placeholder.jpg'

export default function HeroImageAndForm({className = '', title, text, formId, image}) {
  const imageProps = useNextSanityImage(client, image)

  return (
    <section
      className={
        className +
        ' herocta overflow-hidden bg-pampas pt-[170px] pb-[75px] lg:pt-[150px] lg:pb-[140px]'
      }
    >
      <div className="container px-2 lg:px-8">
        <div
          className="herocta__inner flex flex-col items-center justify-between gap-[56px]
          lg:flex-row lg:gap-[64px]"
        >
          <div className="herocta__left w-full">
            <div className="herocta__left-wrap mx-auto max-w-[464px] px-2 lg:mx-0 lg:px-0">
              <h1 className="herocta__title heading-1 lg:heading-2 mb-4 text-center lg:text-left">
                {injectIconToSpanStr(title, () => (
                  <Icon
                    className="absolute top-[-30px] right-[-25px] max-w-[30px]
                    sm:right-[-32px] sm:max-w-[40px]
                    md:right-[-36px] md:max-w-[45px]
                    lg:right-[-66px] lg:top-[-45px] lg:max-w-full"
                  />
                ))}
              </h1>

              <p
                className="herocta__text body-m mx-auto mb-[35px] max-w-[375px] text-center text-secondary
                sm:max-w-[410px]
                lg:mb-[46px] lg:max-w-none lg:text-left"
              >
                {text}
              </p>

              <SignMeUpForm
                formId={formId}
                buttonText="Get Demo"
                placeholder="Enter your business email"
                buttonClasses="w-full primary-btn bg-smart shrink-0 py-[11px]
                lg:w-auto"
                formClasses="flex flex-col gap-4 items-center mx-auto max-w-[350px] lg:max-w-[475px] relative
                lg:flex-row lg:gap-2"
                errorClasses="absolute top-[-21px] h-fit lg:top-[unset]"
              />
            </div>
          </div>

          <div
            className="w-full mx-auto max-w-[420px]
              md:max-w-[520px]
              lg:max-w-[580px] lg:ml-auto"
          >
            <Image
              className="w-full aspect-[16/10.8] rounded-[16px] overflow-hidden"
              blurDataURL={imageProps?.blurDataURL ?? localDataURL.blurDataURL}
              src={urlForImage(image.image).width(600).height(406).fit('max').url()}
              layout="responsive"
              placeholder="blur"
              alt={image.alt}
              quality={100}
              height={406}
              width={580}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
