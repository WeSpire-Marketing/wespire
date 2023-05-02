import React, {useState, memo} from 'react'
import Icon from '../../icons/AnimatedMarksEnd'
import AccordionIcon from '../../icons/AccordionArrow'
import {injectIconToSpanStr} from '../../../utils'
import {motion, AnimatePresence} from 'framer-motion'

const AccordionItem = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <button
      className={`flex flex-col text-left w-full bg-gallery py-5 lg:py-10 border-y`}
      style={{
        borderColor: 'rgba(202, 205, 212, 0.8)',
        borderTopColor: isOpen ? 'rgba(23, 113, 220, 0.8)' : 'rgba(202, 205, 212, 0.8)',
      }}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex gap-4 justify-between items-center w-full">
        <div className={`text-2xl font-semibold ${isOpen ? 'text-smart' : 'text-main'}`}>
          {question}
        </div>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isOpen ? 'less' : 'more'}
            initial={{
              rotate: isOpen ? -90 : 90,
            }}
            animate={{
              zIndex: 1,
              rotate: 0,
              transition: {
                type: 'tween',
                duration: 0.15,
                ease: 'circOut',
              },
            }}
            exit={{
              zIndex: 0,
              rotate: isOpen ? -90 : 90,
              transition: {
                type: 'tween',
                duration: 0.15,
                ease: 'circIn',
              },
            }}
          >
            <AccordionIcon
              className={`${!isOpen && 'rotate-180'}`}
              color={isOpen ? '#1771DC' : '#121212'}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
            key="test"
            className="body-m text-secondary max-w-[952px] w-full pt-6 pr-6 ml:pr-0"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

const AccordionItemMemo = memo(AccordionItem)
export default function GoogleFAQSection({title, listFAQ}) {
  return (
    <section
      className="google_faq_section pb-[100px]
      sm:pb-[115px]
      md:pb-[130px]
      lg:pb-[140px]
      bg-gallery"
    >
      <div className="container px-2 sm:px-4 lg:px-8">
        <h2 className="google_faq_title heading-1 mb-10 lg:heading-2 lg:mb-14 text-center lg:text-left">
          {Boolean(title?.length) &&
            injectIconToSpanStr(title, () => (
              <Icon
                className="absolute top-[-30px] right-[-25px] max-w-[30px]
                    sm:right-[-32px] sm:max-w-[40px]
                    md:right-[-36px] md:max-w-[45px]
                    lg:right-[-50px] lg:top-[-20px] lg:max-w-[50px]"
              />
            ))}
        </h2>
        <div>
          {Boolean(listFAQ?.length) &&
            listFAQ.map((faq) => <AccordionItemMemo key={faq._key} {...faq} />)}
        </div>
      </div>
    </section>
  )
}
