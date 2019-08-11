import React from 'react';
import { connect } from 'react-redux';
import WorkoutApp from './WorkoutApp';

function mapStateToProps(state) {
  return {
    fontLoaded: state.fontLoaded,
    todayWorkout: state.todayWorkout,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewExercise: (name, sets, reps, weight) => {
      const exercise = {
        name,
        sets,
        reps,
        weight,
      };
      dispatch({
        type: 'ADD_NEW_EXERCISE',
        exercise,
      });
    },
    isFontLoaded: () => {
      dispatch({
        type: 'FONT_LOADED',
      });
    },
  };
}

export default connect(mapStateToProps)(WorkoutApp);
