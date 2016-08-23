import { HairlineDivider } from '../atoms'
import { Text } from '../primitives'
import {
  Vertical,
  Spacer,
  Horizontal,
} from '../layout'
import React, { Component, } from 'react'
import { View, } from 'react-native'

class TextHeader extends Component {

  static propTypes = {}

  static defaultProps = {
    dividerType: 'default',
  }

  render() {
    const {text, dividerType} = this.props
    
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
            color={'black'}
            fontSize={17}
            fontWeight={'normal'}
            verticalAlign={'baseline'}
          />
        </Horizontal>
        <Spacer size={4} />
        <HairlineDivider type={dividerType} />
      </Vertical>
    )
  }
}

export default TextHeader