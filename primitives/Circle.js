import React, { Component, } from 'react'
import { View, } from 'react-native'
import { colors } from '../config.json'

class Rectangle extends Component {

  static propTypes = {}

  static defaultProps = {
    backgroundColor: colors.actionBlue,
    radius: 50,
  }

  render() {
    const {backgroundColor, radius} = this.props
    
    const style = {
      backgroundColor,
      width: radius * 2,
      height: radius * 2,
      borderRadius: radius,
    }
    
    return (
      <View style={style} />
    )
  }
}

export default Rectangle