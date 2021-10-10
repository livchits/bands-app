import * as React from 'react';

interface Data<T> {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  data: T[] | null;
  error: string | null;
}

function useGetData<T>(url: string) {
  const [{ status, data, error }, setState] = React.useState<Data<T>>({
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
