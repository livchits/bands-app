import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BANDS_URL, GENRES_URL } from './constants/urls';
import BandInfo from './components/BandInfo';
import BandsList from './components/BandsList';
import ShowBandsOptions from './components/ShowBandsOptions';
import useGetData from './hooks/useGetData';
import findBandById from './utils/findBandById';
import getGenreByCode from './utils/getGenreByCode';

function App() {
  const [orderAsc, setOrderAsc] = React.useState(true);
  const [filterCriteria, setFilterCriteria] = React.useState('all');

  const {
    data: bandsData,
    status: bandsStatus,
    error: bandsError,
  } = useGetData(BANDS_URL);
  const {
    data: genresData,
    status: genresStatus,
    error: genresError,
  } = useGetData(GENRES_URL);

  if (bandsStatus === 'pending' || genresStatus === 'pending')
    return <div>Loading...</div>;

  if (bandsError || genresError)
    return <div>Something went wrong retrieving data</div>;

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <ShowBandsOptions
            genres={genresData}
            orderAsc={orderAsc}
            setFilterCriteria={setFilterCriteria}
            setOrderAsc={setOrderAsc}
          />
          <BandsList
            bands={bandsData}
            filterCriteria={filterCriteria}
            orderAsc={orderAsc}
          />
        </Route>
        <Route
          exact
          path='/:bandId'
          render={({ match }) => {
            const { bandId } = match.params;
            const band = findBandById(bandsData, bandId);
            const genre = getGenreByCode(genresData, band);
            return <BandInfo bandData={{ ...band, genre }} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
