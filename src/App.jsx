import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BandInfo from './components/BandInfo';
import Bands from './components/Bands';
import ShowBandsOptions from './components/ShowBandsOptions';
import useGetData from './hooks/useGetData';

function App() {
  const [orderAsc, setOrderAsc] = React.useState(true);
  const [filterCriteria, setFilterCriteria] = React.useState('');

  const { VITE_BANDS: bandsUrl } = import.meta.env;
  const bandsData = useGetData(bandsUrl);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <ShowBandsOptions
            orderAsc={orderAsc}
            setFilterCriteria={setFilterCriteria}
            setOrderAsc={setOrderAsc}
          />
          <Bands
            bandsData={bandsData}
            filterCriteria={filterCriteria}
            orderAsc={orderAsc}
          />
        </Route>
        <Route exact path='/:id'>
          <BandInfo bandsData={bandsData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
