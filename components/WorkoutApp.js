import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderContainer from './header/HeaderContainer';
import DashboardTrainingComponentContainer from './training/DashboardTrainingComponentContainer';

const WorkoutApp = ({
  fontLoaded,
  todayWorkout,
  isFontLoaded,
  addNewExercise,
}) => {
  return (
    <View style={styles.container}>
      {<HeaderContainer fontLoaded={fontLoaded} />}
      {<DashboardTrainingComponentContainer />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default WorkoutApp;
