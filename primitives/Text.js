import React, { Component, } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { colors } from '../config.json'

class Rectangle extends Component {

  static propTypes = {}

  static defaultProps = {
    color: colors.actionBlue,
    fontSize: 16,
    fontWeight: "normal",
    fontFamily: 'Helvetica Neue',
  }

  render() {
    const {color, fontSize, fontWeight, fontFamily, text, children} = this.props
    
    const style = {
      color,
      fontSize,
      fontWeight,
      fontFamily,
    }
    
    return (
      <Text style={style}>
        {text || children}
      </Text>
    )
  }
}

export default Rectangle