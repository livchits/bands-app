import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import { BANDS_URL, GENRES_URL } from '../constants/urls';
import useGetData from '../hooks/useGetData';
import findBandById from '../utils/findBandById';
import getGenreByCode from '../utils/getGenreByCode';

import BandInfo from './BandInfo';
import BandsList from './BandsList';
import Container from './Container';
import Header from './Header';
import ShowBandsOptions from './ShowBandsOptions';

function Home() {
  const [orderAsc, setOrderAsc] = React.useState(true);
  const [filterCriteria, setFilterCriteria] = React.useState('all');
  const { path } = useRouteMatch();

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
    <Container>
      <Header />
      <Router>
        <Switch>
          <Route exact path={path}>
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
            path={`${path}/:bandId`}
            render={({ match }) => {
              const { bandId } = match.params;
              const band = findBandById(bandsData, bandId);
              const genre = getGenreByCode(genresData, band);
              return <BandInfo bandData={{ ...band, genre }} />;
            }}
          />
        </Switch>
      </Router>
    </Container>
  );
}

export default Home;
