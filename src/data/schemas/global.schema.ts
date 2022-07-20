const EpisodeServerSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'Name of the server.',
    },
    url: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'Url of the server.',
    },
  },
};

export { EpisodeServerSchema };
