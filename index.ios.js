/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { Rectangle, Circle, Text, Triangle } from './primitives'

class DecoIOSComponents extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Rectangle />
        <Circle />
        <Triangle direction={'right'} width={20} height={20} />
        <Text text={'Test'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DecoIOSComponents', () => DecoIOSComponents);
