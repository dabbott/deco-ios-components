import React, { Component, } from 'react'
import { View, } from 'react-native'
import * as Layout from '../utils/Layout'

class Horizontal extends Component {

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
      inheritedStyle,
    } = this.props
    
    const style = {
      flexDirection: 'row',
      alignItems: align ? Layout.convertAlign(align) : alignItems,
      justifyContent: distribute ? Layout.convertDistribute(distribute) : justifyContent,
      ...Layout.extractProps(this.props, 'padding', 'margin'),
      ...Layout.calculateDimensions({height, width}, inheritedStyle),
      backgroundColor: this.props.backgroundColor,
    }
    
    return (
      <View style={style}>
        {Layout.cloneWithInheritedStyle(children, style)}
      </View>
    )
  }
}

export default Horizontal