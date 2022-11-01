export default {
  name: 'textRow',
  title: 'Text row',
  type: 'object',
  fields: [
    {
      name: 'col1',
      type: 'textCol',
      title: 'Column 1',
      description: `You can add/remove stars and their quantity in the title.
       Just wrap word with <span class="stars-3">. Example: <span class="stars-3">Leader</<span>. 
       Where 3 is a number from 1 to 3.`,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'col2',
      type: 'textCol',
      title: 'Column 2',
      description: `You can add/remove stars and their quantity in the title.
        Just wrap word with <span class="stars-3">. Example: <span class="stars-3">Leader</<span>. 
        Where 3 is a number from 1 to 3.`,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'col3',
      type: 'textCol',
      title: 'Column 3',
      description: `You can add/remove stars and their quantity in the title.
        Just wrap word with <span class="stars-3">. Example: <span class="stars-3">Leader</<span>. 
        Where 3 is a number from 1 to 3.`,
      validation: (Rule) => Rule.required(),
    },
  ],
}
