import Image from 'next/image'

import {urlForImage} from '../../../client'

export default function LandingpageFooter({brand, socials}) {
  return (
    <footer className="footer bg-gallery px-4 pt-4 pb-6 lg:pt-[35px] lg:pb-[20px]">
      <div className="mx-auto flex w-full max-w-[1288px] items-center justify-between">
        <p className="text-[14px] leading-130 text-secondary opacity-70">{brand}</p>

        <ul className="socials flex items-center gap-[30px]">
          {socials?.length > 0 &&
            socials.map(({_key, icon}) => {
              return (
                <li className="inline-flex items-center" key={_key}>
                  <a
                    className="inline-block w-[28px] h-[28px]"
                    href={icon.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src={urlForImage(icon).url()}
                      width={28}
                      height={28}
                      alt={icon.alt}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </a>
                </li>
              )
            })}
        </ul>
      </div>
    </footer>
  )
}
