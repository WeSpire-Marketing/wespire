import Head from 'next/head'

import {urlForImage} from '../../client'

export default function PageMeta({
  meta: {title, description, ogTitle, ogDescription, url, type, twitterSite, image},
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/assets/favicon/favicon.ico" />

      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:site_name" content="WeSpire" />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={urlForImage(image).url()} />

      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={urlForImage(image).url()} />

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}
