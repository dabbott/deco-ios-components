import React, { Component, } from 'react'
import { View, } from 'react-native'
import { colors } from '../config.json'

class Rectangle extends Component {

  static propTypes = {}

  static defaultProps = {
    backgroundColor: colors.actionBlue,
    borderRadius: 0,
    width: 100,
    height: 100,
    borderWidth: 0,
    borderColor: 'black',
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
    
    return (
      <View style={style}>
        {children}
      </View>
    )
  }
}

export default Rectangle