import {motion} from 'framer-motion'

import Header from '../Header'
import Footer from '../Footer'
import MobileMenu from '../MobileMenu'

import variants from '../../utils/transitions'

export default function MainLayout({children, config: {mainNavigation, footerNavigation}}) {
  return (
    <div className="main-layout relative">
      <Header {...mainNavigation} />
      <MobileMenu {...mainNavigation} />
      <motion.main
        className="main"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.main>
      <Footer {...footerNavigation} />
    </div>
  )
}
