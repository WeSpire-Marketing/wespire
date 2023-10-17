export default {
  name: 'heroCTAFormSection',
  type: 'object',
  title: 'Hero CTA Form Section',
  initialValue: {
    showHeroForm: true,
    showBlurb: false
  },
  fields: [
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
      name: 'showHeroForm',
      type: 'boolean',
      title: 'Show Hubspot Form?',
      initialValue: 'true'
    },
    {
      name: 'formId',
      type: 'string',
      title: 'Form ID',
      description: 'Use only Hubspot form id',
      validation: Rule =>
        Rule.custom((doc, { parent }) => {
          if (doc === undefined && parent.showHeroForm) {
            return 'Form ID required'
          } else {
            return true
          }
        }),
      hidden: ({ parent: { showHeroForm } }) => !showHeroForm
    },
    {
      name: 'showBlurb',
      type: 'boolean',
      title: 'Show blurb notification?',
      initialValue: 'false'
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
