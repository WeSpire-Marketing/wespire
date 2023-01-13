import Link from 'next/link'
import {useEffect} from 'react'
import {useTabs, TabPanel} from 'react-headless-tabs'
import {motion, useAnimationControls} from 'framer-motion'

import Tab from './Tab'
import Img from '../../../Img'

const variants = {
  sleep: {
    opacity: 1,
    y: 0,
  },
  play: {
    opacity: [0, 1],
    y: [50, 0],
    transition: {duration: 0.5, ease: 'linear'},
  },
}

export default function TabsWithNav({tabs}) {
  const controls = useAnimationControls()
  const [selectedTab, setSelectedTab] = useTabs(tabs.map((tab) => tab.name))

  useEffect(() => {
    controls.start('play')
  }, [controls, selectedTab])

  return (
    <>
      <nav className="mb-[48px] overflow-hidden lg:mb-[100px]">
        <div className="overflow-x-auto">
          <ul
            className="tabsection-tabs relative mx-4 flex min-w-full w-fit
            items-center justify-around overflow-hidden translate-y-[-2px]
            after:absolute after:bottom-[3px] after:z-[-1] after:block
            after:h-[1px] after:w-full after:bg-[#96ABC9] after:content-['']
            lg:mx-0 lg:w-full lg:after:bottom-[unset] lg:after:top-[3px]"
          >
            {tabs.map(({_key, name}) => (
              <Tab key={_key} isActive={selectedTab === name} onClick={() => setSelectedTab(name)}>
                {name}
              </Tab>
            ))}
          </ul>
        </div>
      </nav>

      <div className="mx-auto max-w-[1128px]">
        {tabs.map(({_key, image, link, name, text, title}) => {
          return (
            <TabPanel key={_key} hidden={selectedTab !== name}>
              <motion.div
                className="tab-content flex flex-col-reverse items-center
                lg:flex-row"
                initial="sleep"
                animate={controls}
                variants={variants}
              >
                <div
                  className="tab-content__left w-full max-w-[580px] px-8
                  sm:px-0 sm:max-w-[480px]
                  lg:w-1/2 lg:px-0"
                >
                  <h3 className="tab-content__left__title heading-3 mb-4 lg:max-w-[380px] lg:mb-6">
                    {title}
                  </h3>

                  <p
                    className="tab-content__left__text body-m mb-6 text-secondary
                    lg:mb-[40px] lg:max-w-[380px]"
                  >
                    {text}
                  </p>

                  {link.internal ? (
                    <Link href={link.url} passHref>
                      <a className="tab-content__left__link primary-btn">{link.text}</a>
                    </Link>
                  ) : (
                    <a
                      className="tab-content__left__link primary-btn"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  )}
                </div>

                <div
                  className="tab-content__right mb-8 w-full max-w-[580px]
                  lg:mb-0 lg:w-1/2"
                >
                  <Img value={image} />
                </div>
              </motion.div>
            </TabPanel>
          )
        })}
      </div>
    </>
  )
}
