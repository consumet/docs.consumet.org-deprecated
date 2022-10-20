import {
  bookSchema,
  hashesSchema,
  libgenBookSchema,
  GogoanimeSearchSchema,
  GogoanimeEpisodeSchema,
  GogoanimeInfoSchema,
  GogoanimeSearchResultSchema,
  GogoanimeEpisodeSourceSchema,
  GogoanimeRecentEpisodesSchema,
  GogoanimeTopAiringSchema,
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
  genericErrorSchema,
  libgenResult,
  EpisodeServerSchema,
  AnimePaheEpisodeSchema,
  AnimePaheInfoSchema,
  AnimePaheSearchResultSchema,
  AnimePaheSearchSchema,
  AnimePaheEpisodeSourceSchema,
  AnilistEpisodeSchema,
  AnilistInfoSchema,
  AnilistSearchResultSchema,
  AnilistSearchSchema,
  AnilistEpisodeSourceSchema,
  AnilistTrendingSchema,
  AnilistAiringScheduleSchema,
  AnilistRecentEpisodesSchema,
  MangaHereChapterPageSchema,
  MangaHereChapterSchema,
  MangaHereSearchResultSchema,
  MangaHereSearchSchema,
  MangaHereInfoSchema,
  MangaKakalotChapterPageSchema,
  MangaKakalotChapterSchema,
  MangaKakalotSearchResultSchema,
  MangaKakalotSearchSchema,
  MangaKakalotInfoSchema,
  ZoroEpisodeSchema,
  ZoroInfoSchema,
  ZoroSearchResultSchema,
  ZoroSearchSchema,
  ZoroEpisodeSourceSchema,
  ZoroRecentEpisodesSchema,
  EnimeEpisodeSchema,
  EnimeEpisodeSourceSchema,
  EnimeInfoSchema,
  EnimeSearchResultSchema,
  EnimeSearchSchema,
} from './schemas';

const openapi = {
  openapi: '3.1.0',
  info: {
    title: 'Consumet',
    description: `
Consumet is a search engine API that provides accurate information about numerous entertainment media such as novels, anime, comic books, and so on. It supports anime/movie streaming and also browsing, and reading books/manga/novels.

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
  servers: [{ url: 'https://api.consumet.org' }], // we need your support to keep this server running :)
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
      GogoanimeRecentEpisodes: GogoanimeRecentEpisodesSchema,
      GogoanimeTopAiring: GogoanimeTopAiringSchema,
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
      AnimePaheSearch: AnimePaheSearchSchema,
      AnimePaheSearchResult: AnimePaheSearchResultSchema,
      AnimePaheInfo: AnimePaheInfoSchema,
      AnimePaheEpisode: AnimePaheEpisodeSchema,
      AnimePaheEpisodeSource: AnimePaheEpisodeSourceSchema,
      AnilistSearch: AnilistSearchSchema,
      AnilistSearchResult: AnilistSearchResultSchema,
      AnilistInfo: AnilistInfoSchema,
      AnilistEpisode: AnilistEpisodeSchema,
      AnilistEpisodeSource: AnilistEpisodeSourceSchema,
      AnilistTrending: AnilistTrendingSchema,
      AnilistAiringSchedule: AnilistAiringScheduleSchema,
      AnilistRecentEpisodes: AnilistRecentEpisodesSchema,
      MangaHereSearch: MangaHereSearchSchema,
      MangaHereSearchResult: MangaHereSearchResultSchema,
      MangaHereInfo: MangaHereInfoSchema,
      MangaHereChapter: MangaHereChapterSchema,
      MangaHereChapterPage: MangaHereChapterPageSchema,
      MangaKakalotSearch: MangaKakalotSearchSchema,
      MangaKakalotSearchResult: MangaKakalotSearchResultSchema,
      MangaKakalotInfo: MangaKakalotInfoSchema,
      MangaKakalotChapter: MangaKakalotChapterSchema,
      MangaKakalotChapterPage: MangaKakalotChapterPageSchema,
      ZoroSearch: ZoroSearchSchema,
      ZoroSearchResult: ZoroSearchResultSchema,
      ZoroInfo: ZoroInfoSchema,
      ZoroEpisode: ZoroEpisodeSchema,
      ZoroEpisodeSource: ZoroEpisodeSourceSchema,
      ZoroRecentEpisodes: ZoroRecentEpisodesSchema,
      EnimeSearch: EnimeSearchSchema,
      EnimeSearchResult: EnimeSearchResultSchema,
      EnimeInfo: EnimeInfoSchema,
      EnimeEpisode: EnimeEpisodeSchema,
      EnimeEpisodeSource: EnimeEpisodeSourceSchema,
    },
  },
  tags: [
    {
      name: 'libgen',
      description:
        'Everything about Libgen provider. This is based on [Libgen.rs](https://libgen.io/) which provides a lot of information about books.',
    },
    {
      name: 'getComics',
      description:
        'Everything about GetComics provider. This provider is based on [GetComics](https://getcomics.info/) which provides a lot of information about comics.',
    },
    {
      name: 'gogoanime',
      description:
        'Everything about Gogoanime provider. This provider is based on [Gogoanime](https://gogoanime.gg/). It provides anime streaming, discovery and information about anime.',
    },
    {
      name: 'flixhq',
      description:
        'Everything about FlixHQ provider. This provider is based on [FlixHQ](https://flixhq.to/). It provides a lot of information about movies and tv shows.',
    },
    {
      name: 'readlightnovels',
      description:
        'Everything about ReadLightNovels provider. This provider is based on [ReadLightNovels](https://readlightnovels.net/). It provides a lot of information about light novels.',
    },
    {
      name: 'mangadex',
      description:
        'Everything about MangaDex provider. This provider is based on [MangaDex](https://mangadex.org/). It provides chapter reading, discovery, and information about manga.',
    },
    {
      name: 'animepahe',
      description:
        'Everything about AnimePahe provider. This provider is based on [AnimePahe](https://animepahe.com/). It provides anime streaming, discovery and information about anime.',
    },
    {
      name: 'anilist',
      description:
        'Everything about Anilist custom provider. This provider is based on [Anilist](https://anilist.co/). It provides anime streaming, discovery and information about anime.',
    },
    {
      name: 'mangahere',
      description:
        'Everything about MangaHere provider. This provider is based on [MangaHERE](http://www.mangahere.cc/). It provides chapter reading, manga discovery, and information about manga.',
    },
    {
      name: 'mangakakalot',
      description:
        'Everything about MangaKakalot provider. This provider is based on [MangaKakalot](https://mangakakalot.com/). It provides chapter reading, manga discovery, and information about manga.',
    },
    {
      name: 'zoro',
      description:
        'Everything about Zoro.to provider. This provider is based on [Zoro.to](https://zoro.to/). It provides anime streaming, discovery and information about anime.',
    },
    {
      name: 'enime',
      description:
        'Everything about Enime.moe provider. This provider is based on [Enime.moe](https://enime.moe/). It provides anime streaming, discovery and information about anime.',
    },
  ],
  /**
   * make sure to sort the tags and names by alphabetical order.
   */
  'x-tagGroups': [
    {
      name: 'anime',
      tags: ['animepahe', 'enime', 'gogoanime', 'zoro'],
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
      tags: ['mangadex', 'mangahere', 'mangakakalot'],
    },
    {
      name: 'meta',
      tags: ['anilist'],
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
    '/comics/s': {
      summary: 'Comic search',
      get: {
        tags: ['getComics'],
        summary: 'Get comic info',
        parameters: [
          {
            name: 'comicTitle',
            in: 'query',
            description: "the comics's title.",
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'the request page number.',
            required: false,
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
                schema: getComicsResSchema,
              },
            },
          },
          '400': {
            description: 'ERROR',
            content: {
              'application/json': {
                schema: genericErrorSchema,
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'curl',
            source: "curl 'https://api.consumet.org/comics/s?comicTitle=batman&page=1'",
          },
          {
            lang: 'Node.js',
            source: `
import axios from 'axois'       

const get = axois.get;

const run = async () => {
  const { data } = get('https://api.consumet.org/comics/s?comicTitle=batman&page=1');
  console.log(data)
}

run();
`,
          },
        ],
      },
    },
    '/comics/getComics/s': {
      summary: 'Comic search',
      get: {
        tags: ['getComics'],
        summary: 'Get comic info',
        parameters: [
          {
            name: 'comicTitle',
            in: 'query',
            description: "the comics's title.",
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'the request page number.',
            required: false,
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
                schema: getComicsResSchema,
              },
            },
          },
          '400': {
            description: 'ERROR',
            content: {
              'application/json': {
                schema: genericErrorSchema,
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'curl',
            source: "curl 'https://api.consumet.org/comics/s?comicTitle=batman&page=1'",
          },
          {
            lang: 'Node.js',
            source: `
import axios from 'axois'       

const get = axois.get;

const run = async () => {
  const { data } = get('https://api.consumet.org/comics/s?comicTitle=batman&page=1');
  console.log(data)
}

run();
`,
          },
        ],
      },
    },

    '/books/s': {
      summary: 'Search For a Book',
      get: {
        tags: ['libgen'],
        summary: 'Get book info',
        operationId: 'getBookList',
        parameters: [
          {
            name: 'bookTitle',
            in: 'query',
            description: "the book's title.",
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'the request page number.',
            required: false,
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
                schema: libgenResult,
              },
            },
          },
          '400': {
            description: 'ERROR',
            content: {
              'application/json': {
                schema: genericErrorSchema,
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'curl',
            source: `curl 'https://api.consumet.org/books/s?bookTitle=batman&page=1'`,
          },
          {
            lang: 'Node.js',
            source: `
import axios from 'axois'       

const get = axois.get;

const run = async () => {
  const { data } = get('https://api.consumet.org/books/s?bookTitle=batman&page=1');
  console.log(data)
}

run();
`,
          },
        ],
      },
    },
    '/books/libgen/s': {
      summary: 'Search For a Book',
      get: {
        tags: ['libgen'],
        summary: 'Get book info',
        operationId: 'getBookListLibgen',
        parameters: [
          {
            name: 'bookTitle',
            in: 'query',
            description: "the book's title.",
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'the request page number.',
            required: false,
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
                schema: libgenResult,
              },
            },
          },
          '400': {
            description: 'ERROR',
            content: {
              'application/json': {
                schema: genericErrorSchema,
              },
            },
          },
        },
        'x-codeSamples': [
          {
            lang: 'curl',
            source: `curl 'https://api.consumet.org/books/libgen/s?bookTitle=batman&page=1'`,
          },
          {
            lang: 'Node.js',
            source: `
import axios from 'axois'       

const get = axois.get;

const run = async () => {
  const { data } = get('https://api.consumet.org/books/libgen/s?bookTitle=batman&page=1');
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
url = f'https://api.consumet.org/anime/gogoanime/{animeTitle}'
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
curl "https://api.consumet.org/anime/gogoanime/Naruto?page=2"
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
url = f'https://api.consumet.org/anime/gogoanime/info/{animeId}'
response = requests.get(url)
data = response.json()
print(data)
`,
          },
          {
            lang: 'curl',
            source: `
curl "https://api.consumet.org/anime/gogoanime/info/spy-x-family"
`,
          },
        ],
      },
    },
    '/anime/gogoanime/top-airing': {
      summary: 'Get top airing anime',
      get: {
        tags: ['gogoanime'],
        summary: 'Get top airing anime',
        operationId: 'getTopAiringAnime',
        parameters: [
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

                  $ref: '#/components/schemas/GogoanimeTopAiring',
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
    '/anime/gogoanime/recent-episodes': {
      summary: 'Get recent episodes',
      get: {
        tags: ['gogoanime'],
        summary: 'Get recent episodes',
        operationId: 'getRecentEpisodes',
        parameters: [
          {
            name: 'type',
            in: 'query',
            description:
              'type of animes to get. e.g. "1" for Japanese with subtitles, "2" for English/dub without subtitles, "3" for chinese with english subtitles',
            required: false,
            schema: {
              type: 'integer',
              default: 1,
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

              description: 'page number.',
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
                  $ref: '#/components/schemas/GogoanimeRecentEpisodes',
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
url = f'https://api.consumet.org/anime/gogoanime/watch/{episodeId}'
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
curl "https://api.consumet.org/anime/gogoanime/watch/spy-x-family-episode-1?server=gogocdn"
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
curl "https://api.consumet.org/movies/flixhq/Vincenzo"
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
    '/movies/flixhq/watch': {
      summary: 'Get movie episode streaming links',
      get: {
        tags: ['flixhq'],
        summary: 'Get movie episode streaming links',
        operationId: 'getMovieEpisode',
        parameters: [
          {
            name: 'episodeId',
            in: 'query',
            description: "the movie's episode id.",
            required: true,
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
curl "https://api.consumet.org/light-novels/readlightnovels/slime"
              `,
          },
        ],
      },
    },
    '/light-novels/readlightnovels/info': {
      summary: 'Get light novel info',
      get: {
        tags: ['readlightnovels'],
        summary: 'Get light novel info',
        operationId: 'getLightNovelInfo',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description:
              "the light novel's id. e.g. 'youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e'",
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'chapterPage',
            in: 'query',
            description:
              'the chapter page. if not specified, will return all chapters. number of pages can be found in the info response.',
            required: false,
            schema: {
              type: 'number',
              default: -1,
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
            lang: 'curl',
            source: `
curl "https://api.consumet.org/light-novels/readlightnovels/info?id=youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e"
              `,
          },
        ],
      },
    },
    '/light-novels/readlightnovels/read': {
      summary: 'Get light novel chapter content',
      get: {
        tags: ['readlightnovels'],
        summary: 'Get light novel chapter content',
        operationId: 'getLightNovelChapter',
        parameters: [
          {
            name: 'chapterId',
            in: 'query',
            description: "the light novel's chapter id.",
            required: true,
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
            lang: 'curl',
            source: `
curl "https://api.consumet.org/light-novels/readlightnovels/read?chapterId=youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/volume-2-chapter-3-the-unexpected-witness-part-3"
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
    '/anime/animepahe/{query}': {
      summary: 'Get anime search',
      get: {
        tags: ['animepahe'],
        summary: 'Get anime search',
        operationId: 'getAnimeSearch',
        parameters: [
          {
            name: '{query}',
            in: 'path',
            description: "the anime's title. e.g. 'tomodachi game'",
            required: true,
            style: 'path - simple',
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/AnimePaheSearch',
                },
              },
            },
          },
        },
      },
    },
    '/anime/animepahe/info/{id}': {
      summary: 'Get anime info',
      get: {
        tags: ['animepahe'],
        summary: 'Get anime info',
        operationId: 'getAnimeInfo',
        parameters: [
          {
            name: '{id}',
            in: 'path',
            description: "the anime's id.",
            required: true,
            style: 'path - simple',
          },
          {
            name: 'episodePage',
            in: 'query',
            description:
              'episode page number (found in the anime object). gets all episodes by default',
            required: false,
            schema: {
              type: 'integer',
              default: -1,
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
                  $ref: '#/components/schemas/AnimePaheInfo',
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
    '/anime/animepahe/watch/{episodeId}': {
      summary: 'Get anime episode streaming links',
      get: {
        tags: ['animepahe'],
        summary: 'Get anime episode streaming links',
        operationId: 'getAnimeEpisodeStreamingLinks',
        parameters: [
          {
            name: '{episodeId}',
            in: 'path',
            description: "the anime's episode id.",
            required: true,
            style: 'path - simple',
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/AnimePaheEpisodeSource',
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
    '/meta/anilist/{query}': {
      summary: 'Get anime search',
      get: {
        tags: ['anilist'],
        summary: 'Get anime search',
        operationId: 'getAnimeSearch',
        parameters: [
          {
            name: '{query}',
            in: 'path',
            description: "the anime's title. e.g. 'spy x family'",
            required: true,
            style: 'path - simple',
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
          {
            name: 'pagePage',
            in: 'query',
            description: 'results per page',
            required: false,
            schema: {
              type: 'integer',
              default: 10,
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
                  $ref: '#/components/schemas/AnilistSearch',
                },
              },
            },
          },
        },
      },
    },
    '/meta/anilist/recent-episodes': {
      summary: 'Get recent anime episodes',
      get: {
        tags: ['anilist'],
        summary: 'Get recent anime episodes',
        operationId: 'getRecentAnimeEpisodes',
        parameters: [
          {
            name: 'provider',
            in: 'query',
            description: 'provider e.g. `zoro`',
            required: false,
            schema: {
              type: 'string',
              default: 'gogoanime',
              enum: ['gogoanime', 'zoro'],
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'page number',
            required: false,
            schema: {
              type: 'number',
              default: 1,
            },
          },
          {
            name: 'perPage',
            in: 'query',
            description: 'results per page',
            required: false,
            schema: {
              type: 'number',
              default: 15,
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
                  $ref: '#/components/schemas/AnilistRecentEpisodes',
                },
              },
            },
          },
        },
      },
    },
    '/meta/anilist/advanced-search': {
      summary: 'Get anime Advanced search',
      get: {
        tags: ['anilist'],
        summary: 'Get anime Advanced search',
        operationId: 'getAnimeAdvancedSearch',
        parameters: [
          {
            name: 'query',
            in: 'query',
            description: 'search query',
            required: false,
            schema: {
              type: 'string',
              default: '',
            },
          },
          {
            name: 'type',
            in: 'query',
            description: 'search type',
            required: false,
            schema: {
              type: 'string',
              default: 'ANIME',
              enum: ['ANIME', 'MANGA'],
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'page number',
            required: false,
            schema: {
              type: 'number',
              default: 1,
            },
          },
          {
            name: 'perPage',
            in: 'query',
            description: 'results per page',
            required: false,
            schema: {
              type: 'number',
              default: 20,
            },
          },
          {
            name: 'season',
            in: 'query',
            description: 'season',
            required: false,
            schema: {
              type: 'string',
              enum: ['WINTER', 'SPRING', 'SUMMER', 'FALL'],
            },
          },
          {
            name: 'format',
            in: 'query',
            description: 'format',
            required: false,
            schema: {
              type: 'string',
              enum: ['TV', 'TV_SHORT', 'OVA', 'ONA', 'MOVIE', 'SPECIAL', 'MUSIC'],
            },
          },
          {
            name: 'sort',
            in: 'query',
            description:
              'sort. e.g. `/anilist/advanced-search?sort=["POPULARITY_DESC","UPDATED_AT_DESC"]`',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'POPULARITY_DESC',
                  'POPULARITY',
                  'TRENDING_DESC',
                  'TRENDING',
                  'UPDATED_AT_DESC',
                  'UPDATED_AT',
                  'START_DATE_DESC',
                  'START_DATE',
                  'END_DATE_DESC',
                  'END_DATE',
                  'FAVOURITES_DESC',
                  'FAVOURITES',
                  'SCORE_DESC',
                  'SCORE',
                  'TITLE_ROMAJI_DESC',
                  'TITLE_ROMAJI',
                  'TITLE_ENGLISH_DESC',
                  'TITLE_ENGLISH',
                  'TITLE_NATIVE_DESC',
                  'TITLE_NATIVE',
                  'EPISODES_DESC',
                  'EPISODES',
                  'ID',
                  'ID_DESC',
                ],
              },
              default: ['POPULARITY_DESC', 'SCORE_DESC'],
            },
          },
          {
            name: 'genres',
            in: 'query',
            description:
              'filter by genres. e.g. `/anilist/advanced-search?genres=["Action","Adventure"]`',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'Action',
                  'Adventure',
                  'Cars',
                  'Comedy',
                  'Drama',
                  'Fantasy',
                  'Horror',
                  'Mahou Shoujo',
                  'Mecha',
                  'Music',
                  'Mystery',
                  'Psychological',
                  'Romance',
                  'Sci-Fi',
                  'Slice of Life',
                  'Sports',
                  'Supernatural',
                  'Thriller',
                ],
              },
            },
          },
          {
            name: 'id',
            in: 'query',
            description: 'anilist id',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'year',
            in: 'query',
            description: 'year of release e.g. `2022`',
            required: false,
            schema: {
              type: 'number',
            },
          },
          {
            name: 'status',
            in: 'query',
            description: 'status',
            required: false,
            schema: {
              type: 'string',
              enum: ['RELEASING', 'NOT_YET_RELEASED', 'FINISHED', 'CANCELLED', 'HIATUS'],
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
                  $ref: '#/components/schemas/AnilistSearch',
                },
              },
            },
          },
        },
      },
    },
    '/meta/anilist/genre': {
      summary: 'Get anime genres',
      get: {
        tags: ['anilist'],
        summary: 'Get anime genres',
        operationId: 'getAnimeGenres',
        parameters: [
          {
            name: 'genres',
            in: 'query',
            description: 'filter by genres. e.g. `/anilist/genre?genres=["Action","Adventure"]`',
            required: true,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'Action',
                  'Adventure',
                  'Cars',
                  'Comedy',
                  'Drama',
                  'Fantasy',
                  'Horror',
                  'Mahou Shoujo',
                  'Mecha',
                  'Music',
                  'Mystery',
                  'Psychological',
                  'Romance',
                  'Sci-Fi',
                  'Slice of Life',
                  'Sports',
                  'Supernatural',
                  'Thriller',
                ],
              },
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
                  $ref: '#/components/schemas/AnilistTrending',
                },
              },
            },
          },
        },
      },
    },
    '/meta/anilist/random-anime': {
      summary: 'Get random anime',
      get: {
        tags: ['anilist'],
        summary: 'Get random anime',
        operationId: 'getRandomAnime',
        parameters: [],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/AnilistInfo',
                },
              },
            },
          },
        },
      },
    },
    '/meta/anilist/trending': {
      summary: 'Get anime trending',
      get: {
        tags: ['anilist'],
        summary: 'Get anime trending',
        operationId: 'getAnimeTrending',
        parameters: [
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
          {
            name: 'perPage',
            in: 'query',
            description: 'number of results per page',
            required: false,
            schema: {
              type: 'integer',
              default: 10,
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
                  $ref: '#/components/schemas/AnilistTrending',
                },
              },
            },
          },
        },
      },
    },
    '/meta/anilist/popular': {
      summary: 'Get anime popular',
      get: {
        tags: ['anilist'],
        summary: 'Get anime popular',
        operationId: 'getAnimePopular',
        parameters: [
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
          {
            name: 'perPage',
            in: 'query',
            description: 'number of results per page',
            required: false,
            schema: {
              type: 'integer',
              default: 10,
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
                  $ref: '#/components/schemas/AnilistTrending',
                },
              },
            },
          },
        },
      },
    },
    '/meta/anilist/airing-schedule': {
      summary: 'Get anime airing schedule',
      get: {
        tags: ['anilist'],
        summary: 'Get anime airing schedule',
        operationId: 'getAnimeAiringSchedule',
        parameters: [
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
          {
            name: 'perPage',
            in: 'query',
            description: 'number of results per page',
            required: false,
            schema: {
              type: 'integer',
              default: 10,
            },
          },
          {
            name: 'weekStart',
            in: 'query',
            description:
              ' Filter by the start of the week. you can use either the number or the string',
            required: false,
            schema: {
              type: 'integer or string',
              default: 'todays date',
              enum: [
                'Saturday = 0',
                'Sunday = 1',
                'Monday = 2',
                'Tuesday = 3',
                'Wednesday = 4',
                'Thursday = 5',
                'Friday = 6',
              ],
            },
          },
          {
            name: 'weekEnd',
            in: 'query',
            description:
              'Filter by the end of the week. you can use either the number or the string',
            required: false,
            schema: {
              type: 'integer or string',
              default: 'todays date + 7 days',
              enum: [
                'Saturday = 0',
                'Sunday = 1',
                'Monday = 2',
                'Tuesday = 3',
                'Wednesday = 4',
                'Thursday = 5',
                'Friday = 6',
              ],
            },
          },
          {
            name: 'notYetAired',
            in: 'query',
            description: 'whether to include not yet aired episodes',
            required: false,
            schema: {
              type: 'boolean',
              default: false,
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
                  $ref: '#/components/schemas/AnilistAiringSchedule',
                },
              },
            },
          },
        },
      },
    },
    '/meta/anilist/info/{id}': {
      summary: 'Get anime info',
      get: {
        tags: ['anilist'],
        summary: 'Get anime info',
        operationId: 'getAnimeInfo',
        parameters: [
          {
            name: '{id}',
            in: 'path',
            description: "the anime's id.",
            required: true,
            style: 'path - simple',
          },
          {
            name: 'dub',
            in: 'query',
            description: 'if true, returns dub episodes. default is false',
            required: false,
            schema: {
              type: 'boolean',
              default: false,
            },
          },
          {
            name: 'provider',
            in: 'query',
            description:
              'name of the anime provider to map to. eg. `zoro`. NOTE: if you choose `zoro`, you must also add the provider parameter on the /anilist/watch endpoint',
            required: false,
            schema: {
              type: 'string',
              default: 'gogoanime',
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
                  $ref: '#/components/schemas/AnilistInfo',
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
    '/meta/anilist/watch/{episodeId}': {
      summary: 'Get anime episode streaming links',
      get: {
        tags: ['anilist'],
        summary: 'Get anime episode streaming links',
        operationId: 'getAnimeEpisodeStreamingLinks',
        parameters: [
          {
            name: '{episodeId}',
            in: 'path',
            description: "the anime's episode id.",
            required: true,
            style: 'path - simple',
          },
          {
            name: 'provider',
            in: 'query',
            description:
              'name of the anime provider you used to get the episode with the info. eg. zoro',
            required: false,
            schema: {
              type: 'string',
              default: 'gogoanime',
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
                  $ref: '#/components/schemas/AnilistEpisodeSource',
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
    '/manga/mangahere/{query}': {
      summary: 'Get manga search',
      get: {
        tags: ['mangahere'],
        summary: 'Get manga search',
        operationId: 'getMangaSearch',
        parameters: [
          {
            name: '{query}',
            in: 'path',
            description: "the manga's title. e.g. 'spy x family'",
            required: true,
            style: 'path - simple',
          },
          {
            name: 'page',
            in: 'query',
            description: 'the page number. default is 1',
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
                  $ref: '#/components/schemas/MangaHereSearch',
                },
              },
            },
          },
        },
      },
    },
    '/manga/mangahere/info': {
      summary: 'Get manga info',
      get: {
        tags: ['mangahere'],
        summary: 'Get manga info',
        operationId: 'getMangaInfo',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: "the manga's id.",
            required: true,
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
                  $ref: '#/components/schemas/MangaHereInfo',
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
            lang: 'curl',
            source: `curl "https://api.consumet.org/manga/mangahere/info?id=tomodachi_game"`,
          },
        ],
      },
    },
    '/manga/mangahere/read': {
      summary: 'Get manga chapters',
      get: {
        tags: ['mangahere'],
        summary: 'Get manga chapters',
        operationId: 'getMangaChapters',
        parameters: [
          {
            name: 'chapterId',
            in: 'query',
            description: "the manga's chapter id.",
            required: true,
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
                    $ref: '#/components/schemas/MangaHereChapter',
                  },
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
            lang: 'curl',
            source: `curl 'https://api.consumet.org/manga/mangahere/read?chapterId=tomodachi_game/c102'`,
          },
        ],
      },
    },
    '/manga/mangakakalot/{query}': {
      summary: 'Get manga search',
      get: {
        tags: ['mangakakalot'],
        summary: 'Get manga search',
        operationId: 'getMangaSearch',
        parameters: [
          {
            name: '{query}',
            in: 'path',
            description: "the manga's title. e.g. 'spy x family'",
            required: true,
            style: 'path - simple',
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/MangaKakalotSearch',
                },
              },
            },
          },
        },
      },
    },
    '/manga/mangakakalot/info': {
      summary: 'Get manga info',
      get: {
        tags: ['mangakakalot'],
        summary: 'Get manga info',
        operationId: 'getMangaInfo',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: "the manga's id.",
            required: true,
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
                  $ref: '#/components/schemas/MangaKakalotInfo',
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
    '/manga/mangakakalot/read': {
      summary: 'Get manga chapters',
      get: {
        tags: ['mangakakalot'],
        summary: 'Get manga chapters',
        operationId: 'getMangaChapters',
        parameters: [
          {
            name: 'chapterId',
            in: 'query',
            description: "the manga's chapter id.",
            required: true,
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
                    $ref: '#/components/schemas/MangaKakalotChapter',
                  },
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
    '/anime/zoro/{query}': {
      summary: 'Get anime search',
      get: {
        tags: ['zoro'],
        summary: 'Get anime search',
        operationId: 'getAnimeSearch',
        parameters: [
          {
            name: '{query}',
            in: 'path',
            description: "the anime's title. e.g. 'spy x family'",
            required: true,
            style: 'path - simple',
          },
          {
            name: 'page',
            in: 'query',
            description: 'the page number',
            required: false,
            schema: {
              type: 'integer',
              format: 'int32',
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
                  $ref: '#/components/schemas/ZoroSearch',
                },
              },
            },
          },
        },
      },
    },
    '/anime/zoro/recent-episodes': {
      summary: 'Get recent episodes',
      get: {
        tags: ['zoro'],
        summary: 'Get recent episodes',
        operationId: 'getRecentEpisodes',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'the page number',
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
                  type: 'array',
                  items: {
                    type: 'object',
                    $ref: '#/components/schemas/ZoroRecentEpisodes',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/anime/zoro/info': {
      summary: 'Get anime info',
      get: {
        tags: ['zoro'],
        summary: 'Get anime info',
        operationId: 'getAnimeInfo',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: "the anime's id.",
            required: true,
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
                  $ref: '#/components/schemas/ZoroInfo',
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
    '/anime/zoro/watch': {
      summary: 'Get anime episode streaming links with subtitles',
      get: {
        tags: ['zoro'],
        summary: 'Get anime streaming links with subtitles',
        operationId: 'getAnimeStreamingLinks',
        parameters: [
          {
            name: 'episodeId',
            in: 'query',
            description: "the anime's id.",
            required: true,
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
                  $ref: '#/components/schemas/ZoroEpisodeSource',
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
    '/anime/enime/{query}': {
      summary: 'Get anime search',
      get: {
        tags: ['enime'],
        summary: 'Get anime search',
        operationId: 'getAnimeSearch',
        parameters: [
          {
            name: '{query}',
            in: 'path',
            description: "the anime's title. e.g. 'spy x family'",
            required: true,
            style: 'path - simple',
          },
          {
            name: 'page',
            in: 'query',
            description: 'the page number',
            required: false,
            schema: {
              type: 'number',
              default: 1,
            },
          },
          {
            name: 'perPage',
            in: 'query',
            description: 'the number of results per page',
            required: false,
            schema: {
              type: 'number',
              default: 20,
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
                  $ref: '#/components/schemas/EnimeSearch',
                },
              },
            },
          },
        },
      },
    },
    '/anime/enime/info': {
      summary: 'Get anime info',
      get: {
        tags: ['enime'],
        summary: 'Get anime info',
        operationId: 'getAnimeInfo',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: "the anime's id. e.g. `/anime/enime/info?id=1`",
            required: true,
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
                  $ref: '#/components/schemas/EnimeInfo',
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
    '/anime/enime/watch': {
      summary: 'Get anime episode streaming links',
      get: {
        tags: ['enime'],
        summary: 'Get anime streaming links',
        operationId: 'getAnimeStreamingLinks',
        parameters: [
          {
            name: 'episodeId',
            in: 'query',
            description: "the episode's id. e.g. `/anime/enime/watch?episodeId=12321dqw`",
            required: true,
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
                  $ref: '#/components/schemas/EnimeEpisodeSource',
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
