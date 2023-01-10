import React from 'react'
import BaseApp from 'next/app'
import Script from 'next/script'
import {AnimatePresence} from 'framer-motion'
import client from '../client'
import '../styles/globals.css'
import '../styles/shared.module.css'
import '../styles/layout.css'
import '../styles/custom-properties.css'

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `

class App extends BaseApp {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Add site config from sanity
    return client.fetch(siteConfigQuery).then((config) => {
      if (!config) {
        return {pageProps}
      }
      if (config && pageProps) {
        pageProps.config = config
      }

      return {pageProps}
    })
  }

  render() {
    const {Component, pageProps} = this.props
    const tag = pageProps?.config?.googleAnalyticsTag ?? ''

    return (
      <>
        {/* <!-- Start of HubSpot Embed Code --> */}
        <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/8353230.js"
        />
        {/* <!-- End of HubSpot Embed Code --> */}
        {/* <!-- Google Tag Manager --> */}
        <Script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${tag}');`}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </>
    )
  }
}

export default App
