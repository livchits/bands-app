import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

import filterByGenre from '../utils/filterByGenre';
import sortByName from '../utils/sortByName';

function BandsList({ orderAsc, filterCriteria, bands }) {
  const sortedBands = sortByName(bands, orderAsc);
  const filteredBands = filterByGenre(sortedBands, filterCriteria);
  const { url } = useRouteMatch();

  return (
    <ul className='w-3/4 mx-auto mt-2 text-xl'>
      {filteredBands.map(({ name, id }) => (
        <li key={id}>
          <Link
            className='block p-1 px-3 my-1.5 rounded-md ring-1 ring-gray-50 ring-opacity-75 hover:ring-2 focus:ring-2 focus:ring-indigo-400 active:text-gray-200 transition-all duration-100 ease-in hover:scale-105 transform'
            to={`${url}/${id}`}
          >
            {name}
          </Link>
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
