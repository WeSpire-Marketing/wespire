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
      <main
        className="felx-col relative flex h-screen w-full items-center
        justify-center overflow-hidden bg-pampas"
      >
        <motion.div
          className="mobile-image absolute max-w-[210px] lg:hidden"
          initial={{y: -285, x: -15}}
          animate={{y: [-285, -280, -285]}}
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
          className="absolute right-[50%] hidden max-w-[210px] translate-y-[-285px]
          translate-x-[calc(50%-15px)] lg:block lg:max-w-none lg:translate-x-[-425px] lg:translate-y-[-250px]"
          initial={{y: -285, x: -425}}
          animate={{y: [-285, -280, -285]}}
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
          className="absolute hidden translate-x-[425px] translate-y-[-250px] lg:block"
          initial={{y: -250, x: 425}}
          animate={{y: [-250, -255, -250]}}
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
          className="absolute hidden translate-x-[-550px] translate-y-[180px] lg:block"
          initial={{y: 180, x: -550}}
          animate={{y: [180, 175, 180]}}
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
          className="absolute hidden translate-x-[550px] translate-y-[180px] lg:block"
          initial={{y: 180, x: 550}}
          animate={{y: [180, 185, 180]}}
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
      </main>
    </>
  )
}
