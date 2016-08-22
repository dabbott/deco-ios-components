import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Rectangle, Text } from '../primitives'
import { Horizontal } from '../layout'
import { colors } from '../config.json'

class SmallButton extends Component {

  static propTypes = {}

  static defaultProps = {}

  render() {
    const {children, text, inheritedStyle, width} = this.props
    
    return (
      <Horizontal width={width} height={29} inheritedStyle={inheritedStyle}>
        <Rectangle
          backgroundColor={'transparent'}
          borderColor={colors.actionBlue}
          borderWidth={1}
          width={'grow'} 
          height={'grow'} 
          borderRadius={2.5}
        >
          <Horizontal paddingHorizontal={8}>
            <Text
              color={colors.actionBlue}
              fontSize={16}
              fontWeight={'400'}
            >
              {text || children}
            </Text>
          </Horizontal>
        </Rectangle>
      </Horizontal>
    )
  }
}

export default SmallButton