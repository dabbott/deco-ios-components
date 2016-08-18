import React, { Component, } from 'react'
import { View, } from 'react-native'

class Horizontal extends Component {

  static propTypes = {}

  static defaultProps = {
    alignItems: 'center',
    justifyContent: 'center',
    height: -1,
  }

  render() {
    const {children, alignItems, justifyContent, height} = this.props
    
    const style = {
      flexDirection: 'row',
      alignItems,
      justifyContent,
    }
    
    if (height >= 0) {
      style.height = height
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

export default Horizontal