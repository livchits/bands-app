import * as React from 'react';
import PropTypes from 'prop-types';

function ShowBandsOptions({
  setOrderAsc,
  orderAsc,
  setFilterCriteria,
  genres,
}) {
  const { data: genresData } = genres;

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
      {genresData && (
        <>
          <label htmlFor='genres'>Filter for genre:</label>
          <select id='genres' name='genres' onChange={handleFilterChange}>
            <option value='all'>All</option>
            {genresData.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </>
      )}
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
