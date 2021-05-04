import * as React from 'react';
import PropTypes from 'prop-types';

function Albums({ albumsData }) {
  return (
    <section className='mt-2 text-xl'>
      <h2 className='py-1 font-black'>Albums:</h2>
      <ul className='pl-4'>
        {albumsData.map(({ name, year }) => (
          <li key={name}>
            {name} <span className='italic'>({year})</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Albums.propTypes = {
  albumsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      bandId: PropTypes.number,
      name: PropTypes.string,
      year: PropTypes.number,
    })
  ),
};

export default Albums;
