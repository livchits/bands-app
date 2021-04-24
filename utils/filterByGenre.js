function filterByGenre(bands, filterCriteria) {
  return filterCriteria
    ? bands.filter(({ genreCode }) => genreCode === filterCriteria)
    : bands;
}

export default filterByGenre;
