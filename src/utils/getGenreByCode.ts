import { GenreData, GenreCode } from './../types';

function getGenreByCode(
  genresData: GenreData[],
  { genreCode }: { genreCode: GenreCode }
) {
  const genre = genresData.find(({ code }) => code === genreCode);
  return genre?.name || genreCode.split('-').join(' ');
}

export default getGenreByCode;
