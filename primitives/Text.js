import React, { Component, } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { colors } from '../config.json'
import * as Layout from '../utils/Layout'

const adjustBaseline = (fontSize) => {
  switch (fontSize) {
    case 11:
    case 12:
      return 2
    case 16:
    case 17:
      return 3
  }
  
  return 0
}

class TextComponent extends Component {

  static propTypes = {}

  static defaultProps = {
    color: colors.actionBlue,
    fontSize: 16,
    fontWeight: "normal",
    fontFamily: 'Helvetica Neue',
  }

  render() {
    const {
      color, 
      fontSize, 
      fontWeight, 
      fontFamily, 
      text,
      width,
      height,
      children,
      inheritedStyle,
      verticalAlign,
      textAlign,
    } = this.props
    
    const wrapperStyle = {
//       backgroundColor: 'rgba(200,0,0,0.1)',
      ...Layout.calculateDimensions({width, height}, inheritedStyle),
    }
    
    const style = {
      color,
      fontSize,
      fontWeight,
      fontFamily,
      textAlign,
//       backgroundColor: 'rgba(0,0,0,0.1)',
    }
      
    if (verticalAlign === 'baseline') {
      style.top = adjustBaseline(fontSize)
    }
    
    return (
      <View style={wrapperStyle}>
        <Text style={style}>
          {text || children}
        </Text>
      </View>
    )
  }
}

export default TextComponent