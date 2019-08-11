/* eslint-disable linebreak-style */
import React from 'react';
import { connect } from 'react-redux';
import DashboardTrainingComponent from './DashboardTrainingComponent';

function mapStateToProps(state) {
  return {
    todayWorkout: state.todayWorkout,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps)(DashboardTrainingComponent);
