import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TrainingListItem from './TrainingListItem';

const DashboardTrainingComponent = ({ todayWorkout }) => {
  return (
    <View style={styles.body}>
      {todayWorkout.map(exercise => {
        return <TrainingListItem exerciseName={exercise.name} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 18,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#eeeeee',
  },
});

export default DashboardTrainingComponent;
