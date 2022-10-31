import client from '../../client'
import {useNextSanityImage} from 'next-sanity-image'

export default function useSanityBlurDataUrl(sanityUrl) {
  const props = useNextSanityImage(client, sanityUrl)
  return props.blurDataURL
}
