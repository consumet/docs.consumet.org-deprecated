const EnimeSearchSchema = {
  type: 'object',
  properties: {
    currentPage: {
      type: 'number',
      nullable: false,
      readOnly: true,
      description: 'The current page.',
    },
    hasNextPage: {
      type: 'boolean',
      nullable: false,
      readOnly: true,
      description: 'Whether there is a next page.',
    },
    results: {
      type: 'array',
      description: 'The anime search results.',
      items: {
        $ref: `#/components/schemas/EnimeSearchResult`,
      },
    },
  },
};

const EnimeSearchResultSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime id.',
    },
    anilistId: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime anilist id.',
    },
    malId: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime mal id.',
    },
    title: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime title.',
    },
    description: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime description.',
    },
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime image url.',
    },
    cover: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime cover url.',
    },
    rating: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime rating.',
    },
    releaseDate: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime release date.',
    },
    genres: {
      type: 'array',
      nullable: false,
      readOnly: true,
      description: 'The anime genres.',
      items: {
        type: 'string',
      },
    },
    status: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime status.',
      enum: ['RELESEED', 'NOT_YET_RELEASE', 'CANCELLED', 'COMPLETED'],
    },
    mappings: {
      type: 'object',
      nullable: false,
      readOnly: true,
      description: 'The anime mappings.',
      properties: {
        mal: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime mal id.',
        },
        anidb: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime anidb id.',
        },
        kitsu: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime kitsu id.',
        },
        anilist: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime anilist id.',
        },
        thetvdb: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime thetvdb id.',
        },
        anisearch: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime anisearch id.',
        },
        livechart: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime livechart id.',
        },
        'notify.moe': {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime notify.moe id.',
        },
        'anime-planet': {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime anime-planet id.',
        },
      },
    },
  },
};

const EnimeEpisodeSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The episode id.',
    },
    number: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'The episode number.',
    },
    title: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The episode title.',
    },
  },
};

const EnimeEpisodeSourceSchema = {
  type: 'object',
  properties: {
    headers: {
      type: 'object',
      description: 'The headers that you might need to stream or download the episode.',
      properties: {
        Referer: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The referer header.',
        },
      },
    },
    sources: {
      type: 'array',
      description: 'The episode sources.',
      items: {
        type: 'object',
        properties: {
          url: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The source url that can be used to play the episode.',
          },
          isM3U8: {
            type: 'boolean',
            nullable: false,
            readOnly: true,
            description: 'Whether the source is a m3u8 playlist.',
          },
        },
      },
    },
  },
};

const EnimeInfoSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime id.',
    },
    anilistId: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime anilist id.',
    },
    malId: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime mal id.',
    },
    title: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime title.',
    },
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime image url.',
    },
    cover: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime cover image url.',
    },
    season: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime season. e.g. "SUMMER"',
    },
    rating: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime rating.',
    },
    description: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime description.',
    },
    genres: {
      type: 'array',
      nullable: true,
      readOnly: true,
      description: 'The anime genres.',
      items: {
        type: 'string',
      },
    },
    releaseDate: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime release date.',
    },
    duration: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime episode duration.',
    },
    synonyms: {
      type: 'array',
      nullable: true,
      readOnly: true,
      description: 'The anime synonyms.',
      items: {
        type: 'string',
      },
    },
    popularity: {
      type: 'number',
      nullable: true,
      readOnly: true,
      description: 'The anime popularity.',
    },
    status: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime status.',
      enum: ['ONGOING', 'COMPLETED', 'NOT_YET_RELEASE', 'CANCELLED'],
    },
    mappings: {
      type: 'object',
      nullable: false,
      readOnly: true,
      description: 'The anime mappings.',
      properties: {
        mal: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime mal id.',
        },
        anidb: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime anidb id.',
        },
        kitsu: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime kitsu id.',
        },
        anilist: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime anilist id.',
        },
        thetvdb: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime thetvdb id.',
        },
        anisearch: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime anisearch id.',
        },
        livechart: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime livechart id.',
        },
        'notify.moe': {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime notify.moe id.',
        },
        'anime-planet': {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime anime-planet id.',
        },
      },
    },
    episodes: {
      type: 'array',
      description: 'The anime episodes.',
      items: {
        $ref: '#/components/schemas/EnimeEpisode',
      },
    },
  },
};

export {
  EnimeSearchResultSchema,
  EnimeEpisodeSchema,
  EnimeInfoSchema,
  EnimeSearchSchema,
  EnimeEpisodeSourceSchema,
};
