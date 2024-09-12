export default {
  name: 'newsData',
  title: 'Новости',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'des',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isIndustry',
      title: 'Is Industry',
      type: 'boolean',
    },
    {
      name: 'isCompany',
      title: 'Is Company',
      type: 'boolean',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'author',
      title: 'Автор',
      type: 'string',
    },
    {
      name: 'src',
      title: 'Источник',
      type: 'string',
    },
  ],
}
