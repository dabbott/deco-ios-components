import React, { Component, } from 'react'
import { View, } from 'react-native'

class Horizontal extends Component {

  static propTypes = {}

  static defaultProps = {
    alignItems: 'center',
    justifyContent: 'center',
    height: -1,
    padding: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  }

  render() {
    const {
      children, 
      alignItems, 
      justifyContent, 
      height,
      padding,
      paddingHorizontal,
      paddingVertical,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
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
    }
    
    if (height >= 0) {
      style.height = height
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

export default Horizontal