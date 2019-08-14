import React from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import TrainingListItem from './TrainingListItem';
import styles from '../style.js';
import PropTypes from 'prop-types';

const DashboardTrainingComponent = ({
  todayWorkout,
  currentExercise,
  onExerciseNameChange,
  addNewExercise,
}) => (
  <View style={styles.dashboard_container}>
    {console.log(todayWorkout)}
    {todayWorkout.map(exercise => (
      <TrainingListItem key={exercise.key} exerciseName={exercise.name} />
    ))}
    <TextInput
      style={{ width: 200, height: 200 }}
      onChangeText={text => {
        onExerciseNameChange(text);
      }}
      value={currentExercise.name}
    />
    <Button
      title='LISA UUS HARJUTUS'
      onPress={() => {
        addNewExercise(
          currentExercise.name,
          currentExercise.sets,
          currentExercise.reps,
          currentExercise.weight
        );
      }}
    />
  </View>
);

DashboardTrainingComponent.propTypes = {
  todayWorkout: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      name: PropTypes.string,
      sets: PropTypes.number,
      reps: PropTypes.number,
      weight: PropTypes.number,
    })
  ),
  currentExercise: PropTypes.shape({
    key: PropTypes.number,
    name: PropTypes.string,
    sets: PropTypes.number,
    reps: PropTypes.number,
    weight: PropTypes.number,
  }),
  onExerciseNameChange: PropTypes.func.isRequired,
  addNewExercise: PropTypes.func.isRequired,
};

DashboardTrainingComponent.defaultProps = {
  todayWorkout: [
    {
      key: Math.random(),
      name: '',
      sets: 3,
      reps: 5,
      weight: 10,
    },
  ],
  currentExercise: {
    key: Math.random(),
    name: '',
    sets: 3,
    reps: 5,
    weight: 10,
  },
};

export default DashboardTrainingComponent;
