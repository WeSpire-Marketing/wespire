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
        {/*Linkedin script*/}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                _linkedin_partner_id = "3421658";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              `,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                (function(l) {
                  if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                  window.lintrk.q=[]}
                  var s = document.getElementsByTagName("script")[0];
                  var b = document.createElement("script");
                  b.type = "text/javascript";b.async = true;
                  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                  s.parentNode.insertBefore(b, s);
                })(window.lintrk);
              `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{display: 'none'}}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=3421658&fmt=gif"
          />
        </noscript>
        {/*Linkedin script*/}
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
