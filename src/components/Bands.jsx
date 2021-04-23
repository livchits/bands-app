import * as React from 'react';

import useGetData from '../hooks/useGetData';

function Bands() {
  const { VITE_BANDS: bandsUrl } = import.meta.env;

  const { status, data: bands, error } = useGetData(bandsUrl);

  if (error) return <div>Something went wrong</div>;

  return status === 'pending' ? (
    <div>Loading...</div>
  ) : (
    <ul>
      {bands.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}

export default Bands;
