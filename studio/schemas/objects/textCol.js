export default {
  name: 'textCol',
  type: 'object',
  title: 'Text column',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Column title',
      validation: Rule => Rule.required()
    },
    {
      name: 'starsColor',
      title: 'Stars color',
      type: 'colorPicker',
      validation: Rule => Rule.required()
    },
    // {
    //   name: 'text',
    //   type: 'text',
    //   title: 'Column text',
    //   validation: Rule => Rule.required()
    // },
    {
      name: 'textHyperlink',
      title: 'Column text',
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
    }
  ]
}
