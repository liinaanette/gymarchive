import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import WorkoutAppContainer from './dashboard/WorkoutAppContainer';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WorkoutAppContainer />
      </PersistGate>
    </Provider>
  );
}
