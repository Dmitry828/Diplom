import {Redirect, Route, Switch} from 'react-router-dom';
import {HomePage} from '../pages/HomePage/HomePage';
import {MoviesPage} from '../pages/MoviesPage/MoviesPage';
import {EntrieMoviePage} from '../pages/EntrieMoviePage/EntrieMoviePage';
import {SerialsPage} from '../pages/SerialsPage/SerialsPage';
import {EntrieSerialPage} from '../pages/EntrieSerialPage/EntrieSerialPage';
import {SearchMoviePage} from '../pages/SearchMoviePage/SearchMoviePage';
import {SearchSerialPage} from '../pages/SearchSerialPage/SearchSerialPage';
import {FavouritePage} from '../pages/FavouritePage/FavouritePage';

export const Routes = () => {
  return (
    <Switch>
      <Route path={'/'} exact component={HomePage} />
      <Route path={'/movie'} exact component={MoviesPage} />
      <Route path={'/movie/:id'} component={EntrieMoviePage} />
      <Route path={'/tv'} exact component={SerialsPage} />
      <Route path={'/tv/:id'} component={EntrieSerialPage} />
      <Route
        path={'/search/movie'}
        exact
        component={SearchMoviePage}
      />
      <Route path={'/search/tv'} exact component={SearchSerialPage} />
      <Route path={'/favourite'} exact component={FavouritePage} />
      <Redirect to={'/'} />
    </Switch>
  );
};
