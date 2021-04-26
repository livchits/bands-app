import * as React from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import Albums from './Albums';
function BandInfo({ bands, genres }) {
  const { id: bandId } = useParams();
  const { status, data, error } = bands;
  const { data: genresData } = genres;

  if (error) return <div>Something went wrong retrieving band info</div>;

  if (status === 'pending') return <div>Loading...</div>;

  const { name, country, genreCode, members, year } = data.find(
    ({ id }) => id === Number(bandId)
  );

  const genre = genresData && genresData.find(({ code }) => code === genreCode);

  return (
    <main>
      <h1>{name}</h1>
      <p>Country: {country}</p>
      <p>Formed in {year}</p>
      {genre && <p>Genre: {genre.name}</p>}
      <h2>Members:</h2>
      <ul>
        {members.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <Albums bandId={bandId} />
    </main>
  );
}

BandInfo.propTypes = {
  bands: PropTypes.object.isRequired,
  genres: PropTypes.object.isRequired,
};

export default BandInfo;
