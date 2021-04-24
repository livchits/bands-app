import * as React from 'react';

import useGetData from '../hooks/useGetData';

function ShowBandsOptions({ handleChange, orderAsc }) {
  const { VITE_GENRES: genresUrl } = import.meta.env;
  const { data: genres, error } = useGetData(genresUrl);

  if (error) return <div>Something went wrong</div>;

  return (
    <form>
      <div>
        <input
          checked={orderAsc}
          id='asc'
          name='order'
          type='radio'
          value={orderAsc}
          onChange={handleChange}
        />
        <label htmlFor='asc'>A-Z</label>
        <input
          id='desc'
          name='order'
          type='radio'
          value={orderAsc}
          onChange={handleChange}
        />
        <label htmlFor='desc'>Z-A</label>
      </div>
      <select id='genres' name='genres'>
        <option value=''>Filter for a genre</option>
        {genres?.map(({ name, code }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default ShowBandsOptions;
