import * as React from 'react';

import { ALBUMS_URL } from '../constants/urls';
import useGetData from '../hooks/useGetData';
import { AlbumData, BandData } from '../types';

import Albums from './Albums';

interface BandInfoProp extends BandData {
  genre: string;
}

function BandInfo({ name, country, members, id, year, genre }: BandInfoProp) {
  const { data: albumsData } = useGetData<AlbumData>(`${ALBUMS_URL}${id}`);

  return (
    <main className='w-5/6 mx-auto mt-4'>
      <h1 className='text-3xl font-black border-b-2 border-current'>{name}</h1>
      <section className='mt-6 text-xl'>
        <p className='py-1'>
          <span className='font-black'>Country:</span> {country}
        </p>
        <p className='py-1'>
          <span className='font-black'>Formation year:</span> {year}
        </p>
        {genre && (
          <p>
            <span className='py-1 font-black'>Genre:</span> {genre}
          </p>
        )}
        <h2 className='py-1 font-black'>Members:</h2>
        <ul className='pl-4'>
          {members.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
      {albumsData && Boolean(albumsData.length) && (
        <Albums albumsData={albumsData} />
      )}
    </main>
  );
}

export default BandInfo;
