import Link from 'next/link'

const CardLink = ({ internal = false, url, color }) => {
  return internal ? (
    <Link href={url} passHref>
      <a
        className="flex h-[48px] w-[48px] shrink-0 items-center justify-center 
        rounded-full lg:h-[56px] lg:w-[56px]"
        style={{ backgroundColor: color }}
      >
        <svg
          className="w-[16px] translate-x-[1px] lg:w-[20px]"
          width="19"
          height="24"
          viewBox="0 0 19 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7057 10.3702C18.8277 11.1675 18.8277 12.8336 17.7057 
            13.6309L3.65848 23.6126C2.33425 24.5536 0.5 23.6068 0.5 21.9823L0.5
            2.01882C0.5 0.394322 2.33425 -0.552464 3.65848 0.38851L17.7057 10.3702Z"
            fill="white"
          />
        </svg>
      </a>
    </Link>
  ) : (
    <a
      className="flex h-[48px] w-[48px] shrink-0 items-center justify-center 
      rounded-full lg:h-[56px] lg:w-[56px]"
      style={{ backgroundColor: color }}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      <svg
        className="w-[16px] translate-x-[1px] lg:w-[20px]"
        width="19"
        height="24"
        viewBox="0 0 19 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.7057 10.3702C18.8277 11.1675 18.8277 12.8336 17.7057 
          13.6309L3.65848 23.6126C2.33425 24.5536 0.5 23.6068 0.5 21.9823L0.5
          2.01882C0.5 0.394322 2.33425 -0.552464 3.65848 0.38851L17.7057 10.3702Z"
          fill="white"
        />
      </svg>
    </a>
  )
}

export default CardLink
