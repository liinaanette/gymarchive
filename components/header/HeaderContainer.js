import React from 'react';
import Header from './Header';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

const HeaderContainer = props => {
  return <Header weekDay={new Date().toLocaleDateString()} />;
};

export default HeaderContainer;
