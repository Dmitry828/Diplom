import {all} from 'redux-saga/effects';
import {watcherData} from './data/data.sagas';
import {watcherEntrie} from './entrie/entrie.sagas';
import {watcherSearch} from './search/search.sagas';
import {watcherOneSearch} from './oneSearch/oneSearch.sagas';
import {watcherNowPlaying} from './playing/playing.sagas';

export function* rootWatcher() {
  yield all([
    watcherData(),
    watcherEntrie(),
    watcherSearch(),
    watcherOneSearch(),
    watcherNowPlaying(),
  ]);
}
