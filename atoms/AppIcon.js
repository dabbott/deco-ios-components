import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Rectangle, Text } from '../primitives'
import { Horizontal } from '../layout'
import { colors } from '../config.json'

class SmallButton extends Component {

  static propTypes = {}

  static defaultProps = {
    backgroundImage: null,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {backgroundImage} = this.props
    
    return (
      <Rectangle
        backgroundColor={'white'}
        borderColor={'rgba(0,0,0,0.1)'}
        borderWidth={1}
        width={60} 
        height={60} 
        borderRadius={14}
        backgroundImage={backgroundImage}
      />
    )
  }
}

export default SmallButton