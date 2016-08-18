import React, { Component, } from 'react'
import { View, Image } from 'react-native'
import { colors } from '../config.json'

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
    }
    
    if (inheritedStyle) {
      if (width === 'auto') {
        if (inheritedStyle.flexDirection === 'column') {
          style.alignSelf = 'stretch'
        } else if (inheritedStyle.flexDirection === 'row') {
          style.flex = 1
        }
      }
      
      if (height === 'auto') {
        if (inheritedStyle.flexDirection === 'column') {
          style.flex = 1
        } else if (inheritedStyle.flexDirection === 'row') {
          style.alignSelf = 'stretch'
        }
      }
    }
    
    if (typeof width === 'number') {
      style.width = width
    }
    
    if (typeof height === 'number') {
      style.height = height
    }
    
    if (backgroundImage) {
      return (
        <Image style={style} source={backgroundImage} resizeMode={resizeMode}>
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