import * as React from 'react';

function Bands() {
  const [bands, setBands] = React.useState([]);
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setStatus('pending');
    fetch(
      'https://my-json-server.typicode.com/improvein/dev-challenge/bands?_sort=name&_order=asc'
    )
      .then((response) => response.json())
      .then((data) => setBands(data))
      .catch((error) => setError(error))
      .finally(() => setStatus('complete'));
  }, []);

  if (status === 'pending') return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <ul>
      {bands.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}

export default Bands;
