export default {
  name: 'power',
  title: 'Преимущества',
  type: 'document',
  fields: [
    {
      name: 'Row',
      title: 'Строка',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'item',
          title: 'Поле',
          fields: [
            {
              name: 'icon',
              title: 'Иконка',
              type: 'image',
            },
            {
              name: 'title',
              title: 'Оглавление',
              type: 'string',
            },
            {
              name: 'des',
              title: 'Текст',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'button',
      title: 'Текст кнопки',
      type: 'string',
    },
  ],
}
