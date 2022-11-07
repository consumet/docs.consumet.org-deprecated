const AnilistSearchSchema = {
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
        $ref: `#/components/schemas/AnilistSearchResult`,
      },
    },
  },
};

const AnilistSearchResultSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime id.',
    },
    malId: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'The anime id on MyAnimeList.',
    },
    title: {
      type: 'object',
      nullable: false,
      readOnly: true,
      description: 'The anime title.',
      properties: {
        romaji: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime title romaji.',
        },
        english: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime title english.',
        },
        native: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime title native.',
        },
        userPreferred: {
          type: 'string',
          nullable: false,
          readOnly: true,
          description: 'The anime title user preferred.',
        },
      },
    },
    status: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime status.',
      enum: ['Ongoing', 'Completed', 'Not yet aired', 'Cancelled', 'Hiatus', 'Unknown'],
    },
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime image url.',
    },
    cover: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime cover url.',
    },
    popularity: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'The anime popularity.',
    },
    description: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime description.',
    },
    rating: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'The anime rating.',
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
    color: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime color.',
    },
    totalEpisodes: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'The anime total episodes.',
    },
    type: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime type.',
      enum: ['MOVIE', 'MUSIC', 'ONA', 'OVA', 'SPECIAL', 'TV', 'TV_SHORT'],
    },
    releaseDate: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'The anime release date.',
    },
  },
};

const AnilistEpisodeSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The episode id.',
    },
    title: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The episode title.',
    },
    description: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The episode description.',
    },
    number: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'The episode number.',
    },
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The episode image.',
    },
  },
};

const AnilistEpisodeSourceSchema = {
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

const AnilistInfoSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime id.',
    },
    title: {
      type: 'object',
      nullable: false,
      readOnly: true,
      description: 'The anime title.',
      properties: {
        romaji: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime title romaji.',
        },
        english: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime title english.',
        },
        native: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The anime title native.',
        },
      },
    },
    malId: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'The anime id on MyAnimeList.',
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
    isLicensed: {
      type: 'boolean',
      nullable: true,
      readOnly: true,
      description: 'Whether the anime is licenced.',
    },
    isAdult: {
      type: 'boolean',
      nullable: true,
      readOnly: true,
      description: 'Whether the anime is adult.',
    },
    countryOfOrigin: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime country of origin.',
    },
    trailer: {
      type: 'object',
      nullable: true,
      readOnly: true,
      description: 'The anime trailer.',
      properties: {
        id: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The trailer id.',
        },
        site: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The trailer site.',
        },
        thumbnail: {
          type: 'string',
          nullable: true,
          readOnly: true,
          description: 'The trailer thumbnail url.',
        },
      },
    },
    image: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime image url.',
    },
    popularity: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'The anime popularity.',
    },
    color: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime color.',
    },
    cover: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime cover url.',
    },
    description: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime description.',
    },
    status: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime status.',
      enum: ['Ongoing', 'Completed', 'Not yet aired', 'Cancelled', 'Hiatus', 'Unknown'],
    },
    releaseDate: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime release date.',
    },
    startDate: {
      type: 'object',
      nullable: true,
      readOnly: true,
      description: 'The anime start date.',
      properties: {
        year: {
          type: 'integer',
          nullable: true,
          readOnly: true,
          description: 'The anime start date year.',
        },
        month: {
          type: 'integer',
          nullable: true,
          readOnly: true,
          description: 'The anime start date month.',
        },
        day: {
          type: 'integer',
          nullable: true,
          readOnly: true,
          description: 'The anime start date day.',
        },
      },
    },
    endDate: {
      type: 'object',
      nullable: true,
      readOnly: true,
      description: 'The anime end date.',
      properties: {
        year: {
          type: 'integer',
          nullable: true,
          readOnly: true,
          description: 'The anime end date year.',
        },
        month: {
          type: 'integer',
          nullable: true,
          readOnly: true,
          description: 'The anime end date month.',
        },
        day: {
          type: 'integer',
          nullable: true,
          readOnly: true,
          description: 'The anime end date day.',
        },
      },
    },
    nextAiringEpisode: {
      type: 'object',
      nullable: true,
      readOnly: true,
      description: 'The anime next airing episode.',
      properties: {
        year: {
          type: 'integer',
          nullable: true,
          readOnly: true,
          description: 'The anime next airing episode airing time.',
        },
        month: {
          type: 'integer',
          nullable: true,
          readOnly: true,
          description: 'The anime next airing episode time until airing.',
        },
        day: {
          type: 'integer',
          nullable: true,
          readOnly: true,
          description: 'The anime next airing episode number.',
        },
      },
    },
    totalEpisodes: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'The anime total episodes.',
    },
    rating: {
      type: 'integer',
      nullable: false,
      readOnly: true,
      description: 'The anime rating.',
    },
    duration: {
      type: 'integer',
      nullable: true,
      readOnly: true,
      description: 'The anime duration in minutes',
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
    season: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime season.',
      enum: ['WINTER', 'SPRING', 'SUMMER', 'FALL'],
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
    subOrDub: {
      type: 'string',
      nullable: true,
      readOnly: true,
      description: 'The anime sub or dub.',
      enum: ['sub', 'dub'],
    },
    type: {
      type: 'string',
      nullable: false,
      readOnly: true,
      description: 'The anime type.',
      enum: ['MOVIE', 'MUSIC', 'ONA', 'OVA', 'SPECIAL', 'TV', 'TV_SHORT'],
    },
    recommendations: {
      type: 'array',
      nullable: false,
      readOnly: true,
      description: 'The anime recommendations.',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            nullable: false,
            readOnly: true,
            description: 'The anime id.',
          },
          malId: {
            type: 'integer',
            nullable: true,
            readOnly: true,
            description: 'The anime id on MyAnimeList.',
          },
          title: {
            type: 'object',
            nullable: false,
            readOnly: true,
            description: 'The anime title.',
            properties: {
              romaji: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The anime title romaji.',
              },
              english: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The anime title english.',
              },
              native: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The anime title native.',
              },
              userPreferred: {
                type: 'string',
                nullable: false,
                readOnly: true,
                description: 'The anime title user preferred.',
              },
            },
          },
          status: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The anime status.',
            enum: ['Ongoing', 'Completed', 'Not yet aired', 'Cancelled', 'Hiatus', 'Unknown'],
          },
          episodes: {
            type: 'integer',
            nullable: true,
            readOnly: true,
            description: 'The anime total episodes.',
          },
          image: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The anime image url.',
          },
          cover: {
            type: 'string',
            nullable: true,
            readOnly: true,
            description: 'The anime cover url.',
          },
          rating: {
            type: 'integer',
            nullable: true,
            readOnly: true,
            description: 'The anime rating.',
          },
          type: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The anime type.',
            enum: ['MOVIE', 'MUSIC', 'ONA', 'OVA', 'SPECIAL', 'TV', 'TV_SHORT'],
          },
        },
      },
    },
    characters: {
      type: 'array',
      nullable: false,
      readOnly: true,
      description: 'The anime characters.',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            nullable: false,
            readOnly: true,
            description: 'The character id.',
          },
          role: {
            type: 'string',
            nullable: true,
            readOnly: true,
            description: 'The character role.',
          },
          name: {
            type: 'object',
            nullable: false,
            readOnly: true,
            description: 'The character name.',
            properties: {
              first: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The character first name.',
              },
              last: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The character last name.',
              },
              full: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'TThe character full name.',
              },
              native: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'TThe character native name.',
              },
              userPreferred: {
                type: 'string',
                nullable: false,
                readOnly: true,
                description: 'The character user prefered name.',
              },
            },
          },
          image: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The character image url.',
          },
          voiceActors: {
            type: 'array',
            nullable: false,
            readOnly: true,
            description: 'The voice actors.',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'integer',
                  nullable: false,
                  readOnly: true,
                  description: 'The voice actor id.',
                },
                name: {
                  type: 'object',
                  nullable: false,
                  readOnly: true,
                  description: 'The character name.',
                  properties: {
                    first: {
                      type: 'string',
                      nullable: true,
                      readOnly: true,
                      description: 'The character first name.',
                    },
                    last: {
                      type: 'string',
                      nullable: true,
                      readOnly: true,
                      description: 'The character last name.',
                    },
                    full: {
                      type: 'string',
                      nullable: true,
                      readOnly: true,
                      description: 'TThe character full name.',
                    },
                    native: {
                      type: 'string',
                      nullable: true,
                      readOnly: true,
                      description: 'TThe character native name.',
                    },
                    userPreferred: {
                      type: 'string',
                      nullable: false,
                      readOnly: true,
                      description: 'The character user prefered name.',
                    },
                  },
                },
                image: {
                  type: 'string',
                  nullable: false,
                  readOnly: true,
                  description: 'The voice actor image url.',
                },
              },
            },
          },
        },
      },
    },
    relations: {
      type: 'array',
      nullable: false,
      readOnly: true,
      description: 'The anime relations.',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            nullable: false,
            readOnly: true,
            description: 'The character id.',
          },
          relationType: {
            type: 'string',
            nullable: true,
            readOnly: true,
            description: 'The relation type.',
            enum: ['ADAPTATION', 'PREQUEL', ],
          },
          malId: {
            type: 'integer',
            nullable: true,
            readOnly: true,
            description: 'The relation id on MyAnimeList.',
          },
          title: {
            type: 'object',
            nullable: false,
            readOnly: true,
            description: 'The relation title.',
            properties: {
              romaji: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The relation title romaji.',
              },
              english: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The relation title english.',
              },
              native: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The relation title native.',
              },
              userPreferred: {
                type: 'string',
                nullable: false,
                readOnly: true,
                description: 'The relation title user preferred.',
              },
            },
          },
          status: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The relation status.',
            enum: ['Ongoing', 'Completed', 'Not yet aired', 'Cancelled', 'Hiatus', 'Unknown'],
          },
          episodes: {
            type: 'integer',
            nullable: true,
            readOnly: true,
            description: 'The relation total episodes.',
          },
          image: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The relation image url.',
          },
          color: {
            type: 'string',
            nullable: true,
            readOnly: true,
            description: 'The relation color.',
          },
          type: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The relation anime type.',
            enum: ['MOVIE', 'MUSIC', 'ONA', 'OVA', 'SPECIAL', 'TV', 'TV_SHORT'],
          },
          rating: {
            type: 'integer',
            nullable: true,
            readOnly: true,
            description: 'The relation rating.',
          },
        },
      },
    },
    episodes: {
      type: 'array',
      description: 'The anime episodes.',
      items: {
        $ref: '#/components/schemas/AnilistEpisode',
      },
    },
  },
};

const AnilistTrendingSchema = {
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
        type: 'object',
        properties: {
          id: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'Anilist id.',
          },
          malId: {
            type: 'integer',
            nullable: true,
            readOnly: true,
            description: 'MyAnimeList id.',
          },
          title: {
            type: 'object',
            nullable: false,
            readOnly: true,
            description: 'Anilist title.',
            properties: {
              romaji: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'Anilist title romaji.',
              },
              english: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'Anilist title english.',
              },
              native: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'Anilist title native.',
              },
              userPreferred: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'Anilist title user preferred.',
              },
            },
          },
          image: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'Anilist image url.',
          },
          trailer: {
            type: 'object',
            nullable: true,
            readOnly: true,
            description: 'The anime trailer.',
            properties: {
              site: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The trailer site.',
              },
              id: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The trailer id.',
              },
              thumbnail: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The trailer thumbnail url.',
              },
            },
          },
          description: {
            type: 'string',
            nullable: true,
            readOnly: true,
            description: 'description.',
          },
          cover: {
            type: 'string',
            nullable: true,
            readOnly: true,
            description: 'cover url.',
          },
          rating: {
            type: 'integer',
            nullable: true,
            readOnly: true,
            description: 'rating.',
          },
          releasedDate: {
            type: 'integer',
            nullable: true,
            readOnly: true,
            description: 'released date.',
          },
          totalEpisodes: {
            type: 'integer',
            nullable: true,
            readOnly: true,
            description: 'total episodes.',
          },
          genres: {
            type: 'array',
            nullable: true,
            readOnly: true,
            description: 'genres.',
            items: {
              type: 'string',
            },
          },
          duration: {
            type: 'integer',
            nullable: true,
            readOnly: true,
            description: 'duration in minutes',
          },
          type: {
            type: 'string',
            nullable: true,
            readOnly: true,
            description: 'type.',
            enum: ['TV', 'Movie', 'OVA', 'Special', 'ONA', 'Music', 'Unknown'],
          },
        },
      },
    },
  },
};

const AnilistAiringScheduleSchema = {
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
        type: 'object',
        properties: {
          id: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The anime id.',
          },
          malId: {
            type: 'number',
            nullable: true,
            readOnly: true,
            description: 'MyAnimeList id.',
          },
          title: {
            type: 'object',
            nullable: false,
            readOnly: true,
            description: 'The anime title.',
            properties: {
              romaji: {
                type: 'string',
                nullable: false,
                readOnly: true,
                description: 'The anime title romaji.',
              },
              english: {
                type: 'string',
                nullable: false,
                readOnly: true,
                description: 'The anime title english.',
              },
              native: {
                type: 'string',
                nullable: false,
                readOnly: true,
                description: 'The anime title native.',
              },
              userPreferred: {
                type: 'string',
                nullable: false,
                readOnly: true,
                description: 'The anime title user preferred.',
              },
            },
          },
          episode: {
            type: 'integer',
            nullable: false,
            readOnly: true,
            description: 'The episode number.',
          },
          airingAt: {
            type: 'integer',
            nullable: false,
            readOnly: true,
            description: 'The airing date in unix timestamp.',
          },
          image: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The anime image url.',
          },
          cover: {
            type: 'string',
            nullable: true,
            readOnly: true,
            description: 'The anime cover url.',
          },
          description: {
            type: 'string',
            nullable: true,
            readOnly: true,
            description: 'The anime description.',
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
            nullable: true,
            readOnly: true,
            description: 'The anime type.',
            enum: ['TV', 'Movie', 'OVA', 'Special', 'ONA', 'Music', 'Unknown'],
          },
        },
      },
    },
  },
};

const AnilistRecentEpisodesSchema = {
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
    totalPages: {
      type: 'number',
      nullable: false,
      readOnly: true,
      description: 'The total pages.',
    },
    totalResults: {
      type: 'number',
      nullable: false,
      readOnly: true,
      description: 'The total results.',
    },
    results: {
      type: 'array',
      description: 'The anime search results.',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The anime id.',
          },
          malId: {
            type: 'number',
            nullable: true,
            readOnly: true,
            description: 'MyAnimeList id.',
          },
          title: {
            type: 'object',
            nullable: false,
            readOnly: true,
            description: 'The anime title.',
            properties: {
              romaji: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The anime title romaji.',
              },
              english: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The anime title english.',
              },
              native: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The anime title native.',
              },
              userPreferred: {
                type: 'string',
                nullable: true,
                readOnly: true,
                description: 'The anime title user preferred.',
              },
            },
          },
          episodeId: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The episode id.',
          },
          episodeTitle: {
            type: 'string',
            nullable: false,
            readOnly: true,
            description: 'The episode title.',
          },
          episodeNumber: {
            type: 'integer',
            nullable: false,
            readOnly: true,
            description: 'The episode number.',
          },
          image: {
            type: 'string',
            nullable: true,
            readOnly: true,
            description: 'The anime image url.',
          },
          rating: {
            type: 'number',
            nullable: true,
            readOnly: true,
            description: 'The anime rating.',
          },
        },
      },
    },
  },
};

export {
  AnilistSearchResultSchema,
  AnilistEpisodeSchema,
  AnilistInfoSchema,
  AnilistSearchSchema,
  AnilistEpisodeSourceSchema,
  AnilistTrendingSchema,
  AnilistAiringScheduleSchema,
  AnilistRecentEpisodesSchema,
};
