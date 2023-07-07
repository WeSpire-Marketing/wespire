import React, {Suspense} from 'react'
import Script from 'next/script'
import {AnimatePresence} from 'framer-motion'
import '../styles/globals.css'
import '../styles/shared.module.css'
import '../styles/layout.css'
import '../styles/custom-properties.css'

const MyApp = ({Component, pageProps}) => {
  const tag = pageProps?.config?.googleAnalyticsTag ?? ''
  const loadGTA = Boolean(pageProps?.content?.sections[0]?._type === 'landingTemplateCompetitor')

  return (
    <>
      <Script
        src="https://scripts.cddie.co/rep/wespire-lookup.min.js"
        type="text/javascript"
        async
        strategy="worker"
      />
      {/* <!-- Google Tag Manager --> */}
      {!loadGTA && (
        <Script strategy="worker" async>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${tag}');`}
        </Script>
      )}
      {/* <!-- End Google Tag Manager --> */}
      <Suspense>
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </Suspense>
    </>
  )
}
export default MyApp
