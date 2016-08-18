/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'

import { Rectangle, Circle, Text, Triangle, Chevron } from './primitives'
import { Horizontal, Vertical } from './layout'
import { BigButton, SmallButton } from './atoms'

class DecoIOSComponents extends Component {
  render() {
    return (
      <Vertical padding={10}>
        <Horizontal>
          <Rectangle 
            borderRadius={4} 
            backgroundImage={{uri: 'https://moresaucelessfluff.files.wordpress.com/2013/12/jonga-app-icon-1024x1024.png'}} 
          />
          <Circle />
          <Triangle direction={'right'} width={20} height={20} />
          <Text text={'Test'} />
          <Chevron height={10} width={5} borderWidth={1.5} />
        </Horizontal>
        <SmallButton text={'Small Button'} />
        <Rectangle backgroundColor={'transparent'} height={10} />
        <BigButton text={'Big Button'} />
      </Vertical>
    );
  }
}

AppRegistry.registerComponent('DecoIOSComponents', () => DecoIOSComponents);
