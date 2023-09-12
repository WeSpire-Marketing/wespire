export default {
  name: 'heroEventRegistrationSection',
  type: 'object',
  title: 'Hero Event Registration Section',
  fields: [
    {
      name: 'link',
      type: 'object',
      title: 'Section link',
      fields: [
        {
          name: 'visibility',
          title: 'Show button?',
          type: 'boolean',
          initialValue: () => true
        },
        {
          name: 'text',
          type: 'string',
          title: 'Link text',
          validation: Rule =>
            Rule.custom((field, context) =>
              context.parent.visibility && !field ? 'This field must not be empty.' : true
            ),
          hidden: ({ parent }) => Boolean(!parent?.visibility)
        },
        {
          name: 'url',
          type: 'string',
          title: 'Link url',
          validation: Rule =>
            Rule.custom((field, context) =>
              context.parent.visibility && !field ? 'This field must not be empty.' : true
            ),
          hidden: ({ parent }) => Boolean(!parent?.visibility)
        },
        {
          name: 'internal',
          type: 'boolean',
          title: 'External/internal link',
          description: 'By default all links are external and opens in new tab',
          validation: Rule =>
            Rule.custom((field, context) =>
              context.parent.visibility && !field ? 'This field must not be empty.' : true
            ),
          hidden: ({ parent }) => Boolean(!parent?.visibility)
        }
      ],
      initialValue: {
        internal: false,
        visibility: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'titleSmall',
      type: 'object',
      title: 'Section title H1 Small',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title H1'
        },
        {
          name: 'colorText',
          title: 'Text color',
          type: 'color'
        }
      ]
    },
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
      name: 'titleForm',
      type: 'string',
      title: 'Title before form',
      description: 'Optional'
    },
    {
      name: 'formId',
      type: 'string',
      title: 'Form ID',
      description: 'Use only Hubspot form id',
      validation: Rule => Rule.required()
    },
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
