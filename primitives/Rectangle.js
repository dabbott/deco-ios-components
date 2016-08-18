import React, { Component, } from 'react'
import { View, } from 'react-native'
import { colors } from '../config.json'

class Rectangle extends Component {

  static propTypes = {}

  static defaultProps = {
    backgroundColor: colors.actionBlue,
    width: 100,
    height: 100,
    borderRadius: 0,
  }

  render() {
    const {backgroundColor, width, height, borderRadius, children} = this.props
    
    const style = {
      backgroundColor,
      width,
      height,
      borderRadius,
    }
    
    return (
      <View style={style}>
        {children}
      </View>
    )
  }
}

export default Rectangle