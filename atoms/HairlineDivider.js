import { Rectangle } from '../primitives'
import { Horizontal } from '../layout'
import React, { Component, } from 'react'
import { View, } from 'react-native'
import * as Layout from '../utils/Layout'

class HairlineDivider extends Component {

  static propTypes = {}

  static defaultProps = {
    type: 'default',
  }

  render() {
    const {type, inheritedStyle} = this.props
    
    return (
      <Horizontal
        width={'grow'}
        height={'shrink'}
        align={'stretch'}
        inheritedStyle={inheritedStyle}
        paddingLeft={type === 'padded' ? 15 : 0}
        {...Layout.extractProps(this.props, 'margin', 'padding')}
      >
        <Rectangle 
          height={0.5}
          width={'grow'}
          backgroundColor={'#C5C5C5'}
        />
      </Horizontal>
    )
  }
}

export default HairlineDivider