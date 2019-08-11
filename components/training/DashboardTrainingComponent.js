import React from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import TrainingListItem from './TrainingListItem';

const DashboardTrainingComponent = ({
  todayWorkout,
  currentExercise,
  onExerciseNameChange,
  addNewExercise,
}) => {
  return (
    <View style={styles.body}>
      {todayWorkout.map(exercise => {
        return <TrainingListItem exerciseName={exercise.name} />;
      })}
      <TextInput
        style={{ width: 200, height: 200 }}
        onChangeText={text => {
          onExerciseNameChange(text);
        }}
        value={currentExercise.name}
      />
      <Button
        title='TERE'
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
