/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/app';

class LxNavigator extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('LxNavigator', () => LxNavigator);
