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
import { BandData, GenreCode, GenreData } from '../types';

function Home() {
  const [orderAsc, setOrderAsc] = React.useState(true);
  const [filterCriteria, setFilterCriteria] = React.useState<GenreCode>('all');
  const { path } = useRouteMatch();

  const { data: bandsData, error: bandsError } = useGetData<BandData>(
    BANDS_URL as string
  );
  const { data: genresData, error: genresError } = useGetData<GenreData>(
    GENRES_URL as string
  );

  if (bandsError || genresError) {
    return (
      <Container>
        <div className='grid items-center h-full'>
          <p className='w-3/4 px-2 py-6 mx-auto mb-6 text-xl font-black text-center bg-red-800 border-4 border-red-900 rounded-md sm:w-2/3'>
            Something went wrong retrieving data
          </p>
        </div>
      </Container>
    );
  }

  if (bandsData && genresData) {
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
                if (band) {
                  const genre = getGenreByCode(genresData, band?.genreCode);
                  return <BandInfo {...band} genre={genre} />;
                }
              }}
            />
          </Switch>
        </Router>
      </Container>
    );
  }

  return (
    <Container>
      <div className='grid items-center w-full h-full text-4xl text-center'>
        <p>Loading...</p>
      </div>
    </Container>
  );
}

export default Home;
