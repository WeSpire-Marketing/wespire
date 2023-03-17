import { UsersIcon } from '@sanity/icons'

export default {
  name: 'author',
  type: 'document',
  title: 'Authors',
  icon: UsersIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'avatar',
      type: 'image',
      title: 'Avatar',
      validation: Rule => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Description',
          validation: Rule =>
            Rule.required()
              .min(1)
              .max(50)
        }
      ]
    },
    {
      name: 'jobTitle',
      type: 'string',
      title: 'Job title'
    },
    {
      name: 'authorBio',
      title: 'Author Bio',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean'
                  }
                ],
                initialValue: {
                  blank: false
                }
              }
            ]
          }
        }
      ]
    }
  ]
}
