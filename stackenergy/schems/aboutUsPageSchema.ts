export default {
  name: 'aboutUsPage',
  title: 'О нас',
  type: 'document',
  fields: [
    {
      name: 'mainText',
      title: 'Основной текст',
      type: 'text',
    },
    {
      name: 'imageSlider',
      title: 'Изображения',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'Изображение',
          type: 'image',
        },
      ],
    },
    {
      name: 'title',
      title: 'Оглавление',
      type: 'string',
    },
    {
      name: 'des',
      title: 'Краткое описание',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'Текст кнопки',
      type: 'string',
    },
    {
      name: 'firstBlock',
      title: 'Первый блок',
      type: 'string',
    },
    {
      name: 'secBlock',
      title: 'Второй блок',
      type: 'string',
    },
    {
      name: 'thirdBlock',
      title: 'Третий блок',
      type: 'string',
    },
    {
      name: 'fourBlock',
      title: 'Четвертый блок',
      type: 'string',
    },
  ],
}
