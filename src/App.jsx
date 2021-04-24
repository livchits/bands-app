import * as React from 'react';

import Bands from './components/Bands';
import ShowBandsOptions from './components/ShowBandsOptions';

function App() {
  const [orderAsc, setOrderAsc] = React.useState(true);
  const [filterCriteria, setFilterCriteria] = React.useState('');

  return (
    <>
      <ShowBandsOptions
        orderAsc={orderAsc}
        setFilterCriteria={setFilterCriteria}
        setOrderAsc={setOrderAsc}
      />
      <Bands filterCriteria={filterCriteria} orderAsc={orderAsc} />
    </>
  );
}

export default App;
