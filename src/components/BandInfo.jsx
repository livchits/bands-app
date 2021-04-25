import * as React from 'react';
import { useParams } from 'react-router';

function BandInfo({ bandsData }) {
  const { id: paramId } = useParams();
  const { status, data, error } = bandsData;

  if (error) return <div>Something went wrong retrieving bands list</div>;

  if (status === 'pending') return <div>Loading...</div>;

  const { name, country, genreCode, members, year } = data.find(
    ({ id }) => id === Number(paramId)
  );

  return (
    <main>
      <h1>{name}</h1>
      <p>Country: {country}</p>
      <p>Formed in {year}</p>
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
