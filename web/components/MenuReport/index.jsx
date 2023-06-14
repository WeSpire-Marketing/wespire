import React, {useState} from 'react'
import ChevronIcon from '../icons/ChevronIcon'
import {motion} from 'framer-motion'
import ImgItem from './components/ImgItem'

export const MenuReport = ({menuItems}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const toogleMenu = () => {
    setMenuIsOpen((prev) => !prev)
  }
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center">
        <div
          onMouseEnter={() => setMenuIsOpen(true)}
          onClick={() => toogleMenu()}
          className={`subtitle-s text-black font-semibold z-20 flex items-center gap-2 text-center cursor-pointer`}
        >
          Contents
          <ChevronIcon
            className={`h-[6px] w-[10px] ${menuIsOpen ? 'rotate-180' : ''}`}
            color={'#121212'}
          />
        </div>
      </div>
      {menuIsOpen && (
        <motion.div
          className={`menu w-full max-w-[909px] absolute top-14 left-[50%]
      z-10 w-[100%] translate-x-[-50%] rounded-2xl`}
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
            className="header-menu mx-auto w-full max-w-[1288px] overflow-hidden pt-[40px] px-[32px]
          pt-[40px] pb-[40px]"
            animate={{opacity: menuIsOpen ? '1' : '0'}}
            transition={{duration: 0.1}}
            onMouseLeave={() => setMenuIsOpen(false)}
            initial={{opacity: '0'}}
          >
            <h3
              className="text-[#A3A6A8] font-poppins text-[16px] font-medium
                     tracking-[-0.01em] mb-8"
            >
              Contents
            </h3>
            <div className="menu-row grid lg:grid-cols-2 gap-2">
              {menuItems.length > 0 && (
                <div className="menu-col flex flex-col gap-8">
                  {[...menuItems.slice(0, 3)].map(({_key, image, heading, text, id}) => {
                    return (
                      <div key={`${_key}-${Math.random(id)}`}>
                        <ImgItem
                          image={image}
                          title={heading}
                          text={text}
                          id={id}
                          toogleMenu={toogleMenu}
                        />
                      </div>
                    )
                  })}
                </div>
              )}
              {menuItems.length > 0 && (
                <div className="menu-col flex flex-col gap-8">
                  {[...menuItems.slice(3, 6)].map(({_key, image, heading, text, id}) => {
                    return (
                      <div key={`${_key}-${id}`}>
                        <ImgItem
                          image={image}
                          title={heading}
                          text={text}
                          id={id}
                          toogleMenu={toogleMenu}
                        />
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
