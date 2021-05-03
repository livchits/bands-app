import * as React from 'react';
import PropTypes from 'prop-types';

function Button({ children, handleClick }) {
  return (
    <button
      className='block p-2 m-auto text-2xl font-black transition-all duration-100 ease-in rounded-md px-9 ring-2 ring-gray-50 ring-opacity-75 hover:ring-4 focus:ring-4 focus:ring-indigo-400 active:text-gray-200'
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
