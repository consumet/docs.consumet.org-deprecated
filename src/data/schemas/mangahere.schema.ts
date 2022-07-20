const MangaHereSearchSchema = {
  type: 'object',
  properties: {
    currentPage: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'The current page.',
    },
    hasNextPage: {
      type: 'boolean',
      nullable: false,
      readOnly: true,
      description: 'Whether the next page exists.',
    },
    results: {
      type: 'array',
      description: 'The manga search results.',
      items: {
        $ref: `#/components/schemas/MangaHereSearchResult`,
      },
    },
  },
};

const MangaHereSearchResultSchema = {
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
    headerForImage: {
      type: 'object',
      nullable: false,
      readOnly: true,
      description: 'The image headers that you might need to use to get the image url.',
      properties: {
        Referer: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The header for image referer.',
        },
      },
    },
    image: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description:
        'The manga image url. **Might need to use the headers to get the image to work**',
    },
    description: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The manga description.',
    },
    status: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The manga status.',
      enum: ['ongoing', 'completed', 'unknown'],
    },
  },
};

const MangaHereChapterSchema = {
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
    releasedDate: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The chapter released date.',
    },
  },
};

const MangaHereChapterPageSchema = {
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
    headerForImage: {
      type: 'object',
      nullable: false,
      readOnly: true,
      description: 'The image headers that you might need to use to get the image to work.',
      properties: {
        Referer: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The header for image referer.',
        },
      },
    },
  },
};

const MangaHereInfoSchema = {
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
    description: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The manga description',
    },
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The manga image url.',
    },
    headerForImage: {
      type: 'object',
      nullable: false,
      readOnly: true,
      description: 'The image headers that you might need to use to get the image to work.',
      properties: {
        Referer: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The header for image referer.',
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
    status: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The manga status.',
      enum: ['ongoing', 'completed', 'unknown'],
    },
    rating: {
      type: 'float',
      nullable: false,
      readOnly: true,
      description: 'The manga rating.',
    },
    authors: {
      type: 'array',
      nullable: true,
      readOnly: true,
      description: 'The manga authors.',
      items: {
        type: 'string',
        nullable: false,
        readOnly: true,
        description: 'The manga author.',
      },
    },
    chapters: {
      type: 'array',
      description: 'The manga chapters.',
      items: {
        $ref: '#/components/schemas/MangaHereChapter',
      },
    },
  },
};

export {
  MangaHereSearchSchema,
  MangaHereSearchResultSchema,
  MangaHereChapterSchema,
  MangaHereChapterPageSchema,
  MangaHereInfoSchema,
};
