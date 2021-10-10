import * as React from 'react';

import { GenreCode, GenreData } from '../types';

interface ShowBandsOptionsProps {
  setOrderAsc: React.Dispatch<React.SetStateAction<boolean>>;
  orderAsc: boolean;
  setFilterCriteria: React.Dispatch<React.SetStateAction<GenreCode>>;
  genres: GenreData[];
}

function ShowBandsOptions({
  setOrderAsc,
  orderAsc,
  setFilterCriteria,
  genres,
}: ShowBandsOptionsProps) {
  const handleFilterChange = (event: React.FormEvent<HTMLSelectElement>) =>
    setFilterCriteria(event.currentTarget.value as GenreCode);

  const handleOrderChange = () => setOrderAsc((orderAsc) => !orderAsc);

  return (
    <form className='px-5 py-4 mx-auto text-2xl sm:flex sm:justify-evenly sm:my-8'>
      <fieldset className='mb-1'>
        <legend className='float-left font-semibold'>Order</legend>
        <label className='ml-3 mr-1' htmlFor='asc'>
          A-Z
        </label>
        <input
          checked={orderAsc}
          id='asc'
          name='order'
          type='radio'
          value='asc'
          onChange={handleOrderChange}
        />
        <label className='ml-2 mr-1' htmlFor='desc'>
          Z-A
        </label>
        <input
          id='desc'
          name='order'
          type='radio'
          value='desc'
          onChange={handleOrderChange}
        />
      </fieldset>
      {genres && (
        <div>
          <label className='py-1 font-semibold' htmlFor='genres'>
            Genre
          </label>
          <select
            className='p-1 ml-2 text-xl text-gray-800 rounded-sm'
            id='genres'
            name='genres'
            onChange={handleFilterChange}
          >
            <option value='all'>All</option>
            {genres.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      )}
    </form>
  );
}

export default ShowBandsOptions;
