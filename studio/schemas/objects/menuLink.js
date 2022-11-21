export default {
  name: 'menuLink',
  type: 'object',
  title: 'Link with arrow',
  description: 'Can be internal or external. By default all links in menu are external.',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Link text',
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      type: 'string',
      title: 'Link URL',
      description:
        'Internal link can be like: "/valid-internal-link"; external: "https://wespire.com"',
      validation: Rule => Rule.required()
    },
    {
      name: 'internal',
      type: 'boolean',
      title: 'External/internal link',
      description: 'By default, the link is external and will be opened in a new tab',
      validation: Rule => Rule.required()
    }
  ],
  validation: Rule => Rule.required(),
  initialValue: {
    internal: false
  }
}
