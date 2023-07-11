import React from 'react'
import {Html, Head, Main, NextScript} from 'next/document'
// import client from '../client'

export default function MyDocument() {
  return (
    <Html lang={'en'}>
      <Head>
        <meta
          name="google-site-verification"
          content="FsKWNledc3vUaggBFxK1-wWFrkpPqvzSeJcnVCg4ElM"
        />
      </Head>
      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        {/* <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleAnalyticsTag}`}
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}
          ></iframe>
        </noscript> */}
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
