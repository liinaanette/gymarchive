import React from 'react';
import { connect } from 'react-redux';
import DashboardTrainingComponent from './DashboardTrainingComponent';
//import './training.css';

function mapStateToProps(state) {
  return {
    todayWorkout: state.todayWorkout,
    currentExercise: state.currentExercise,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewExercise: (name, sets, reps, weight) => {
      const exercise = {
        key: Math.random(),
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
    onExerciseNameChange: name => {
      dispatch({
        type: 'EXERCISE_NAME_CHANGED',
        name,
      });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardTrainingComponent);
