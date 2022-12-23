import { UlistIcon } from '@sanity/icons'
import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments'

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: UlistIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Category slug',
      description: 'Unique strings across of all categories using only lowercase letters and dashes',
      options: {
        source: 'title',
        maxLength: 100, // will be ignored if slugify is set
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      },
      validation: Rule =>
        Rule.custom(slug => {
          if (slug && slug.current) {
            return [
              slug.current === slug.current.toLowerCase() ? true : 'Only lowercase letters',
              !slug.current.includes(' ') ? true : 'Remove spaces'
            ]
          } else {
            return 'Required'
          }
        })
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'color',
      title: 'Category color',
      type: 'colorPicker',
      validation: Rule => Rule.required()
    }
  ]
}
