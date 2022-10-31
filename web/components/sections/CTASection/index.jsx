import Link from 'next/link'
import { motion } from 'framer-motion'

// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return (
    <span
      className="word-wrapper"
      style={{
        display: 'inline-block',
        overflowWrap: 'break-word',
        wordBreak: 'break-word',
        whiteSpace: '-moz-pre-wrap',
      }}
    >
      {props.children}
    </span>
  )
}

export default function CtaSection({ title = '', link }) {
  const item = {
    hidden: {
      y: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  }

  //  Split each word of props.text into an array
  const splitWords = title.split(' ')

  // Create storage array
  const words = []

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''))
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push('\u00A0')
  })

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  }

  return (
    <section
      className="ctasection bg-thriving bg-ctaMobileBg bg-[length:131px_108px]
      bg-[center_top_40px] bg-no-repeat pt-[164px] pb-[64px] text-center
      lg:bg-cta lg:bg-contain lg:bg-center lg:pt-[148px] lg:pb-[156px]"
    >
      <motion.h2
        className="ctasection__title heading-2 mx-auto mb-[40px] max-w-[612px] 
        px-2 text-center text-white lg:mb-[56px]"
        viewport={{ once: true }}
        whileInView="visible"
        variants={container}
        initial="hidden"
      >
        {words.map((word, index) => {
          return (
            // Wrap each word in the Wrapper component
            <Wrapper key={index}>
              {words[index].flat().map((element, index) => {
                return (
                  <span
                    style={{
                      overflow: 'hidden',
                      display: 'inline-block',
                    }}
                    key={index}
                  >
                    <motion.span style={{ display: 'inline-block' }} variants={item}>
                      {element}
                    </motion.span>
                  </span>
                )
              })}
            </Wrapper>
          )
        })}
      </motion.h2>

      <div className="inline-block w-full max-w-[375px] px-4 sm:max-w-[188px] sm:px-0">
        {link.internal ? (
          <Link href={link.url} passHref scroll={false}>
            <a className="ctasection__link cta-btn w-full py-[15px] px-10">{link.text}</a>
          </Link>
        ) : (
          <a
            className="ctasection__link cta-btn w-full py-[15px] px-10"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        )}
      </div>
    </section>
  )
}
