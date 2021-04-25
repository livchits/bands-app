import * as React from 'react';
import { useParams } from 'react-router';

function BandInfo({ bands, genres }) {
  const { id: paramId } = useParams();
  const { status, data, error } = bands;
  const { data: genresData } = genres;

  if (error) return <div>Something went wrong retrieving bands list</div>;

  if (status === 'pending') return <div>Loading...</div>;

  const { name, country, genreCode, members, year } = data.find(
    ({ id }) => id === Number(paramId)
  );

  const { name: genre } = genresData?.find(({ code }) => code === genreCode);

  return (
    <main>
      <h1>{name}</h1>
      <p>Country: {country}</p>
      <p>Formed in {year}</p>
      {genre && <p>Genre: {genre}</p>}
      <h2>Members:</h2>
      <ul>
        {members.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

export default BandInfo;
