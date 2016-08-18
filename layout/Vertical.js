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
    const {children, alignItems, justifyContent, width} = this.props
    
    const style = {
      flexDirection: 'column',
      alignItems,
      justifyContent,
    }
    
    if (width >= 0) {
      style.width = width
    } else {
      style.flex = 1
    }
    
    return (
      <View style={style}>
        {children}
      </View>
    )
  }
}

export default Vertical