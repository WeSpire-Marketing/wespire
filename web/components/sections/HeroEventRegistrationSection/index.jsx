import Link from 'next/link'
import {motion} from 'framer-motion'
import dynamic from 'next/dynamic'

import Icon from '../../icons/AnimatedIcon'

import pageTransitionVariants from '../../../utils/transitions'
import {injectIconToSpanStr} from '../../../utils'

import DemoForm from '../../forms/DemoForm'
import Logo from '../../icons/Logo'
import ArrowIcon from '../../icons/ArrowIcon'
const Img = dynamic(() => import('../../Img'))

export default function HeroEventRegistrationSection({
  link,
  title,
  titleForm,
  text,
  formId,
  image,
}) {
  return (
    <div className="demopage bg-pampas">
      <header
        className="demo-header hidden lg:flex absolute top-[35px] left-0 right-0 z-10
        lg:top-[20px]"
      >
        <div
          className="header-inner mx-auto flex w-full max-w-[1354px]
          items-center justify-between px-4 lg:px-8"
        >
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <Logo />
            </a>
          </Link>
          {/* {link.internal ? (
            <Link href={link.url} passHref>
              <a
                className="group flex items-center gap-2 font-poppins text-base
                font-semibold text-black"
              >
                {link.text}
                <span
                  className="inline-block transition-all duration-200
                  ease-in-out group-hover:translate-x-1"
                >
                  <ArrowIcon className="max-w-[14px]" />
                </span>
              </a>
            </Link>
          ) : (
            <a
              className="group flex items-center gap-2 font-poppins text-base
              font-semibold text-black"
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.text}
              <span
                className="inline-block transition-all duration-200
                  ease-in-out group-hover:translate-x-1"
              >
                <ArrowIcon className="max-w-[14px]" />
              </span>
            </a>
          )} */}{' '}
          {link?.visibility &&
            (link.internal ? (
              <Link href={link.url} passHref>
                <a className="hero-form__head__link cta-btn-black">{link.text}</a>
              </Link>
            ) : (
              <a
                className="hero-form__head__link cta-btn-black"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            ))}
        </div>
      </header>

      <motion.section
        className="body pt-[170px] pb-[90px] lg:pt-[205px] lg:pb-[200px]"
        variants={pageTransitionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="container">
          <div
            className="body-inner flex flex-col items-start gap-[48px]
            sm:flex-row
            lg:gap-[98px]"
          >
            <div className="body-left w-full">
              <h1
                className="body-left__title heading-2 mb-4 text-[34px] lg:mb-[19px]
                lg:pl-[10px] lg:text-[46px]"
              >
                {injectIconToSpanStr(title, Icon)}
              </h1>
              {text && (
                <p
                  className="body-left__title body-m mb-8 max-w-[500px] text-secondary
                lg:mb-[56px] lg:pl-[10px]"
                >
                  {text}
                </p>
              )}

              <div className="body-left__image">
                <Img
                  // layoutImg="fill"
                  className="lg:w-full"
                  value={image.image}
                />
              </div>
            </div>

            <div className="body-right w-full max-w-[568px] lg:p-10">
              {titleForm && <h3 className="heading-3 mb-4">{titleForm}</h3>}
              <DemoForm formId={formId} className="mb-[32px]" />

              {/* <p className="body-s mx-auto max-w-[438px] text-center text-secondary">
                By submitting this form I agree to receive marketing communications from WeSpire.
              </p> */}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

// <section className="hero-form bg-thriving pt-[170px] pb-[70px] lg:pt-6 lg:pb-[100px]">
//   <div
//     className="hero-form__head px-8 mx-auto mb-[90px] hidden max-h-[65px]
//     w-full max-w-[calc(1288px+2rem)] items-center justify-between lg:flex"
//   >
//     <div className="hero-form__head-logo cursor-pointer">
//       <Link href="/" passHref>
//         <a className="flex">
//           <LogoStatic color="#fff" />
//         </a>
//       </Link>
//     </div>

//     {link?.visibility &&
//       (link.internal ? (
//         <Link href={link.url} passHref>
//           <a className="hero-form__head__link cta-btn-black">{link.text}</a>
//         </Link>
//       ) : (
//         <a
//           className="hero-form__head__link cta-btn-black"
//           href={link.url}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {link.text}
//         </a>
//       ))}
//   </div>

//   {/* <div className="container mb-8 px-2 lg:mb-[95px] lg:px-8">
//     <div
//       className="hero-form__body flex flex-col items-center justify-between gap-[46px]
//       lg:flex-row lg:gap-8"
//     >
//       <div
//         className="hero-form__body-left w-full max-w-[456px]
//         sm:max-w-[540px]
//         md:max-w-[600px]
//         lg:w-1/2"
//       >
//         <h1
//           className="hero-form__body__title heading-1 mb-4 text-center text-white
//           lg:mb-6 lg:text-left"
//         >
//           {injectIconToSpanStr(title, () => (
//             <Icon color="#FFCC7B" />
//           ))}
//         </h1>

//         <Suspense fallback={() => <p>Loading ...</p>}>
//           <div className="px-4 md:px-0">
//             <SignMeUpWithNamesForm formId={formId} />
//           </div>
//         </Suspense>
//       </div>
//     </div>
//   </div> */}
//   <motion.section
//     className="body pt-[170px] pb-[90px] lg:pt-[205px] lg:pb-[200px]"
//     variants={pageTransitionVariants}
//     initial="hidden"
//     animate="visible"
//     exit="exit"
//   >
//     <div className="container">
//       <div
//         className="body-inner flex flex-col items-start gap-[48px]
//         sm:flex-row
//         lg:gap-[98px]"
//       >
//         <div className="body-left w-full">
//           <h1
//             className="body-left__title heading-2 mb-4 text-[34px] lg:mb-[19px]
//             lg:pl-[10px] lg:text-[46px]"
//           >
//             {injectIconToSpanStr(title, Icon)}
//           </h1>

//           <p
//             className="body-left__title body-m mb-8 max-w-[500px] text-secondary
//             lg:mb-[56px] lg:pl-[10px]"
//           >
//             {subtitle}
//           </p>

//           <div className="body-left__image">
//             <Img
//               layoutImg="fill"
//               className="lg:w-[120%] lg:translate-x-[-60px] lg:translate-y-[-25px]"
//               value={image}
//             />
//           </div>
//         </div>

//         <div className="body-right w-full max-w-[568px]">
//           <DemoForm formId={formId} className="mb-[32px]" />

//           <p className="body-s mx-auto max-w-[438px] text-center text-secondary">
//             By submitting this form I agree to receive marketing communications from WeSpire.
//           </p>
//         </div>
//       </div>
//     </div>
//   </motion.section>
// </section>
