import * as React from 'react';
import PropTypes from 'prop-types';
function Container({ children }) {
  return (
    <div className='w-11/12 h-screen max-w-2xl mx-auto my-4 bg-red-600 rounded-md shadow-md font-chivo text-gray-50 bg-opacity-80'>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default Container;
