import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrainingListItem = props => {
  return (
    <View style={styles.item}>
      <View style={styles.circle} />
      <Text style={styles.text}>{props.exerciseName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 100 / 2,
    backgroundColor: 'pink',
    height: 20,
    width: 20,
    margin: '2%',
  },
  item: {
    height: '8%',
    flexDirection: 'row',
    width: '80%',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    marginTop: '2%',
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#393e46',
  },
});

export default TrainingListItem;
