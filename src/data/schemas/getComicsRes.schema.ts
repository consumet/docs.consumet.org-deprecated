const getComicsResSchema = {
  type: 'object',
  properties: {
    container: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/GetComics',
      },
    },
    page: {
      type: 'number',
      readonly: true,
      nullable: false,
    },
  },
};

export default getComicsResSchema;
