import * as React from 'react';

import Bands from './components/Bands';
import ShowBandsOptions from './components/ShowBandsOptions';

function App() {
  return (
    <>
      <ShowBandsOptions />
      <Bands />
    </>
  );
}

export default App;
