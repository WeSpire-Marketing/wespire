import Img from '../../../Img'
import {motion} from 'framer-motion'
import QuotesIcon from '../../../icons/QuotesIcon'

export default function CustomerQuote({className = '', image, name, job, text, isLandingAndMobil}) {
  return (
    <figure
      className={`flex flex-col items-start gap-8 rounded-[16px] bg-neverPreachy
      p-6 pb-[40px]
      md:flex-row lg:gap-[80px] lg:rounded-[60px] lg:py-[56px] lg:px-[69px] ${className}`}
    >
      {!isLandingAndMobil && (
        <motion.div
          className="relative w-full max-w-[338px] shrink-0"
          initial={{opacity: 0}}
          viewport={{once: true}}
          whileInView={{opacity: 1}}
          transition={{duration: 1, delay: 0.25}}
        >
          <Img value={image} />
        </motion.div>
      )}

      <div>
        <motion.div
          className="mb-[25px] flex items-center gap-4 lg:mb-[47px]"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1, delay: 0.55}}
          viewport={{once: true}}
        >
          <QuotesIcon color="#1771DC" />

          <figcaption className="tags-s flex flex-col gap-1">
            {name}
            <cite className="body-s not-italic text-secondary">{job}</cite>
          </figcaption>
        </motion.div>

        <motion.blockquote
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1, delay: 1}}
          viewport={{once: true}}
        >
          <p className="heading-3">{text}</p>
        </motion.blockquote>
      </div>
    </figure>
  )
}
