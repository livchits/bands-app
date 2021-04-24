import * as React from 'react';

import Bands from './components/Bands';
import ShowBandsOptions from './components/ShowBandsOptions';

function App() {
  const [orderAsc, setOrderAsc] = React.useState(true);
  const [filterCriteria, setFilterCriteria] = React.useState('');

  return (
    <>
      <ShowBandsOptions
        handleChange={() => setOrderAsc((orderAsc) => !orderAsc)}
        orderAsc={orderAsc}
        setFilterCriteria={setFilterCriteria}
      />
      <Bands filterCriteria={filterCriteria} orderAsc={orderAsc} />
    </>
  );
}

export default App;
