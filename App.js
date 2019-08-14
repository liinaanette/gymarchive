import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import WorkoutAppContainer from './dashboard/WorkoutAppContainer';

const initialState = {
  fontLoaded: false,
  todayWorkout: [
    // TODO - kindlasti peaks saama igal setil eraldi repide arvu panna

    {
      key: 1,
      name: 'Bench Press',
      sets: 3,
      reps: 5,
      weight: 35,
    },
    {
      key: 2,
      name: 'Chin ups',
      sets: 3,
      reps: 5,
      weight: 0,
    },
    {
      key: 3,
      name: 'Squat',
      sets: 3,
      reps: 5,
      weight: 42.5,
    },
  ],
  currentExercise: {
    key: 0,
    name: null,
    sets: 3,
    reps: 5,
    weight: 0,
  },
  currentWeekDay: new Date().toLocaleDateString(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FONT_LOADED':
      return { ...state, fontLoaded: true };
    case 'ADD_NEW_EXERCISE':
      return {
        ...state,
        todayWorkout: state.todayWorkout.concat(state.currentExercise),
        currentExercise: {
          name: '',
          sets: 3,
          reps: 5,
          weight: 0,
        },
      };
    case 'EXERCISE_NAME_CHANGED':
      return {
        ...state,
        currentExercise: {
          name: action.name,
          sets: 3,
          reps: 5,
          weight: 0,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <WorkoutAppContainer />
    </Provider>
  );
}
