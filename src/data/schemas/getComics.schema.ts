const getComicsSchema = {
  type: 'object',
  properties: {
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
    },
    title: {
      type: 'string',
      nullable: false,
      readOnly: true,
    },
    year: {
      type: 'string',
      nullable: false,
      readOnly: true,
    },
    size: {
      type: 'string',
      nullable: false,
      readOnly: true,
    },
    excerpt: {
      type: 'string',
      nullable: false,
      readOnly: true,
    },
    catagory: {
      type: 'string',
      nullable: false,
      readOnly: true,
    },
    discription: {
      type: 'string',
      nullable: false,
      readOnly: true,
    },
    download: {
      type: 'string',
      nullable: false,
      readOnly: true,
    },
    ufile: {
      type: 'string',
      nullable: false,
      readOnly: true,
    },
    mega: {
      type: 'string',
      nullable: false,
      readOnly: true,
    },
    mediafire: {
      type: 'string',
      nullable: false,
      readOnly: true,
    },
    zippyshare: {
      type: 'string',
      nullable: false,
      readOnly: true,
    },
    readOnline: {
      type: 'string',
      nullable: false,
      readOnly: true,
    },
  },
};

export default getComicsSchema;
