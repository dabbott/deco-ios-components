import React, { Component, } from 'react'
import { View, } from 'react-native'
import * as Layout from '../utils/Layout'

class Horizontal extends Component {

  static propTypes = {}

  static defaultProps = {
    alignItems: 'center',
    justifyContent: 'center',
    height: -1,
  }

  render() {
    const {
      children, 
      alignItems, 
      justifyContent, 
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
      flexDirection: 'row',
      alignItems,
      justifyContent,
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
      ...Layout.calculateDimensions({height, width}, inheritedStyle)
    }
    
    return (
      <View style={style}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            inheritedStyle: style,
          })
        })}
      </View>
    )
  }
}

export default Horizontal