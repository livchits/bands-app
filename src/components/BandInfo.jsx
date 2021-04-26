import * as React from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
function BandInfo({ bands, genres }) {
  const { id: paramId } = useParams();
  const { status, data, error } = bands;
  const { data: genresData } = genres;

  if (error) return <div>Something went wrong retrieving bands list</div>;

  if (status === 'pending') return <div>Loading...</div>;

  const { name, country, genreCode, members, year } = data.find(
    ({ id }) => id === Number(paramId)
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
    </main>
  );
}

BandInfo.propTypes = {
  bands: PropTypes.object.isRequired,
  genres: PropTypes.object.isRequired,
};

export default BandInfo;
