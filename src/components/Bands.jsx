import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import filterByGenre from '../utils/filterByGenre';
import sortByName from '../utils/sortByName';

function Bands({ orderAsc, filterCriteria, bands }) {
  const { status, data, error } = bands;

  if (error) return <div>Something went wrong retrieving bands list</div>;

  if (status === 'pending') return <div>Loading...</div>;

  const sortedBands = sortByName(data, orderAsc);
  const filteredBands = filterByGenre(sortedBands, filterCriteria);

  return (
    <ul>
      {filteredBands.map(({ name, id }) => (
        <li key={id}>
          <Link to={`${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}

Bands.propTypes = {
  orderAsc: PropTypes.bool.isRequired,
  filterCriteria: PropTypes.string.isRequired,
  bands: PropTypes.object.isRequired,
};

export default Bands;
