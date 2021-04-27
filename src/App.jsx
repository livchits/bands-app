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
          path='/:idBand'
          render={({ match }) => {
            const { idBand } = match.params;
            const band = bandsData.find((band) => band.id === Number(idBand));
            const { name: genre } = genresData.find(
              ({ code }) => code === band.genreCode
            );
            return <BandInfo bandData={{ ...band, genre }} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
