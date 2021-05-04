import * as React from 'react';

function useGetData(url) {
  const [{ status, data, error }, setState] = React.useState({
    status: 'idle',
    data: null,
    error: null,
  });

  React.useEffect(() => {
    setState((state) => ({ ...state, status: 'pending' }));
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setState((state) => ({ ...state, data, status: 'resolved' }));
      })
      .catch((error) => {
        setState((state) => ({
          ...state,
          status: 'rejected',
          error: error.message,
        }));
      });
    return () => setState({ status: 'idle', data: null, error: null });
  }, [url]);

  return { status, data, error };
}

export default useGetData;
