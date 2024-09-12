export default {
  name: 'header',
  title: 'Шапка',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Лого',
      type: 'image',
    },
    {
      name: 'sections',
      title: 'Разделы',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'Раздел',
          type: 'object',
          fields: [
            {
              name: 'NameOfSection',
              title: 'Название Раздела',
              type: 'string',
            },
            {
              name: 'LinkOfSection',
              title: 'Ссылка на Раздел',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
