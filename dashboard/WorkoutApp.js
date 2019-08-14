import React from 'react';
import { View } from 'react-native';
import HeaderContainer from '../header/HeaderContainer';
import DashboardTrainingComponentContainer from '../training/DashboardTrainingComponentContainer';
import styles from '../style.js';
import PropTypes from 'prop-types';

const WorkoutApp = ({ fontLoaded, todayWorkout, addNewExercise }) => (
  <View style={styles.dashboard}>
    {<HeaderContainer fontLoaded={fontLoaded} />}
    {<DashboardTrainingComponentContainer />}
  </View>
);

WorkoutApp.propTypes = {
  fontLoaded: PropTypes.bool,
  todayWorkout: PropTypes.instanceOf(Array).isRequired,
};

WorkoutApp.defaultProps = {
  fontLoaded: true,
};

export default WorkoutApp;
