import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import filterByGenre from '../utils/filterByGenre';
import sortByName from '../utils/sortByName';

function BandsList({ orderAsc, filterCriteria, bands }) {
  const sortedBands = sortByName(bands, orderAsc);
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

BandsList.propTypes = {
  orderAsc: PropTypes.bool.isRequired,
  filterCriteria: PropTypes.string.isRequired,
  bands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      genreCode: PropTypes.string,
      year: PropTypes.number,
      country: PropTypes.string,
      members: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
    })
  ),
};

export default BandsList;
