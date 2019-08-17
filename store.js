import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers/index';

const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['trainingReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
let persistor = persistStore(store);

export { store, persistor };
