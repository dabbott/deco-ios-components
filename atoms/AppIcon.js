import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Rectangle, Text } from '../primitives'
import { Horizontal } from '../layout'
import { colors } from '../config.json'

class SmallButton extends Component {

  static propTypes = {}

  static defaultProps = {
    backgroundImage: null,
    size: 95,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {backgroundImage, size} = this.props
    
    return (
      <Rectangle
        backgroundColor={'white'}
        borderColor={'rgba(0,0,0,0.1)'}
        borderWidth={1}
        width={size} 
        height={size} 
        borderRadius={14}
        backgroundImage={backgroundImage}
      />
    )
  }
}

export default SmallButton