const ZoroSearchSchema = {
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
        $ref: `#/components/schemas/ZoroSearchResult`,
      },
    },
  },
};

const ZoroSearchResultSchema = {
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
    type: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime type.',
      example: 'TV' as const,
    },
    url: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime url.',
    },
  },
};

const ZoroEpisodeSchema = {
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
    isFiller: {
      type: 'boolean',
      nullable: false,
      readOnly: true,
      description: 'Whether the episode is a filler.',
    },
    url: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The episode url.',
    },
  },
};

const ZoroEpisodeSourceSchema = {
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
          quality: {
            type: 'string',
            nullable: false,
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
    subtitles: {
      type: 'array',
      description: 'The episode subtitles.',
      items: {
        type: 'object',
        properties: {
          url: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The subtitle url.',
          },
          lang: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The subtitle language.',
          },
        },
      },
    },
  },
};

const ZoroInfoSchema = {
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
    description: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime description.',
    },
    type: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime type.',
    },
    totalEpisodes: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'The total number of episodes.',
    },
    episodes: {
      type: 'array',
      description: 'The anime episodes.',
      items: {
        $ref: '#/components/schemas/ZoroEpisode',
      },
    },
  },
};

const ZoroRecentEpisodesSchema = {
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
          episode: {
            type: 'integer',
            nullable: false,
            readOnly: true,
            description: 'The episode number.',
          },
        },
      },
    },
  },
};

export {
  ZoroSearchResultSchema,
  ZoroEpisodeSchema,
  ZoroInfoSchema,
  ZoroSearchSchema,
  ZoroEpisodeSourceSchema,
  ZoroRecentEpisodesSchema,
};
