import { BandData, GenreCode } from './../types';

function filterByGenre(bands: BandData[], filterCriteria: GenreCode) {
  return filterCriteria === 'all'
    ? bands
    : bands.filter(({ genreCode }) => genreCode === filterCriteria);
}

export default filterByGenre;
