import * as React from 'react';
import PropTypes from 'prop-types';

function Container({ children }) {
  return (
    <main className='flex flex-col justify-center w-11/12 max-w-2xl mx-auto bg-red-600 rounded-md shadow-md h-5/6 font-chivo text-gray-50 bg-opacity-90'>
      {children}
    </main>
  );
}

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default Container;
