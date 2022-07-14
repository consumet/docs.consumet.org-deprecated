const AnimePaheSearchSchema = {
  type: 'object',
  properties: {
    results: {
      type: 'array',
      description: 'The anime search results.',
      items: {
        $ref: `#/components/schemas/AnimePaheSearchResult`,
      },
    },
  },
};

const AnimePaheSearchResultSchema = {
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
    type: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime type.',
      example: 'TV' as const,
    },
  },
};

const AnimePaheEpisodeSchema = {
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
    image: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The episode image.',
    },
    duration: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The episode duration.',
    },
  },
};

const AnimePaheEpisodeSourceSchema = {
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
          size: {
            type: 'string',
            nullable: true,
            readOnly: true,
            description: 'The source size in bytes.',
          },
        },
      },
    },
  },
};

const AnimePaheInfoSchema = {
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
    cover: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime cover image url.',
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
    aired: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime aired date.',
    },
    studios: {
      type: 'array',
      nullable: true,
      readOnly: true,
      description: 'The anime studios.',
      items: {
        type: 'string',
      },
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
      enum: ['Ongoing', 'Completed', 'Unknown'],
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
        $ref: '#/components/schemas/AnimePaheEpisode',
      },
    },
    episodePage: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime episode page.',
    },
  },
};

export {
  AnimePaheSearchResultSchema,
  AnimePaheEpisodeSchema,
  AnimePaheInfoSchema,
  AnimePaheSearchSchema,
  AnimePaheEpisodeSourceSchema,
};
