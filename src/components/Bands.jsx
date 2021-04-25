import * as React from 'react';
import PropTypes from 'prop-types';

import filterByGenre from '../../utils/filterByGenre';
import sortByName from '../../utils/sortByName';
import useGetData from '../hooks/useGetData';

function Bands({ orderAsc, filterCriteria }) {
  const { VITE_BANDS: bandsUrl } = import.meta.env;

  const { status, data: bands, error } = useGetData(bandsUrl);

  if (error) return <div>Something went wrong retrieving bands list</div>;

  if (status === 'pending') return <div>Loading...</div>;

  const sortedBands = sortByName(bands, orderAsc);
  const filteredBands = filterByGenre(sortedBands, filterCriteria);

  return (
    <ul>
      {filteredBands.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}

Bands.propTypes = {
  orderAsc: PropTypes.bool.isRequired,
  filterCriteria: PropTypes.string.isRequired,
};

export default Bands;
