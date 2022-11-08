import Link from 'next/link'
import {motion} from 'framer-motion'

export default function CTAForm({className = '', title, suptitle, link, tag, text, date}) {
  return (
    <div
      className={`${className} mx-2 rounded-[16px] shadow-[0px_12px_40px_rgba(169,169,169,0.15)]
      sm:max-w-[634px] sm:mx-auto
      md:max-w-[752px]
      lg:max-w-none lg:mx-0 lg:shadow-none`}
    >
      <motion.div
        className={`rounded-b-0 relative flex flex-col items-start justify-between
        rounded-t-[16px] rounded-b-[0px] bg-smart bg-[url('../assets/images/blogPanelBg.png')]
        bg-contain bg-[right_-105px_bottom] bg-no-repeat py-[64px] px-6 lg:flex-row
        lg:items-center lg:rounded-t-[16px] lg:rounded-b-[16px] lg:bg-[calc(50%-60px)_center] lg:p-[24px] lg:pl-[42px]`}
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: 50}}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        <div className="left w-full max-w-[180px] sm:max-w-[380px] lg:max-w-[320px]">
          <span
            className="mb-4 inline-block font-poppins text-lg font-medium uppercase
            leading-[100%] tracking-[-0.01em] text-white opacity-80"
          >
            {suptitle}
          </span>

          <h2 className="heading-3 mb-[40px] text-white lg:mb-[64px]">{title}</h2>

          {link.internal ? (
            <Link href={link.url} passHref>
              <a className="cta-btn p-[12px_24px] hover:bg-white lg:p-[15px_46px]">{link.text}</a>
            </Link>
          ) : (
            <a
              className="cta-btn p-[12px_24px] hover:bg-white lg:p-[15px_46px]"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          )}
        </div>

        <div
          className="hidden h-full flex-col justify-between rounded-[16px]
          bg-white py-8 px-6
          lg:flex lg:min-w-0 lg:max-w-[392px] lg:p-[40px]"
        >
          <span className="tag mb-[64px] max-w-fit border border-smart text-smart">{tag}</span>

          <p className="subtitle-m mb-[40px] text-secondary lg:mb-[75px]">{text}</p>

          <p className="body-s text-secondary">{date}</p>
        </div>
      </motion.div>

      <div
        className="flex h-fit flex-col justify-between
        rounded-t-[0] rounded-b-[16px] bg-white py-8 px-6
        lg:static lg:hidden lg:h-full lg:min-w-0 lg:max-w-[392px] lg:rounded-t-[16px]
        lg:rounded-b-[16px] lg:p-[40px]"
      >
        <p className="subtitle-m mb-[40px] text-secondary lg:mb-[75px]">{text}</p>

        <p className="body-s text-secondary">{date}</p>
      </div>
    </div>
  )
}
