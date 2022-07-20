const GogoanimeSearchSchema = {
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
      description: 'Whether there is a next page.',
    },
    results: {
      type: 'array',
      description: 'The anime search results.',
      items: {
        $ref: `#/components/schemas/GogoanimeSearchResult`,
      },
    },
  },
};

const GogoanimeSearchResultSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime id.',
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
    releaseDate: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime release date.',
    },
    subOrDub: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime sub or dub.',
      enum: ['sub', 'dub'],
    },
  },
};

const GogoanimeEpisodeSchema = {
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
    url: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The episode url.',
    },
  },
};

const GogoanimeEpisodeSourceSchema = {
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
        watchsb: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The watchsb header. **(only available of streamsb server)**',
        },
        'User-Agent': {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The user agent header.',
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
          quality: {
            type: 'string',
            nullable: true,
            readOnly: true,
            description: 'The source quality.',
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

const GogoanimeInfoSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime id.',
    },
    title: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime title.',
    },
    url: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime url.',
    },
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime image url.',
    },
    releaseDate: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime release date.',
    },
    description: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime description.',
    },
    genres: {
      type: 'array',
      description: 'The anime genres list.',
      items: {
        type: 'string',
        nullable: false,
        readOnly: true,
        description: 'The genre.',
      },
    },
    subOrDub: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime sub or dub.',
      enum: ['sub', 'dub'],
    },
    type: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime type.',
    },
    status: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime status.',
      enum: ['Ongoing', 'Completed', 'Not yet aired', 'Unknown'],
    },
    otherName: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'Alternate title.',
    },
    totalEpisodes: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'The total number of episodes.',
    },
    episodes: {
      type: 'array',
      description: 'The anime episodes.',
      items: {
        $ref: '#/components/schemas/GogoanimeEpisode',
      },
    },
  },
};

const GogoanimeRecentEpisodesSchema = {
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
      description: 'Whether there is a next page.',
    },
    results: {
      type: 'array',
      description: 'The recent episodes.',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The anime id.',
          },
          episodeId: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The episode id.',
          },
          episodeNumber: {
            type: 'integer',
            nullable: false,
            readOnly: true,
            description: 'The episode number.',
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
          url: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The anime url.',
          },
        },
      },
    },
  },
};

const GogoanimeTopAiringSchema = {
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
      description: 'Whether there is a next page.',
    },
    results: {
      type: 'array',
      description: 'The top airing anime.',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The anime id.',
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
          url: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The anime url.',
          },
          genres: {
            type: 'array',
            description: 'The anime genres list.',
            items: {
              type: 'string',
              nullable: false,
              readOnly: true,
              description: 'The genre.',
            },
          },
        },
      },
    },
  },
};

export {
  GogoanimeSearchResultSchema,
  GogoanimeEpisodeSchema,
  GogoanimeInfoSchema,
  GogoanimeSearchSchema,
  GogoanimeEpisodeSourceSchema,
  GogoanimeRecentEpisodesSchema,
  GogoanimeTopAiringSchema,
};
