const MangaKakalotSearchSchema = {
  type: 'object',
  properties: {
    results: {
      type: 'array',
      description: 'The manga search results.',
      items: {
        $ref: `#/components/schemas/MangaKakalotSearchResult`,
      },
    },
  },
};

const MangaKakalotSearchResultSchema = {
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
        'The manga image url. **Might need to use the headerForImage `Referer` to get the image to work**',
    },
  },
};

const MangaKakalotChapterSchema = {
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
    views: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'The chapter views.',
    },
    releasedDate: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The chapter released date.',
    },
  },
};

const MangaKakalotChapterPageSchema = {
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
    title: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The chapter page title.',
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

const MangaKakalotInfoSchema = {
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
        type: 'string',
        nullable: false,
        readOnly: true,
        description: 'The manga alternative title.',
      },
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
    views: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'The manga views.',
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
        $ref: '#/components/schemas/MangaKakalotChapter',
      },
    },
  },
};

export {
  MangaKakalotSearchSchema,
  MangaKakalotSearchResultSchema,
  MangaKakalotChapterSchema,
  MangaKakalotChapterPageSchema,
  MangaKakalotInfoSchema,
};
