function filterByGenre(bands, filterCriteria) {
  return filterCriteria === 'all'
    ? bands
    : bands.filter(({ genreCode }) => genreCode === filterCriteria);
}

export default filterByGenre;
