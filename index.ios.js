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
import { Horizontal, Vertical, Spacer } from './layout'
import { BigButton, SmallButton, AppIcon } from './atoms'
import { AppCardSmall } from './molecules'

const appIconImage = {uri: 'https://moresaucelessfluff.files.wordpress.com/2013/12/jonga-app-icon-1024x1024.png'}

class DecoIOSComponents extends Component {
  render() {
    return (
      <Vertical padding={10} alignItems={'stretch'} height={'grow'}>
        <Horizontal height={120}>
          <Rectangle
            borderColor={'rgba(0,0,0,0.1)'}
            borderWidth={1}
            borderRadius={4} 
            backgroundImage={appIconImage} 
          />
          <Circle />
          <Triangle direction={'right'} width={20} height={20} />
          <Text text={'Test'} />
          <Chevron height={10} width={5} borderWidth={1.5} />
        </Horizontal>
        <Horizontal distribute={'start'}>
          <AppCardSmall image={appIconImage} title={'Diffission'} subtitle={'Games'} />
          <Spacer size={10} />
          <AppCardSmall image={appIconImage} title={'Diffission'} subtitle={'Games'} />
          <Spacer size={10} />
          <AppCardSmall image={appIconImage} title={'Diffission'} subtitle={'Games'} />
          <Spacer size={10} />
        </Horizontal>
        <Horizontal height={'shrink'} justifyContent={'space-between'} marginVertical={10}>
          <SmallButton text={'Small Button A'} />
          <Spacer size={10} />
          <SmallButton text={'Small Button B'} />
        </Horizontal>
        <BigButton text={'Big Button'} />
      </Vertical>
    );
  }
}

AppRegistry.registerComponent('DecoIOSComponents', () => DecoIOSComponents);
