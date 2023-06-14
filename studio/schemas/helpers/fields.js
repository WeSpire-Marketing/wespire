export const ID_FIELD = {
  title: 'Id section',
  type: 'string',
  name: 'idSection',
  validate: Rule => Rule.required().max(96)
}

export const pageGroups = [
  {
    name: 'hero',
    title: 'Hero',
    default: true
  },
  {
    name: 'tabs',
    title: 'Tabs'
  },
  {
    name: 'faq',
    title: 'FAQ'
  },
  {
    name: 'cta',
    title: 'CTA'
  },
  {
    name: 'slider',
    title: 'Slider'
  },
  {
    name: 'cards',
    title: 'Cards'
  }
]
