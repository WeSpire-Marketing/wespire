export default {
  name: 'heroCTASection',
  type: 'object',
  title: 'Hero CTA Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description: 'Wrap the word with <span> to show animation. Example: <span>Easy</span>',
      validation: Rule => Rule.required()
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text under the title',
      validation: Rule => Rule.required()
    },
    {
      name: 'textHyperlink',
      title: 'Text under the title',
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
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'formId',
      type: 'string',
      title: 'Form ID',
      description: 'Use only Hubspot form id',
      validation: Rule => Rule.required()
    },
    // {
    //   name: 'link',
    //   type: 'object',
    //   title: 'CTA Link',
    //   fields: [
    //     {
    //       name: 'text',
    //       type: 'string',
    //       title: 'Link text',
    //       validation: (Rule) => Rule.required(),
    //     },
    //     {
    //       name: 'url',
    //       type: 'string',
    //       title: 'Link URL',
    //       validation: (Rule) => Rule.required(),
    //     },
    //     {
    //       name: 'internal',
    //       type: 'boolean',
    //       title: 'External/internal link',
    //       description: 'By default all links are external and opens in new tab',
    //       validation: (Rule) => Rule.required(),
    //     },
    //   ],
    //   validation: (Rule) => Rule.required(),
    // },
    {
      name: 'image',
      type: 'object',
      title: 'Section image',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          validation: Rule => Rule.required()
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Image description (alt)',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    }
  ]
}
