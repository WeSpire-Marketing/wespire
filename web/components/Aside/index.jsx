import React from 'react'
import useScrollSpy from 'react-use-scrollspy'

export default function Aside({ title = 'Table of contents:', items = [] }) {
  const activeItem = useScrollSpy({
    sectionElementRefs: items.map((item) => {
      const ref = React.createRef()
      ref.current = item
      return ref
    }), // Array of References to DOM elements
    offsetPx: -80,
  })

  return (
    <aside className="sidebar">
      <div className="sidebar__inner sticky top-[100px] px-2 lg:px-0">
        <p className="mb-6 font-poppins text-lg font-semibold leading-[150%] text-black lg:mb-8">
          {title}
        </p>

        <ul className="flex flex-col gap-6">
          {items.length &&
            items.map((item, idx) => {
              return (
                <li key={item.id}>
                  <a
                    className={`
                    ${
                      activeItem === idx ? `text-smart` : `text-[#9E9E9E]`
                    } block font-poppins text-[16px] font-medium
                    leading-[100%] tracking-[-0.01em]`}
                    href={`#${item.id}`}
                  >
                    {item?.innerText ?? 'Item'}
                  </a>
                </li>
              )
            })}
        </ul>
      </div>
    </aside>
  )
}
