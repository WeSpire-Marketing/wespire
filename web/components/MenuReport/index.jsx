import React, {useState} from 'react'
import ChevronIcon from '../icons/ChevronIcon'
import {motion} from 'framer-motion'
import ImgItemHoriz from '../Menu/components/ImgItemHoriz'

export const MenuReport = ({menuItems}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <div className="relative w-full">
      <div
        onMouseEnter={() => setMenuIsOpen(true)}
        // onMouseLeave={() => setMenuIsOpen(false)}
        className={`subtitle-s text-black z-20 flex items-center gap-2`}
      >
        Contents
        <ChevronIcon
          className={`h-[6px] w-[10px] ${menuIsOpen ? 'rotate-180' : ''}`}
          color={'#121212'}
        />
      </div>
      {menuIsOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white p-2">
          <motion.div
            className={`menu absolute top-[-20px] left-[50%]
      z-10 w-[100%] translate-x-[-50%] pt-[68px]`}
            initial={{backgroundColor: 'transparent', pointerEvents: 'none'}}
            animate={{
              backgroundColor: menuIsOpen ? 'rgba(250,252,255,1)' : 'rgba(250,252,255,0)',
              pointerEvents: menuIsOpen ? 'all' : 'none',
            }}
            style={{
              backgroundColor: menuIsOpen ? 'rgba(250,252,255,1)' : 'rgba(250,252,255,0)',
              boxShadow: menuIsOpen ? '0px 10px 40px rgba(81, 81, 81, 0.14)' : 'none',
            }}
            transition={{duration: 0.1}}
          >
            <motion.div
              className="header-menu mx-auto w-full max-w-[1288px] overflow-hidden pt-[40px]"
              animate={{opacity: menuIsOpen ? '1' : '0'}}
              transition={{duration: 0.1}}
              onMouseLeave={() => setMenuIsOpen(false)}
              initial={{opacity: '0'}}
            >
              <div
                className="menu-row flex flex-wrap border-t-[1px] border-[rgba(202,205,212,0.8)] px-[32px]
          pt-[40px] pb-[40px]"
              >
                {menuItems.length > 0 && (
                  <div
                    className="menu-col flex flex-col  border-r-[1px]
              border-[rgba(202,205,212,0.8)] py-[16px] pr-[48px] lg:pr-8 min-[1200px]:pr-[48px]"
                  >
                    {menuItems.map(({_key, image, heading, text}) => {
                      return (
                        <div key={_key}>
                          <ImgItemHoriz title={heading} image={image} text={text} />
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
