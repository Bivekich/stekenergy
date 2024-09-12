export default {
  name: 'product',
  title: 'Товары',
  type: 'document',
  fields: [
    {
      name: 'mainImg',
      title: 'Изображение',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'shortDes',
      title: 'Краткое описание',
      type: 'text',
    },
    {
      name: 'fullDescription',
      title: 'Полное описание',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}, {type: 'table'}],
    },
    {
      name: 'category',
      title: 'Категория',
      type: 'string',
      description:
        'Для корректного отображения требуется название такое же как и в Категориях например /ProductsPage/type/DieselGenerator/ название должно быть DieselGenerator и т.п.',
    },
    {
      name: 'brand',
      title: 'Бренд',
      type: 'string',
      description:
        'Для корректного отображения требуется название такое же как и в Подкатегориях: Cummins Series и т.д. и т.п.',
    },
  ],
}
