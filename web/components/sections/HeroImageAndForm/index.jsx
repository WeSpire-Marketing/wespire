import Image from 'next/image'
import {useNextSanityImage} from 'next-sanity-image'
import {PortableText} from '@portabletext/react'
import Icon from '../../icons/AnimatedMarksEnd'

import client, {urlForImage} from '../../../client'
import {injectIconToSpanStr} from '../../../utils'

import localDataURL from '../../../assets/images/blur-placeholder.jpg'
import {HubspotForm} from '../../forms'
import {portableHyperlinkLight} from '../../../utils/portableHyperlink'
import Head from 'next/head'
import {getRGBAndOpacity} from '../../../utils/colors'

export default function HeroImageAndForm({
  className = '',
  titleSmall,
  title,
  text,
  textHyperlink,
  link,
  image,
  formId = '',
  listFAQ,
}) {
  const imageProps = useNextSanityImage(client, image)

  const colorTextCss = getRGBAndOpacity('h1SmallTitle-colorText', titleSmall?.colorText)
  const mainEntity =
    Boolean(listFAQ) &&
    listFAQ.map((card) => ({
      '@type': 'Question',
      name: card.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: card.answer,
      },
    }))
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  }

  return (
    <>
      <Head>
        <style>:root {`{${colorTextCss}}`}</style>
        {Boolean(mainEntity?.length) && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(faqData)}}
          />
        )}
      </Head>

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
                {titleSmall?.title ? (
                  <>
                    <h1 className="herocta__text body-m mb-2 font-bold text-center lg:text-left text-skin-h1SmallTitle-colorText">
                      {titleSmall?.title}
                    </h1>
                    <h2 className="herocta__title heading-1 lg:heading-2 mb-4 text-center lg:text-left">
                      {injectIconToSpanStr(title, () => (
                        <Icon
                          className="absolute top-[-30px] right-[-25px] max-w-[30px]
                    sm:right-[-32px] sm:max-w-[40px]
                    md:right-[-36px] md:max-w-[45px]
                    lg:right-[-66px] lg:top-[-45px] lg:max-w-full"
                        />
                      ))}
                    </h2>
                  </>
                ) : (
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
                )}

                <div
                  className={`herocta__text body-m mx-auto max-w-[375px] text-center text-secondary sm:max-w-[410px] lg:max-w-none lg:text-left
                ${formId?.trim() ? 'mb-[16px] lg:mb-[24px]' : 'mb-[35px] lg:mb-[46px]'}`}
                >
                  <PortableText
                    value={textHyperlink}
                    components={portableHyperlinkLight}
                    onMissingComponent={false}
                  />
                </div>

                {formId?.trim() && (
                  <div className="flex flex-col items-center mx-auto gap-4 relative mb-[35px] lg:flex-row lg:gap-[8px] md:max-w-[475px] lg:max-w-[475px] lg:mb-[46px]">
                    <HubspotForm formId={formId} page="hero-and-form-page" />

                    {/* {link?.internal ? (
                  <Link href={link.url} passHref>
                    <a
                      className={`w-full primary-btn bg-smart shrink-0 text-center py-[11px] lg:w-auto`}
                    >
                      {link.text}
                    </a>
                  </Link>
                ) : (
                  <a
                    className={`w-full primary-btn bg-smart shrink-0 text-center py-[11px] lg:w-auto`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                )} */}
                  </div>
                )}
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
    </>
  )
}
