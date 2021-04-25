import * as React from 'react';
import PropTypes from 'prop-types';

function ShowBandsOptions({
  setOrderAsc,
  orderAsc,
  setFilterCriteria,
  genres,
}) {
  const { data } = genres;

  const handleFilterChange = ({ currentTarget }) =>
    setFilterCriteria(currentTarget.value);

  const handleOrderChange = () => setOrderAsc((orderAsc) => !orderAsc);

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
        {data?.map(({ name, code }) => (
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
  genres: PropTypes.object,
};

export default ShowBandsOptions;
