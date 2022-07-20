const ReadLightNovelsSearchSchema = {
  type: 'object',
  properties: {
    results: {
      type: 'array',
      description: 'The light novels search results.',
      items: {
        $ref: `#/components/schemas/ReadLightNovelsSearchResult`,
      },
    },
  },
};

const ReadLightNovelsSearchResultSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The light novel id.',
    },
    title: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The light novel title.',
    },
    url: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The light novel url.',
    },
    image: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The light novel image url.',
    },
  },
};

const ReadLightNovelsChapterSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The chapter id.',
    },
    title: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'The chapter title.',
    },
    url: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The chapter url.',
    },
  },
};

const ReadLightNovelsChapterContentSchema = {
  type: 'object',
  properties: {
    text: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The chapter text.',
    },
    html: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The chapter html.',
    },
  },
};

const ReadLightNovelsInfoSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The light novel id.',
    },
    title: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The light novel title.',
    },
    url: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The light novel url.',
    },
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The light novel image url.',
    },
    description: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The light novel description.',
    },
    genres: {
      type: 'array',
      description: 'The light novel genres list.',
      items: {
        type: 'string',
        nullable: false,
        readOnly: true,
        description: 'The genre.',
      },
    },
    rating: {
      type: 'float',
      nullable: true,
      readOnly: true,
      description: 'The light novel rating.',
    },
    views: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'The light novel views.',
    },
    status: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The light novel status.',
      enum: ['Ongoing', 'Completed', 'Unknown'],
    },
    pages: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'How many pages of chapters the light novel has. each page has 47 chapters.',
    },
    chapters: {
      type: 'array',
      description: 'The light novel chapters.',
      items: {
        $ref: '#/components/schemas/ReadLightNovelsChapter',
      },
    },
  },
};

export {
  ReadLightNovelsSearchSchema,
  ReadLightNovelsSearchResultSchema,
  ReadLightNovelsChapterSchema,
  ReadLightNovelsChapterContentSchema,
  ReadLightNovelsInfoSchema,
};
