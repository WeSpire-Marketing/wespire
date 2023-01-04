import client from 'part:@sanity/base/client'

// Note: this assumes that every route that has a slug field
// have it on the `slug` field at the root
export function isUniqueAcrossAllRoutes(slug, options) {
  const { document } = options

  const id = document._id.replace(/^drafts\./, '')
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug
  }

  const query = `!defined(*[_type == "route" && !(_id in [$draft, $published]) && slug.current == $slug][0]._id)`

  return client.fetch(query, params)
}
