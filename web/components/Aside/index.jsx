import slugify from 'slugify'
import React, {useState} from 'react'

export default function Aside({title = 'Table of contents:', items = []}) {
  const [activeItemTextId, setActiveItemTextId] = useState(
    slugify(items[0]?.children[0]?.text) ?? ''
  )

  return (
    <aside className="sidebar">
      <div className="sidebar__inner sticky top-[100px] px-2 lg:px-0">
        <p className="mb-6 font-poppins text-lg font-semibold leading-[150%] text-black lg:mb-8">
          {title}
        </p>

        <ul className="flex flex-col gap-6">
          {items?.length > 0 &&
            items.map((item) => {
              const customTitle = item?.markDefs[0]?.title
              const defaultTitle = item?.children[0]?.text
              const slug = slugify(defaultTitle)
              return (
                <li key={item._key}>
                  <a
                    className={`
                    ${
                      activeItemTextId === slugify(defaultTitle) ? `text-smart` : `text-[#9E9E9E]`
                    } block font-poppins text-[16px] font-medium
                    leading-[100%] tracking-[-0.01em]`}
                    href={'#' + slug}
                    onClick={() => setActiveItemTextId(slug)}
                  >
                    {customTitle ?? (defaultTitle || 'The title is not specified')}
                  </a>
                </li>
              )
            })}
        </ul>
      </div>
    </aside>
  )
}
