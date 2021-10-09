import * as React from 'react';

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col w-11/12 h-screen max-w-2xl mx-auto my-4 overflow-hidden bg-red-600 rounded-md shadow-md font-chivo text-gray-50 bg-opacity-80'>
      {children}
    </div>
  );
}

export default Container;
