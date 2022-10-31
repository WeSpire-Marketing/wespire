export default {
  name: 'sectionsBuilder',
  type: 'object',
  title: 'Page builder',
  fields: [
    {
      name: 'sections',
      type: 'array',
      title: 'List of page sections',
      of: [
        { name: 'heroSection', type: 'heroSection' },
        { name: 'longSection', type: 'longSection' },
        { name: 'sliderSection', type: 'sliderSection' },
        { name: 'cardsSection', type: 'cardsSection' },
        { name: 'ctaSection', type: 'ctaSection' }
      ],
      validation: Rule => Rule.required()
    }
  ]
}
