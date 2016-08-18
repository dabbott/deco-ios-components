import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Rectangle, Text, Fill } from '../primitives'
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
          width={'auto'} 
          height={'auto'} 
          borderRadius={4}
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