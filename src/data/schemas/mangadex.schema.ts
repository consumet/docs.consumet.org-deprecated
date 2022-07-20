const MangaDexSearchSchema = {
  type: 'object',
  properties: {
    currentPage: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'The current page.',
    },
    results: {
      type: 'array',
      description: 'The manga search results.',
      items: {
        $ref: `#/components/schemas/MangaDexSearchResult`,
      },
    },
  },
};

const MangaDexSearchResultSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The manga id.',
    },
    title: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The manga title.',
    },
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The manga image url.',
    },
    altTitles: {
      type: 'array',
      nullable: true,
      readOnly: true,
      description: 'The manga alternative titles.',
      items: {
        type: 'object',
        desciption: 'The manga alternative title. e.g. "{ ja: "トモダチゲーム" }"',
        properties: {
          x: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The alternative title.',
          },
        },
      },
    },
    description: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The manga description.',
    },
    status: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The manga status.',
      enum: ['ongoing', 'completed', 'hiatus', 'cancelled'],
    },
    releasedDate: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The manga released date.',
    },
    lastVolume: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'The manga last volume.',
    },
    lastChapter: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'The manga last chapter.',
    },
  },
};

const MangaDexChapterSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The chapter id.',
    },
    title: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The chapter title.',
    },
    pages: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'Number of pages in the chapter.',
    },
  },
};

const MangaDexChapterPageSchema = {
  type: 'object',
  properties: {
    img: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The chapter page image url.',
    },
    page: {
      type: 'Integer',
      nullable: false,
      readOnly: true,
      description: 'The chapter page number.',
    },
  },
};

const MangaDexInfoSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The manga id.',
    },
    title: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The manga title.',
    },
    altTitles: {
      type: 'array',
      nullable: false,
      readOnly: true,
      description: 'The manga alternative titles.',
      items: {
        type: 'object',
        desciption: 'The manga alternative title. e.g. "{ ja: "トモダチゲーム" }"',
        properties: {
          x: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The alternative title.',
          },
        },
      },
    },
    description: {
      type: 'object',
      nullable: false,
      readOnly: true,
      description:
        'The manga description in various languages. e.g. "{ ja: "トモダチゲーム" }" in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.',
      properties: {
        x: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The manga description in x language.',
        },
      },
    },
    genres: {
      type: 'array',
      nullable: true,
      readOnly: true,
      description: 'The manga genres.',
      items: {
        type: 'string',
        nullable: false,
        readOnly: true,
        description: 'The manga genre.',
      },
    },
    themes: {
      type: 'array',
      nullable: true,
      readOnly: true,
      description: 'The manga themes.',
      items: {
        type: 'string',
        nullable: false,
        readOnly: true,
        description: 'The manga theme.',
      },
    },
    status: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The manga status.',
      enum: ['ongoing', 'completed', 'hiatus', 'cancelled'],
    },
    releasedDate: {
      type: 'Integer',
      nullable: true,
      readOnly: true,
      description: 'The manga released date. e.g. "2019"',
    },
    chapters: {
      type: 'array',
      description: 'The manga chapters.',
      items: {
        $ref: '#/components/schemas/MangaDexChapter',
      },
    },
  },
};

export {
  MangaDexSearchSchema,
  MangaDexSearchResultSchema,
  MangaDexChapterSchema,
  MangaDexChapterPageSchema,
  MangaDexInfoSchema,
};
