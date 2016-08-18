import React, { Component, } from 'react'
import { View, } from 'react-native'

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
      width,
      padding,
      paddingHorizontal,
      paddingVertical,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
    } = this.props
    
    const style = {
      flexDirection: 'column',
      alignItems,
      justifyContent,
      padding,
      paddingHorizontal,
      paddingVertical,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
    }
    
    if (width >= 0) {
      style.width = width
    } else {
      style.flex = 1
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

export default Vertical