import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Rectangle, Text } from '../primitives'
import { Horizontal } from '../layout'

class MediumButton extends Component {

  static propTypes = {}

  static defaultProps = {}

  render() {
    const {children, text, inheritedStyle, width} = this.props
    
    return (
      <Horizontal 
        height={45}
        width={width}
        inheritedStyle={inheritedStyle}
      >
        <Rectangle 
          width={'grow'} 
          height={'grow'}
          borderWidth={0.5}
          borderColor={'#5C5C5C'}
          borderRadius={12}
        >
          <Text
            color={'#5C5C5C'}
            fontSize={15}
            fontWeight={'600'}
          >
            {text || children}
          </Text>
        </Rectangle>
      </Horizontal>
    )
  }
}

export default MediumButton