import * as React from 'react';

import { AlbumData } from '../types';

function Albums({ albumsData }: { albumsData: AlbumData[] }) {
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

export default Albums;
