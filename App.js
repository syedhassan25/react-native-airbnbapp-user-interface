/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoggedOut  from './src/screens/LoggedOut';
import Login from './src/screens/Login';
import Forgetpassword from './src/screens/Forgetpassword';

// import {Provider} from 'react-redux';
// import Store from './src/redux/stores'; 



export default class App extends Component {
  render() {
    return(
      // <Provider store={Store}>
      <Forgetpassword />
      // </Provider>
      )
  }
}

