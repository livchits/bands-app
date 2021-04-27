import * as React from 'react';
import PropTypes from 'prop-types';

function Albums({ albumsData }) {
  return (
    <section>
      <h2>Albums:</h2>
      <ul>
        {albumsData.map(({ name, year }) => (
          <p key={name}>
            {name} ({year})
          </p>
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
