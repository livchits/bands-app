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
import BandInfo from '../components/BandInfo';
import BandsList from '../components/BandsList';
import Container from '../components/Container';
import Header from '../components/Header';
import ShowBandsOptions from '../components/ShowBandsOptions';

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
    return (
      <Container>
        <div className='grid items-center w-full h-full text-4xl text-center'>
          <p>Loading...</p>
        </div>
      </Container>
    );

  if (bandsError || genresError)
    return (
      <Container>
        <div className='grid items-center w-3/4 p-2 mx-auto mb-6 text-lg font-black text-center bg-red-800 border-4 border-red-900 rounded-md sm:w-2/3'>
          <p>Something went wrong retrieving data</p>
        </div>
      </Container>
    );

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
