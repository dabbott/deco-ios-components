import React, { Component, } from 'react'
import { View, } from 'react-native'
import * as Layout from '../utils/Layout'

class Vertical extends Component {

  static propTypes = {}

  static defaultProps = {
    alignItems: 'center',
    justifyContent: 'center',
    width: -1,
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
      flexDirection: 'column',
      alignItems: align ? Layout.convertAlign(align) : alignItems,
      justifyContent: distribute ? Layout.convertDistribute(distribute) : justifyContent,
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
//       backgroundColor: 'rgba(0,0,0,0.1)',
      ...Layout.calculateDimensions({height, width}, inheritedStyle)
    }
    
    return (
      <View style={style}>
        {React.Children.map(children, child => {
          if (! child) return child
          
          return React.cloneElement(child, {
            inheritedStyle: style,
          })
        })}
      </View>
    )
  }
}

export default Vertical