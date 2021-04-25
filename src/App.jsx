import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BANDS_URL, GENRES_URL } from './constants/urls';
import BandInfo from './components/BandInfo';
import BandsList from './components/BandsList';
import ShowBandsOptions from './components/ShowBandsOptions';
import useGetData from './hooks/useGetData';

function App() {
  const [orderAsc, setOrderAsc] = React.useState(true);
  const [filterCriteria, setFilterCriteria] = React.useState('all');

  const bands = useGetData(BANDS_URL);
  const genres = useGetData(GENRES_URL);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <ShowBandsOptions
            genres={genres}
            orderAsc={orderAsc}
            setFilterCriteria={setFilterCriteria}
            setOrderAsc={setOrderAsc}
          />
          <BandsList
            bands={bands}
            filterCriteria={filterCriteria}
            orderAsc={orderAsc}
          />
        </Route>
        <Route exact path='/:id'>
          <BandInfo bands={bands} genres={genres} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
