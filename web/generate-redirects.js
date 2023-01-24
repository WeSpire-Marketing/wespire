const sanityClient = require('@sanity/client')
const groq = require('groq')

const options = {
  projectId: 'umko2xz8',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-11-28',
}

const client = sanityClient(options)

module.exports = async () => {
  const query = groq`
    *[_type == 'redirect'] {
      destination,
      source,
      permanent
    }
  `
  const redirects = await client.fetch(query)
  return redirects
}
