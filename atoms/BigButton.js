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
    return (
      <Horizontal height={57}>
        <Rectangle backgroundColor={'black'} width={'auto'} height={'auto'} borderRadius={4}>
          <Horizontal>
            <Text>Hello</Text>
          </Horizontal>
        </Rectangle>
      </Horizontal>
    )
  }
}

export default BigButton