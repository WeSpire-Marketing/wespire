import {motion} from 'framer-motion'
import ImageBg from '../../../assets/images/CTA-Bg.webp'
import ImageBgMobile from '../../../assets/images/girl.webp'
import Image from 'next/image'
import useWindowSize from '../../../utils/hooks/useWindowSize'
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

export default function CtaPdfSection({title = '', file}) {
  const {width} = useWindowSize()

  const item = {
    hidden: {
      y: '200%',
      transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85},
    },
    visible: {
      y: 0,
      transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75},
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
      className="relative ctasection bg-orange bg-[length:131px_108px]
      bg-[center_top_40px] bg-no-repeat text-center
      lg:bg-none lg:bg-contain lg:bg-center pt-[164px] pb-[64px] lg:pt-[82px] lg:pb-[90px] overflow-hidden"
    >
      <div className="absolute z-0 mx-auto mt-8 lg:mt-0 top-0 left-0 right-0 bottom-0 w-[131px] lg:w-full h-full">
        <div className="w-full h-full lg:flex lg:justify-center">
          <Image
            src={width < 1024 ? ImageBgMobile : ImageBg}
            objectFit="contain"
            alt="Picture of the author"
          />
        </div>
      </div>

      <motion.h2
        className="ctasection__title heading-2 mx-auto mb-[40px] lg:max-w-[58%] 2xl:max-w-[1024px]
        px-2 text-center text-white lg:mb-[56px]"
        viewport={{once: true}}
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
                    <motion.span style={{display: 'inline-block'}} variants={item}>
                      {element}
                    </motion.span>
                  </span>
                )
              })}
            </Wrapper>
          )
        })}
      </motion.h2>

      <div className="inline-block relative z-1 sm:px-0">
        <a
          className="ctasection__link cta-btn-black w-full py-[15px] px-10"
          href={file.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {file.buttonText}
        </a>
      </div>
    </section>
  )
}
