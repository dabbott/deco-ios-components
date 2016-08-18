import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Rectangle, Text } from '../primitives'
import { Horizontal } from '../layout'
import { colors } from '../config.json'

class SmallButton extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {children, text} = this.props
    
    return (
      <Horizontal height={29}>
        <Rectangle
          backgroundColor={'transparent'}
          borderColor={colors.actionBlue}
          borderWidth={1}
          width={'auto'} 
          height={'auto'} 
          borderRadius={2.5}
        >
          <Text
            color={colors.actionBlue}
            fontSize={16}
            fontWeight={'400'}
          >
            {text || children}
          </Text>
        </Rectangle>
      </Horizontal>
    )
  }
}

export default SmallButton