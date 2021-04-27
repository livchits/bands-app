function getGenreByCode(genresData, { genreCode }) {
  const { name } = genresData.find(({ code }) => code === genreCode);
  return name;
}

export default getGenreByCode;
