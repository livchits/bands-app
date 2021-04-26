import * as React from 'react';
import PropTypes from 'prop-types';

import useGetData from '../hooks/useGetData';
import { ALBUMS_URL } from '../constants/urls';

function Albums({ bandId }) {
  const { data: albumsData } = useGetData(`${ALBUMS_URL}${bandId}`);

  return albumsData?.length ? (
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
  ) : null;
}

Albums.propTypes = {
  bandId: PropTypes.string.isRequired,
};

export default Albums;
