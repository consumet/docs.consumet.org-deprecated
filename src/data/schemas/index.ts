import bookSchema from './book.schema';
import hashesSchema from './hashes.schema';
import libgenBookSchema from './libgenBook.schema';
import getComicsResSchema from './getComicsRes.schema';
import getComicsSchema from './getComics.schema';
import { EpisodeServerSchema } from './global.schema';
import {
  GogoanimeEpisodeSchema,
  GogoanimeInfoSchema,
  GogoanimeSearchResultSchema,
  GogoanimeSearchSchema,
  GogoanimeEpisodeSourceSchema,
} from './gogoanime.schema';
import {
  FlixHQEpisodeSchema,
  FlixHQInfoSchema,
  FlixHQSearchResultSchema,
  FlixHQSearchSchema,
  FlixHQEpisodeSourceSchema,
} from './flixhq.schema';
import {
  ReadLightNovelsChapterContentSchema,
  ReadLightNovelsChapterSchema,
  ReadLightNovelsSearchResultSchema,
  ReadLightNovelsSearchSchema,
  ReadLightNovelsInfoSchema,
} from './readlightnovels.schema';
import {
  MangaDexChapterPageSchema,
  MangaDexChapterSchema,
  MangaDexSearchResultSchema,
  MangaDexSearchSchema,
  MangaDexInfoSchema,
} from './mangadex.schema';

/**
 * Make sure to sort the schemas by the provider name.
 */
export {
  EpisodeServerSchema,
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
};
