import slugify from 'slugify'
import React, {useEffect, useState} from 'react'
import useScrollSpy from 'react-use-scrollspy'

export default function Aside({title = 'Table of contents:', items = []}) {
  const [elementRefs, setElementRefs] = useState([])
  const activeSection = useScrollSpy({
    sectionElementRefs: elementRefs, // Array of References to titles DOM elements
    offsetPx: -80,
  })

  useEffect(() => {
    let refs = []
    if (typeof document !== 'undefined') {
      refs = items.map((item) => {
        const itemId = slugify(item?.children[0]?.text ?? '')
        const itemNode = typeof document !== 'undefined' ? document.getElementById(itemId) : null
        const ref = React.createRef()
        ref.current = itemNode
        return ref
      })
      setElementRefs(refs)
    }
  }, [items])

  return (
    <aside className="sidebar">
      <div className="sidebar__inner sticky top-[100px] px-2 lg:px-0">
        <p className="mb-6 font-poppins text-lg font-semibold leading-[150%] text-black lg:mb-8">
          {title}
        </p>

        <ul className="flex flex-col gap-6">
          {items?.length > 0 &&
            items.map((item, idx) => {
              const customTitle = item?.markDefs[0]?.title
              const defaultTitle = item?.children[0]?.text
              const slug = slugify(defaultTitle)
              return (
                <li key={item._key}>
                  <a
                    className={`
                    ${
                      activeSection === idx ? `text-smart` : `text-[#9E9E9E]`
                    } block font-poppins text-[16px] font-medium
                    leading-[100%] tracking-[-0.01em]`}
                    href={'#' + slug}
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
