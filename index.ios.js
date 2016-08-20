/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  NavigatorIOS
} from 'react-native'

import { Rectangle, Circle, Text, Triangle, Chevron } from './primitives'
import { Horizontal, Vertical, VerticalScroll, Spacer } from './layout'
import { BigButton, SmallButton, AppIcon } from './atoms'
import { AppCardSmall } from './molecules'
import { AppCardSmallGallery } from './compositions'
import { AppStore } from './screens'
import { data } from './config'

class DecoIOSComponents extends Component {
  render() {
    return (
      <Vertical
        height={'grow'}
        width={'grow'}
      >
        <AppStore />
      </Vertical>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: DecoIOSComponents,
          title: 'Latest Apps',
          leftButtonTitle: 'Categories',
          translucent: true,
        }}
        style={{flex: 1}}
      />
    )
  }
}

AppRegistry.registerComponent('DecoIOSComponents', () => Navigation);
