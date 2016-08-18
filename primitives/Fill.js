import React, { Component, } from 'react'
import { View, } from 'react-native'
import { colors } from '../config.json'

class Fill extends Component {

  static propTypes = {}

  static defaultProps = {
    backgroundColor: colors.actionBlue,
  }

  render() {
    const {backgroundColor, children} = this.props
    
    const style = {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor,
    }
    
    return (
      <View style={style}>
        {children}
      </View>
    )
  }
}

export default Fill