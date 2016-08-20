import React, { Component, } from 'react'
import { View, } from 'react-native'
import * as Layout from '../utils/Layout'

class Vertical extends Component {

  static propTypes = {}

  static defaultProps = {
    align: 'stretch',
    distribute: 'start',
    inheritedStyle: Layout.reactNativeParentStyle,
  }

  render() {
    const {
      children, 
      alignItems, 
      justifyContent,
      align,
      distribute,
      height,
      width,
      overflow,
      inheritedStyle,
    } = this.props
    
    const style = {
      flexDirection: 'column',
      alignItems: align ? Layout.convertAlign(align) : alignItems,
      justifyContent: distribute ? Layout.convertDistribute(distribute) : justifyContent,
      overflow,
//       backgroundColor: 'rgba(0,0,0,0.1)',
      ...Layout.extractProps(this.props, 'padding', 'margin'),
      ...Layout.calculateDimensions({height, width}, inheritedStyle)
    }
    
    return (
      <View style={style}>
        {Layout.cloneWithInheritedStyle(children, style)}
      </View>
    )
  }
}

export default Vertical