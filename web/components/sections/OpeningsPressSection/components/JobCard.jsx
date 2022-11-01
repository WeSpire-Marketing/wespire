import Link from 'next/link'

import ArrowIcon from '../../../icons/ArrowIcon'
import RoundedButton from '../../../RoundedButton'

export default function JobCard({name, position, link}) {
  return (
    <li
      className="opressection__card flex items-center justify-between gap-6 rounded-2xl border
      border-[#cacdd4cc] bg-white px-6 py-[40px]
      lg:px-[40px]"
    >
      <div className="opressection__left">
        <h3 className="opressection__job heading-4 mb-2 lg:mb-4">{name}</h3>

        <p className="opressection__position body-s">{position}</p>
      </div>

      {link.internal ? (
        <Link href={link.url} passHref>
          <a className="opressection__link">
            <RoundedButton
              className="inline-flex h-[48px] w-[48px] rotate-180 items-center justify-center
              rounded-full bg-helpful hover:bg-[#DF7139] disabled:bg-helpful
              lg:h-[56px] lg:w-[56px]"
            >
              <ArrowIcon className="rotate-[135deg]" fillColor="white" />
            </RoundedButton>
          </a>
        </Link>
      ) : (
        <a className="opressection__link" href={link.url} target="_blank" rel="noopener noreferrer">
          <RoundedButton
            className="inline-flex h-[48px] w-[48px] rotate-180 items-center justify-center
            rounded-full bg-helpful hover:bg-[#DF7139] disabled:bg-helpful
            lg:h-[56px] lg:w-[56px]"
          >
            <ArrowIcon className="rotate-[135deg]" fillColor="white" />
          </RoundedButton>
        </a>
      )}
    </li>
  )
}
