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
  NavigatorIOS,
  TabBarIOS,
} from 'react-native'

import { Rectangle, Circle, Text, Triangle, Chevron } from './primitives'
import { Horizontal, Vertical, VerticalScroll, Spacer } from './layout'
import { BigButton, SmallButton, AppIcon } from './atoms'
import { AppCardSmall } from './molecules'
import { AppCardSmallGallery } from './compositions'
import { AppStoreApp } from './apps'
import { data } from './config'
import { icons } from './assets'

AppRegistry.registerComponent('DecoIOSComponents', () => AppStoreApp);
