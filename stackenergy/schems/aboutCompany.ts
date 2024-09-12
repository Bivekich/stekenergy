export default {
  name: 'aboutCompany',
  title: 'О компании',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Название компании',
      type: 'string',
    },
    {
      name: 'description1',
      title: 'Описание',
      type: 'text',
    },
    {
      name: 'description2',
      title: 'Описание',
      type: 'text',
    },
    {
      name: 'url',
      title: 'Ссылка',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Изобаржение',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
