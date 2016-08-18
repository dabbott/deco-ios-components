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
import { Horizontal, Vertical } from './layout'
import { BigButton } from './atoms'

class DecoIOSComponents extends Component {
  render() {
    return (
      <Vertical>
        <Horizontal>
          <Rectangle borderRadius={4} />
          <Circle />
          <Triangle direction={'right'} width={20} height={20} />
          <Text text={'Test'} />
        </Horizontal>
        <BigButton />
      </Vertical>
    );
  }
}

AppRegistry.registerComponent('DecoIOSComponents', () => DecoIOSComponents);
