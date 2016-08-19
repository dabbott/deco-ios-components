import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Rectangle, Text } from '../primitives'
import { Horizontal } from '../layout'

class BigButton extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {children, text} = this.props
    
    return (
      <Horizontal height={57}>
        <Rectangle 
          backgroundColor={'black'} 
          width={'grow'} 
          height={'grow'} 
          borderRadius={12.5}
        >
          <Text
            color={'white'}
            fontSize={20}
            fontWeight={'500'}
          >
            {text || children}
          </Text>
        </Rectangle>
      </Horizontal>
    )
  }
}

export default BigButton