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
  return {};
}

export default connect(mapStateToProps)(WorkoutApp);
