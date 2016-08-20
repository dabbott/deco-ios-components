import React, { Component, } from 'react'
import { View, ScrollView, } from 'react-native'
import * as Layout from '../utils/Layout'

class HorizontalScroll extends Component {

  static propTypes = {}

  static defaultProps = {}

  render() {
    const {
      snapToInterval,
      contentInset,
      contentOffset,
      children, 
      alignItems, 
      justifyContent, 
      align,
      distribute,
      height,
      width,
      padding,
      paddingHorizontal,
      paddingVertical,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      margin,
      marginHorizontal,
      marginVertical,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      inheritedStyle,
    } = this.props
    
    const style = {
      padding,
      paddingHorizontal,
      paddingVertical,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      margin,
      marginHorizontal,
      marginVertical,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      ...Layout.calculateDimensions({height, width}, inheritedStyle),
    }
    
    const contentContainerStyle = {
      flexDirection: 'row',
      alignItems: align ? Layout.convertAlign(align) : alignItems,
//       justifyContent: distribute ? Layout.convertDistribute(distribute) : justifyContent,
    }
    
    return (
      <ScrollView
        snapToInterval={snapToInterval}
        horizontal={true}
        contentInset={contentInset}
        contentOffset={contentOffset}
        style={style}
        contentContainerStyle={contentContainerStyle}
//         showsHorizontalScrollIndicator={true}
        pagingEnabled={false}
      >
        {Layout.cloneWithInheritedStyle(children, contentContainerStyle)}
      </ScrollView>
    )
  }
}

export default HorizontalScroll