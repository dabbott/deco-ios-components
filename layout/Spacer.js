import React, { Component, } from 'react'
import { View } from 'react-native'
import * as Layout from '../utils/Layout'

class Rectangle extends Component {

  static propTypes = {}

  static defaultProps = {
    size: 20,
    inheritedStyle: {},
  }

  render() {
    const {
      size,
      inheritedStyle,
    } = this.props
    
    const {flexDirection} = inheritedStyle
    
    const style = {}
    
    if (flexDirection === 'row') {
      style.width = size
    } else {
      style.height = size
    }

    return (
      <View style={style} />
    )
  }
}

export default Rectangle