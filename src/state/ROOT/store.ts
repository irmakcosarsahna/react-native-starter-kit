import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist'; // defaults to localStorage for web
import rootSaga from './middleware/saga';
import * as reducers from './reducers';
import { common as commonPersistConfig, root as rootPersistConfig } from './config';
import { successGenerate } from '../common';
import * as Types from '../auth/user/types';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [applyMiddleware(sagaMiddleware)];
// reducer
const appReducer = combineReducers({
  ...reducers,
  common: persistReducer(commonPersistConfig, reducers.common),
});
// Logout
const rootReducer = (state, action) => {
  if (action.type === successGenerate(Types.LOGOUT)) {
    state = undefined;
  }
  return appReducer(state, action);
};
// persist
const pReducer = persistReducer(rootPersistConfig, rootReducer);

// store
const store = createStore(
  pReducer, // root reducer with router state
  compose(...middlewares),
);

// Go go go
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { persistor, store };
