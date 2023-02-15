import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'

import Icon from '../icons/AnimatedStars1'
import {urlForImage} from '../../client'

export default function EventForm({
  className = '',
  suptitle,
  title,
  link,
  tag,
  text,
  date,
  speakers,
}) {
  return (
    <motion.div
      className={`${className} flex items-center justify-between flex-col
      bg-smart shadow-[0px_12px_40px_rgba(169,169,169,0.15)]
      rounded-t-[16px] rounded-b-[20px] max-w-[634px]
      md:max-w-[752px]
      lg:max-w-none lg:mx-auto lg:flex-row lg:p-6 lg:pl-[40px] lg:shadow-none`}
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 1}}
    >
      <div
        className="left flex basis-[70%] w-full justify-between gap-[40px] py-[64px] px-6
        lg:mr-[33px] lg:p-0"
      >
        <div className="max-w-[320px] flex flex-col items-start justify-center">
          <div className="relative w-fit">
            <span
              className="mb-4 inline-block font-poppins text-lg font-medium uppercase
              leading-[100%] tracking-[-0.01em] text-white opacity-80"
            >
              {suptitle}
            </span>
            <Icon />
          </div>

          <h2 className="heading-3 mb-[40px] text-white lg:mb-[64px]">{title}</h2>

          {link.internal ? (
            <Link href={link.url} passHref>
              <a className="cta-btn-black p-[12px_24px] hover:bg-white lg:p-[15px_46px]">
                {link.text}
              </a>
            </Link>
          ) : (
            <a
              className="cta-btn-black p-[12px_24px] hover:bg-white lg:p-[15px_46px]"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          )}
        </div>

        {speakers?.length > 0 && (
          <ul
            className="center flex flex-col gap-6 border-gallery
            lg:flex-1 lg:gap-8 lg:border-l-[1px] lg:py-8 lg:pl-[56px]"
          >
            {speakers.map(({_key, ...props}) => {
              return <SpeakerItem key={_key} {...props} />
            })}
          </ul>
        )}
      </div>

      <div
        className="right flex basis-[33%] h-full flex-col justify-between rounded-b-[16px] bg-white py-8 px-6
        lg:max-w-[392px] lg:rounded-t-[16px] lg:p-[40px]"
      >
        <span
          className="tag mb-[64px] hidden max-w-fit border border-smart text-smart
          lg:inline-block"
        >
          {tag}
        </span>

        <p className="subtitle-m mb-[40px] text-secondary lg:mb-[75px]">{text}</p>

        <p className="body-s text-secondary">{date}</p>
      </div>
    </motion.div>
  )
}

function SpeakerItem({image, name, job}) {
  return (
    <li className="flex items-center gap-4">
      <div
        className="relative h-[56px] w-[56px] shrink-0
        lg:h-[80px] lg:w-[80px]"
      >
        <Image
          src={urlForImage(image).width(80).height(80).fit('crop').url()}
          objectFit="cover"
          alt={image.alt}
          layout="fill"
        />
      </div>

      <div className="hidden text-white sm:block">
        <h3 className="mb-1 font-poppins text-base font-semibold leading-[150%]">{name}</h3>
        <p className="text-base font-normal leading-[140%] text-gallery">{job}</p>
      </div>
    </li>
  )
}
