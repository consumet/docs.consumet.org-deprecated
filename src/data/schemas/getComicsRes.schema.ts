const getComicsResSchema = {
  type: 'object',
  properties: {
    container: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/GetComics',
      },
    },
    hasNextPage: {
      type: 'boolean',
      readonly: true,
      nullable: false,
    },
  },
};

export default getComicsResSchema;
