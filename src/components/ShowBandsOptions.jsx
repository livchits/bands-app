import * as React from 'react';
import PropTypes from 'prop-types';

function ShowBandsOptions({
  setOrderAsc,
  orderAsc,
  setFilterCriteria,
  genres,
}) {
  const handleFilterChange = ({ currentTarget }) =>
    setFilterCriteria(currentTarget.value);

  const handleOrderChange = () => setOrderAsc((orderAsc) => !orderAsc);

  return (
    <form>
      <fieldset>
        <legend>Bands order:</legend>
        <label htmlFor='asc'>A-Z</label>
        <input
          checked={orderAsc}
          id='asc'
          name='order'
          type='radio'
          value={orderAsc}
          onChange={handleOrderChange}
        />
        <label htmlFor='desc'>Z-A</label>
        <input
          id='desc'
          name='order'
          type='radio'
          value={orderAsc}
          onChange={handleOrderChange}
        />
      </fieldset>
      {genres && (
        <>
          <label htmlFor='genres'>Filter for genre:</label>
          <select id='genres' name='genres' onChange={handleFilterChange}>
            <option value='all'>All</option>
            {genres.map(({ name, code }) => (
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
  genres: PropTypes.arrayOf(
    PropTypes.shape({ code: PropTypes.string, name: PropTypes.string })
  ),
};

export default ShowBandsOptions;
