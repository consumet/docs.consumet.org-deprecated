const FlixHQSearchSchema = {
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
      description: 'The media search results.',
      items: {
        $ref: `#/components/schemas/FlixHQSearchResult`,
      },
    },
  },
};

const FlixHQSearchResultSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The media id.',
    },
    url: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The media url.',
    },
    title: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The media title.',
    },
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The media image url.',
    },
    type: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The media type.',
      enum: ['Movie', 'TV Series'],
    },
  },
};

const FlixHQEpisodeSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The episode id.',
    },
    url: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The episode url.',
    },
    title: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The episode title.',
    },
    number: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'The episode number.',
    },
    season: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'The episode season.',
    },
  },
};

const FlixHQEpisodeSourceSchema = {
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
    subtitles: {
      type: 'array',
      description: 'The episode subtitles. (only available for vidcloud, and upcloud servers)',
      nullable: true,
      items: {
        type: 'object',
        properties: {
          url: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The subtitle url that returns the subtitles.',
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

const FlixHQInfoSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The media id.',
    },
    title: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The media title.',
    },
    url: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The media url.',
    },
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The media image url.',
    },
    releaseDate: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The media release date.',
    },
    description: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The media description.',
    },
    geners: {
      type: 'array',
      description: 'The media genres list.',
      items: {
        type: 'string',
        nullable: false,
        readOnly: true,
        description: 'The media genre.',
      },
    },
    type: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The media type.',
      enum: ['Movie', 'TV Series'],
    },
    casts: {
      type: 'array',
      description: 'The media casts.',
      nullable: true,
      items: {
        type: 'string',
        nullable: false,
        readOnly: true,
        description: 'The cast name.',
      },
    },
    tags: {
      type: 'array',
      description: 'The media tags.',
      nullable: true,
      items: {
        type: 'string',
        nullable: false,
        readOnly: true,
        description: 'The tag name.',
      },
    },
    production: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The production company.',
    },
    duration: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The media duration.',
    },
    episodes: {
      type: 'array',
      nullable: false,
      description: 'The media episodes.',
      items: {
        $ref: '#/components/schemas/FlixHQEpisode',
      },
    },
  },
};

export {
  FlixHQSearchSchema,
  FlixHQSearchResultSchema,
  FlixHQEpisodeSchema,
  FlixHQEpisodeSourceSchema,
  FlixHQInfoSchema,
};
