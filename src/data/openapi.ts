import {
  bookSchema,
  hashesSchema,
  libgenBookSchema,
  GogoanimeSearchSchema,
  GogoanimeEpisodeSchema,
  GogoanimeInfoSchema,
  GogoanimeSearchResultSchema,
  GogoanimeEpisodeSourceSchema,
  FlixHQEpisodeSchema,
  FlixHQInfoSchema,
  FlixHQSearchResultSchema,
  FlixHQSearchSchema,
  FlixHQEpisodeSourceSchema,
  ReadLightNovelsChapterContentSchema,
  ReadLightNovelsChapterSchema,
  ReadLightNovelsSearchResultSchema,
  ReadLightNovelsSearchSchema,
  ReadLightNovelsInfoSchema,
  MangaDexChapterPageSchema,
  MangaDexChapterSchema,
  MangaDexSearchResultSchema,
  MangaDexSearchSchema,
  MangaDexInfoSchema,
  getComicsResSchema,
  getComicsSchema,
  EpisodeServerSchema,
} from './schemas';

const openapi = {
  openapi: '3.1.0',
  info: {
    title: 'Consumet',
    description: `
Consumet is a search engine api that allows you to get acurite information on various entertainment mediums, e.g, books, anime, comics, etc.

# Introduction

This API is documented in OpenAPI format and is based on [Swagger](https://swagger.io/specification/) specification. 
The API is intended for use by a wide range of developers, and it can be consumed by a wide range of tools and programming languages.

<!-- global notes -->
### Notes:

- Some \`GET\` request examples are on nodejs, and may require [axios](https://axios-http.com/docs/intro) library to be installed.
`,
    contact: {
      name: 'Consumet',
      url: 'https://github.com/consumet/api',
      email: 'consumet.org@gmail.com',
    },
    license: {
      name: 'MIT',
      url: 'https://mit-license.org/',
    },
    'x-logo': {
      url: 'https://raw.githubusercontent.com/consumet/extensions/5c3bc399fd12ebdaa915dc69b7bdf82cbdf4201c/assets/images/consumetlogo.png',
      altText: 'Consumet Logo',
    },
  },
  servers: [{ url: 'http://api.consumet.org' }],
  components: {
    schemas: {
      Book: bookSchema,
      Hashes: hashesSchema,
      LibgenBook: libgenBookSchema,
      GetComicsRes: getComicsResSchema,
      GetComics: getComicsSchema,
      GogoanimeAnimeSearch: GogoanimeSearchSchema,
      GogoanimeSearchResult: GogoanimeSearchResultSchema,
      GogoanimeInfo: GogoanimeInfoSchema,
      GogoanimeEpisode: GogoanimeEpisodeSchema,
      GogoanimeEpisodeSource: GogoanimeEpisodeSourceSchema,
      GogoanimeEpisodeServer: EpisodeServerSchema,
      FlixHQMovieSearch: FlixHQSearchSchema,
      FlixHQSearchResult: FlixHQSearchResultSchema,
      FlixHQInfo: FlixHQInfoSchema,
      FlixHQEpisode: FlixHQEpisodeSchema,
      FlixHQEpisodeSource: FlixHQEpisodeSourceSchema,
      ReadLightNovelsSearch: ReadLightNovelsSearchSchema,
      ReadLightNovelsSearchResult: ReadLightNovelsSearchResultSchema,
      ReadLightNovelsInfo: ReadLightNovelsInfoSchema,
      ReadLightNovelsChapter: ReadLightNovelsChapterSchema,
      ReadLightNovelsChapterContent: ReadLightNovelsChapterContentSchema,
      MangaDexSearch: MangaDexSearchSchema,
      MangaDexSearchResult: MangaDexSearchResultSchema,
      MangaDexInfo: MangaDexInfoSchema,
      MangaDexChapter: MangaDexChapterSchema,
      MangaDexChapterPage: MangaDexChapterPageSchema,
    },
  },
  tags: [
    {
      name: 'libgen',
      description:
        'Everything about libgen provider. This is based on [libgen.rs](https://libgen.io/) which provides a lot of information about books.',
    },
    {
      name: 'getComics',
      description:
        'Everything about getComics provider. This provider is based on [getComics](https://getcomics.info/) which provides a lot of information about comics.',
    },
    {
      name: 'gogoanime',
      description:
        'Everything about gogoanime provider. This provider is based on [gogoanime](https://gogoanime.gg/). It provides a lot of information about anime.',
    },
    {
      name: 'flixhq',
      description:
        'Everything about flixhq provider. This provider is based on [flixhq](https://flixhq.to/). It provides a lot of information about movies and tv shows.',
    },
    {
      name: 'readlightnovels',
      description:
        'Everything about readlightnovels provider. This provider is based on [readlightnovels](https://readlightnovels.net/). It provides a lot of information about light novels.',
    },
    {
      name: 'mangadex',
      description:
        'Everything about mangadex provider. This provider is based on [mangadex](https://mangadex.org/). It provides a lot of information about manga.',
    },
  ],
  /**
   * make sure to sort the tags and names by alphabetical order.
   */
  'x-tagGroups': [
    {
      name: 'anime',
      tags: ['gogoanime'],
    },
    {
      name: 'books',
      tags: ['libgen'],
    },
    {
      name: 'comics',
      tags: ['getComics'],
    },
    {
      name: 'manga',
      tags: ['mangadex'],
    },
    {
      name: 'movies',
      tags: ['flixhq'],
    },
    {
      name: 'light novels',
      tags: ['readlightnovels'],
    },
  ],
  paths: {
    '/comics/s/{comicTitle}': {
      summary: 'Get search comic download link w/ information',
      get: {
        tags: ['getComics'],
        summary: 'Get search comic download link w/ information',
        parameters: [
          {
            name: '{comicTitle}',
            in: 'path',
            description: "the comics's title.",
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'appFlication/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/GetComicsRes',
                  },
                },
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'curl',
            source: "curl 'http://api.consumet.org/comics/s/batman'",
          },
          {
            lang: 'Node.js',
            source: `
import axios from 'axois'       

const get = axois.get;

const run = async () => {
  const { data } = get('http://api.consumet.org/comics/s/batman');
  console.log(data)
}

run();
`,
          },
        ],
      },
    },
    '/comics/getComics/s/{comicTitle}': {
      summary: 'Get search comic download link w/ information',
      get: {
        tags: ['getComics'],
        summary: 'Get search comic download link w/ information',
        parameters: [
          {
            name: '{comicTitle}',
            in: 'path',
            description: "the comics's title.",
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'appFlication/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/GetComicsRes',
                  },
                },
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'curl',
            source: "curl 'http://api.consumet.org/comics/getComics/s/batman'",
          },
          {
            lang: 'Node.js',
            source: `
import axios from 'axois'       

const get = axois.get;

const run = async () => {
  const { data } = get('http://api.consumet.org/comics/getComics/s/batman');
  console.log(data)
}

run();
`,
          },
        ],
      },
    },

    '/books/s/{bookTitle}': {
      summary: 'Search For a Book',
      get: {
        tags: ['libgen'],
        summary: 'Search For a Book',
        operationId: 'getBookList',
        parameters: [
          {
            name: '{bookTitle}',
            in: 'path',
            description: 'The title of the book you want to search',
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              json: {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/LibgenBook',
                  },
                },
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'curl',
            source: `curl 'http://api.consumet.org/books/s/batman'`,
          },
          {
            lang: 'Node.js',
            source: `
import axios from 'axois'       

const get = axois.get;

const run = async () => {
  const { data } = get('http://api.consumet.org/books/s/batman');
  console.log(data)
}

run();
`,
          },
        ],
      },
    },
    '/books/libgen/s/{bookTitle}': {
      summary: 'Search For a Book',
      get: {
        tags: ['libgen'],
        summary: 'Search For a Book',
        operationId: 'getBookListLibgen',
        parameters: [
          {
            name: '{bookTitle}',
            in: 'path',
            description: 'The title of the book you want to search',
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              json: {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/LibgenBook',
                  },
                },
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'curl',
            source: `curl 'http://api.consumet.org/books/libgen/s/batman'`,
          },
          {
            lang: 'Node.js',
            source: `
import axios from 'axois'       

const get = axois.get;

const run = async () => {
  const { data } = get('http://api.consumet.org/books/libgen/s/batman');
  console.log(data)
}

run();
`,
          },
        ],
      },
    },
    '/anime/gogoanime/{query}': {
      summary: 'Get anime search',
      get: {
        tags: ['gogoanime'],
        summary: 'Get anime search',
        operationId: 'getAnimeSearch',
        parameters: [
          {
            name: '{query}',
            in: 'path',
            description: 'query to search for',
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'page number.',
            required: false,
            schema: {
              type: 'integer',
              default: 1,
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/GogoanimeAnimeSearch',
                },
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'python',
            source: `
import requests
import json

animeTitle = "One piece"
url = f'http://api.consumet.org/anime/gogoanime/{animeTitle}'
params = {
 'page': 1
}
response = requests.get(url, params=params)
data = response.json()
print(data)

`,
          },
          {
            lang: 'curl',
            source: `
curl "http://api.consumet.org/anime/gogoanime/Naruto?page=2"
				`,
          },
        ],
      },
    },
    '/anime/gogoanime/info/{id}': {
      summary: 'Get anime info',
      get: {
        tags: ['gogoanime'],
        summary: 'Get anime info',
        operationId: 'getAnimeInfo',
        parameters: [
          {
            name: '{id}',
            in: 'path',
            description: "the anime's id. e.g. 'spy-x-family'",
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/GogoanimeInfo',
                },
              },
            },
          },
          '404': {
            description: 'Not Found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'python',
            source: `
import requests
import json

animeId = "spy-x-family"
url = f'http://api.consumet.org/anime/gogoanime/info/{animeId}'
response = requests.get(url)
data = response.json()
print(data)
`,
          },
          {
            lang: 'curl',
            source: `
curl "http://api.consumet.org/anime/gogoanime/info/spy-x-family"
`,
          },
        ],
      },
    },
    '/anime/gogoanime/watch/{episodeId}': {
      summary: 'Get anime episode streaming links',
      get: {
        tags: ['gogoanime'],
        summary: 'Get anime episode streaming links',
        operationId: 'getAnimeEpisode',
        parameters: [
          {
            name: '{episodeId}',
            in: 'path',
            description: "the anime's episode id. e.g. 'spy-x-family-episode-1'",
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'server',
            in: 'query',
            description: 'the server to use.',
            required: false,
            schema: {
              type: 'string',
              default: 'gogocdn',
              enum: ['steamsb', 'gogocdn'],
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/GogoanimeEpisodeSource',
                },
              },
            },
          },
          '404': {
            description: 'Not Found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'python',
            source: `
import requests
import json

episodeId = "spy-x-family-episode-1"
url = f'http://api.consumet.org/anime/gogoanime/watch/{episodeId}'
params = {
	 'server': 'gogocdn'
}
response = requests.get(url, params=params)
data = response.json()
print(data)
				`,
          },
          {
            lang: 'curl',
            source: `
curl "http://api.consumet.org/anime/gogoanime/watch/spy-x-family-episode-1?server=gogocdn"
				`,
          },
        ],
      },
    },
    '/anime/gogoanime/servers/{episodeId}': {
      summary: 'Get anime episode avaliable servers',
      get: {
        tags: ['gogoanime'],
        summary: 'Get anime episode avaliable servers',
        operationId: 'getAnimeEpisodeServers',
        parameters: [
          {
            name: '{episodeId}',
            in: 'path',
            description: "the anime's episode id. e.g. 'spy-x-family-episode-1'",
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    $ref: '#/components/schemas/GogoanimeEpisodeServer',
                  },
                },
              },
            },
          },
          '404': {
            description: 'Not Found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/movies/flixhq/{movieTitle}': {
      summary: 'Get movie search',
      get: {
        tags: ['flixhq'],
        summary: 'Get movie search',
        operationId: 'getMovieSearch',
        parameters: [
          {
            name: '{movieTitle}',
            in: 'path',
            description: "the movie's title.",
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'the page number.',
            required: false,
            schema: {
              type: 'integer',
              default: 1,
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/FlixHQMovieSearch',
                },
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'curl',
            source: `
curl "http://api.consumet.org/movies/flixhq/Vincenzo"
				`,
          },
        ],
      },
    },
    '/movies/flixhq/info': {
      summary: 'Get movie info',
      get: {
        tags: ['flixhq'],
        summary: 'Get movie info',
        operationId: 'getMovieInfo',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: "the movie's id. e.g. 'tv/watch-vincenzo-67955'",
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/FlixHQInfo',
                },
              },
            },
          },
          '400': {
            description: 'Bad Request',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/movies/flixhq/watch/{episodeId}': {
      summary: 'Get movie episode streaming links',
      get: {
        tags: ['flixhq'],
        summary: 'Get movie episode streaming links',
        operationId: 'getMovieEpisode',
        parameters: [
          {
            name: '{episodeId}',
            in: 'path',
            description: "the movie's episode id.",
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'mediaId',
            in: 'query',
            description: 'the media id.',
            required: true,
            schema: {
              type: 'string',
            },
          },

          {
            name: 'server',
            in: 'query',
            description: 'the server to use.',
            required: false,
            schema: {
              type: 'string',
              default: 'vidcloud',
              enum: ['mixdrop', 'vidcloud', 'upcloud'],
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/FlixHQEpisodeSource',
                },
              },
            },
          },
          '400': {
            description: 'Bad Request',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/light-novels/readlightnovels/{query}': {
      summary: 'Get light novel search',
      get: {
        tags: ['readlightnovels'],
        summary: 'Get light novel search',
        operationId: 'getLightNovelSearch',
        parameters: [
          {
            name: '{query}',
            in: 'path',
            description: "the light novel's title.",
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/ReadLightNovelsSearch',
                },
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'curl',
            source: `
curl "http://api.consumet.org/light-novels/readlightnovels/slime"
              `,
          },
        ],
      },
    },
    '/light-novels/readlightnovels/info/{id}': {
      summary: 'Get light novel info',
      get: {
        tags: ['readlightnovels'],
        summary: 'Get light novel info',
        operationId: 'getLightNovelInfo',
        parameters: [
          {
            name: '{id}',
            in: 'path',
            description: "the light novel's id. e.g. 'classroom of the elite'",
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/ReadLightNovelsInfo',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'curl',
            source: `
curl "http://api.consumet.org/light-novels/readlightnovels/info/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e"
              `,
          },
        ],
      },
    },
    '/light-novels/readlightnovels/read/{chapterId}': {
      summary: 'Get light novel chapter content',
      get: {
        tags: ['readlightnovels'],
        summary: 'Get light novel chapter content',
        operationId: 'getLightNovelChapter',
        parameters: [
          {
            name: '{chapterId}',
            in: 'path',
            description: "the light novel's chapter id.",
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/ReadLightNovelsChapterContent',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'curl',
            source: `
curl "http://api.consumet.org/light-novels/readlightnovels/read/volume-1-chapter-1-intro-welcome-to-my-dream-like-school-life"
              `,
          },
        ],
      },
    },
    '/manga/mangadex/{query}': {
      summary: 'Get manga search',
      get: {
        tags: ['mangadex'],
        summary: 'Get manga search',
        operationId: 'getMangaSearch',
        parameters: [
          {
            name: '{query}',
            in: 'path',
            description: "the manga's title. e.g. 'tomodachi game'",
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'page number',
            required: false,
            schema: {
              type: 'integer',
              default: 1,
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/MangaDexSearch',
                },
              },
            },
          },
        },
      },
    },
    '/manga/mangadex/info/{id}': {
      summary: 'Get manga info',
      get: {
        tags: ['mangadex'],
        summary: 'Get manga info',
        operationId: 'getMangaInfo',
        parameters: [
          {
            name: '{id}',
            in: 'path',
            description: "the manga's id.",
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/MangaDexInfo',
                },
              },
            },
          },
          '404': {
            description: 'Not Found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/manga/mangadex/read/{chapterId}': {
      summary: 'Get manga chapter pages',
      get: {
        tags: ['mangadex'],
        summary: 'Get manga chapter pages',
        operationId: 'getMangaChapterPages',
        parameters: [
          {
            name: '{chapterId}',
            in: 'path',
            description: "the manga's chapter id.",
            required: true,
            style: 'path - simple',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    $ref: '#/components/schemas/MangaDexChapterPage',
                  },
                },
              },
            },
          },
          '404': {
            description: 'Not Found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default openapi;
