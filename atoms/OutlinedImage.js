import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Rectangle, Text } from '../primitives'
import { Horizontal } from '../layout'
import { colors } from '../config.json'

class SmallButton extends Component {

  static propTypes = {}

  static defaultProps = {
    backgroundImage: null,
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    width: 64,
    height: 64,
    borderRadius: 14,
  }

  render() {
    return (
      <Rectangle {...this.props} />
    )
  }
}

export default SmallButton