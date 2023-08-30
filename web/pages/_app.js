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
      <Script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${tag}');`}
      </Script>

      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-322062090" />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-322062090');`}
      </Script>
      {/* <!-- End Google Tag Manager --> */}

      {/* <!-- 6Sense Tag  --> */}
      <Script async>
        {`window._6si = window._6si || [];
      window._6si.push(['enableEventTracking', true]);
      window._6si.push(['setToken', 'd2b88cac580593b6d3290d742ad1ae81']);
      window._6si.push(['setEndpoint', 'b.6sc.co']);
      window._6si.push(['enableRetargeting', false]);

      (function() {
        var gd = document.createElement('script');
        gd.type = 'text/javascript';
        gd.async = true;
        gd.src = '//j.6sc.co/6si.min.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gd, s);
      })();`}
      </Script>
      {/* <!-- End 6Sense Tag  --> */}
      <Suspense>
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </Suspense>
    </>
  )
}
export default MyApp
