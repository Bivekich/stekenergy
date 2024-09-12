export default {
  name: 'footer',
  title: 'Подвал',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Лого',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'productCategoryTitle',
      title: 'Заголовок1',
      type: 'string',
    },
    {
      name: 'quickLinksTitle',
      title: 'Заголовок2',
      type: 'string',
    },
    {
      name: 'productCategory',
      title: 'Категории продуктов',
      type: 'array',
      of: [
        {
          name: 'item',
          type: 'object',
          fields: [
            {
              name: 'category',
              title: 'Категория',
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

    {
      name: 'quickLinks',
      title: 'Ссылки',
      type: 'array',
      of: [
        {
          name: 'item',
          type: 'object',
          fields: [
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

    {
      name: 'copyright',
      title: 'Авторское право',
      type: 'string',
    },
  ],
}
