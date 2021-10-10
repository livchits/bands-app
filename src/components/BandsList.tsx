import * as React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import filterByGenre from '../utils/filterByGenre';
import sortByName from '../utils/sortByName';
import { BandData, Genre } from '../types';

interface BandsListProps {
  orderAsc: boolean;
  filterCriteria: Genre;
  bands: BandData[];
}

function BandsList({ orderAsc, filterCriteria, bands }: BandsListProps) {
  const sortedBands = sortByName(bands, orderAsc);
  const filteredBands = filterByGenre(sortedBands, filterCriteria);
  const { url } = useRouteMatch();

  return (
    <ul className='w-3/4 p-3 mx-auto my-2 overflow-y-auto text-xl'>
      {filteredBands.map(({ name, id }) => (
        <li key={id}>
          <Link
            className='block p-1 px-3 my-1.5 rounded-md border-2 border-gray-50 border-opacity-50 hover:border-opacity-80 focus:ring-2 focus:ring-indigo-400 active:text-gray-200 transition-all duration-100 ease-in hover:scale-105 transform'
            to={`${url}/${id}`}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default BandsList;
