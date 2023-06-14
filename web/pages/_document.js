import React from 'react'
import {Html, Head, Main, NextScript} from 'next/document'
// import client from '../client'

export default function MyDocument() {
  return (
    <Html lang={'en'}>
      <Head />
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

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return client
//       .fetch(
//         `*[_id == "global-config"] {
//       lang,
//       googleAnalyticsTag
//     }
//     `
//       )
//       .then((res) => {
//         const lang = res[0]?.lang ?? 'en'
//         const tag = res[0]?.googleAnalyticsTag ?? ''
//         return {...initialProps, lang, tag}
//       })
//   }

//   render() {
//     const tag = this.props.tag
//     return (
//       <Html lang={this.props.lang}>
//         <Head />
//         <body>
//           {/* <!-- Google Tag Manager (noscript) --> */}
//           <noscript>
//             <iframe
//               src={`https://www.googletagmanager.com/ns.html?id=${tag}`}
//               height="0"
//               width="0"
//               style={{display: 'none', visibility: 'hidden'}}
//             ></iframe>
//           </noscript>
//           {/* <!-- End Google Tag Manager (noscript) --> */}
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }
