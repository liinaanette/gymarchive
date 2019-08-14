import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // training
  traininglistitem_container: {
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
  traininglistitem_container_circle: {
    borderRadius: 100 / 2,
    backgroundColor: 'pink',
    height: 20,
    width: 20,
    margin: '2%',
  },
  traininglistitem_container_exercisename: {
    fontSize: 20,
    color: '#393e46',
  },
  dashboard_container: {
    flex: 18,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#eeeeee',
  },

  //header
  header_container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    backgroundColor: '#393e46',
  },
  header_weekday: {
    fontSize: 30,
    color: '#eeeeee',
  },

  //dashboard
  dashboard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
