import React from 'react';
import { View, Text } from 'react-native';
import styles from '../style.js';
import PropTypes from 'prop-types';

const TrainingListItem = ({ exerciseName, sets, reps, weight }) => (
  <View style={styles.traininglistitem_container}>
    <View style={styles.traininglistitem_container_circle} />
    <Text style={styles.traininglistitem_container_exercisename}>
      {exerciseName}
    </Text>
    <Text>{sets}</Text>
    <Text>{reps}</Text>
    <Text>{weight}</Text>
  </View>
);

TrainingListItem.propTypes = {
  exerciseName: PropTypes.string.isRequired,
  sets: PropTypes.number,
  reps: PropTypes.number,
  weight: PropTypes.number,
};

TrainingListItem.defaultProps = {
  sets: 3,
  reps: 5,
  weight: 10,
};

export default TrainingListItem;
