export default {
  name: 'heroSection',
  title: 'Hero section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section title',
      type: 'string',
      description:
        'Wrap the word with <span> to animate it. Example: <span>Highlighted</span>',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Text under the title',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Section image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sponsors',
      type: 'array',
      title: 'Partners and sponsors logos ticker',
      of: [
        {
          name: 'sponsor',
          type: 'object',
          title: 'Sponsor',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Sponsor name (used for alt attribute)',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(7),
    },
  ],
}
