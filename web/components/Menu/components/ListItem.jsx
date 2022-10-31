import Link from 'next/link'

const colors = [
  'text-green-700',
  'text-orange-700',
  'text-gray-700',
  'text-blue-700',
  'text-red-700',
  'text-yellow-700',
  'text-amber-700',
  'text-lime-700',
  'text-sky-700',
  'text-violet-700',
]

export default function ListItem({ items = [] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-[18px]">
      {items?.length > 0 &&
        items.map(({ _key, internal, text, url }, idx) => {
          return (
            <li className={`${colors[idx < colors.length ? idx : 2]}`} key={_key}>
              {internal ? (
                <Link href={url}>
                  <a className="subtitle-s text-[14px] text-black">{text}</a>
                </Link>
              ) : (
                <a
                  className="subtitle-s text-[14px] text-black"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {text}
                </a>
              )}
            </li>
          )
        })}
    </ul>
  )
}
