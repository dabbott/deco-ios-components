import React, { Component, } from 'react'
import { View, ScrollView, } from 'react-native'
import * as Layout from '../utils/Layout'

class HorizontalScroll extends Component {

  static propTypes = {}

  static defaultProps = {
    inheritedStyle: Layout.reactNativeParentStyle,
  }

  render() {
    const {
      snapToInterval,
      contentInset,
      contentOffset,
      pagingEnabled,
      showsHorizontalScrollIndicator,
      automaticallyAdjustContentInsets,
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
      ...Layout.extractProps(this.props, 'padding', 'margin'),
      ...Layout.calculateDimensions({height, width}, inheritedStyle),
    }
    
    const contentContainerStyle = {
      flexDirection: 'row',
      alignItems: align ? Layout.convertAlign(align) : alignItems,
      justifyContent: distribute ? Layout.convertDistribute(distribute) : justifyContent,
    }
    
    return (
      <ScrollView
        snapToInterval={snapToInterval}
        horizontal={true}
        contentInset={contentInset}
        contentOffset={contentOffset}
        style={style}
        contentContainerStyle={contentContainerStyle}
        automaticallyAdjustContentInsets={automaticallyAdjustContentInsets || false}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        pagingEnabled={pagingEnabled}
      >
        {Layout.cloneWithInheritedStyle(children, contentContainerStyle)}
      </ScrollView>
    )
  }
}

export default HorizontalScroll