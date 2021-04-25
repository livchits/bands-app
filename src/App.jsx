import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BandInfo from './components/BandInfo';
import Bands from './components/Bands';
import ShowBandsOptions from './components/ShowBandsOptions';

function App() {
  const [orderAsc, setOrderAsc] = React.useState(true);
  const [filterCriteria, setFilterCriteria] = React.useState('');

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <ShowBandsOptions
            orderAsc={orderAsc}
            setFilterCriteria={setFilterCriteria}
            setOrderAsc={setOrderAsc}
          />
          <Bands filterCriteria={filterCriteria} orderAsc={orderAsc} />
        </Route>
        <Route exact path='/:id'>
          <BandInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
