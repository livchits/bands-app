import * as React from 'react';

import Bands from './components/Bands';
import ShowBandsOptions from './components/ShowBandsOptions';

function App() {
  const [orderAsc, setOrderAsc] = React.useState(true);

  return (
    <>
      <ShowBandsOptions
        handleChange={() => setOrderAsc((orderAsc) => !orderAsc)}
        orderAsc={orderAsc}
      />
      <Bands orderAsc={orderAsc} />
    </>
  );
}

export default App;
