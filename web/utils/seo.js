export const metaTags = [
  {
    name: 'msapplication-TileColor',
    content: '#da532c',
  },
  {
    name: 'msapplication-config',
    content: '/assets/favicon/browserconfig.xml',
  },
  {
    name: 'theme-color',
    content: '#ffffff',
  },
]

export const linkTags = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/assets/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    sizes: '32x32',
    type: 'image/png',
    href: '/assets/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    sizes: '16x16',
    type: 'image/png',
    href: '/assets/favicon/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/assets/favicon/site.webmanifest',
  },
  {
    rel: 'mask-icon',
    color: '#5bbad5',
    href: '/assets/favicon/safari-pinned-tab.svg',
  },
  {
    rel: 'shortcut icon',
    href: '/assets/favicon/favicon.ico',
  },
]

export const createSeoScript = (listFAQ) => {
  const mainEntity = listFAQ.map((card) => ({
    '@type': 'Question',
    name: card.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: card.answer,
    },
  }))
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  }
  return (
    <script
      defer
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(faqData)}}
    />
  )
}
