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
} from './schemas';

const openapi = {
  openapi: '3.1.0',
  info: {
    title: 'Consumet',
    description:
      'Consumet is a search engine api that allows you to get acurite information on various entertainment mediums, e.g, books, anime, comics, etc.',
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
      GogoanimeAnimeSearch: GogoanimeSearchSchema,
      GogoanimeSearchResult: GogoanimeSearchResultSchema,
      GogoanimeInfo: GogoanimeInfoSchema,
      GogoanimeEpisode: GogoanimeEpisodeSchema,
      GogoanimeEpisodeSource: GogoanimeEpisodeSourceSchema,
      FlixHQMovieSearch: FlixHQSearchSchema,
      FlixHQSearchResult: FlixHQSearchResultSchema,
      FlixHQInfo: FlixHQInfoSchema,
      FlixHQEpisode: FlixHQEpisodeSchema,
      FlixHQEpisodeSource: FlixHQEpisodeSourceSchema,
    },
  },
  tags: [
    { name: 'libgen', description: 'Everything about libgen provider' },
    {
      name: 'gogoanime',
      description: 'Everything about gogoanime provider',
    },
    { name: 'flixhq', description: 'Everything about flixhq provider' },
  ],
  'x-tagGroups': [
    {
      name: 'books',
      tags: ['libgen'],
    },
    {
      name: 'anime',
      tags: ['gogoanime'],
    },
    {
      name: 'movies',
      tags: ['flixhq'],
    },
  ],
  paths: {
    '/books/s/{bookTitle}': {
      summary: 'Get book list',
      get: {
        tags: ['libgen'],
        summary: 'Get book list',
        operationId: 'getBookList',
        parameters: [
          {
            name: '{bookTitle}',
            in: 'path',
            description: "the book's title.",
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
      },
    },
    '/anime/gogoanime/{animeTitle}': {
      summary: 'Get anime search',
      get: {
        tags: ['gogoanime'],
        summary: 'Get anime search',
        operationId: 'getAnimeSearch',
        parameters: [
          {
            name: '{animeTitle}',
            in: 'path',
            description: "the anime's title.",
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
curl -X GET "http://api.consumet.org/anime/gogoanime/Naruto?page=2"
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
curl -X GET "http://api.consumet.org/anime/gogoanime/info/spy-x-family"
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
curl -X GET "http://api.consumet.org/anime/gogoanime/watch/spy-x-family-episode-1?server=gogocdn"
				`,
          },
        ],
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
curl -X GET "http://api.consumet.org/movies/flixhq/Vincenzo"
				`,
          },
        ],
      },
    },
    '/movies/flixhq/info/{id}': {
      summary: 'Get movie info',
      get: {
        tags: ['flixhq'],
        summary: 'Get movie info',
        operationId: 'getMovieInfo',
        parameters: [
          {
            name: '{id}',
            in: 'path',
            description: "the movie's id. e.g. 'vincenzo'",
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
        },
      },
    },
  },
};

export default openapi;
