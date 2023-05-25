import { ID_FIELD } from '../helpers/fields'
import { MasterDetailIcon } from '@sanity/icons'
export default {
  name: 'sliderReportSection',
  type: 'object',
  title: 'Slider section report',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    ID_FIELD,
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description: 'Wrap the word with <span> to animate it. Example: <span>Highlighted</span>',
      validation: Rule => Rule.required()
    },
    {
      name: 'titleCardsText',
      type: 'string',
      title: 'Title to cards text',
      validation: Rule => Rule.required()
    },
    {
      name: 'textList',
      type: 'array',
      title: 'Card with text',
      validation: Rule =>
        Rule.required()
          .min(1)
          .max(3),
      of: [
        {
          name: 'text',
          type: 'text',
          title: 'Text'
        }
      ]
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Slider cards',
      of: [
        {
          name: 'cardList',
          type: 'object',
          title: 'Card with image',
          icon: MasterDetailIcon,
          validation: Rule =>
            Rule.required()
              .min(1)
              .max(3),
          fields: [
            {
              name: 'listImage',
              title: 'List of image',
              type: 'array',
              of: [
                {
                  name: 'imageData',
                  type: 'object',
                  title: 'Card image',
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
                      title: 'Image description',
                      validation: Rule => Rule.required()
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      validation: Rule => Rule.required().min(3)
    }
  ]
}
