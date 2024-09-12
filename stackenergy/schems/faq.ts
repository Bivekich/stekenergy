export default {
  name: 'FAQ',
  title: 'Ответы на частые вопросы(FAQ)',
  type: 'document',
  fields: [
    {
      name: 'FAQ',
      title: 'Строка',
      type: 'array',
      of: [
        {
          name: 'faqCard',
          title: 'Вопрос-Ответ',
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Вопрос',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Ответ',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
