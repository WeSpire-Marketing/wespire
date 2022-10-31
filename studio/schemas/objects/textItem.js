export default {
  name: 'textItem',
  type: 'object',
  title: 'Title with short subtext',
  description:
    'Can be internal or external. By default all links in menu are external.',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title will be show in menu as link',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      type: 'text',
      title: 'Short text under the title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL',
      description: 'Redirect user to this URL after he click on the title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'internal',
      type: 'boolean',
      title: 'External/internal link',
      description:
        'By default, the link is external and will be opened in a new tab',
      validation: (Rule) => Rule.required(),
    },
  ],
  validation: (Rule) => Rule.required(),
  initialValue: {
    internal: false,
  },
}
