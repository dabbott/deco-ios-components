// @flow

import React, { Component, } from 'react'
import { View, Image } from 'react-native'
import { colors } from '../config.json'
import * as Layout from '../utils/Layout'
import * as ImageUtils from '../utils/Image'

class Rectangle extends Component {

  static propTypes = {}

  static defaultProps = {
    backgroundColor: 'transparent',
    borderRadius: 0,
    width: 100,
    height: 100,
    borderWidth: 0,
    borderColor: 'black',
    backgroundImage: null,
    resizeMode: 'cover',
  }

  render() {
    const {
      backgroundColor, 
      width, 
      height, 
      borderRadius,
      borderWidth,
      borderColor,
      children, 
      inheritedStyle,
      backgroundImage,
      resizeMode,
    } = this.props
    
    const style = {
      backgroundColor,
      borderRadius,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth,
      borderColor,
      ...Layout.calculateDimensions({width, height}, inheritedStyle)
    }
    
    if (backgroundImage) {
      return (
        <Image 
          style={style} 
          source={ImageUtils.normalizeImage(backgroundImage)} 
          resizeMode={resizeMode}
        >
          {children}
        </Image>
      )      
    } else {
      return (
        <View style={style}>
          {children}
        </View>
      )
    }
  }
}

export default Rectangle