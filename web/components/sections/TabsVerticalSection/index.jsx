import React, {Fragment, useState, useRef, useEffect} from 'react'
import {injectIconToSpanStr} from '../../../utils'
import Icon from '../../icons/AnimatedIcon'
import Img from '../../Img'
import {motion, AnimatePresence} from 'framer-motion'

const TabsVerticalSection = ({tabsList, title, id}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const tabRef = useRef([])
  const handleSlide = (index) => {
    setCurrentIndex(index)
    if (tabRef.current.length) {
      tabRef.current[currentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    }
  }

  return (
    <section className="pt-[48px] pb-[64px]  lg:pt-[120px] lg:pb-[140px]" id={id}>
      <div className="container px-2 sm:px-6 lg:px-8">
        <AnimatePresence initial={false}>
          <div>
            <h2
              className="tabsection__title heading-2 mx-auto mb-[42px] max-w-[310px] text-center
              md:max-w-[448px]
              lg:mb-[80px] lg:max-w-[790px]"
            >
              {injectIconToSpanStr(title, Icon)}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* {tabsList.map((item, idx) => {
              return (
                currentIndex === idx && (
                  <motion.div
                    key={`-${idx ** Math.random()}`}
                    className={`hero-form__body-right w-full
            self-start
              lg:bg-heroForm lg:bg-no-repeat lg:bg-contain lg:bg-right-top
            }`}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{ease: 'easeOut', duration: 2}}
                  >
                    <Img
                      className="hero-form__body-right max-w-[456px] mx-auto
              sm:max-w-[540px]
              md:max-w-[580px]
              lg:ml-auto lg:mr-0"
                      priority="true"
                      value={item.image}
                    />
                  </motion.div>
                )
              )
            })} */}

            {tabsList.map((item, idx) => {
              return (
                <Fragment key={`${item.title}-${Math.random(idx)}`}>
                  <div>
                    {currentIndex === idx && (
                      <motion.div
                        key={`-${idx ** Math.random()}`}
                        className={` hidden w-full lg:block
            lg:self-start
              lg:bg-heroForm lg:bg-no-repeat lg:bg-contain lg:bg-right-top
            }`}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{ease: 'easeOut', duration: 2}}
                      >
                        <Img
                          className="hero-form__body-right  mx-auto
              lg:ml-auto lg:mr-0"
                          priority="true"
                          value={item.image}
                        />
                      </motion.div>
                    )}
                  </div>
                  <div className="flex gap-2 lg:gap-6">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full border-2 border-[#1771DC] w-[31px] h-[31px] text-center py-0.5 text-[#1771DC]">
                        <p className="font-poppins text-[16px] font-medium">{idx + 1}</p>
                      </div>
                      {idx !== tabsList.length - 1 && (
                        <div
                          className={`w-0.5 h-full`}
                          style={{
                            backgroundColor: `${'#1771DC'}`,
                          }}
                        ></div>
                      )}
                    </div>
                    <div className="flex flex-col gap-4 lg:gap-8">
                      <h2
                        className={`heading-4 cursor-pointer hover:text-[#1771DC] ${
                          currentIndex !== idx && idx !== tabsList.length - 1 && 'mb-10'
                        }`}
                        onClick={() => handleSlide(idx)}
                        ref={(el) => (tabRef.current[idx] = el)}
                      >
                        {item.title}
                      </h2>{' '}
                      {currentIndex === idx && (
                        <motion.div
                          key={`-${idx ** Math.random()}`}
                          className={` lg:hidden w-full block
            lg:self-start
              lg:bg-heroForm lg:bg-no-repeat lg:bg-contain lg:bg-right-top
            }`}
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          exit={{opacity: 0}}
                          transition={{ease: 'easeOut', duration: 2}}
                        >
                          <Img
                            className="hero-form__body-right  mx-auto
              lg:ml-auto lg:mr-0"
                            priority="true"
                            value={item.image}
                          />
                        </motion.div>
                      )}
                      {currentIndex === idx && (
                        <motion.section
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: {opacity: 1, height: 'auto'},
                            collapsed: {opacity: 0, height: 0},
                          }}
                          transition={{duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]}}
                        >
                          <div>
                            <p className="body-m mb-6 text-secondary lg:mb-[100px]">{item.text}</p>
                          </div>
                        </motion.section>
                      )}
                    </div>
                  </div>
                </Fragment>
              )
            })}
          </div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default TabsVerticalSection
