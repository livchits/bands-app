import * as React from 'react';
import PropTypes from 'prop-types';

import useGetData from '../hooks/useGetData';

function ShowBandsOptions({ setOrderAsc, orderAsc, setFilterCriteria }) {
  const { VITE_GENRES: genresUrl } = import.meta.env;
  const { data: genres, error } = useGetData(genresUrl);

  const handleFilterChange = ({ currentTarget }) =>
    setFilterCriteria(currentTarget.value);

  const handleOrderChange = () => setOrderAsc((orderAsc) => !orderAsc);

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
          onChange={handleOrderChange}
        />
        <label htmlFor='asc'>A-Z</label>
        <input
          id='desc'
          name='order'
          type='radio'
          value={orderAsc}
          onChange={handleOrderChange}
        />
        <label htmlFor='desc'>Z-A</label>
      </div>
      <select id='genres' name='genres' onChange={handleFilterChange}>
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

ShowBandsOptions.propTypes = {
  setOrderAsc: PropTypes.func.isRequired,
  orderAsc: PropTypes.bool.isRequired,
  setFilterCriteria: PropTypes.func.isRequired,
};

export default ShowBandsOptions;
