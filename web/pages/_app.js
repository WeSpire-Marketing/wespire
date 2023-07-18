import React, {Suspense} from 'react'
import Script from 'next/script'
import {AnimatePresence} from 'framer-motion'
import '../styles/globals.css'
import '../styles/shared.module.css'
import '../styles/layout.css'
import '../styles/custom-properties.css'

const MyApp = ({Component, pageProps}) => {
  const tag = pageProps?.config?.googleAnalyticsTag ?? ''
  return (
    <>
      <Script
        src="https://scripts.cddie.co/rep/wespire-lookup.min.js"
        type="text/javascript"
        async
      />
      {/* <!-- Google Tag Manager --> */}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${tag}`} />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${tag});`}
      </Script>
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
