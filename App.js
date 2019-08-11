import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import WorkoutAppContainer from './components/WorkoutAppContainer';

const initialState = {
  fontLoaded: false,
  todayWorkout: [
    // TODO - kindlasti peaks saama igal setil eraldi repide arvu panna

    { name: 'Bench Press', sets: 3, reps: 5, weight: 35 },
    { name: 'Chin ups', sets: 3, reps: 5, weight: 0 },
    { name: 'Squat', sets: 3, reps: 5, weight: 42.5 },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action) {
    case 'FONT_LOADED':
      return { ...state, fontLoaded: true };
  }
  return state;
};

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WorkoutAppContainer />
      </Provider>
    );
  }
}
