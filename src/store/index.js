import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todoSlice from './actions/todos';

const rootReducers = combineReducers({
  todos: todoSlice,
});

const persistConfig = {
  key: 'APPLICATION_STATE',
  storage,
  whitelist: ['todos'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore(
  {
    reducer: persistedReducer,
  },
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
