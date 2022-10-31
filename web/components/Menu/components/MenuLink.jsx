import Link from 'next/link'

import ArrowRight from '../../icons/ArrowIcon'

export default function MenuLink({internal = false, text = '', url = '#'}) {
  return internal ? (
    <Link href={url} passHref>
      <a
        className="mx-auto mt-2 inline-flex w-fit items-center gap-2
        font-poppins text-[14px] font-semibold leading-[150%] text-smart lg:mx-0 lg:mt-4"
      >
        {text}
        <ArrowRight className="w-[16px]" />
      </a>
    </Link>
  ) : (
    <a
      className="mx-auto mt-2 inline-flex w-fit items-center gap-2
      font-poppins text-[14px] font-semibold leading-[150%] text-smart lg:mx-0 lg:mt-4"
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      {text}
      <ArrowRight className="w-[14px]" />
    </a>
  )
}
