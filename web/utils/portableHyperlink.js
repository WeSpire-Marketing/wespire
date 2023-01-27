const portableHyperlinkLight = {
  block: {
    // p
    normal: ({children}) => <p>{children}</p>,
  },
  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      const target = value?.blank ? '_blank' : undefined
      return (
        <a href={value.href} className="text-smart underline" rel={rel} target={target}>
          {children}
        </a>
      )
    },
  },
}

const portableHyperlinkDark = {
  block: {
    // p
    normal: ({children}) => <p>{children}</p>,
  },
  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      const target = value?.blank ? '_blank' : undefined
      return (
        <a href={value.href} className="underline" rel={rel} target={target}>
          {children}
        </a>
      )
    },
  },
}

const landingPortableHyperlink = {
  block: {
    // p
    normal: ({children}) => <p>{children}</p>,
  },
  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      const target = value?.blank ? '_blank' : undefined
      return (
        <a href={value.href} className="underline" rel={rel} target={target}>
          {children}
        </a>
      )
    },
  },
}

export {portableHyperlinkLight, portableHyperlinkDark, landingPortableHyperlink}
