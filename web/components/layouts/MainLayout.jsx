import {motion} from 'framer-motion'

import Header from '../Header'
import Footer from '../Footer'
import MobileMenu from '../MobileMenu'

import variants from '../../utils/transitions'

export default function MainLayout({
  children,
  hideDesktopNav = false,
  hideMobileNav = false,
  config: {mainNavigation, footerNavigation},
  template,
}) {
  let color
  let btnType

  if (template === 'whyWespireTemplate') {
    color = '#fff'
    btnType = 'cta-btn'
  }
  if (template === 'articleTemplate') {
    color = '#fff'
    btnType = 'cta-btn'
  }
  if (template === 'landingTemplate') {
    color = '#fff'
  }
  if (template === 'landingVideoTemplate') {
    color = '#fff'
  }

  return (
    <div className="main-layout relative">
      {!hideDesktopNav && <Header {...mainNavigation} logoColor={color} btnType={btnType} />}
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
  )
}
