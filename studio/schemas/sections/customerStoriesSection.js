export default {
  name: 'customerStoriesSection',
  type: 'object',
  title: 'Customer stories section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description:
        'Wrap the word in <span> to show/hide animated star in the title. Example: <span>Easy</span>',
      validation: Rule => Rule.required()
    },
    {
      name: 'stories',
      title: 'Customer stories',
      type: 'array',
      of: [
        {
          name: 'story',
          title: 'Choose an article',
          type: 'reference',
          to: { type: 'stories' },
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required().max(12)
    }
  ]
}
