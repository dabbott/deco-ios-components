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
import { AppCardSmallGallery } from './compositions'
import { data } from './config'

const appIconImage = 'https://moresaucelessfluff.files.wordpress.com/2013/12/jonga-app-icon-1024x1024.png'

class DecoIOSComponents extends Component {
  render() {
    return (
      <Vertical
        marginTop={20} 
        distribute={'start'} 
        align={'stretch'} 
        height={'grow'}
      >
        <Rectangle
          width={'auto'}
          height={152}
          backgroundColor={'black'}
          backgroundImage={'https://hd.unsplash.com/photo-1465628976988-fe43bda15798'}
        />
        <AppCardSmallGallery
          title={'Apple Apps'}
          action={'See All'}
          list={data.apps}
        />
        <AppCardSmallGallery
          title={'Apple Apps'}
          action={'See All'}
          list={data.apps}
        />
        <AppCardSmallGallery
          title={'Follow Team USA'}
          action={'See All'}
        />
        <AppCardSmallGallery
          title={'Sprint to the Finish'}
          action={'See All'}
        />
        <Vertical
          distribute={'start'} 
          align={'stretch'} 
          height={'grow'}
          paddingHorizontal={20}
        >
          <Horizontal height={'shrink'} justifyContent={'space-between'} marginVertical={10}>
            <SmallButton text={'Small Button A'} />
            <Spacer size={10} />
            <SmallButton text={'Small Button B'} />
          </Horizontal>
        </Vertical>
      </Vertical>
    );
  }
}

AppRegistry.registerComponent('DecoIOSComponents', () => DecoIOSComponents);
