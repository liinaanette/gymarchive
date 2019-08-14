import React from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
import styles from '../style.js';
import PropTypes from 'prop-types';

const Header = ({ weekDay }) => (
  <View
    style={styles.header_container}
    style={{ paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}
  >
    <Text style={styles.header_weekday}>{weekDay}</Text>
  </View>
);

Header.propTypes = {
  weekDay: PropTypes.string.isRequired,
};

export default Header;
