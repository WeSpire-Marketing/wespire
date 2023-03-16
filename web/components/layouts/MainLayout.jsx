import {motion} from 'framer-motion'

import Header from '../Header'
import Footer from '../Footer'
import MobileMenu from '../MobileMenu'

import variants from '../../utils/transitions'
import Head from 'next/head'
import {variablesCss} from '../../utils/colors'

export default function MainLayout({
  children,
  hideDesktopNav = false,
  hideMobileNav = false,
  config: {mainNavigation, footerNavigation, logo, ctaButton},
  template,
}) {
  let color
  let btnType

  if (template === 'whyWespireTemplate') {
    color = '#fff'
    btnType = 'cta-btn-black'
  }
  if (template === 'articleTemplate') {
    color = '#fff'
    btnType = 'cta-btn-black'
  }
  if (template === 'landingTemplate') {
    color = '#fff'
  }
  if (template === 'landingTemplateSocialProof') {
    color = '#fff'
  }
  if (template === 'landingVideoTemplate') {
    color = '#fff'
  }

  const varsCss = variablesCss(ctaButton ?? {})

  return (
    <>
      <Head>
        <style>:root {`{${varsCss}}`}</style>
      </Head>

      <div className="main-layout relative">
        {!hideDesktopNav && (
          <Header
            {...mainNavigation}
            logoColor={color}
            template={template}
            btnType={btnType}
            logo={logo}
          />
        )}
        {!hideMobileNav && <MobileMenu {...mainNavigation} navColor={color} />}
        <motion.main
          className="main"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </motion.main>
        {!hideDesktopNav && <Footer {...footerNavigation} />}
      </div>
    </>
  )
}
