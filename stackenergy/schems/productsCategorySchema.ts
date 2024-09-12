export default {
  name: 'productsCategorys',
  title: 'Категории продуктов',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Категория',
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
              name: 'ref',
              title: 'Ссылка',
              type: 'string',
            },
            {
              name: 'products',
              title: 'Бренды',
              type: 'array',
              of: [
                {
                  name: 'brand',
                  title: 'Бренд',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
