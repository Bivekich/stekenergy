export default {
  name: 'products',
  title: 'Продукты',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Лого',
      type: 'image',
    },
    {
      name: 'products',
      title: 'Товары',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'src',
              title: 'Изображение',
              type: 'image',
            },
            {
              name: 'title',
              title: 'Название',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Ссылка',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
