export default {
  name: 'heroVideo',
  title: 'Hero video section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section title',
      type: 'string',
      description: 'Wrap the word with <span> to animate it. Example: <span>Highlighted</span>',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Text under the title',
      type: 'text',
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
    //   title: 'Link',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'url',
    //       title: 'Link URL',
    //       type: 'string',
    //       validation: (Rule) => Rule.required(),
    //     },
    //     {
    //       name: 'text',
    //       title: 'Link text',
    //       type: 'string',
    //       validation: (Rule) => Rule.required(),
    //     },
    //     {
    //       name: 'internal',
    //       title: 'External/internal link',
    //       description: 'By default all links are external and opens in new tab',
    //       type: 'boolean',
    //       validation: (Rule) => Rule.required(),
    //     },
    //   ],
    // },
    {
      name: 'video',
      title: 'Section video',
      description: 'Paste URL from Youtube or Vimeo',
      type: 'videoId',
      validation: Rule => Rule.required()
    }
  ]
}
