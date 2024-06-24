import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './modules/root.reducer';
import {rootWatcher} from './modules/root.saga';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleware);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favourite'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(middlewareEnhancer),
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootWatcher);
