import { BandData, Genre } from './../types';

function filterByGenre(bands: BandData[], filterCriteria: Genre) {
  return filterCriteria === 'all'
    ? bands
    : bands.filter(({ genreCode }) => genreCode === filterCriteria);
}

export default filterByGenre;
