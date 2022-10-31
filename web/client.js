import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: 'umko2xz8',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-10-31',
})

export const urlForImage = (source) => imageUrlBuilder(client).image(source)

export default client
