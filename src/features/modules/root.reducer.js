import {combineReducers} from 'redux';
import {dataReducer} from './data/data.reducers';
import {entrieReducer} from './entrie/entrie.reducers';
import {searchReducer} from './search/search.reducers';
import {favouriteReducer} from './favourite/favourite.reducers';
import {oneSearchReducer} from './oneSearch/oneSearch.reducers';
import {playingReducer} from './playing/playing.reducers';

export const rootReducer = combineReducers({
  data: dataReducer,
  nowPlaying: playingReducer,
  entrie: entrieReducer,
  search: searchReducer,
  oneSearch: oneSearchReducer,
  favourite: favouriteReducer,
});
