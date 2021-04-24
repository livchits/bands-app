import * as React from 'react';

import sortByName from '../../utils/sortByName';
import useGetData from '../hooks/useGetData';

function Bands({ orderAsc }) {
  const { VITE_BANDS: bandsUrl } = import.meta.env;

  const { status, data: bands, error } = useGetData(bandsUrl);

  if (error) return <div>Something went wrong retrieving bands list</div>;

  if (status === 'pending') return <div>Loading...</div>;

  const sortedBands = sortByName(bands, orderAsc);

  return (
    <ul>
      {sortedBands.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}

export default Bands;
