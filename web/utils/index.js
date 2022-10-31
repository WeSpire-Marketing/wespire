import { motion } from 'framer-motion'

export const injectIconToSpanStr = (str, Icon) => {
  if (str.includes('<span>') && str.includes('</span>')) {
    const splited = str.split(' ').join(' ')
    const part1 = splited.split('<span>')[0]
    const part3 = splited.split('</span>')[1]

    const part2 = str.match(/<span>(.*?)<\/span>/g).map((val) => val.replace(/<\/?span>/g, ''))
    const arr = [part1, part2, part3]

    return arr.map((part, idx) =>
      idx === 1 ? (
        <span
          style={{ display: 'inline-block', position: 'relative', zIndex: '2' }}
          key={part + idx}
        >
          {part} <Icon />
        </span>
      ) : (
        part
      )
    )
  }

  return str
}

export const injectStarsToStr = (str, Icon) => {
  const regEx = /<[^>]*>/g
  const newStr = str.replaceAll(regEx, '$')
  const arr = newStr.split(' ')

  return arr.map((str, idx) => {
    return str.includes('$') ? (
      <span style={{ display: 'inline-block', position: 'relative' }} key={idx}>
        {str.slice(1, -1)} <Icon />
      </span>
    ) : (
      ' ' + str + ' '
    )
  })
}

export const animateString = (str) => {
  const arr = str.split(' ')
  return arr.map((r, id) => (
    <motion.span
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: 'auto', opacity: 1 }}
      transition={{
        duration: 1,
        delay: id * 0.01,
      }}
      viewport={{ once: true }}
      key={id}
    >
      {r}{' '}
    </motion.span>
  ))
}

export const formatTimestamp = (timestamp) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const d = new Date(timestamp)
  return d.toLocaleDateString('en-US', options)
}

export const filterBlogsByQuery = (blogs, query) => {
  if (blogs?.length > 0 && query) {
    query = query.toLowerCase()
    const filtered = blogs.filter((blog) => {
      if (
        // search matches in title
        blog.title.toLowerCase().includes(query) ||
        // search matches in description
        blog.excerpt.toLowerCase().includes(query) ||
        // search matches in categories
        blog.categories.filter((cat) => cat.title.toLowerCase().includes(query)).length
      ) {
        return blog
      }
    })
    return filtered
  }

  return blogs
}

export const normalizeDemoFormData = ({
  firstname,
  lastname,
  company,
  companysize,
  email,
  phone,
  how_did_you_hear_about_wespire_,
  message,
  ip,
}) => {
  const hutk = document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/, '$1')

  const preparedData = {
    fields: [
      {
        objectTypeId: '0-1',
        name: 'firstname',
        value: firstname,
      },
      {
        objectTypeId: '0-1',
        name: 'lastname',
        value: lastname,
      },
      {
        objectTypeId: '0-1',
        name: 'company',
        value: company,
      },
      {
        objectTypeId: '0-1',
        name: 'companysize',
        value: companysize,
      },
      {
        objectTypeId: '0-1',
        name: 'email',
        value: email,
      },
      {
        objectTypeId: '0-1',
        name: 'phone',
        value: phone,
      },
      {
        objectTypeId: '0-1',
        name: 'how_did_you_hear_about_wespire_',
        value: how_did_you_hear_about_wespire_,
      },
      {
        objectTypeId: '0-1',
        name: 'message',
        value: message,
      },
    ],
    context: {
      hutk,
      ipAddress: ip,
      pageUri: 'www.wespire.com/book-demo',
      pageName: 'Book Demo',
    },
    legalConsentOptions: {
      consent: {
        // Include this object when GDPR options are enabled
        consentToProcess: true,
        text: 'I agree to allow Example Company to store and process my personal data.',
        communications: [
          {
            value: true,
            subscriptionTypeId: 999,
            text: 'I agree to receive marketing communications from Example Company.',
          },
        ],
      },
    },
  }

  return preparedData
}

export const normalizeSignMeUpFormData = ({ email, pageUri, pageName, ip }) => {
  const hutk = document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/, '$1')
  const preparedData = {
    fields: [
      {
        objectTypeId: '0-1',
        name: 'email',
        value: email,
      },
    ],
    context: {
      hutk,
      pageUri,
      pageName,
      ipAddress: ip,
    },
    legalConsentOptions: {
      consent: {
        // Include this object when GDPR options are enabled
        consentToProcess: true,
        text: 'I agree to allow Example Company to store and process my personal data.',
        communications: [
          {
            value: true,
            subscriptionTypeId: 999,
            text: 'I agree to receive marketing communications from Example Company.',
          },
        ],
      },
    },
  }

  return preparedData
}

export const normalizeContactFormData = ({
  ip,
  email,
  phone,
  message,
  lastname,
  firstname,
  how_did_you_hear_about_wespire_,
}) => {
  const hutk = document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/, '$1')

  const preparedData = {
    fields: [
      {
        objectTypeId: '0-1',
        name: 'firstname',
        value: firstname,
      },
      {
        objectTypeId: '0-1',
        name: 'lastname',
        value: lastname,
      },
      {
        objectTypeId: '0-1',
        name: 'email',
        value: email,
      },
      {
        objectTypeId: '0-1',
        name: 'phone',
        value: phone,
      },
      {
        objectTypeId: '0-1',
        name: 'how_did_you_hear_about_wespire_',
        value: how_did_you_hear_about_wespire_,
      },
      {
        objectTypeId: '0-1',
        name: 'message',
        value: message,
      },
    ],
    context: {
      hutk,
      ipAddress: ip,
      pageUri: 'www.wespire.com/book-demo',
      pageName: 'Book Demo',
    },
    legalConsentOptions: {
      consent: {
        // Include this object when GDPR options are enabled
        consentToProcess: true,
        text: 'I agree to allow Example Company to store and process my personal data.',
        communications: [
          {
            value: true,
            subscriptionTypeId: 999,
            text: 'I agree to receive marketing communications from Example Company.',
          },
        ],
      },
    },
  }

  return preparedData
}
