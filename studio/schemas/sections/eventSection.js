export default {
  name: 'eventSection',
  type: 'object',
  title: 'Event Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description: 'Wrap the word with <span> to show animation. Example: <span>Easy</span>',
      validation: Rule => Rule.required()
    },
    {
      name: 'titleSecond',
      type: 'string',
      title: 'Second title (Optional)',
      description:
        'Optional title. Wrap the word with <span> to show animation. Example: <span>Easy</span>'
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text under the title',
      description: 'Optional field'
    },
    {
      name: 'eventList',
      type: 'array',
      title: 'List card with event.',
      of: [
        {
          name: 'card',
          type: 'object',
          title: 'Event card',

          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Event card image',
              description: 'Field for icon 80x80 and svg format.',
              validation: Rule => Rule.required()
            },
            {
              name: 'title',
              type: 'string',
              title: 'Title card',
              validation: Rule => Rule.required()
            },
            {
              name: 'text',
              type: 'text',
              title: 'Event card text',
              validation: Rule => Rule.required()
            },
            {
              name: 'link',
              type: 'object',
              title: 'Card link',
              fields: [
                {
                  name: 'showBtn',
                  title: 'Show link?',
                  type: 'boolean',
                  initialValue: () => true
                },
                {
                  name: 'isScrollToForm',
                  title: 'Scroll to Section Form?',
                  type: 'boolean',
                  hidden: ({ parent }) => Boolean(!parent?.showBtn),
                  initialValue: () => false
                },
                {
                  name: 'text',
                  type: 'string',
                  title: 'Link text',
                  hidden: ({ parent }) => Boolean(!parent?.showBtn),
                  validation: Rule =>
                    Rule.custom((field, context) =>
                      context.parent.showBtn && !field ? 'This field must not be empty.' : true
                    )
                },
                {
                  name: 'url',
                  type: 'string',
                  title: 'Link url',
                  hidden: ({ parent }) => Boolean(!parent?.showBtn),
                  validation: Rule =>
                    Rule.custom((field, context) =>
                      context.parent.showBtn && !field ? 'This field must not be empty.' : true
                    )
                },
                {
                  name: 'internal',
                  type: 'boolean',
                  title: 'Internal link',
                  description: 'By default all links are external and opens in new tab',
                  hidden: ({ parent }) => Boolean(!parent?.showBtn),
                  validation: Rule => Rule.required()
                }
              ],
              initialValue: {
                internal: false,
                showBtn: true
              },
              validation: Rule => Rule.required()
            }
          ],
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule =>
        Rule.required()
          .min(1)
          .max(3)
    }
  ]
}
