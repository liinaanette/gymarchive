import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
//import './header.css';

function mapStateToProps(state) {
  return {
    weekDay: state.currentWeekDay,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
