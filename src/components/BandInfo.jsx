import * as React from 'react';
import PropTypes from 'prop-types';

import useGetData from '../hooks/useGetData';
import { ALBUMS_URL } from '../constants/urls';

import Albums from './Albums';
function BandInfo({ bandData }) {
  const { name, country, members, id, year, genre } = bandData;
  const { data: albumsData } = useGetData(`${ALBUMS_URL}${id}`);

  return (
    <main>
      <h1>{name}</h1>
      <section>
        <p>Country: {country}</p>
        <p>Formed in {year}</p>
        {genre && <p>Genre: {genre}</p>}
        <h2>Members:</h2>
        <ul>
          {members.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
      {Boolean(albumsData?.length) && <Albums albumsData={albumsData} />}
    </main>
  );
}

BandInfo.propTypes = {
  bandData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    genreCode: PropTypes.string,
    year: PropTypes.number,
    country: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
    genre: PropTypes.string,
  }),
};

export default BandInfo;
