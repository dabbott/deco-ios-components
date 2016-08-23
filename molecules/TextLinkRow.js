import { HairlineDivider } from '../atoms'
import { Text } from '../primitives'
import {
  Vertical,
  Spacer,
  Horizontal,
} from '../layout'
import React, { Component, } from 'react'
import { View, } from 'react-native'
import { colors } from '../config'

class TextHeader extends Component {

  static propTypes = {}

  static defaultProps = {}

  render() {
    const {text} = this.props
    
    return (
      <Vertical
        width={'grow'}
        height={'grow'}
      >
        <Horizontal
          width={'grow'}
          height={'grow'}
          paddingLeft={15}
          marginVertical={10}
        >
          <Text
            text={text}
            color={colors.actionBlue}
            fontSize={17}
            width={'grow'}
            textAlign={'center'}
            fontWeight={'normal'}
            verticalAlign={'baseline'}
          />
        </Horizontal>
        <Spacer
          size={4}
        />
        <HairlineDivider />
      </Vertical>
    )
  }
}

export default TextHeader