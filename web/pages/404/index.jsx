import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {useRouter} from 'next/router'

import imgPath from '../../assets/images/404.svg'
import imgPath2 from '../../assets/images/girl-1.png'
import imgPath3 from '../../assets/images/girl-2.png'
import imgPath4 from '../../assets/images/girl-3.png'
import imgPath5 from '../../assets/images/man-4.png'

export default function Index(props) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Page not found - WeSpire</title>
        <meta
          name="description"
          content="This page is showing when user looking a location that does not exist"
        />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="w-full px-4 overflow-hidden bg-pampas">
        <div
          className="relative w-full max-w-[1294px] h-screen min-h-[878px] mx-auto
          flex flex-col justify-center"
        >
          <motion.div
            className="w-fit absolute top-[calc(50%-370px)] left-[100px] max-w-[210px] hidden
            min-[1280px]:block
            lg:max-w-none"
            initial={{y: 0, x: 0}}
            animate={{y: [-5, 0, -5]}}
            transition={{
              duration: 3,
              repeat: Infinity,
              type: 'linear',
              ease: 'easeInOut',
            }}
          >
            <Image src={imgPath2} alt="404" />
          </motion.div>

          <motion.div
            className="hidden absolute top-[calc(50%-340px)] right-[120px] min-[1280px]:block"
            initial={{y: 0, x: 0}}
            animate={{y: [0, -5, 0]}}
            transition={{
              duration: 3,
              repeat: Infinity,
              type: 'linear',
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            <Image src={imgPath3} alt="404" />
          </motion.div>

          <motion.div
            className="hidden absolute top-[50%] left-0 min-[1280px]:block"
            initial={{y: 0, x: 0}}
            animate={{y: [0, 5, 0]}}
            transition={{
              duration: 3,
              repeat: Infinity,
              type: 'linear',
              ease: 'easeInOut',
            }}
          >
            <Image src={imgPath4} alt="404" />
          </motion.div>

          <motion.div
            className="hidden absolute right-0 top-[calc(50%+30px)] min-[1280px]:block"
            initial={{y: 0, x: 0}}
            animate={{y: [0, 5, 0]}}
            transition={{
              duration: 3,
              repeat: Infinity,
              type: 'linear',
              ease: 'easeInOut',
              delay: 0.3,
            }}
          >
            <Image src={imgPath5} alt="404" />
          </motion.div>

          <div className="inner mx-auto w-full max-w-[345px] text-center">
            <motion.div
              className="mobile-image max-w-[210px] min-[1280px]:hidden"
              initial={{y: -40, x: 50}}
              animate={{y: [-40, -35, -40]}}
              transition={{
                duration: 3,
                repeat: Infinity,
                type: 'linear',
                ease: 'easeInOut',
              }}
            >
              <Image src={imgPath2} alt="404" />
            </motion.div>

            <div className="mx-auto mb-[40px] max-w-[210px] lg:mb-[65px] lg:max-w-full">
              <Image src={imgPath} alt="404" />
            </div>

            <h1 className="heading-2 mb-4">Page not found</h1>

            <p className="body-m mx-auto mb-8 max-w-[285px] text-[#2E2E2E] lg:mb-[40px] lg:max-w-full">
              Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>

            <div className="mx-auto flex w-fit items-center gap-4">
              <button className="stroke-btn" onClick={() => router.back()}>
                Go back
              </button>

              <Link href="/" passHref>
                <a className="primary-btn">Take me home</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
