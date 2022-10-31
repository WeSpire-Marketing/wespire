export default {
  name: 'namedChildrens',
  type: 'object',
  title: 'Named group',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Name of the group',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'childrens',
      type: 'array',
      title: 'Group items',
      of: [
        { name: 'textItem', type: 'textItem' },
        { name: 'bigImgItem', type: 'bigImgItem' },
        { name: 'cardItem', type: 'cardItem' },
        { name: 'imgItem', type: 'imgItem' },
        { name: 'imgItemHoriz', type: 'imgItemHoriz' },
        { name: 'menuList', type: 'menuList' },
        { name: 'menuLink', type: 'menuLink' },
        { name: 'cardItemWithTags', type: 'cardItemWithTags' },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}
