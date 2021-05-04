function getGenreByCode(genresData, { genreCode }) {
  const genre = genresData.find(({ code }) => code === genreCode);
  return genre?.name || genreCode.split('-').join(' ');
}

export default getGenreByCode;
