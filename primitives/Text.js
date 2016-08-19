import React, { Component, } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { colors } from '../config.json'
import * as Layout from '../utils/Layout'

class Rectangle extends Component {

  static propTypes = {}

  static defaultProps = {
    color: colors.actionBlue,
    fontSize: 16,
    fontWeight: "normal",
    fontFamily: 'Helvetica Neue',
    multiline: false,
  }

  render() {
    const {
      color, 
      fontSize, 
      fontWeight, 
      fontFamily, 
      text,
      multiline, 
      width,
      height,
      children,
      inheritedStyle,
    } = this.props
    
    const style = {
      color,
      fontSize,
      fontWeight,
      fontFamily,
//       backgroundColor: 'rgba(0,0,0,0.1)',
      ...Layout.calculateDimensions({width, height}, inheritedStyle),
    }
    
    if (! multiline) {
      style.lineHeight = fontSize
    }
    
    return (
      <Text style={style}>
        {text || children}
      </Text>
    )
  }
}

export default Rectangle