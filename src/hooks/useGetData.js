import * as React from 'react';

function useGetData(url) {
  const [data, setData] = React.useState();
  const [status, setStatus] = React.useState('pending');
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setStatus('complete'));
  }, [url]);

  return { status, data, error };
}

export default useGetData;
