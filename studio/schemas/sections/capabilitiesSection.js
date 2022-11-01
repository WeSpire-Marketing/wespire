export default {
  name: 'capabilitiesSection',
  type: 'object',
  title: 'Capabilities section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description: 'Wrap the word with <span> to show animation. Example: <span>Easy</span>',
      validation: Rule => Rule.required()
    },
    {
      name: 'capabilities',
      type: 'array',
      title: 'Capabilities',
      of: [
        {
          name: 'item',
          type: 'object',
          title: 'Capabilities Item',
          fields: [
            {
              name: 'icon',
              type: 'image',
              title: 'Icon',
              validation: Rule => Rule.required()
            },
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              validation: Rule => Rule.required()
            },
            {
              name: 'text',
              type: 'text',
              title: 'Text',
              validation: Rule => Rule.required()
            }
          ],
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required().length(3)
    }
  ]
}
