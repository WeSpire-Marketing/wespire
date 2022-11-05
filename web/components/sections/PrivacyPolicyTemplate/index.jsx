import {useEffect, useRef, useState} from 'react'

import Aside from '../../Aside'
import Content from '../../Content'

import useCustomScrollBehavior from '../../../utils/hooks/useCustomScrollBehavior'

export default function PrivacyPolicyTemplate(props) {
  useCustomScrollBehavior()

  const contentRef = useRef(null)
  const [navItems, setNavItems] = useState([])

  // set array of all H2/H3 nodes from the privacy content
  useEffect(() => {
    if (contentRef.current) {
      const nodeList = contentRef.current.childNodes
      const titleNodes = Array.from(nodeList).filter(
        (node) => node.nodeName === 'H3' || node.nodeName === 'H2'
      )
      titleNodes.forEach((titleNode, idx) => titleNode.setAttribute('id', `title-${idx + 1}`))
      setNavItems(titleNodes)
    }
  }, [])

  return (
    <div className="privacypage bg-gallery">
      <div className="outer pt-[170px] pb-[100px] lg:pt-[192px] lg:pb-[140px]">
        <div className="container px-2 lg:px-4">
          <div
            className="inner flex grid-cols-[1fr_280px] flex-col-reverse gap-[80px]
            lg:grid lg:gap-[128px]"
          >
            <div className="content prose min-w-[100%]" ref={contentRef}>
              <Content {...props} />
            </div>

            <Aside items={navItems} />
          </div>
        </div>
      </div>
    </div>
  )
}
