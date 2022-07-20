const genericErrorSchema = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      nullable: false,
      readOnly: true,
    },
    error: {
      type: 'string',
      nullable: true,
      readOnly: true,
    },
  },
};

export default genericErrorSchema;
