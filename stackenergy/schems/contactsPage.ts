export default {
  name: 'contactsPage',
  title: 'Контакты',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'des',
      title: 'Описание',
      type: 'string',
    },
    {
      name: 'info',
      title: 'Информация',
      type: 'array',
      of: [
        {
          name: 'Row',
          title: 'Стркока',
          type: 'object',
          fields: [
            {
              name: 'from',
              title: 'Инфо',
              type: 'string',
            },
            {
              name: 'to',
              title: 'Контакт',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
